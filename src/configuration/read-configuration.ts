import * as vscode from "vscode";
import {
  AllSettings,
  extensionShortName,
  Sections,
  StandardSettings,
} from "../models";

const { workspace } = vscode;

export function getThemeanagerWorkspace() {
  return workspace.getConfiguration(extensionShortName);
}

export function getUserConfig() {
  return workspace.getConfiguration(Sections.themeanagerSection);
}

export function readConfiguration<T>(
  setting: AllSettings,
  defaultValue?: T | undefined
) {
  const value: T | undefined = workspace
    .getConfiguration(Sections.themeanagerSection)
    .get<T | undefined>(setting, defaultValue);
  return value as T;
}

export function getShowCurrentThemeAndFontAtStartup() {
  return readConfiguration<boolean>(
    StandardSettings.ShowCurrentThemeAndFontAtStartup,
    true
  );
}

export function getShowStatusBar() {
  return readConfiguration<boolean>(StandardSettings.ShowStatusBar, true);
}

export function getAllSettingNames() {
  const settings = [];
  const standardSettings = Object.values(StandardSettings).map(
    (value) => `${extensionShortName}.${value}`
  );
  settings.push(...standardSettings);
  return settings;
}

export function checkIfThemeanagerSettingsChanged(
  e: vscode.ConfigurationChangeEvent
) {
  return getAllSettingNames().some((setting) =>
    e.affectsConfiguration(setting)
  );
}

function getAllUserSettings() {
  const showCurrentThemeAndFontAtStartup =
    getShowCurrentThemeAndFontAtStartup();
  const showStatusBar = getShowStatusBar();
  return {
    showCurrentThemeAndFontAtStartup,
    showStatusBar,
  };
}
