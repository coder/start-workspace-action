// Source hash: 32a811ebf3fb661a8c9ba5c0e7dd770811103fbbf6a4e32f48a7678e22b4ede0
// src/index.ts
import assert from "assert";

class UserFacingError extends Error {
}

class StartWorkspaceAction {
  logger;
  githubUsername;
  coderUrl;
  coderToken;
  constructor(logger, githubUsername, coderUrl, coderToken) {
    this.logger = logger;
    this.githubUsername = githubUsername;
    this.coderUrl = coderUrl;
    this.coderToken = coderToken;
  }
  parseCoderUsersListOutput(output) {
    const lines = output.trim().split(`
`);
    if (lines.length < 2) {
      assert(this.githubUsername, "GitHub username is required");
      throw new UserFacingError(`No Coder username mapping found for GitHub user @${this.githubUsername}`);
    }
    if (lines.length > 2) {
      const usernames = lines.slice(1).map((line) => line.trim());
      this.logger.warn(`Multiple Coder usernames found for GitHub user ${this.githubUsername}: ${usernames.join(", ")}. Using the first one.`);
    }
    const username = lines[1]?.trim();
    assert(username, "Coder username not found in output");
    return username;
  }
}
var src_default = StartWorkspaceAction;
export {
  src_default as default,
  UserFacingError,
  StartWorkspaceAction
};
