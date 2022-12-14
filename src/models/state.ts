// this is really working for me...
import { ExtensionContext } from "vscode";
import { getExtension } from "./";

export class State {
  private static _extContext: ExtensionContext;

  public static get extensionContext(): ExtensionContext {
    return this._extContext;
  }

  public static set extensionContext(ec: ExtensionContext) {
    this._extContext = ec;
  }
}

export function getExtensionVersion() {
  const extension = getExtension();
  const version: string = extension ? extension.packageJSON.version : "";
  return version;
}
