import * as vscode from "vscode";

import { window, workspace } from "vscode";
export const extensionShortName = "themeanager";
export const extensionId = "homiecoder.themeanager";
export const separator = `\u00A0\u00A0\u00A0\u00A0 - \u00A0\u00A0\u00A0\u00A0`;

// how do i? should i async await these?
export const currentTheme = workspace
  .getConfiguration("workbench")
  .get("colorTheme");

const lastSelectedFontFamily: any = workspace
  .getConfiguration("editor")
  .get("fontFamily");

export const activeTextEditor = window.activeTextEditor;
export const activeEditorShort = window.activeTextEditor?.document.fileName;

export const rootName = vscode.workspace.workspaceFolders?.[0].name;

const lastFontFamilySplit = lastSelectedFontFamily.split(",");

export const currentFontFamily = lastFontFamilySplit[0];

export const getConfig = workspace.getConfiguration("window");

export const sbarThemeText = `Current Theme:  ${currentTheme}\u00A0\u00A0 | \u00A0\u00A0Font:  ${currentFontFamily}`;

export const themeOnlyNotification = `Current Theme: ${currentTheme}`;

export const fontOnlyNotification = `Current Font: ${currentFontFamily}`;

export const themeAndFontNotification = `Current Theme: ${currentTheme}\u00A0\u00A0 | \u00A0\u00A0Font: ${currentFontFamily}`;

// Set and show alert interval.
export const alertInterval = 300000;
export const showAlertInterval = alertInterval / 1000 / 60;

export const themeAndFontIntervalMessage = `${themeAndFontNotification}  (${showAlertInterval}mins)`;
