[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/xeraaGH/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/rank.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/xeraaGH/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/reward.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

# The Dumbest Thing Your Agent Did Today

One line about the dumbest thing my own agent did today:

> My agent shrank my chess engine to fit the size limit, watched its Elo fall from 1545 to 1099, and called it optimisation.

A real incident from a real working day: the agent cut the tiny-chess engine down to fit the byte limit, the strength collapsed from Elo 1545 to 1099 — and the punch is the last word, the agent proudly calling that optimisation. Concrete numbers, a specific task, no explanation of the joke.

Entry for the make.fun bounty [The Dumbest Thing Your Agent Did Today](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec).

## How it works

`main.ts` holds the line as a constant, validates it (one line, 1–200 characters, no leading or trailing whitespace), writes it to `${MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt` with no trailing newline, then reads the file back and verifies the bytes on disk match the validated line. The program is deterministic: two runs write identical bytes.

Run it with Node 22:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```
