---
slug: python-basketball-analysis
title: Python Basketball Analysis
tagline: Where Nothing But Net started.
summary: My first shot tracker. A Python script that follows a basketball through a video with OpenCV, fits its arc, and predicts make or miss before the ball reaches the hoop.
card: The script that became Nothing But Net.
kind: Personal project
group: coursework
order: 10
facts:
  - [Role, Solo build]
  - [Approach, Classical computer vision]
  - [Led to, Nothing But Net]
stack: [Python, OpenCV, NumPy]
image: /blog/img/basketball.webp
imageAlt: The script's analysis window. A shot in a back garden, with the ball's path traced toward the hoop and a tracking panel on the right.
---

## Where it started

I wanted to point my programming at something I care about, and that's basketball. Before there was a web app, there was this script.

## How it works

OpenCV reads the video frame by frame and isolates the ball with a colour mask. Each detected position goes into a list, and NumPy fits a polynomial through them. A shot follows a parabola, so the fitted curve gives the release angle. Extending the curve forward predicts whether the ball will reach the hoop before it gets there.

## What it taught me

The maths worked. The vision was less reliable. Colour masking depends on lighting, and outdoors the light keeps changing, so thresholds tuned in one session often failed in the next.

Those failures shaped [Nothing But Net](/blog/nothing-but-net). It calibrates the ball's size from the rim, only searches near the ball's last position, and rejects detections that jump too far to be real.
