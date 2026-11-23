// Dad Joke Showdown — make.fun entry (program/v1).
// Writes ONE original dad joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Stdlib only, zero network requests, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a father at the dinner table, pun at the end, tight and fresh.
const JOKE =
  "I told my son the napkin was the bravest thing at dinner — it always folds under pressure.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
