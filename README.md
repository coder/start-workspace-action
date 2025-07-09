# Start Coder Workspace GitHub Action

This GitHub Action starts a [Coder](https://coder.com) workspace and posts a status comment on a GitHub issue that gets updated with progress. It's designed to be used as part of a workflow triggered by events you configure.

<img width="937" alt="Screenshot 2025-03-28 at 16 50 58" src="https://github.com/user-attachments/assets/b0473626-01f8-4f8e-9298-e75447f214be" />

## Features

- Starts a Coder workspace using your specified template
- Posts a single status comment on a GitHub issue that updates with progress
- Configurable workspace parameters
- Maps GitHub users to Coder users

## Usage

This action only handles the workspace creation and status updates. You need to configure your own workflow triggers based on your requirements.

Here's an example workflow that triggers on issue creation or comments containing "@coder":

```yaml
name: Start Workspace On Issue Creation or Comment

on:
  issues:
    types: [opened]
  issue_comment:
    types: [created]

permissions:
  issues: write

jobs:
  comment:
    runs-on: ubuntu-latest
    # You control the trigger conditions:
    if: >-
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@coder')) || 
      (github.event_name == 'issues' && contains(github.event.issue.body, '@coder'))
    environment: start-ai-workspace
    timeout-minutes: 5
    steps:
      - name: Start Coder workspace
        uses: coder/start-workspace-action@v0.1.0
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          github-username: >-
            ${{
              (github.event_name == 'issue_comment' && github.event.comment.user.login) || 
              (github.event_name == 'issues' && github.event.issue.user.login)
            }}
          coder-url: ${{ secrets.CODER_URL }}
          coder-token: ${{ secrets.CODER_TOKEN }}
          template-name: ${{ secrets.CODER_TEMPLATE_NAME }}
          parameters: |-
            Coder Image: codercom/oss-dogfood:latest
            Coder Repository Base Directory: "~"
            AI Code Prompt: "Use the gh CLI tool to read the details of issue https://github.com/${{ github.repository }}/issues/${{ github.event.issue.number }} and then address it."
            Region: us-pittsburgh
```

## Inputs

| Input                 | Description                                                                                             | Required | Default                           |
| --------------------- | ------------------------------------------------------------------------------------------------------- | -------- | --------------------------------- |
| `github-token`        | GitHub token for posting comments                                                                       | No       | `${{ github.token }}`             |
| `github-url`          | URL of the GitHub instance to use                                                                       | No       | `https://github.com`              |
| `github-issue-number` | GitHub issue number where the status comment will be posted                                             | No       | Current issue from GitHub context |
| `github-username`     | GitHub username of the user for whom the workspace is being started (requires Coder 2.21 or newer)      | No       | -                                 |
| `coder-username`      | Coder username to override default user mapping (only set one of `github-username` or `coder-username`) | No       | -                                 |
| `coder-url`           | Coder deployment URL                                                                                    | Yes      | -                                 |
| `coder-token`         | API token for Coder                                                                                     | Yes      | -                                 |
| `template-name`       | Name of the Coder template to use                                                                       | Yes      | -                                 |
| `workspace-name`      | Name for the new workspace                                                                              | No       | `issue-{issue_number}`            |
| `parameters`          | YAML-formatted parameters for the Coder workspace                                                       | Yes      | -                                 |

## How It Works

1. The action posts an initial status comment on the GitHub issue
2. If `github-username` is set, it looks up the Coder user that matches the GitHub user. The Coder user must've either logged into Coder or connected external auth using the same GitHub account. If `coder-username` is set, it uses that Coder user instead.
3. It starts a Coder workspace using the specified template and parameters
4. If successful, it updates the same comment with the workspace URL
5. If it fails, it updates the same comment with an error message

## Requirements

- A Coder deployment with API access.
- Coder 2.21 or later to use the `github-username` input. Earlier versions of Coder can use the `coder-username` input instead.
- Appropriate secrets configured in your repository or environment.

## Security Recommendations

This action requires a Coder admin API token to create workspaces. To limit access to this sensitive token:

1. Create a GitHub environment (e.g., "coder-production")
2. Store your `CODER_TOKEN` and other secrets in this environment
3. Restrict the environment to specific branches (e.g., main)

Example workflow configuration:

```yaml
jobs:
  start-workspace:
    runs-on: ubuntu-latest
    # Important: Use an environment to restrict access to secrets
    environment: coder-production
    steps:
      - name: Start Coder workspace
        uses: coder/start-workspace-action@v0.1.0
        with:
          coder-token: ${{ secrets.CODER_TOKEN }}
          # other inputs...
```

This ensures the Coder API token is only accessible to workflows running on approved branches.

## License

[MIT](LICENSE)
