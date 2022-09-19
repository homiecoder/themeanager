import { StatusBarAlignment, window } from "vscode";
import {
  fontOnlyNotification,
  themeAndFontNotification,
  sbarThemeText,
  themeOnlyNotification,
} from "./models";

// Show the current theme in notification popup.
export async function showCurrentThemeHandler() {
  await window.showInformationMessage(themeOnlyNotification);
}

// Show the current font family.
export async function showCurrentFontFamilyHandler() {
  await window.showInformationMessage(fontOnlyNotification);
}

// Show the current theme and font family.
export async function showCurrentThemeAndFontFamilyHandler() {
  await window.showInformationMessage(themeAndFontNotification);
}

export function showStatusBarHandler() {
  const statusBarButton = window.createStatusBarItem(
    StatusBarAlignment.Left,
    100
  );
  statusBarButton.text = `${sbarThemeText} `;
  statusBarButton.show();
}
