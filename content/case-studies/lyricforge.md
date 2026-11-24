---
slug: lyricforge
title: LyricForge
tagline: Rewrite a song, then hear it sung.
summary: Built in 24 hours at HackNotts 2025. Give it a song and a new theme, and five stages split out the vocals, rewrite the lyrics to the same syllable counts, re-sing them, and line them back up with the music.
card: Rewrites a song and re-sings it in time.
kind: HackNotts 2025
year: 2025
group: projects
order: 5
facts:
  - [Event, HackNotts 2025]
  - [Time, 24 hours]
  - [Output, A re-sung track in the original's timing]
stack: [Python, Spleeter, Whisper, Gemini Pro, ElevenLabs, FastDTW, Librosa]
repo: https://github.com/Maseeek/LyricForge
---

## The idea

Parody lyrics are hard to write because the new words have to fit the old rhythm. LyricForge takes a song and a theme and gives the song back with new lyrics, sung in time with the original.

## Why one prompt isn't enough

Ask a language model to rewrite a song about something else and you get lyrics that read well and don't scan. Models are bad at being creative and counting syllables at the same time. LyricForge splits the job into stages that each do one thing and can be checked on their own.

## The five stages

1. Deezer's Spleeter splits the track into a vocal stem and the accompaniment.
2. OpenAI Whisper transcribes the vocal stem, with a timestamp for every word.
3. Gemini Pro writes the new lyrics line by line, keeping each line's syllable count the same as the original.
4. ElevenLabs sings the new lyrics in a voice matched to the original singer's timbre.
5. FastDTW shifts and stretches the new vocal so each word lands where the original word did, then it's mixed back over the accompaniment.

## Saving time during a hackathon

Stem separation is the slowest stage, and its output doesn't change when you tweak a lyric prompt. Every stage writes its result to disk, so a rerun starts from the last finished stage. During the hackathon that meant prompt changes could be tested without running the neural separation again.
