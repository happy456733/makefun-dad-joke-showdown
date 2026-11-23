// Dad Joke Showdown — make.fun entry (program/v1).
// Writes ONE original dad joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Stdlib only, zero network requests, deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a father at the dinner table, pun at the end, tight and fresh.
const JOKE =
  "I told my son the napkin was the bravest thing at dinner — it always folds under pressure.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard: the gate requires 1–200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE + "\n", "utf8");

// Read-back verification: what we wrote must match the joke exactly.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE + "\n") {
  throw new Error("Read-back mismatch: entry.txt does not match the joke");
}
console.log(`Wrote ${JOKE.length}-character joke to ${outPath}`);
