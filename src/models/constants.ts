import * as vscode from "vscode";

import { window, workspace } from "vscode";
export const extensionShortName = "themeanager";
export const extensionId = "homiecoder.themeanager";
export const separator = `\u00A0\u00A0\u00A0\u00A0 - \u00A0\u00A0\u00A0\u00A0`;
export const separator2 = " -\u00A0\u00A0\u00A0\u00A0";

// grab current theme and font
// can i? should i async await these?
export const currentTheme = workspace
  .getConfiguration("workbench")
  .get("colorTheme");

const lastSelectedFontFamily: any = workspace
  .getConfiguration("editor")
  .get("fontFamily");

export const originalWindowTitle = workspace
  .getConfiguration("window")
  .get("title");

export const currentWindowTitle = workspace
  .getConfiguration("window")
  .get("title");

export const activeEditorShort = window.activeTextEditor?.document.fileName;

export const rootName = vscode.workspace.workspaceFolders?.[0].name;

const lastFontFamilySplit = lastSelectedFontFamily.split(",");

export const currentFontFamily = lastFontFamilySplit[0];
const projectRoot = window.activeTextEditor || "";

// small helper for theme button text
export const themeCheckButtonText = `Current Theme:  ${currentTheme}\u00A0\u00A0 | \u00A0\u00A0Font:  ${currentFontFamily}`;

// Set and show alert interval.
export const alertInterval = 120000;
export const showAlertInterval = alertInterval / 1000 / 60;

export const getConfig = workspace.getConfiguration("window");

export const activeTextEditor = window.activeTextEditor;

export const themeOnlyMessage = `Current Theme: ${currentTheme}`;

export const themeOnlyNotification = `Current Theme: ${currentTheme}`;

export const fontOnlyNotification = `Current Font: ${currentFontFamily}`;

export const themeAndFontNotification = `Current Theme: ${currentTheme}\u00A0\u00A0 | \u00A0\u00A0Font: ${currentFontFamily}`;

export const themeAndFontIntervalMessage = `${themeAndFontNotification}  (${showAlertInterval}mins)`;

export const isObjectEmpty = (o: {} | undefined) =>
  typeof o === "object" && Object.keys(o).length === 0;
