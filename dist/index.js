// Source hash: da5457c3c88885477f3bac30bb2f34655d70c769ab2d9bbf3e26bb1269c3a7e9
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
