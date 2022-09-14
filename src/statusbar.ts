import { StatusBarAlignment, window, StatusBarItem } from "vscode";
import { getShowStatusBar } from "./configuration";
import { Commands, currentTheme, themeCheckButtonText } from "./models";

const _statusBarItem: StatusBarItem = window.createStatusBarItem(
  StatusBarAlignment.Right
);

export const getStatusBarItem = () => {
  updateStatusBar();
  return _statusBarItem;
};

export function clearStatusBar() {
  const sbar = _statusBarItem;
  sbar.text = "";
  sbar.hide();
}

export function updateStatusBar() {
  const sbar = _statusBarItem;
  const show = getShowStatusBar();
  sbar.text = `${themeCheckButtonText} `;
  sbar.command = Commands.showStatusBar;
  sbar.tooltip = "Show Theme in Status Bar";
  if (show && !!currentTheme) {
    sbar.show();
  } else {
    clearStatusBar();
  }
}
