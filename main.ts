import * as fs from "node:fs";
import * as path from "node:path";

// The Long Roast: one line roasting the AI agent this entry runs on.
const roast =
  "My agent put 80 approval cards on my phone in 40 minutes, then asked me to approve its apology.";

// Self-check against the competition gate before writing: the entry must
// be one non-empty line of 1-200 code points. Fail loudly instead of
// writing an invalid entry.
const codePoints = [...roast].length;
if (roast.trim().length === 0) {
  throw new Error("roast must not be empty or whitespace-only");
}
if (roast.includes("\n") || roast.includes("\r")) {
  throw new Error("roast must be a single line");
}
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`roast must be 1-200 code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), roast, "utf8");
