"use strict";
import {
  ExtensionContext,
  commands,
  workspace,
  ConfigurationChangeEvent,
} from "vscode";
import {
  showCurrentFontFamilyHandler,
  showCurrentThemeAndFontFamilyHandler,
  showCurrentThemeHandler,
  showStatusBarHandler,
} from "./commands";
import {
  checkIfThemeanagerSettingsChanged,
  getShowCurrentThemeAndFontAtStartup,
  getShowStatusBar,
} from "./configuration";

import { Commands } from "./models";
import { State } from "./models/state";

export async function activate(context: ExtensionContext) {
  State.extensionContext = context;

  registerCommands();

  await checkShowCurrentThemeAndFontAtStartupLogic();
  await checkShowStatusBarLogic();

  addSubscriptions();
}

function addSubscriptions() {
  State.extensionContext.subscriptions.push(
    workspace.onDidChangeConfiguration(applyThemeanager())
  );
}

function applyThemeanager(): (e: ConfigurationChangeEvent) => Promise<void> {
  return async (e) => {
    const startupNotification = getShowCurrentThemeAndFontAtStartup();
    const showStatusBar = getShowStatusBar();
    if (checkIfThemeanagerSettingsChanged(e)) {
      await checkShowCurrentThemeAndFontAtStartupLogic();
      await checkShowStatusBarLogic();
    }
  };
}

function registerCommands() {
  commands.registerCommand(Commands.showCurrentTheme, showCurrentThemeHandler),
    commands.registerCommand(
      Commands.showCurrentFontFamily,
      showCurrentFontFamilyHandler
    ),
    commands.registerCommand(
      Commands.showCurrentThemeAndFontFamily,
      showCurrentThemeAndFontFamilyHandler
    ),
    commands.registerCommand(Commands.showStatusBar, showStatusBarHandler);
}

export async function checkShowCurrentThemeAndFontAtStartupLogic() {
  if (getShowCurrentThemeAndFontAtStartup()) {
    showCurrentThemeAndFontFamilyHandler();
  } else {
    return;
  }
}

export async function checkShowStatusBarLogic() {
  if (getShowStatusBar()) {
    showStatusBarHandler();
  } else {
    return;
  }
}
