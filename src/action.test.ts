import { describe, expect, it } from "bun:test";
import {
  StartWorkspaceAction,
  UserFacingError,
  type ActionInput,
  type ExecOutput,
  type Logger,
} from "./action";
import dedent from "dedent";
import fs from "fs/promises";
import { unwrap } from "./utils";

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
  input?: Partial<ActionInput>;
  logger?: Logger;
  exec?: typeof StartWorkspaceAction.prototype.exec;
  dontOverrideExec?: boolean;
  quietExec?: boolean;
}

const newAction = (params?: ActionParams) => {
  const defaults: ActionInput = {
    githubUsername: "github-user",
    coderUsername: "coder-user",
    coderUrl: "https://example.com",
    coderToken: "coder-token",
    workspaceName: "workspace-name",
    githubStatusCommentId: 123,
    githubRepoOwner: "github-repo-owner",
    githubRepoName: "github-repo-name",
    githubToken: "github-token",
    githubWorkflowRunUrl: "https://github.com/workflow-run",
    templateName: "ubuntu",
    workspaceParameters: dedent`
      key: value
      key2: value2
      key3: value3
    `.trim(),
  };
  // Loop through the input rather than use {...defaults, ...(params?.input ?? {})}
  // to also allow overriding defaults with undefined values
  for (const [key, value] of Object.entries(params?.input ?? {})) {
    (defaults as any)[key] = value;
  }

  const action = new StartWorkspaceAction(
    params?.logger ?? new TestLogger(),
    params?.quietExec ?? true,
    {
      githubUsername: "github-user",
      coderUsername: undefined,
      coderUrl: "https://example.com",
      coderToken: "coder-token",
      workspaceName: "workspace-name",
      githubStatusCommentId: 123,
      githubRepoOwner: "github-repo-owner",
      githubRepoName: "github-repo-name",
      githubToken: "github-token",
      githubWorkflowRunUrl: "https://github.com/workflow-run",
      templateName: "ubuntu",
      workspaceParameters: dedent`
        key: value
        key2: value2
        key3: value3
      `.trim(),
      ...(params?.input ?? {}),
    }
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
        "No matching Coder user found for GitHub user @github-user. Please connect your GitHub account with Coder: https://example.com/settings/external-auth"
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

  describe("execute", () => {
    type MockForExecuteResult = {
      workspaceStarted: boolean;
      startWorkspaceArgs:
        | Parameters<
            typeof StartWorkspaceAction.prototype.coderStartWorkspace
          >[0]
        | undefined;
      issueComments: string[];
      error?: unknown;
    };

    interface MockForExecuteParams {
      coderUsersList?: string;
      initialIssueComment?: string;
      githubUserId?: number;
    }

    const mockForExecute = (
      action: StartWorkspaceAction,
      params: MockForExecuteParams
    ): MockForExecuteResult => {
      const result: MockForExecuteResult = {
        workspaceStarted: false,
        startWorkspaceArgs: undefined,
        issueComments: [params.initialIssueComment ?? ""],
      };
      action.coderStartWorkspace = async (args) => {
        result.workspaceStarted = true;
        result.startWorkspaceArgs = args;
        return "";
      };
      action.coderUsersList = async () => {
        return params.coderUsersList ?? "";
      };
      action.githubGetIssueCommentBody = async () => {
        return unwrap(result.issueComments[result.issueComments.length - 1]);
      };
      action.githubUpdateIssueComment = async (args) => {
        result.issueComments.push(args.comment);
      };
      action.githubGetUserIdFromUsername = async () => {
        return params.githubUserId ?? 123;
      };

      return result;
    };

    const executeTest = async (
      actionParams: ActionParams,
      mockParams: MockForExecuteParams,
      expected: {
        issueComments: string[];
        workspaceStarted: boolean;
        startWorkspace?: {
          coderUsername: string;
          templateName: string;
          workspaceName: string;
        };
      }
    ): Promise<MockForExecuteResult> => {
      const action = newAction(actionParams);
      const mock = mockForExecute(action, mockParams);
      try {
        await action.execute();
      } catch (error) {
        mock.error = error;
      }

      expect(mock.issueComments).toEqual(expected.issueComments);
      expect(mock.workspaceStarted).toBe(expected.workspaceStarted);
      expect(mock.startWorkspaceArgs?.coderUsername).toBe(
        expected.startWorkspace?.coderUsername as any
      );
      expect(mock.startWorkspaceArgs?.templateName).toBe(
        expected.startWorkspace?.templateName as any
      );
      expect(mock.startWorkspaceArgs?.workspaceName).toBe(
        expected.startWorkspace?.workspaceName as any
      );
      if (mock.startWorkspaceArgs != null) {
        expect(mock.startWorkspaceArgs?.parametersFilePath).toMatch(
          /^\/tmp\/coder-parameters-\d+\.yml$/
        );
      }
      if (mock.workspaceStarted) {
        expect(() =>
          fs.stat(unwrap(mock.startWorkspaceArgs?.parametersFilePath))
        ).toThrow("no such file or directory");
      }
      return mock;
    };

    it("happy path", async () => {
      await executeTest(
        {},
        {
          coderUsersList: dedent`
          USERNAME
          hugo
        `.trim(),
          initialIssueComment: "Initial comment",
          githubUserId: 123,
        },
        {
          issueComments: [
            "Initial comment",
            "Initial comment\nWorkspace will be available here: https://example.com/hugo/workspace-name",
            "✅ Workspace started: https://example.com/hugo/workspace-name\nView [Github Actions logs](https://github.com/workflow-run).",
          ],
          workspaceStarted: true,
          startWorkspace: {
            coderUsername: "hugo",
            templateName: "ubuntu",
            workspaceName: "workspace-name",
          },
        }
      );
    });

    it("happy path with coder username", async () => {
      await executeTest(
        {
          input: { coderUsername: "hugo-coder", githubUsername: undefined },
        },
        {
          initialIssueComment: "Initial comment",
        },
        {
          issueComments: [
            "Initial comment",
            "Initial comment\nWorkspace will be available here: https://example.com/hugo-coder/workspace-name",
            "✅ Workspace started: https://example.com/hugo-coder/workspace-name\nView [Github Actions logs](https://github.com/workflow-run).",
          ],
          workspaceStarted: true,
          startWorkspace: {
            coderUsername: "hugo-coder",
            templateName: "ubuntu",
            workspaceName: "workspace-name",
          },
        }
      );
    });

    it("no username mapping", async () => {
      const mock = await executeTest(
        {
          input: { githubUsername: "hugo" },
        },
        {
          coderUsersList: dedent`
            USERNAME
          `.trim(),
        },
        {
          issueComments: [""],
          workspaceStarted: false,
        }
      );
      expect(mock.error).toBeInstanceOf(UserFacingError);
      expect((mock.error as any).message).toEqual(
        `No matching Coder user found for GitHub user @hugo. Please connect your GitHub account with Coder: https://example.com/settings/external-auth`
      );
    });
  });
});
