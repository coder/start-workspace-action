import assert from "assert";
import { $ as originalZx } from "zx";
import { writeFile } from "fs/promises";

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

export class StartWorkspaceAction {
  constructor(
    private readonly logger: Logger,
    private readonly githubUsername: string | undefined,
    private readonly coderUrl: string,
    private readonly coderToken: string,
    private readonly quietExec: boolean
  ) {}

  async exec(
    strings: TemplateStringsArray,
    ...args: unknown[]
  ): Promise<ExecOutput> {
    try {
      const output = await $({
        env: {
          ...process.env,
          CODER_URL: this.coderUrl,
          CODER_TOKEN: this.coderToken,
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
      assert(this.githubUsername, "GitHub username is required");
      throw new UserFacingError(
        `No Coder username mapping found for GitHub user @${this.githubUsername}`
      );
    }
    if (lines.length > 2) {
      const usernames = lines.slice(1).map((line) => line.trim());
      this.logger.warn(
        `Multiple Coder usernames found for GitHub user ${
          this.githubUsername
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
    await writeFile(tmpFilePath, parameters);
    return tmpFilePath;
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
  }) {
    const fullWorkspaceName = `${coderUsername}/${workspaceName}`;
    return (
      await this
        .exec`bash -c "yes '' || true" | coder create --yes --template ${templateName} ${fullWorkspaceName} --rich-parameter-file ${parametersFilePath}`
    ).text();
  }
}
