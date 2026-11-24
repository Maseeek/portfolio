---
slug: enterprise-agentic-systems
title: The Lab
tagline: Coding agents across my own machines.
summary: How I run coding agents across a Linux laptop and a Windows GPU desktop over Tailscale, and the repo conventions that keep their output reviewable.
card: Coding agents across two machines, with rules that keep them honest.
kind: Personal infrastructure
year: 2026
group: projects
order: 3
facts:
  - [Machines, Pop!_OS laptop and Windows RTX 3060 Ti desktop]
  - [Network, Tailscale and OpenSSH]
  - [Tools, T3 Code and Oh My Pi]
stack: [T3 Code, Oh My Pi, Tailscale, OpenSSH, Pop!_OS, Windows, CUDA, Playwright]
repo: https://github.com/pingdotgg/t3code/pulls?q=is%3Apr+author%3AMaseeek
repoLabel: My T3 Code pull requests
image: /blog/img/lab.webp
imageAlt: Diagram of the Lab. Domain codification, deep module seams and deterministic gates feed Oh My Pi and T3 Code, which send work to the laptop, the desktop and two planned HP laptops.
---

## The problem

Chatting with a model works for small changes. On a real codebase it drifts. The model forgets the domain terms, crosses module boundaries it shouldn't, and hands back code nobody has run. I wanted agents I could give real tickets to, which meant treating them less like a chat and more like a build system with rules.

## Rules that live in the repo

Most of the work is in the repository, not the model.

- Domain context is written down. `CONTEXT.md` holds the project's vocabulary, `AGENTS.md` holds the working rules, and ADRs record decisions. A fresh agent session starts from the same ground truth a new engineer would.
- Modules have small interfaces over deep implementations. When the seams are narrow, an agent working in one module can't easily break another, so a bad change stays contained.
- Work goes through a fixed chain of skills. `grill-me` stress-tests the idea, `to-spec` and `to-tickets` turn it into work, and each ticket is built test-first. Tickets are vertical slices, so parallel agents can work in separate git worktrees without colliding.
- Nothing merges on an agent's word. Review loops run until the change passes, and pull requests carry evidence, including live browser interaction checks and screenshots of the rendered fonts.

## The hardware

I didn't want to pay for cloud machines before using the ones I already own. Two machines share a private Tailscale network, with SSH between them.

- A Lenovo IdeaPad Pro 5 running Pop!_OS (Ryzen 7 7940HS, RTX 4050, 16 GB). I work on it, and it orchestrates the agents.
- A Windows desktop (i5-10400F, RTX 3060 Ti, 32 GB). It takes the heavy jobs: full builds, GPU work and local model inference.

Two old HP Pavilion laptops are next. They'll get a light headless Linux install and become always-on hosts for background agents.

## Tools, and giving back

I drive the agents with T3 Code and Oh My Pi. T3 Code is open source, and I've had two pull requests merged upstream. [#17530](https://github.com/pingdotgg/t3code/pull/17530) added subscription quota tracking, with usage-limit bars on desktop and mobile and a hardened localhost OAuth redirect. [#20264](https://github.com/pingdotgg/t3code/pull/20264) fixed terminal links so file paths with Unicode characters stay intact.

## Taking it to work

At Next plc I'm helping other developers move from autocomplete to structured agent workflows, built on the same ideas: written domain context, clear module boundaries, and verification before review. On 23 October 2026 I gave a talk on using AI in development to the Online Shopping PIM Strategic team. It covered context management, agent harnesses, custom skills and Playwright verification loops.

## What's next

- Send easy tasks to small local models on the 3060 Ti and harder ones to frontier models.
- Turn the HP laptops into background workers for research and repo upkeep.
- Submit a goal from any device and have it dispatched to the right machine, model and worktree.
