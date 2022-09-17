import { StatusBarAlignment, window } from "vscode";
import {
  alertInterval,
  fontOnlyNotification,
  themeAndFontIntervalMessage,
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
    StatusBarAlignment.Right,
    9800
  );
  statusBarButton.text = `${sbarThemeText} `;
  statusBarButton.show();
}

// Show the current theme and font family at an interval.
export async function showThemeAndFontNotificationAtIntervalHandler() {
  // Show popup when interval is set.
  window.showInformationMessage(themeAndFontIntervalMessage);
  // Start interval.
  setInterval(() => {
    window.showInformationMessage(themeAndFontIntervalMessage);
  }, alertInterval);
}
