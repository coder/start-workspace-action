import { fetch } from "undici";
import { z } from "zod";

const TemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  active_version_id: z.string(),
});

const TemplatesResponseSchema = z.array(TemplateSchema);

const WorkspaceResponseSchema = z.object({
  id: z.string(),
});

const PresetSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const PresetsResponseSchema = z.array(PresetSchema);

const UserResponseSchema = z.object({
  id: z.string(),
});

const UserListResponseSchema = z.object({
  users: z.array(
    z.object({
      id: z.string(),
      username: z.string(),
    })
  ),
  count: z.number(),
});

export class CoderClient {
  private readonly headers: Record<string, string>;
  constructor(private readonly serverURL: string, apiToken: string) {
    this.headers = {
      "Coder-Session-Token": apiToken,
      "Content-Type": "application/json",
    };
  }
  /**
   * Gets template information by name from the Coder API
   */
  async getTemplateInfo(
    templateName: string
  ): Promise<{ templateId: string; templateVersionId: string }> {
    const response = await fetch(
      `${this.serverURL}/api/v2/templates?q=exact_name:${templateName}`,
      {
        method: "GET",
        headers: this.headers,
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get Coder templates, status code: ${response.status}`
      );
    }

    const data = await response.json();
    const templates = TemplatesResponseSchema.parse(data);

    const template = templates.find((t) => t.name === templateName);
    if (!template) {
      throw new Error(`Template with name ${templateName} not found`);
    }

    return {
      templateId: template.id,
      templateVersionId: template.active_version_id,
    };
  }

  /**
   * Gets available presets for a template version
   */
  async getPresets(
    templateVersionId: string
  ): Promise<{ id: string; name: string }[]> {
    const response = await fetch(
      `${this.serverURL}/api/v2/templateversions/${templateVersionId}/presets`,
      {
        method: "GET",
        headers: this.headers,
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to get template presets, status code: ${response.status}`
      );
    }

    const data = await response.json();
    return PresetsResponseSchema.parse(data);
  }

  /**
   * Creates a new workspace with the specified parameters
   * Returns the ID of the created workspace
   */
  async createWorkspace(args: {
    ownerID: string;
    templateID: string;
    workspaceName: string;
    parameters?: Record<string, string>;
    presetID?: string;
  }): Promise<string> {
    const { ownerID, templateID, workspaceName, parameters, presetID } = args;
    const body: Record<string, unknown> = {
      template_id: templateID,
      name: workspaceName,
      autostart: true,
    };
    if (parameters && Object.keys(parameters).length > 0) {
      body.rich_parameter_values = Object.entries(parameters).map(
        ([key, value]) => ({
          name: key,
          value,
        })
      );
    }
    if (presetID) {
      body.template_version_preset_id = presetID;
    }
    const response = await fetch(
      `${this.serverURL}/api/v2/users/${ownerID}/workspaces`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to create Coder workspace, status code: ${response.status}, body: ${errorText}`
      );
    }

    const data = await response.json();
    const parsedData = WorkspaceResponseSchema.parse(data);

    return parsedData.id;
  }

  /**
   * Gets the user ID for a given username from the Coder API
   */
  async getUserID(username: string): Promise<string> {
    const response = await fetch(`${this.serverURL}/api/v2/users/${username}`, {
      method: "GET",
      headers: this.headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to get Coder user, status code: ${response.status}, body: ${errorText}`
      );
    }

    const data = await response.json();
    const parsedData = UserResponseSchema.parse(data);

    return parsedData.id;
  }

  async getCoderUsersByGitHubId(githubId: string): Promise<string[]> {
    const response = await fetch(
      `${this.serverURL}/api/v2/users?q=github_com_user_id:${githubId}`,
      {
        method: "GET",
        headers: this.headers,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      let extraExplanation = "";
      if (
        errorText.includes("github_com_user_id") &&
        errorText.includes("not a valid query param")
      ) {
        extraExplanation =
          "Only Coder 2.21 and above supports querying users by their GitHub ID";
      }
      throw new Error(
        `${extraExplanation}\nFailed to list Coder users by GitHub ID, status code: ${response.status}, body: ${errorText}`
      );
    }

    const data = await response.json();
    const parsedData = UserListResponseSchema.parse(data);

    return parsedData.users.map((user) => user.username);
  }
}
