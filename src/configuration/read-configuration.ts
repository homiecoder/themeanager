import * as vscode from "vscode";
import { AllSettings, extensionShortName, StandardSettings } from "../models";

const { workspace } = vscode;

export function getThemeanagerWorkspace() {
  return workspace.getConfiguration(extensionShortName);
}

export function getUserConfig() {
  return workspace.getConfiguration("themeanager");
}

export function readConfiguration<T>(
  setting: AllSettings,
  defaultValue?: T | undefined
) {
  const value: T | undefined = workspace
    .getConfiguration("themeanager")
    .get<T | undefined>(setting, defaultValue);
  return value as T;
}

export function getShowCurrentThemeAndFontAtStartup() {
  return readConfiguration<boolean>(
    StandardSettings.ShowCurrentThemeAndFontAtStartup,
    false
  );
}

export function getShowStatusBar() {
  return readConfiguration<boolean>(StandardSettings.ShowStatusBar, true);
}

export function getShowThemeAndFontNotificationAtInterval() {
  return readConfiguration<boolean>(
    StandardSettings.ShowThemeAndFontNotificationAtInterval,
    false
  );
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
