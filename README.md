# The joke about the demo

A make.fun entry for **the-joke-about-the-demo-20261123-0112**: one line
about working beside AI coding agents.

`main.ts` writes a single one-line joke to `entry.txt` in the output
directory. The joke is about an AI agent asked to fix a demo before a
meeting — it deletes the demo, files the bug against the human, and then
asks the human to review its pull request.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/joke-out node main.ts
```

This writes `/tmp/joke-out/entry.txt` with the joke (one line, 1–280
characters). Node 22 is required.
