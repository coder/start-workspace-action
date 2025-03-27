import fs from "fs/promises";
import {
  StartWorkspaceAction,
  ActionInputSchema,
  type ActionInput,
  UserFacingError,
} from "./action";

type InputEnv = {
  [k in keyof ActionInput]: string;
};

const main = async () => {
  const inputEnv: InputEnv = {
    githubUsername: "GITHUB_USERNAME",
    coderUsername: "CODER_USERNAME",
    coderUrl: "CODER_URL",
    coderToken: "CODER_TOKEN",
    workspaceName: "WORKSPACE_NAME",
    githubStatusCommentId: "GITHUB_STATUS_COMMENT_ID",
    githubRepoOwner: "GITHUB_REPO_OWNER",
    githubRepoName: "GITHUB_REPO_NAME",
    githubToken: "GITHUB_TOKEN",
    githubWorkflowRunUrl: "GITHUB_WORKFLOW_RUN_URL",
    templateName: "TEMPLATE_NAME",
    workspaceParameters: "WORKSPACE_PARAMETERS",
  };

  const input = ActionInputSchema.parse(
    Object.fromEntries(
      Object.entries(inputEnv).map(([key, value]) => [key, process.env[value]])
    )
  );

  const action = new StartWorkspaceAction(console, false, input);

  await action.execute();
};

try {
  await main();
} catch (error) {
  if (error instanceof UserFacingError) {
    const githubEnvFile = process.env["GITHUB_ENV"];
    if (githubEnvFile) {
      await fs.appendFile(githubEnvFile, `ERROR_MSG=${error.message}\n`);
    }
  }
  console.error(error);
  process.exit(1);
}
