import { describe, expect, it } from "bun:test";
import {
  StartWorkspaceAction,
  UserFacingError,
  type ExecOutput,
  type Logger,
} from ".";
import dedent from "dedent";
import fs from "fs/promises";

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

interface ActionParams {
  logger?: Logger;
  githubUsername?: string;
  githubUsernameUndefined?: boolean;
  coderUrl?: string;
  coderToken?: string;
  exec?: typeof StartWorkspaceAction.prototype.exec;
  dontOverrideExec?: boolean;
  quietExec?: boolean;
}

const newAction = (params?: ActionParams) => {
  const action = new StartWorkspaceAction(
    params?.logger ?? new TestLogger(),
    params?.githubUsername ??
      (params?.githubUsernameUndefined ? undefined : "github-user"),
    params?.coderUrl ?? "https://example.com",
    params?.coderToken ?? "coder-token",
    params?.quietExec ?? true
  );
  if (!params?.dontOverrideExec) {
    action.exec =
      params?.exec ??
      (() => {
        throw new Error(
          "exec is not available in tests unless dontOverrideExec is true"
        );
      });
  }
  return action;
};

const identityExec = async (
  strings: TemplateStringsArray,
  ...args: unknown[]
): Promise<ExecOutput> => {
  let result = strings[0];
  for (let i = 0; i < args.length; i++) {
    result += String(args[i]) + strings[i + 1];
  }
  return { text: () => result ?? "" };
};

describe("StartWorkspaceAction", () => {
  it("exec", async () => {
    const action = newAction({
      dontOverrideExec: true,
    });
    expect(() => action.exec`invalidcommand ${1} hey ${2}`).toThrow(
      "Failed to execute command: invalidcommand REDACTED hey REDACTED"
    );

    const output = await action.exec`echo "Hello, ${"world"}!"`;
    expect(output.text()).toBe("Hello, world!\n");
  });

  it("parseCoderUsersListOutput", () => {
    const logger = new TestLogger();
    const action = newAction({ logger });

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

  it("coderUsersList", async () => {
    const action = newAction({
      exec: identityExec,
    });

    const output = await action.coderUsersList(123);
    expect(output).toBe(
      "coder users list --github-user-id 123 --column username"
    );
  });

  it("createParametersFile", async () => {
    const action = newAction({
      exec: identityExec,
    });
    const parameters = dedent`
      key: value
      key2: value2
      key3: value3
    `.trim();

    const filePath = await action.createParametersFile(parameters);
    try {
      expect(filePath).toMatch(/^\/tmp\/coder-parameters-\d+\.yml$/);
      const fileContent = await fs.readFile(filePath, "utf-8");
      expect(fileContent).toBe(parameters);
    } finally {
      await fs.unlink(filePath);
    }
  });

  it("coderStartWorkspace", async () => {
    const action = newAction({
      exec: identityExec,
    });

    const output = await action.coderStartWorkspace({
      coderUsername: "hugo",
      templateName: "ubuntu",
      workspaceName: "test-workspace",
      parametersFilePath: "/tmp/coder-parameters-123.yml",
    });
    expect(output).toBe(
      "bash -c \"yes '' || true\" | coder create --yes --template ubuntu hugo/test-workspace --rich-parameter-file /tmp/coder-parameters-123.yml"
    );
  });
});
