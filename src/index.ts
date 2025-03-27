import assert from "assert";
import { $ as originalZx } from "zx";
import fs from "fs/promises";
import { Octokit } from "@octokit/rest";

const $ = originalZx({ nothrow: true });

export interface Logger {
  log(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export interface ExecOutput {
  text(): string;
}

export class UserFacingError extends Error {}

export interface ActionInput {
  githubUsername: string | undefined;
  coderUsername: string | undefined;
  coderUrl: string;
  coderToken: string;
  workspaceName: string;
  githubStatusCommentId: number;
  githubRepoOwner: string;
  githubRepoName: string;
  githubToken: string;
  githubWorkflowRunUrl: string;
  templateName: string;
  workspaceParameters: string;
}

export class StartWorkspaceAction {
  private readonly octokit: Octokit;
  constructor(
    private readonly logger: Logger,
    private readonly quietExec: boolean,
    private readonly input: ActionInput
  ) {
    this.octokit = new Octokit({ auth: input.githubToken });
  }

  async exec(
    strings: TemplateStringsArray,
    ...args: unknown[]
  ): Promise<ExecOutput> {
    try {
      const output = await $({
        env: {
          ...process.env,
          CODER_URL: this.input.coderUrl,
          CODER_TOKEN: this.input.coderToken,
        },
      })(strings, ...args).quiet(this.quietExec);
      if (output.exitCode !== 0) {
        throw new Error(
          `Failed to execute command: ${strings.join("REDACTED")}`
        );
      }
      return output;
    } catch (error) {
      throw new Error(`Failed to execute command: ${strings.join("REDACTED")}`);
    }
  }

  /**
   * Parse the output of the `coder users list` command.
   * @param output The output of the `coder users list` command.
   * @returns The username of the Coder user.
   */
  parseCoderUsersListOutput(output: string): string {
    const lines = output.trim().split("\n");
    if (lines.length < 2) {
      assert(this.input.githubUsername, "GitHub username is required");
      throw new UserFacingError(
        `No Coder username mapping found for GitHub user @${this.input.githubUsername}`
      );
    }
    if (lines.length > 2) {
      const usernames = lines.slice(1).map((line) => line.trim());
      this.logger.warn(
        `Multiple Coder usernames found for GitHub user ${
          this.input.githubUsername
        }: ${usernames.join(", ")}. Using the first one.`
      );
    }
    const username = lines[1]?.trim();
    assert(username, "Coder username not found in output");

    return username;
  }

  async coderUsersList(githubUserId: number): Promise<string> {
    return (
      await this
        .exec`coder users list --github-user-id ${githubUserId} --column username`
    ).text();
  }

  async createParametersFile(parameters: string): Promise<string> {
    const tmpFilePath = `/tmp/coder-parameters-${Math.round(
      Math.random() * 1000000
    )}.yml`;
    await fs.writeFile(tmpFilePath, parameters);
    return tmpFilePath;
  }

  createWorkspaceUrl(coderUsername: string, workspaceName: string): string {
    return `${this.input.coderUrl}/${coderUsername}/${workspaceName}`;
  }

  async coderStartWorkspace({
    coderUsername,
    templateName,
    workspaceName,
    parametersFilePath,
  }: {
    coderUsername: string;
    templateName: string;
    workspaceName: string;
    parametersFilePath: string;
  }): Promise<string> {
    const fullWorkspaceName = `${coderUsername}/${workspaceName}`;
    return (
      await this
        .exec`bash -c "yes '' || true" | coder create --yes --template ${templateName} ${fullWorkspaceName} --rich-parameter-file ${parametersFilePath}`
    ).text();
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
    let coderUsername = this.input.coderUsername ?? "";
    if (coderUsername === "") {
      assert(this.input.githubUsername, "GitHub username is required");
      this.logger.log(
        `Getting Coder username for GitHub user ${this.input.githubUsername}`
      );
      const userId = await this.githubGetUserIdFromUsername(
        this.input.githubUsername
      );
      try {
        coderUsername = this.parseCoderUsersListOutput(
          await this.coderUsersList(userId)
        );
      } catch (error) {
        const externalAuthPage = `${this.input.coderUrl}/settings/external-auth`;
        throw new UserFacingError(
          `No matching Coder user found for GitHub user @${this.input.githubUsername}. Please connect your GitHub account with Coder: ${externalAuthPage}`
        );
      }
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

    const parametersFilePath = await this.createParametersFile(
      this.input.workspaceParameters
    );
    this.logger.log("Starting workspace");
    await this.coderStartWorkspace({
      coderUsername,
      templateName: this.input.templateName,
      workspaceName: this.input.workspaceName,
      parametersFilePath,
    });
    this.logger.log("Workspace started");
    await fs.unlink(parametersFilePath);
    await this.githubUpdateIssueComment({
      owner: this.input.githubRepoOwner,
      repo: this.input.githubRepoName,
      commentId: this.input.githubStatusCommentId,
      comment: `✅ Workspace started: ${workspaceUrl}\nView [Github Actions logs](${this.input.githubWorkflowRunUrl}).`,
    });
  }
}
