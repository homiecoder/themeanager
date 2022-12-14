"use strict";
import {
  ExtensionContext,
  commands,
  workspace,
  ConfigurationChangeEvent as configurationChangeEvent,
  window,
} from "vscode";
import {
  showCurrentFontFamilyHandler,
  showCurrentThemeAndFontFamilyHandler,
  showCurrentThemeHandler,
  showStatusBarHandler,
  showThemeAndFontNotificationAtIntervalHandler,
} from "./commands";
import {
  getShowCurrentThemeAndFontAtStartup,
  getShowStatusBar,
  getShowThemeAndFontNotificationAtInterval,
} from "./configuration";

import { Commands } from "./models";
import { State } from "./models/state";

export async function activate(context: ExtensionContext) {
  State.extensionContext = context;

  registerCommands();

  await checkShowCurrentThemeAndFontAtStartupLogic();
  await checkShowStatusBarLogic();
  await checkShowThemeAndFontNoticationAtIntervalLogic();

  workspace.onDidChangeConfiguration((configurationChangeEvent) => {
    if (configurationChangeEvent.affectsConfiguration("themeanager")) {
      const actions = ["Reload now", "Later"];

      window
        .showInformationMessage(
          "The VSCode window needs to reload for the changes to take effect. Would you like to reload the window now?",
          ...actions
        )
        .then((action) => {
          if (action === actions[0]) {
            commands.executeCommand("workbench.action.reloadWindow");
          }
        });
    }
  });
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
    commands.registerCommand(Commands.showStatusBar, showStatusBarHandler),
    commands.registerCommand(
      Commands.showThemeAndFontNotificationAtInterval,
      showThemeAndFontNotificationAtIntervalHandler
    );
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

export async function checkShowThemeAndFontNoticationAtIntervalLogic() {
  if (getShowThemeAndFontNotificationAtInterval()) {
    showThemeAndFontNotificationAtIntervalHandler();
  } else {
    return;
  }
}

export function deactivate() {}
