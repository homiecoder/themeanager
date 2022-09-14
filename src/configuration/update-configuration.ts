import { AllSettings, StandardSettings, extensionShortName } from "../models";
import { ConfigurationTarget, workspace } from "vscode";

export async function updateGlobalConfiguration(
  setting: AllSettings,
  value?: any
) {
  const config = workspace.getConfiguration();
  const section = `${extensionShortName}.${setting}`;

  return await config.update(section, value, ConfigurationTarget.Global);
}

export async function updateShowCurrentThemeAndFontAtStartup(value: boolean) {
  return await updateGlobalConfiguration(
    StandardSettings.ShowCurrentThemeAndFontAtStartup,
    value
  );
}

export async function updateShowStatusBar(value: boolean) {
  return await updateGlobalConfiguration(StandardSettings.ShowStatusBar, value);
}

export async function updateShowWindowTitle(value: boolean) {
  return await updateGlobalConfiguration(
    StandardSettings.ShowWindowTitle,
    value
  );
}
