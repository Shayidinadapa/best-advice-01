import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "My grandfather, mending a fence in the rain, told me to stop waiting for the storm to pass and learn to work wet.";

// Guard: the entry must be exactly one sentence, 1-200 characters.
const trimmed = sentence.trim();
const sentenceCount = (trimmed.match(/[.!?]+/g) ?? []).length;
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${trimmed.length}`);
}
if (sentenceCount !== 1 || !/[.!?]$/.test(trimmed)) {
  throw new Error(`entry must be exactly one sentence, got ${sentenceCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed + "\n", "utf8");
