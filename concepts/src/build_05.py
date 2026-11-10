#!/usr/bin/env python3
import base64
import io
import json
import re
from pathlib import Path
from PIL import Image

SCRATCH = Path("/home/maciek/.t3/userdata/providers/antigravity/ac0a3dfd6dddb20962cecff6ee5fe65e19d3923be20e52c5ab52ff877f7e4c32/antigravity-acp/brain/96b5f41e-89d2-4a9f-b8d7-300f15d99856/scratch")
ARTIFACTS = Path("/home/maciek/.t3/userdata/browser-artifacts")
CONCEPTS = Path("/home/maciek/Documents/portfolio/concepts")
PUBLIC_IMGS = Path("/home/maciek/Documents/portfolio/public/images")

def img_to_data_url(path: Path, max_w: int = 1040, quality: int = 84) -> str:
    with Image.open(path) as im:
        im = im.convert("RGB")
        if im.width > max_w:
            h = int(im.height * (max_w / im.width))
            im = im.resize((max_w, h), Image.Resampling.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format="WEBP", quality=quality, method=6)
        b64 = base64.b64encode(buf.getvalue()).decode("ascii")
        return f"data:image/webp;base64,{b64}"

def jpg_to_data_url(path: Path) -> str:
    b64 = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:image/jpeg;base64,{b64}"

# Extract existing base64 photos & waveform from 04b-person-and-product.html
html_04b = (CONCEPTS / "04b-person-and-product.html").read_text(encoding="utf-8")
srcset_m = re.search(r'<source media="\(max-width:580px\)" srcset="([^"]+)">\s*<img src="([^"]+)" alt="Maciek Geneja"', html_04b)
photo_sm = srcset_m.group(1)
photo_lg = srcset_m.group(2)

about_m = re.search(r'<figure class="about-photo"><img src="([^"]+)"', html_04b)
photo_about = about_m.group(1)

wave_m = re.search(r'<div class="waveform" aria-hidden="true">(.*?)</div>', html_04b)
waveform = wave_m.group(1)

# Nothing But Net screenshots (Dark + Light for Dashboard, OpenCV HUD, Upload Home)
nbn_dash_dark = img_to_data_url(SCRATCH / "nbn-upload-v2.png", max_w=1280, quality=88)
nbn_hud_dark = img_to_data_url(SCRATCH / "nbn-hud-dark.png", max_w=1040, quality=84)
nbn_hud_light = img_to_data_url(SCRATCH / "nbn-hud-light.png", max_w=1040, quality=84)
nbn_home_dark = img_to_data_url(SCRATCH / "nbn-landing-v2.png", max_w=1280, quality=88)
nbn_home_mob_dark = img_to_data_url(SCRATCH / "nbn-home-mob-dark.png", max_w=640, quality=85)
nbn_dash_url = nbn_home_dark
nbn_hud_url = nbn_hud_dark

# Do It signed-in screenshots (Dark + Light for Duel, Today, Progress — Desktop & Mobile)
doit_duel_dark = img_to_data_url(SCRATCH / "doit-duel-dark.png", max_w=1040, quality=85)
doit_duel_light = img_to_data_url(SCRATCH / "doit-duel-light.png", max_w=1040, quality=85)
doit_duel_mob_dark = img_to_data_url(SCRATCH / "doit-duel-mob-dark.png", max_w=640, quality=85)
doit_duel_mob_light = img_to_data_url(SCRATCH / "doit-duel-mob-light.png", max_w=640, quality=85)

doit_today_dark = img_to_data_url(SCRATCH / "doit-dark.png", max_w=1040, quality=84)
doit_today_light = img_to_data_url(SCRATCH / "doit-light.png", max_w=1040, quality=84)
doit_today_mob_dark = img_to_data_url(SCRATCH / "doit-today-mob-dark.png", max_w=640, quality=85)
doit_today_mob_light = img_to_data_url(SCRATCH / "doit-today-mob-light.png", max_w=640, quality=85)

doit_prog_dark = img_to_data_url(SCRATCH / "doit-progress-dark.png", max_w=1040, quality=85)
doit_prog_light = img_to_data_url(SCRATCH / "doit-progress-light.png", max_w=1040, quality=85)
doit_prog_mob_dark = img_to_data_url(SCRATCH / "doit-progress-mob-dark.png", max_w=640, quality=85)
doit_prog_mob_light = img_to_data_url(SCRATCH / "doit-progress-mob-light.png", max_w=640, quality=85)

