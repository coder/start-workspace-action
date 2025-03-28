import assert from "assert";
import yaml from "yaml";
import { Octokit } from "@octokit/rest";
import { z } from "zod";
import { CoderClient } from "./coder";

export interface Logger {
  log(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export interface ExecOutput {
  text(): string;
}

export class UserFacingError extends Error {}

export const ActionInputSchema = z.object({
  githubUsername: z.string().min(1).optional(),
  coderUsername: z.string().min(1).optional(),
  coderUrl: z.string().min(1),
  coderToken: z.string().min(1),
  workspaceName: z.string().min(1),
  githubStatusCommentId: z
    .string()
    .min(1)
    .transform((val) => parseInt(val)),
  githubRepoOwner: z.string().min(1),
  githubRepoName: z.string().min(1),
  githubToken: z.string().min(1),
  githubWorkflowRunUrl: z.string().min(1),
  templateName: z.string().min(1),
  workspaceParameters: z.string().min(1),
});

export type ActionInput = z.infer<typeof ActionInputSchema>;

export const WorkspaceParametersSchema = z.record(z.string(), z.string());

export type WorkspaceParameters = z.infer<typeof WorkspaceParametersSchema>;

export class StartWorkspaceAction {
  private readonly octokit: Octokit;
  private readonly coder: CoderClient;
  constructor(
    private readonly logger: Logger,
    private readonly input: ActionInput
  ) {
    this.octokit = new Octokit({ auth: input.githubToken });
    this.coder = new CoderClient(input.coderUrl, input.coderToken);
  }

  async coderUsernameByGitHubId(githubUserId: number): Promise<string> {
    assert(this.input.githubUsername, "GitHub username is required");
    const externalAuthPage = `${this.input.coderUrl}/settings/external-auth`;
    const users = await this.coder.getCoderUsersByGitHubId(
      githubUserId.toString()
    );
    if (users.length === 0) {
      throw new UserFacingError(
        `No matching Coder user found for GitHub user @${this.input.githubUsername}. Please connect your GitHub account with Coder: ${externalAuthPage}`
      );
    }
    if (users.length > 1) {
      throw new UserFacingError(
        `Multiple Coder users found for GitHub user ${
          this.input.githubUsername
        }: ${users.slice(0, 3).join(", ")}${
          users.length > 3 ? `, and others` : ""
        }. Please connect other users to other GitHub accounts and try again.`
      );
    }
    const username = users[0];
    assert(username, "Coder username not found in output");
    return username;
  }

  parseParameters(parameters: string): WorkspaceParameters {
    const parsed = yaml.parse(parameters);
    return WorkspaceParametersSchema.parse(parsed);
  }

  createWorkspaceUrl(coderUsername: string, workspaceName: string): string {
    return `${this.input.coderUrl}/${coderUsername}/${workspaceName}`;
  }

  async coderStartWorkspace({
    coderUsername,
    templateName,
    workspaceName,
    parameters,
  }: {
    coderUsername: string;
    templateName: string;
    workspaceName: string;
    parameters: WorkspaceParameters;
  }): Promise<void> {
    this.logger.log("Getting user ID");
    const coderUserId = await this.coder.getUserID(coderUsername);
    this.logger.log("Getting template info");
    const { templateId } = await this.coder.getTemplateInfo(templateName);
    this.logger.log("Creating workspace");
    await this.coder.createWorkspace({
      ownerID: coderUserId,
      templateID: templateId,
      workspaceName,
      parameters,
    });
    this.logger.log("Workspace created");
  }

  async githubGetUserIdFromUsername(username: string): Promise<number> {
    const response = await this.octokit.rest.users.getByUsername({
      username,
    });
    return response.data.id;
  }

  async githubUpdateIssueComment(args: {
    owner: string;
    repo: string;
    commentId: number;
    comment: string;
  }) {
    await this.octokit.rest.issues.updateComment({
      owner: args.owner,
      repo: args.repo,
      comment_id: args.commentId,
      body: args.comment,
    });
  }

  async githubGetIssueCommentBody(args: {
    owner: string;
    repo: string;
    commentId: number;
  }): Promise<string> {
    const response = await this.octokit.rest.issues.getComment({
      owner: args.owner,
      repo: args.repo,
      comment_id: args.commentId,
    });
    const body = response.data.body;
    assert(body, "Issue comment body is required");
    return body;
  }

  async execute() {
    if (!this.input.githubUsername && !this.input.coderUsername) {
      throw new Error("GitHub username or Coder username is required");
    }
    if (this.input.githubUsername && this.input.coderUsername) {
      throw new Error(
        "Only one of GitHub username or Coder username may be set"
      );
    }
    const parameters = await this.parseParameters(
      this.input.workspaceParameters
    );
    let coderUsername = this.input.coderUsername ?? "";
    if (coderUsername === "") {
      assert(this.input.githubUsername, "GitHub username is required");
      this.logger.log(
        `Getting Coder username for GitHub user ${this.input.githubUsername}`
      );
      const userId = await this.githubGetUserIdFromUsername(
        this.input.githubUsername
      );
      coderUsername = await this.coderUsernameByGitHubId(userId);
      this.logger.log(
        `Coder username for GitHub user ${this.input.githubUsername} is ${coderUsername}`
      );
    } else {
      this.logger.log(`Using Coder username ${this.input.coderUsername}`);
    }

    const workspaceUrl = this.createWorkspaceUrl(
      coderUsername,
      this.input.workspaceName
    );
    this.logger.log(`Workspace URL: ${workspaceUrl}`);

    let commentBody = await this.githubGetIssueCommentBody({
      owner: this.input.githubRepoOwner,
      repo: this.input.githubRepoName,
      commentId: this.input.githubStatusCommentId,
    });
    commentBody =
      commentBody + `\nWorkspace will be available here: ${workspaceUrl}`;

    await this.githubUpdateIssueComment({
      owner: this.input.githubRepoOwner,
      repo: this.input.githubRepoName,
      commentId: this.input.githubStatusCommentId,
      comment: commentBody,
    });

    await this.coderStartWorkspace({
      coderUsername,
      templateName: this.input.templateName,
      workspaceName: this.input.workspaceName,
      parameters,
    });
    await this.githubUpdateIssueComment({
      owner: this.input.githubRepoOwner,
      repo: this.input.githubRepoName,
      commentId: this.input.githubStatusCommentId,
      comment: `✅ Workspace started: ${workspaceUrl}\nView [Github Actions logs](${this.input.githubWorkflowRunUrl}).`,
    });
  }
}
