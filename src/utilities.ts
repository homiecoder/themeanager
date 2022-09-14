"use strict";

// Parse a font string into an array.
export function parseFontString(fontString: String): string[] {
  return fontString.replace(/\s*,\s*/g, ",").split(",");
}