# Other project screenshots
neos_talk_url = img_to_data_url(ARTIFACTS / "browser-screenshot-ai-development-presentation-545a1d7-verc-mw3v9ajg-1ea1db8c.png", max_w=1040, quality=85)
towers_url = img_to_data_url(ARTIFACTS / "browser-screenshot-towers-hall-vercel-app-mw3v9mia-f3eeb2cd.png", max_w=1024, quality=82)
lyric_img = img_to_data_url(PUBLIC_IMGS / "lyricforge.png", max_w=960, quality=82)
make_img = img_to_data_url(PUBLIC_IMGS / "make-it-all.png", max_w=960, quality=82)

# Existing project thumbnails from scratch
lab_thumb = jpg_to_data_url(SCRATCH / "thumb-agentic-systems.jpg")
payroll_thumb = jpg_to_data_url(SCRATCH / "thumb-embedded-payroll.jpg")
tickets_thumb = jpg_to_data_url(SCRATCH / "thumb-event-ticket-booking.jpg")

gallery = {
    "nbn": {
        "dash": {"dark": nbn_dash_dark, "light": nbn_dash_dark},
        "hud": {"dark": nbn_hud_dark, "light": nbn_hud_light},
        "home": {"dark": nbn_home_dark, "light": nbn_home_dark, "mob_dark": nbn_home_mob_dark, "mob_light": nbn_home_mob_dark}
    },
    "doit": {
        "duel": {"dark": doit_duel_dark, "light": doit_duel_light, "mob_dark": doit_duel_mob_dark, "mob_light": doit_duel_mob_light},
        "today": {"dark": doit_today_dark, "light": doit_today_light, "mob_dark": doit_today_mob_dark, "mob_light": doit_today_mob_light},
        "progress": {"dark": doit_prog_dark, "light": doit_prog_light, "mob_dark": doit_prog_mob_dark, "mob_light": doit_prog_mob_light}
    }
}

