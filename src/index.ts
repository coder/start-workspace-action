import assert from "assert";

export interface Logger {
  log(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export class UserFacingError extends Error {}

export class StartWorkspaceAction {
  constructor(
    private readonly logger: Logger,
    private readonly githubUsername: string | undefined,
    private readonly coderUrl: string,
    private readonly coderToken: string
  ) {}

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
}

export default StartWorkspaceAction;
