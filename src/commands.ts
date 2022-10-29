import { StatusBarAlignment, window } from "vscode";
import {
  fontOnlyNotification,
  themeAndFontNotification,
  sbarThemeText,
  themeOnlyNotification,
  themeAndFontIntervalMessage,
  alertInterval,
} from "./models";
import { updateStatusBar } from "./statusbar";

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

// Show the current theme and font family in the status bar.
export async function showStatusBarHandler() {
  updateStatusBar();
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