projects = {
    "nbn": {
        "name": "Nothing But Net",
        "kind": "Flagship AI & Computer Vision Monorepo · Live on Vercel",
        "description": "End-to-end basketball shot analytics platform. Normalizes footage to 640px width, isolates the basketball via HSV masking and adaptive Hough Circle Transforms inside a dynamic 5r ROI window, rejects 15r false positives, and fits a 2nd-degree polynomial (y = Ax² + Bx + C) to calculate release angles and make/miss outcomes.",
        "stack": "React 19 · Three.js · Python OpenCV & NumPy · Express 5 · MongoDB · Stripe · Kotlin (Jetpack Compose & CameraX)",
        "note": "Switch between the live Dashboard, OpenCV HUD, and Upload UI directly on the slide card.",
        "image": nbn_hud_url,
        "repo": "https://github.com/Maseeek/nothing-but-net",
        "live": "https://nbnc.vercel.app",
        "url": "https://maciekgeneja.me/blog/nothing-but-net"
    },
    "doit": {
        "name": "Do It",
        "kind": "Two-Player Habit Parity & Wearable Telemetry Engine · Live on Vercel",
        "description": "Multi-tenant head-to-head habit competition app built on Next.js 16 (Turbopack) and Supabase PostgreSQL. Calibrates daily habits to a 240 Daily Par ceiling, enforces slot-level Row-Level Security (player_a / player_b), and syncs Apple Health, Google Health, Strava, and Hevy using server-only AES-256-GCM token encryption.",
        "stack": "Next.js 16 (App Router) · TypeScript · Supabase PostgreSQL RLS · AES-256-GCM · Tailwind CSS v4 · Vitest",
        "note": "Real signed-in screenshots across Dashboard (Daily Ritual), 1v1 Duel (260 vs 255), and 12-week Consistency Graph in both Dark and Light mode.",
        "image": doit_today_dark,
        "repo": "https://github.com/Maseeek/do-it",
        "live": "https://do-it-plum-seven.vercel.app/?tab=today",
        "url": "https://github.com/Maseeek/do-it#readme"
    },
    "lyric": {
        "name": "LyricForge",
        "kind": "Multi-Agent Audio & Generative AI Pipeline · HackNotts 2025",
        "description": "Five-agent musical parody pipeline built in 24 hours at HackNotts 2025. Separates vocal stems via Deezer Spleeter, extracts millisecond word timestamps with OpenAI Whisper, rewrites lyrics in Gemini Pro with strict syllable-count parity, synthesizes timbre-matched vocals in ElevenLabs, and time-aligns via FastDTW.",
        "stack": "Python · Deezer Spleeter · OpenAI Whisper · Google Gemini Pro · ElevenLabs · FastDTW · Librosa",
        "note": "Designed with disk-backed state checkpointing so iterating on lyric prompts skips re-running heavy neural stem separation.",
        "image": lyric_img,
        "repo": "https://github.com/Maseeek/LyricForge",
        "live": "",
        "url": "https://maciekgeneja.me/blog/lyric-forge"
    },
    "led": {
        "name": "Lumina (LED-REMOTE-CONTROL)",
        "kind": "Asynchronous BLE GATT Hardware Controller & Media Sync",
        "description": "Reverse-engineered the 9-byte ELK-BLEDOM Bluetooth Low Energy GATT command frame (7e 07 05 03 RR GG BB 10 ef) and built a non-blocking asyncio worker with a flood-draining FIFO queue, exponential-backoff GATT reconnection, and real-time Windows Media (WinRT SMTC) & Spotify playback synchronization.",
        "stack": "Python · Bleak (BLE GATT) · Asyncio · WinRT SMTC · Flask · SQLite · Web Audio API",
        "note": "Drains stale intermediate slider packets before writing to characteristic 0000fff3-0000-1000-8000-00805f9b34fb, eliminating hardware buffer lag.",
        "image": "",
        "repo": "https://github.com/Maseeek/LED-REMOTE-CONTROL",
        "live": "",
        "url": "https://maciekgeneja.me/blog/led-remote-control"
    },
    "make": {
        "name": "Make-It-All",
        "kind": "Enterprise RBAC Collaboration & Analytics Monorepo",
        "description": "Internal productivity and project management system featuring three permission tiers (Managers, Technical Specialists, Project Managers), bcrypt/JWT authentication, real-time Kanban boards, internal knowledge forums, and Chart.js executive workload analytics.",
        "stack": "React · Node.js & Express · MySQL (mysql2 pool) · JWT & bcrypt · Chart.js · Tailwind CSS",
        "note": "Engineered parameterized multi-table SQL joins and connection pooling to keep manager analytics responsive under concurrent load.",
        "image": make_img,
        "repo": "https://github.com/Maseeek/Make-It-All-Team-20",
        "live": "",
        "url": "https://maciekgeneja.me/blog/make-it-all"
    },
    "ent": {
        "name": "ENT Care Hub",
        "kind": "Healthcare Consultant Discovery & Clinical Analytics",
        "description": "Clinical transparency and booking discovery platform for Ear, Nose, and Throat specialists. Powered by normalized relational MySQL schemas, dynamic multi-table SQL joins, geographic distance filtering, and aggregate satisfaction leaderboards.",
        "stack": "PHP · MySQL · Relational Schema Design · React · Chart.js · Bootstrap",
        "note": "Computes live consultant ratings, clinic equipment counts, and fee comparisons directly in SQL without denormalized cache drift.",
        "image": "",
        "repo": "https://github.com/Maseeek/entcarehub",
        "live": "",
        "url": "https://maciekgeneja.me/blog/ent-care-hub"
    },
    "towers": {
        "name": "Towers Hall Website",
        "kind": "Student Community & RAG Charity Portal · Live on Vercel",
        "description": "Official web platform for Towers Hall at Loughborough University (305 residents, est. 1965). Features committee directories, RAG charity fundraising events, hall merchandise showcases, and freshers onboarding.",
        "stack": "React · TypeScript · Tailwind CSS · Vercel",
        "note": "Real live screenshot captured from towers-hall.vercel.app.",
        "image": towers_url,
        "repo": "https://github.com/Maseeek/towers-hall-website",
        "live": "https://towers-hall.vercel.app",
        "url": "https://towers-hall.vercel.app"
    },
    "neos_talk": {
        "name": "Using AI in Development (Next plc Talk)",
        "kind": "Engineering Presentation · Online Shopping — PIM Strategic Team",
        "description": "Interactive presentation deck delivered to the Online Shopping — PIM Strategic team at Next plc on 23 October 2026. Covers context management, structured agent harnesses, custom skills, Playwright verification loops, and practical failure modes across enterprise .NET & Blazor codebases.",
        "stack": "Agentic Engineering · Blazor & .NET Workflows · Playwright Verification · Interactive Web Deck",
        "note": "Real live screenshot captured from ai-development-presentation-545a1d7.vercel.app.",
        "image": neos_talk_url,
        "repo": "",
        "live": "https://ai-development-presentation-545a1d7.vercel.app",
        "url": "https://ai-development-presentation-545a1d7.vercel.app"
    },
    "lab": {
        "name": "The Lab · Agentic Software Factory & Cross-Machine T3 Code",
        "kind": "Cross-Machine Agent Orchestration & Reusable Skill Systems",
        "description": "Custom multi-agent engineering environment linking a portable Pop!_OS Linux laptop (Lenovo IdeaPad Pro 5, Ryzen 7 7940HS) with a Windows RTX 3060 Ti workstation over a Tailscale & OpenSSH mesh. Orchestrated via T3 Code and Oh My Pi with codified domain context (CONTEXT.md, AGENTS.md, ADRs), composable skill pipelines (grill-me → to-spec → to-tickets → TDD), iterative hill-climbing review loops, and automated formatted PRs with live interaction and rendered-font evidence.",
        "stack": "T3 Code · Tailscale Mesh · Remote SSH · Linux & Windows CUDA Node · Reusable Agent Skills · Playwright Verification",
        "note": "Combines cross-machine compute orchestration with strict human review gates and upstream contributions to T3 Code.",
        "image": lab_thumb,
        "repo": "https://github.com/pingdotgg/t3code/pulls?q=is%3Apr+author%3AMaseeek",
        "live": "ai-development-presentation.html",
        "url": "https://maciekgeneja.me/blog/enterprise-agentic-systems"
    },
    "payroll": {
        "name": "Embedded Payroll FSM",
        "kind": "Bare-Metal C++ & Deterministic Finite State Machine",
        "description": "Resource-constrained employee payroll manager running on an ATmega328P (Arduino Uno) within 2 KB of SRAM. Uses bit-packed structs, custom non-blocking UART serial parsing, and LCD status feedback with zero dynamic heap fragmentation.",
        "stack": "Embedded C++ · Arduino Uno (ATmega328P) · 2 KB SRAM · UART Serial · Finite State Machine",
        "note": "Earned 75% (First-Class Honours) in Embedded Systems Programming at Loughborough University.",
        "image": payroll_thumb,
        "repo": "",
        "live": "",
        "url": "https://maciekgeneja.me/blog/embedded-payroll-system"
    },
    "tickets": {
        "name": "Event Ticket Booking System",
        "kind": "Desktop Object-Oriented Architecture",
        "description": "Multi-user desktop booking application engineered in Java Swing to demonstrate clean object-oriented inheritance hierarchies, polymorphic pricing rules, custom exception handling, and role-based customer/admin views.",
        "stack": "Java · Java Swing · OOP (Inheritance & Polymorphism) · MVC Architecture",
        "note": "Built with strict separation between domain models and Swing UI controllers.",
        "image": tickets_thumb,
        "repo": "",
        "live": "",
        "url": "https://maciekgeneja.me/blog/event-ticket-booking"
    }
}

