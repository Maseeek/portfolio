---
slug: nothing-but-net
title: Nothing But Net
tagline: Computer vision on the court.
summary: A basketball shot tracker. You upload a clip, a Python OpenCV worker follows the ball, and the web app shows the arc, the release angle and whether the shot went in.
card: Upload a shot clip and get the arc, release angle and result.
kind: Personal project
year: 2025
group: products
order: 1
facts:
  - [Role, Solo build]
  - [Clients, Web app and Android companion]
  - [Status, Live on Vercel]
stack: [React 19, Three.js, Express 5, MongoDB, Stripe, Python, OpenCV, NumPy, Kotlin, CameraX]
live: https://nbnc.vercel.app
repo: https://github.com/Maseeek/nothing-but-net
image: /blog/img/nbn.webp
imageAlt: The Nothing But Net landing page next to the OpenCV trajectory view of a shot
---

## Why I built it

I play basketball, and I wanted numbers on my own shooting without buying a sensor kit. A phone camera and some geometry should be enough to say where the ball went. Nothing But Net started as a single Python script ([the prototype](/blog/python-basketball-analysis)) and grew into a web app, an API and an Android app.

## How it fits together

There are four parts, and only one of them does heavy work.

- The web app is React 19 with Three.js. Uploads, shot review and the analytics dashboard live here.
- The API gateway is Express 5 on MongoDB. It handles accounts with JWTs, sessions, and Stripe billing for the Free, Guest and Pro tiers.
- The vision worker is Python with OpenCV and NumPy. It takes a clip and returns the ball's path, the release angle and a make or miss.
- The Android companion is Kotlin with CameraX, for recording on court.

Video analysis is slow, so it runs in the worker and never blocks the API. The phone and the browser talk to the same gateway, so a shot recorded on court shows up on the web dashboard.

## Finding the ball

Every clip is scaled to 640px wide first, so the same thresholds work for footage from any phone. Then you click the two edges of the rim. A regulation ball's radius is about 0.264 of the rim's width, so that one measurement gives the worker the ball's expected size in pixels (`r_est = 0.264 × d_hoop`).

Detection uses an HSV colour mask and an adaptive Hough circle transform. Searching the whole frame is slow and picks up anything orange, so after the first hit the worker only searches a window five radii around the last known position. Bounding the search this way cut per-frame evaluation time by over 65%.

If a detection jumps more than 300px between frames (a clamp of 15 radii), the worker throws it out. A real shot can't move that far in one frame, so a jump like that is almost always a false match on the background.

## Fitting the arc

With the ball's centre in each frame, the worker fits a second-degree polynomial, `y = Ax² + Bx + C`. A thrown ball follows a parabola, so the fit also covers frames where detection failed. The slope at the release point gives the release angle, and where the curve meets the rim decides make or miss.

![The worker's debug view of a shot, with the detected ball, the fitted arc and the tracking panel](/blog/img/nbn-hud.webp "The worker's debug view on a real shot. It draws the fitted arc and reports a 42.6° release angle.")

## The Android app

The realistic setup is a phone on a tripod by the court, so I built a Kotlin companion with CameraX. It records on court and uploads in the background, so you can keep shooting while earlier clips are processed. Results land in the same account as the web app.

## What I'd change

Colour masks are fragile. Outdoor light changes during a session, and orange shirts can pass the mask. The search window and the jump filter catch most of it, but a small trained detector would cope with lighting better than hand-tuned HSV ranges.
