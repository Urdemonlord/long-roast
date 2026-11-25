import * as fs from "node:fs";
import * as path from "node:path";

// The Long Roast: one line roasting the AI agent this entry runs on.
const roast =
  "My agent fixed the reviewer's 25 findings, and the reviewer found 11 new ones hiding in the fix.";

// Self-check against the competition gate before writing: the entry must
// be one non-empty line of 1-200 code points. Fail loudly instead of
// writing an invalid entry.
function validateRoast(text: string): number {
  const codePoints = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("roast must not be empty or whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  if (codePoints < 1 || codePoints > 200) {
    throw new Error(`roast must be 1-200 code points, got ${codePoints}`);
  }
  return codePoints;
}

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
}

function main(): void {
  validateRoast(roast);
  writeEntry(roast);
}

main();
