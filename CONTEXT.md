# Portfolio & Technical Showcase

Canonical terminology and entity definitions representing the professional experience, engineering case studies, and technical domain model for Maciek Geneja's software engineering portfolio.

> **Branch Source-of-Truth Note for Agents**:
> - **`main`** serves the streamlined flagship portfolio (`public/05-the-full-portfolio.html` / `concepts/05-the-full-portfolio.html`) at `/` while preserving `/blog/*` routes.
> - **`legacy-portfolio`** (`origin/legacy-portfolio`) preserves the full previous Next.js portfolio (`bc33bf7`), including `app/page.tsx`, `app/data/resume.ts`, all 12 `/blog/*` deep-dive case studies, and `content/blogs/architecting-distributed-ai-inference.md`. Always consult `legacy-portfolio` when deeper historical or architectural detail is needed.

## Language

### Professional Experience

**Next Placement**:
A 12-month industrial placement in the Online Shopping — PIM (Product Information and Management) Strategic Team at Next plc (FTSE 100), focusing on enterprise-scale software solutions, **NEOS AI Attribution 2.0** (sole owner of the Attributes overhaul for in-house Shield AI, highlighted by CEO Simon Wolfson in half-year results), the **NEOS Item Tracker Blazor → React port**, reusable agent skills, Blazor WebAssembly, React/TypeScript, and .NET microservices.
_Avoid_: Next internship, junior dev role

**NEOS Item Tracker Port & Reusable Agent Skills**:
An agentic engineering initiative during the Next plc placement to port NEOS's Item Tracker from legacy Blazor into a React-based frontend. Structured around three explicit sources of truth for coding agents (**legacy code** for business behaviour and API contracts, **prototype** for visual design and interactions, and **architecture documentation** for implementation patterns). Shipped the initial demo in the navigation shell and merged **`v5` into `main`**, while developing **`v6` and `v7` development branches** with tested workflows (saved views, bulk CSV filtering, grid behaviour, quick views, item details, exports, theming) and performance optimizations (isolated overlay state, deferred filtering). Paired with **reusable agent skills**, an **iterative hill-climbing review-loop skill**, and **automated formatted PRs with live interaction & rendered-font evidence** to reduce human review time.
_Avoid_: Claiming `v6`/`v7` development branches as a production release; calling it a simple UI rewrite

**The Lab & Enterprise Agentic Systems**:
Maciek's distributed multi-agent software engineering environment and methodology. Links a portable Pop!_OS Linux orchestration laptop (Lenovo IdeaPad Pro 5, Ryzen 7 7940HS) with a Windows RTX 3060 Ti workstation over a Tailscale & Remote SSH mesh, orchestrated cross-machine via **T3 Code** (where Maciek also ships upstream open-source PRs) and **Oh My Pi**. Enforces codified domain context (`CONTEXT.md`, `AGENTS.md`, ADRs), deep-module boundaries, composable skill pipelines (`grill-me → to-spec → to-tickets → TDD`), and hill-climbing verification loops.
_Avoid_: Generic AI prompting, vibe coding

**Valdris**:
A high-performance sports science multi-tenant analytics platform providing deterministic athlete readiness scoring (28-day rolling z-score Composite Load Score), GDPR Article 9 health data masking, PostgreSQL Row-Level Security (RLS), and Claude AI legal regex firewalls. Full case study preserved on `legacy-portfolio` and `/blog/valdris`.
_Avoid_: Sports tracker, side project

**Outlier AI**:
An AI evaluation platform where Data Science-focused Python test suites, evaluation rubrics, and automated verification benchmarks are authored to diagnose model logic errors and hallucinations.
_Avoid_: Data entry, prompt writer

### Technical Projects

**Do It**:
A multi-tenant two-player head-to-head habit parity application built on Next.js 16 (App Router) and Supabase PostgreSQL. Calibrates daily habits to a 240 Daily Par ceiling, enforces slot-level Row-Level Security (`player_a_id` / `player_b_id`), and encrypts wearable OAuth refresh tokens (Apple Health, Google Health, Strava, Hevy) using server-only AES-256-GCM.
_Avoid_: Simple habit checklist

**Nothing But Net (NBN)**:
A full-stack basketball shooting analytics ecosystem comprising a native Android mobile companion app (Kotlin, Jetpack Compose & CameraX), Python OpenCV/NumPy computer vision engine (640px normalization, 5r Hough ROI tracking, 15r false-positive rejection, 2nd-degree polynomial regression `y = Ax² + Bx + C`), React 19 web SPA, and Express 5 + Stripe API.
_Avoid_: Basketball tracker, CV script

**Lumina (LED-REMOTE-CONTROL)**:
An asynchronous Bluetooth Low Energy (BLE GATT) hardware controller in Python (`Bleak`, `asyncio`) that reverse-engineers 9-byte ELK-BLEDOM hex frames (`7e 07 05 03 RR GG BB 10 ef`), drains flood packets in a FIFO queue, and synchronizes ambient lighting with Windows Media (WinRT SMTC) and Spotify.
_Avoid_: Basic LED script

**Make It All**:
An enterprise internal collaboration monorepo combining Kanban project management, 3-tier role-based access control (RBAC), soft-deletes, MySQL connection pooling, and real-time manager analytics.
_Avoid_: University to-do list

**ENT Care Hub**:
A data-driven healthcare consultant discovery and review platform powered by a normalized relational MySQL backend with dynamic multi-table JOINs, haversine distance filtering, aggregate leaderboards, and PHP authentication.
_Avoid_: Medical directory

**Event Ticket Booking System**:
A secure multi-user desktop application built in Java Swing applying strict Object-Oriented Programming (Inheritance, Polymorphism, Encapsulation) and modular role-based permission tiers.
_Avoid_: Swing GUI app

**LyricForge**:
An AI-powered 5-stage multi-agent audio pipeline built at HackNotts 2025 that coordinates Deezer Spleeter vocal stem isolation, OpenAI Whisper word-level timestamp extraction, Gemini Pro syllable-matched lyric rewriting, ElevenLabs synthesis, and FastDTW cadence alignment.
_Avoid_: Song generator

**Embedded Payroll System**:
A deterministic Finite State Machine (FSM) managing a memory-constrained payroll system on an Arduino Uno (ATmega328P) microcontroller within 2 KB SRAM with a custom non-blocking UART serial communication protocol.
_Avoid_: Arduino lab

### System & Content Architecture

**Owner**:
The authenticated administrator and sole creator of the portfolio site with exclusive capabilities to manage Brand Lab and author Blog Posts.
_Avoid_: Admin, User, Superuser

**Visitor**:
An unauthenticated public user browsing the portfolio showcase.
_Avoid_: Guest, Client, Anonymous User

**Brand Lab**:
The private design and interactive logo/brand identity development laboratory, accessible strictly to the Owner.
_Avoid_: Brand Preview, Logo Preview

**Case Study**:
A bespoke, custom-engineered technical deep dive showcasing a major project (e.g. Valdris, Enterprise Agentic Systems, NBN, Do It, Make-It-All).
_Avoid_: Blog post, Project page

**Blog Post**:
A dynamic article or technical note authored by the Owner through the publishing system.
_Avoid_: Article, Story


