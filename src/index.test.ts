import { describe, expect, it } from "bun:test";
import { StartWorkspaceAction, UserFacingError, type Logger } from ".";
import dedent from "dedent";

class TestLogger implements Logger {
  logs: string[] = [];
  warns: string[] = [];
  errors: string[] = [];

  log(message: string) {
    this.logs.push(message);
  }
  warn(message: string) {
    this.warns.push(message);
  }
  error(message: string) {
    this.errors.push(message);
  }
}

describe("StartWorkspaceAction", () => {
  it("parseCoderUsersListOutput", () => {
    const logger = new TestLogger();
    const action = new StartWorkspaceAction(
      logger,
      "github-user",
      "https://coder.com",
      "coder-token"
    );

    const username = action.parseCoderUsersListOutput(dedent`
        USERNAME
        hugo
    `);
    expect(username).toBe("hugo");

    expect(logger.logs).toEqual([]);
    expect(logger.warns).toEqual([]);
    expect(logger.errors).toEqual([]);

    const username2 = action.parseCoderUsersListOutput(dedent`
        USERNAME
        hugo
        alice
    `);
    expect(username2).toBe("hugo");

    expect(logger.logs).toEqual([]);
    expect(logger.warns).toEqual([
      "Multiple Coder usernames found for GitHub user github-user: hugo, alice. Using the first one.",
    ]);
    expect(logger.errors).toEqual([]);

    logger.warns = [];
    expect(() =>
      action.parseCoderUsersListOutput(dedent`
        USERNAME
    `)
    ).toThrowError(
      new UserFacingError(
        "No Coder username mapping found for GitHub user @github-user"
      )
    );
    expect(logger.logs).toEqual([]);
    expect(logger.warns).toEqual([]);
    expect(logger.errors).toEqual([]);

    // Test that the output is trimmed
    const username3 = action.parseCoderUsersListOutput(dedent`
           USERNAME
        hugo   
    `);
    expect(username3).toBe("hugo");

    expect(logger.logs).toEqual([]);
    expect(logger.warns).toEqual([]);
    expect(logger.errors).toEqual([]);

    // Invalid output
    expect(() =>
      action.parseCoderUsersListOutput(dedent`
        USERNAME
            
        hugo
    `)
    ).toThrow("Coder username not found in output");
  });
});
