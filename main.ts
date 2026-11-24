// One Word From Your Ex — the single word my ex would use to describe me.
// It stings because it is true: I was almost the one, almost ready, almost
// there. One word, no explanation, no defence.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Almost";

// The entry is exactly this one word and nothing else: no trailing newline,
// no extra line, no explanation. The judge reads the file as submitted.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD);
