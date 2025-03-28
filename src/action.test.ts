import { describe, expect, it } from "bun:test";
import {
  StartWorkspaceAction,
  UserFacingError,
  type ActionInput,
  type ExecOutput,
  type Logger,
} from "./action";
import dedent from "dedent";
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

  const action = new StartWorkspaceAction(params?.logger ?? new TestLogger(), {
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
  });

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
  it("coderUsernameByGitHubId", async () => {
    const logger = new TestLogger();
    const action = newAction({ logger });
    const returnValue = { usernames: ["hugo"] };
    action["coder"].getCoderUsersByGitHubId = async () => returnValue.usernames;

    const username = await action.coderUsernameByGitHubId(123);
    expect(username).toBe("hugo");

    expect(logger.logs).toEqual([]);
    expect(logger.warns).toEqual([]);
    expect(logger.errors).toEqual([]);

    returnValue.usernames = ["hugo", "alice", "bob", "charlie"];
    expect(() => action.coderUsernameByGitHubId(123)).toThrowError(
      new UserFacingError(
        "Multiple Coder users found for GitHub user github-user: hugo, alice, bob, and others. Please connect other users to other GitHub accounts and try again."
      )
    );

    expect(logger.logs).toEqual([]);
    expect(logger.warns).toEqual([]);
    expect(logger.errors).toEqual([]);

    returnValue.usernames = [];
    expect(() => action.coderUsernameByGitHubId(123)).toThrow(
      new UserFacingError(
        "No matching Coder user found for GitHub user @github-user. Please connect your GitHub account with Coder: https://example.com/settings/external-auth"
      )
    );
    expect(logger.logs).toEqual([]);
    expect(logger.warns).toEqual([]);
    expect(logger.errors).toEqual([]);
  });

  it("parseParameters", async () => {
    const action = newAction();
    const parameters = dedent`
      key: value
      key2: value2
      key3: value3
    `.trim();
    const parsed = await action.parseParameters(parameters);
    expect(parsed).toEqual({
      key: "value",
      key2: "value2",
      key3: "value3",
    });
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
      coderUsernamesByGitHubId?: string[];
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
      };
      action["coder"].getCoderUsersByGitHubId = async () => {
        return params.coderUsernamesByGitHubId ?? [];
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
      return mock;
    };

    it("happy path", async () => {
      await executeTest(
        {},
        {
          coderUsernamesByGitHubId: ["hugo"],
          initialIssueComment: "Initial comment",
          githubUserId: 123,
        },
        {
          issueComments: [
            "Initial comment",
            "Initial comment\n\nWorkspace will be available at: https://example.com/hugo/workspace-name",
            "✅ Coder workspace started! You can view the action logs [here](https://github.com/workflow-run).\n\nWorkspace is available at: https://example.com/hugo/workspace-name",
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
            "Initial comment\n\nWorkspace will be available at: https://example.com/hugo-coder/workspace-name",
            "✅ Coder workspace started! You can view the action logs [here](https://github.com/workflow-run).\n\nWorkspace is available at: https://example.com/hugo-coder/workspace-name",
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
          coderUsernamesByGitHubId: [],
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

    it("multiple coder users for same github user", async () => {
      const mock = await executeTest(
        {
          input: { githubUsername: "hugo" },
        },
        {
          coderUsernamesByGitHubId: ["hugo", "alice", "bob", "charlie"],
        },
        {
          issueComments: [""],
          workspaceStarted: false,
        }
      );
      expect(mock.error).toBeInstanceOf(UserFacingError);
      expect((mock.error as any).message).toEqual(
        `Multiple Coder users found for GitHub user hugo: hugo, alice, bob, and others. Please connect other users to other GitHub accounts and try again.`
      );
    });
  });
});
