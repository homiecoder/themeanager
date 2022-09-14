export interface ICommand {
  title: string;
  command: string;
  category: string;
}

export interface IConfiguration {
  type: string;
  title: string;
  properties: any;
}

export interface IThemeanagerSettings {
  showStatusBar: boolean;
  showWindowTitle: boolean;
  showCurrentThemeAndFontAtStartup: boolean;
}
