// Funniest Time Machine Warning Label — entry for make.fun
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// Writes one warning label (1-120 chars) for a time machine to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The label: a straight-faced safety notice about the grandfather paradox.
// The joke turns a real time-travel hazard into bureaucracy — the victim
// has a lawyer, and the punch lands on the last words: you do not exist yet.
const LINE =
  "WARNING: Do not kill your grandfather. He has an excellent lawyer, and you have not been born yet.";

// The lawyer line is the whole gag: the paradox gets paperwork, not a lecture.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${out}/entry.txt`);
