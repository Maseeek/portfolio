---
slug: do-it
title: Do It
tagline: Two players, one fair daily score.
summary: A habit app for two people. You both log your day across ten habit areas, everything converts to the same 240-point daily par, and the app keeps score head to head.
card: A 1v1 habit competition with a fair daily score.
kind: Personal project
year: 2026
group: products
order: 2
facts:
  - [Role, Solo build]
  - [Data, Supabase PostgreSQL with row-level security]
  - [Status, Live on Vercel]
stack: [Next.js 16, TypeScript, Supabase, PostgreSQL RLS, AES-256-GCM, Tailwind CSS v4, Vitest]
live: https://do-it-plum-seven.vercel.app/welcome
repo: https://github.com/Maseeek/do-it
image: /blog/img/doit.webp
imageAlt: Do It on mobile in dark mode, showing the daily ritual, the head-to-head duel and the 12-week consistency graph
---

## The idea

Habit trackers are easy to cheat because you only answer to yourself. Do It pairs you with one other person. You both log your day, and the app keeps score.

That only works if the score is fair. A 5 km run, an hour in the gym and 45 minutes of cardio need to be worth comparable amounts, or whoever picks the easiest habit wins.

## A fair daily score

Do It covers ten habit areas. Each logged activity converts into points against a fixed daily par of 240. Reaching par means a full day, whatever mix of habits got you there. Par is also the ceiling, so piling on one easy habit can't buy a win.

## Keeping each duel private

Every duel belongs to exactly two people. Instead of checking that in application code on every route, the rule lives in PostgreSQL as a row-level security policy:

```sql
-- Only the two players in a duel can read or change its rows
using (auth.uid() = player_a or auth.uid() = player_b)
```

The database filters rows before the app sees them. A missing check in an API route can't leak another pair's data, because the rows never come back.

## Wearable data and token storage

Do It can pull activity from Apple Health, Health Connect, Strava and Hevy. Those integrations need long-lived OAuth refresh tokens, which are worth protecting.

Tokens are never stored in plain text. Each one is encrypted with AES-256-GCM using a server-side key and a fresh IV, and only the server's `service_role` can read the vault. GCM's authentication tag also means a tampered token fails to decrypt instead of quietly decoding to garbage.

Sync workers poll each provider on a schedule and convert their units (kJ, kcal, metres, RPE) into one format before scoring.

## Built for bad gym signal

People log workouts in basements with no signal. Do It updates the screen straight away, keeps the write in an IndexedDB queue, and retries with backoff until the server accepts it.

The 12-week consistency heatmap and the head-to-head meter read from the same data, so both players always see who's ahead this week.
