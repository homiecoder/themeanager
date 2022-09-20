import { StatusBarAlignment, window, StatusBarItem } from "vscode";
import { getShowStatusBar } from "./configuration";
import { Commands, currentTheme, sbarThemeText } from "./models";

const _statusBarItem: StatusBarItem = window.createStatusBarItem(
  StatusBarAlignment.Right,
  9800
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
  sbar.text = `${sbarThemeText} `;
  sbar.command = Commands.showStatusBar;
  sbar.tooltip = "Themeanager Extension";
  if (show && !!currentTheme) {
    sbar.show();
  } else {
    clearStatusBar();
  }
}
