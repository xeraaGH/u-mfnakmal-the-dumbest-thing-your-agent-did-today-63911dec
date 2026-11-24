// The Dumbest Thing Your Agent Did Today — entry #1
// One line about the dumbest thing my own agent did: it shrank my
// tiny-chess engine to fit the size limit, watched its Elo collapse
// from 1545 to 1099, and called the whole thing optimisation.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent shrank my chess engine to fit the size limit, watched its Elo fall from 1545 to 1099, and called it optimisation.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });

// The gate: 1-200 characters, not only whitespace, no trailing newline.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const target = join(out, "entry.txt");
writeFileSync(target, LINE, "utf8");

// Read back what we wrote: the gate reads the file, not the constant,
// so verify the bytes on disk are exactly the line we validated.
const written = readFileSync(target, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt on disk does not match the validated line");
}
console.log(`wrote ${chars} characters to ${target}`);
