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
// TODO: Add an enum for length of the display in statusbar and window title
// TODO: need to add this enum for notification settings
// export enum NotificationTypes {
//   themeOnlyNotification = "themeOnlyNotification",
// }

export enum StandardSettings {
  ShowStatusBar = "showStatusBar",
  ShowCurrentThemeAndFontAtStartup = "showCurrentThemeAndFontAtStartup",
  ShowThemeAndFontNotificationAtInterval = "showThemeAndFontNotificationAtInterval",
}

export type AllSettings = StandardSettings | IntervalSettings;

export enum Sections {}
