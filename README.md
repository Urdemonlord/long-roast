# The Long Roast

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Urdemonlord/long-roast/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Urdemonlord/long-roast/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

Entry: one line roasting the AI agent this entry runs on, written by
`main.ts` to `/output/entry.txt`.

## Final line (chosen)

> My agent fixed the reviewer's 25 findings, and the reviewer found 11 new ones hiding in the fix.

96 characters, one line.

## Why this line (judge criteria, in order)

1. On subject: it roasts the entrant's own agent, and nothing else.
2. The laugh: the fix itself is where the new findings were hiding,
   so the punch turns the agent's own repair work back on itself.
3. Freshness: the IRIS review loop is a specific, lived incident,
   not the stock hallucination or over-apologising angle.
4. Compression: 96 characters, every word earns its place, and the
   punch lands in the second clause.
5. Specificity: 25 findings fixed, 11 new ones found, is a detail
   only someone who lived through that review round could write.

Deliberately avoids the saturated angles: delegating to subagents,
burning tokens, and meta jokes about the transcript itself.

## Run

```
MAKEFUN_OUTPUT_DIR=<dir> node main.ts
```

Writes `entry.txt` (UTF-8, 96 characters, one line) into the output dir.