template = (SCRATCH / "05-template.html").read_text(encoding="utf-8")
base_css = (SCRATCH / "04b.css").read_text(encoding="utf-8")
extra_css = (SCRATCH / "05-extra.css").read_text(encoding="utf-8")
js_code = (SCRATCH / "05.js").read_text(encoding="utf-8")

out = (
    template
    .replace("{{BASE_CSS}}", base_css)
    .replace("{{EXTRA_CSS}}", extra_css)
    .replace("{{PHOTO_SM}}", photo_sm)
    .replace("{{PHOTO_LG}}", photo_lg)
    .replace("{{PHOTO_ABOUT}}", photo_about)
    .replace("{{NBN_DASH}}", nbn_dash_url)
    .replace("{{DOIT_TODAY_DARK}}", doit_today_dark)
    .replace("{{DOIT_DUEL_DARK}}", doit_duel_dark)
    .replace("{{WAVEFORM}}", waveform)
    .replace("{{PROJECTS_JSON}}", json.dumps(projects, ensure_ascii=False))
    .replace("{{GALLERY_JSON}}", json.dumps(gallery, ensure_ascii=False))
    .replace("{{JS}}", js_code)
)

target = CONCEPTS / "05-the-full-portfolio.html"
target.write_text(out, encoding="utf-8")
(CONCEPTS / "index.html").write_text(out, encoding="utf-8")
public_target = Path("/home/maciek/Documents/portfolio/public/05-the-full-portfolio.html")
public_target.write_text(out, encoding="utf-8")
print(f"Built {target} and {public_target} ({target.stat().st_size:,} bytes)")

