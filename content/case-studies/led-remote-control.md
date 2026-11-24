---
slug: led-remote-control
title: Lumina
tagline: LED strips that follow the music.
summary: A Python controller for a cheap Bluetooth LED strip. I reverse-engineered the strip's command format, then tied colour changes to what Spotify and Windows are playing.
card: Bluetooth LED strip synced to Spotify.
kind: Personal project
year: 2026
group: projects
order: 4
facts:
  - [Role, Solo build]
  - [Hardware, ELK-BLEDOM Bluetooth LE controller]
  - [Runs on, Windows, as a local Flask app]
stack: [Python, Bleak, asyncio, WinRT SMTC, Flask, SQLite, Web Audio API]
repo: https://github.com/Maseeek/LED-REMOTE-CONTROL
---

## Why

My room lights came with an infrared remote and a closed phone app. I wanted them to change with the music without me touching anything. The repo still has the project's first name, LED-REMOTE-CONTROL.

## Talking to the strip

The controller is a common ELK-BLEDOM board with no official documentation, so I reverse-engineered its command format. Setting a colour is one 9-byte write:

```text
7e 07 05 03 RR GG BB 10 ef
```

`RR GG BB` is the colour, and the other bytes never change. Every write goes to the GATT characteristic `0000fff3-0000-1000-8000-00805f9b34fb`.

## A queue that drops stale colours

Dragging a colour slider fires dozens of updates a second, and the strip can't keep up. Send every one and the lights lag seconds behind the slider.

The fix is an asyncio worker with a FIFO queue that drains itself. Before each write, the worker discards any colours still waiting and sends only the newest. The lights follow the slider instead of replaying its history.

If the Bluetooth link drops, the worker reconnects with exponential backoff. None of this runs on the web server's thread, so the dashboard stays responsive while the strip reconnects.

## Syncing with playback

The backend reads Windows' media controls (WinRT SMTC) to see what's playing and when it starts. Each mood on the dashboard is a Spotify URI and a colour, saved in SQLite. When you pick one, the lights wait until the track actually starts, so they don't change during the silence before the music.

Sometimes Spotify ignores a request to start playing. As a fallback, the app screenshots the screen with `mss`, finds Spotify's green play button, and clicks it with `pyautogui`.

## Where it's going

I'd like this to grow into a home assistant that takes voice commands and controls more than lights. The next steps are voice input, a language model to work out what I asked for, and support for more smart-home protocols.
