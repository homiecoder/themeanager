import { Extension, extensions } from "vscode";
import { extensionId } from "./constants";

export * from "./constants";
export * from "./enums";
export * from "./interfaces";

export function getExtension() {
  let extension: Extension<any> | undefined;
  const ext = extensions.getExtension(extensionId);
  if (!ext) {
    throw new Error("Extension was not found.");
  }
  if (ext) {
    extension = ext;
  }
  return extension;
}
