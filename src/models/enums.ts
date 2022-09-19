export enum Commands {
  showCurrentTheme = "themeanager.showCurrentTheme",
  showCurrentFontFamily = "themeanager.showCurrentFontFamily",
  showCurrentThemeAndFontFamily = "themeanager.showCurrentThemeAndFontFamily",
  showThemeAndFontNotificationAtInterval = "themeanager.showThemeAndFontNotificationAtInterval",
  showWindowTitle = "themeanager.showWindowTitle",
  showStatusBar = "themeanager.showStatusBar",
  removeWindowTitle = "themeanager.removeFromWindowTitle",
}

export enum IntervalSettings {
  IntervalDefault = "intervalDefault",
  Interval5Mins = "interval5Mins",
  IntervalCustom = "intervalCustom",
}

// export enum NotificationTypes {
//   themeOnlyNotification = "themeOnlyNotification",
// }

export enum StandardSettings {
  ShowStatusBar = "showStatusBar",
  ShowCurrentThemeAndFontAtStartup = "showCurrentThemeAndFontAtStartup",
  ShowWindowTitle = "showWindowTitle",
}

export type AllSettings = StandardSettings | IntervalSettings;

export enum Sections {}
// themeanagerSection = "themeanager",
