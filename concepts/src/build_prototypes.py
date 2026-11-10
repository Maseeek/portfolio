#!/usr/bin/env python3
"""
Builds the 3 vastly different portfolio prototypes (/1, /2, /3) from the
canonical base portfolio (public/05-the-full-portfolio.html) using
Emil Kowalski's UI & animation rules (https://aiforui.dev / emilkowalski/skills).

Routes:
  /   -> public/05-the-full-portfolio.html (untouched current flagship)
  /1  -> public/prototype-1.html ("Linear Craft" — Design-Engineering Studio)
  /2  -> public/prototype-2.html ("Recruiter Cockpit" — Split-Pane Evaluation Workbench)
  /3  -> public/prototype-3.html ("Swiss Monograph" — Editorial Case-Study Publication)
"""
import re
from pathlib import Path

ROOT = Path("/home/maciek/Documents/portfolio")
PUBLIC = ROOT / "public"
CONCEPTS = ROOT / "concepts"

base_html = (PUBLIC / "05-the-full-portfolio.html").read_text(encoding="utf-8")
html_04b = (CONCEPTS / "04b-person-and-product.html").read_text(encoding="utf-8")

# Restore full embedded Inter woff2 font from 04b so typography renders identically offline/online
real_font_m = re.search(r"@font-face\{font-family:Inter;src:url\([^)]+\) format\('woff2'\);font-weight:100 900;font-display:swap\}", html_04b)
if real_font_m:
    base_html = re.sub(
        r"@font-face\{font-family:Inter;src:url\([^)]+\) format\('woff2'\);font-weight:100 900;font-display:swap\}",
        lambda _: real_font_m.group(0),
        base_html,
        count=1,
    )

# Shared Emil Kowalski Design Engineering Foundation + Verbatim PICKER.md styles
SHARED_EMIL_CSS = r"""
/* ==========================================================================
   EMIL KOWALSKI (aiforui.dev / emilkowalski/skills) SHARED CRAFT TOKENS
   ========================================================================== */
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-spring: cubic-bezier(0.22, 1.28, 0.36, 1);
}

html {
  -webkit-tap-highlight-color: transparent;
}

/* Tabular numbers across all metrics, counters, timestamps, and percentages (ui-cheatsheet.md) */
.neos-metrics strong,
.grades b,
.nav-time,
.local-time,
#work-position,
[data-tabular],
.p2-score-grid strong,
.p1-telemetry-val,
.p3-coord {
  font-variant-numeric: tabular-nums;
}

/* Cap body text measure around 65ch (ui-cheatsheet.md) */
.neos-copy > p:not(.eyebrow),
.neos-subcard p,
.bento-card p,
.oss-card p,
.about-words p,
.dialog-desc {
  max-width: 65ch;
}

/* Responsive tactile press states (100-160ms ease-out, scale(0.97)) */
button:active,
.button:active,
.repo-pill:active,
.action-pill:active,
.mode-pill:active,
.neos-toggle:active,
.neos-more-btn:active,
.theme-btn:active,
.nav-contact:active {
  transform: scale(0.97) !important;
  transition: transform 140ms var(--ease-out) !important;
}

/* Modal / Dialog entrance from scale(0.96) + opacity 0 (never scale(0)) */
.dialog[open] {
  animation: emil-modal-in 240ms var(--ease-out) both;
  transform-origin: center;
}
@keyframes emil-modal-in {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(6px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Blur-masked crossfade for app stage screenshots (Emil's ui-cheatsheet rule) */
.app-frame > img {
  transition:
    opacity 210ms var(--ease-out),
    transform 240ms var(--ease-out),
    filter 210ms ease !important;
  will-change: transform, opacity, filter;
}
.app-frame > img.is-swapping-next {
  opacity: 0.45;
  transform: translateX(12px) scale(0.99);
  filter: blur(2.5px);
}
.app-frame > img.is-swapping-prev {
  opacity: 0.45;
  transform: translateX(-12px) scale(0.99);
  filter: blur(2.5px);
}

/* ==========================================================================
   VERBATIM PICKER.MD HARNESS CHROME (Floating Dark Pill, Bottom-Center)
   ========================================================================== */
.proto-picker {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2147483647;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  background: rgba(10, 10, 10, 0.82);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 8px 24px rgba(0, 0, 0, 0.24),
    0 2px 6px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  max-width: calc(100vw - 24px);
  overflow-x: auto;
  scrollbar-width: none;
}
.proto-picker::-webkit-scrollbar {
  display: none;
}
.proto-picker-highlight {
  position: absolute;
  top: 4px;
  left: 0;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  will-change: transform;
  pointer-events: none;
}
.proto-picker[data-ready] .proto-picker-highlight {
  transition:
    transform 250ms cubic-bezier(0.23, 1, 0.32, 1),
    width 250ms cubic-bezier(0.23, 1, 0.32, 1);
}
@media (prefers-reduced-motion: reduce) {
  .proto-picker[data-ready] .proto-picker-highlight {
    transition: none;
  }
}
.proto-picker-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font: inherit;
  cursor: pointer;
  transition: color 150ms ease-out;
  text-decoration: none;
}
@media (hover: hover) and (pointer: fine) {
  .proto-picker-item:hover {
    color: rgba(255, 255, 255, 0.85);
  }
}
.proto-picker-item:active {
  transform: scale(0.97);
}
.proto-picker-item:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.4);
  outline-offset: 2px;
}
.proto-picker-item[data-active] {
  color: #fff;
}
.proto-picker-divider {
  width: 1px;
  height: 16px;
  margin: 0 4px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
}
.proto-picker-replay {
  padding: 0 10px;
  font-size: 14px;
}
body {
  padding-bottom: 72px;
}
@media (max-width: 600px) {
  .proto-picker {
    bottom: 14px;
    font-size: 11.5px;
  }
  .proto-picker-item {
    padding: 0 9px;
  }
}
"""

SHARED_EMIL_JS = r"""
/* ==========================================================================
   SHARED EMIL KOWALSKI INTERACTIONS:
   1. Picker highlight measurement, keyboard 0/1/2/3 & Arrow navigation, Replay (R)
   2. Direction-aware blur-masked stage transitions (filter: blur(2px))
   ========================================================================== */
(function(){
  const picker = document.querySelector('.proto-picker');
  if (picker) {
    const highlight = picker.querySelector('.proto-picker-highlight');
    const items = [...picker.querySelectorAll('.proto-picker-item:not(.proto-picker-replay)')];
    const replay = picker.querySelector('.proto-picker-replay');

    function moveHighlight() {
      const active = picker.querySelector('.proto-picker-item[data-active]');
      if (!active || !highlight) return;
      highlight.style.width = active.offsetWidth + 'px';
      highlight.style.transform = `translateX(${active.offsetLeft}px)`;
    }

    moveHighlight();
    window.addEventListener('resize', moveHighlight);
    requestAnimationFrame(() => requestAnimationFrame(() => picker.setAttribute('data-ready', '')));

    function triggerReplay() {
      document.documentElement.classList.add('is-replaying');
      const animated = document.querySelectorAll('.reveal, .grades, [data-stagger], .p3-curtain, .p1-stagger');
      animated.forEach(el => {
        el.classList.remove('in', 'is-visible');
        el.style.animation = 'none';
        void el.offsetHeight;
        el.style.animation = '';
      });
      requestAnimationFrame(() => {
        animated.forEach(el => el.classList.add('in', 'is-visible'));
        setTimeout(() => document.documentElement.classList.remove('is-replaying'), 650);
      });
      if (window.showProtoToast) {
        window.showProtoToast('Choreography replayed', 'Entrance stagger & spring curves re-triggered (R)');
      }
    }

    if (replay) {
      replay.addEventListener('click', triggerReplay);
    }

    items.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('data-proto-href');
        if (!href) return;
        if (btn.hasAttribute('data-active')) {
          e.preventDefault();
          triggerReplay();
          return;
        }
        items.forEach(b => {
          b.toggleAttribute('data-active', b === btn);
          if (b === btn) b.setAttribute('aria-current', 'true');
          else b.removeAttribute('aria-current');
        });
        moveHighlight();
        setTimeout(() => { window.location.href = href; }, 110);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (document.querySelector('dialog[open], .p1-cmdk[data-open="true"], .p2-sheet-backdrop[data-open="true"]')) return;
      if (e.key === '0') items[0]?.click();
      else if (e.key === '1') items[1]?.click();
      else if (e.key === '2') items[2]?.click();
      else if (e.key === '3') items[3]?.click();
      else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        triggerReplay();
      }
    });
  }

  /* Enhance Do It & Nothing But Net tab switches with direction-aware blur(2px) seam masking */
  function attachBlurSwap(selector, imgSelector) {
    const btns = [...document.querySelectorAll(selector)];
    const img = document.querySelector(imgSelector);
    if (!btns.length || !img) return;
    let lastIdx = 0;
    btns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        if (idx === lastIdx) return;
        const cls = idx > lastIdx ? 'is-swapping-next' : 'is-swapping-prev';
        lastIdx = idx;
        img.classList.remove('is-swapping-next', 'is-swapping-prev');
        img.classList.add(cls);
        setTimeout(() => img.classList.remove('is-swapping-next', 'is-swapping-prev'), 190);
      }, true);
    });
  }
  attachBlurSwap('[data-doit-view]', '[data-doit-img]');
  attachBlurSwap('[data-nbn-view]', '[data-nbn-img]');
})();
"""

def make_picker_html(active_idx: int) -> str:
    opts = [
        ("/", "Base"),
        ("/1", "1 · Linear Craft"),
        ("/2", "2 · Recruiter Cockpit"),
        ("/3", "3 · Swiss Monograph"),
    ]
    btns = []
    for idx, (href, label) in enumerate(opts):
        active_attr = ' data-active aria-current="true"' if idx == active_idx else ""
        btns.append(f'  <button type="button" class="proto-picker-item" data-proto-href="{href}"{active_attr}>{label}</button>')
    return (
        '\n<nav class="proto-picker" aria-label="Prototype variants">\n'
        '  <span class="proto-picker-highlight" aria-hidden="true"></span>\n'
        + "\n".join(btns)
        + '\n  <span class="proto-picker-divider" aria-hidden="true"></span>\n'
        '  <button type="button" class="proto-picker-item proto-picker-replay" aria-label="Replay animation (R)" title="Replay animation (R)">↻</button>\n'
        '</nav>\n'
    )


# ==============================================================================
# PROTOTYPE 1 (/1): "LINEAR CRAFT" — DESIGN-ENGINEERING STUDIO
# Axis: Electric indigo & obsidian specular surfaces, clip-path twin-layer tabs,
#       asymmetric hold-to-copy pitch button, 0ms ⌘K command bar, warm tooltips,
#       interactive Lumina BLE RGB hex controller, and Sonner stacked toasts.
# ==============================================================================

P1_CSS = r"""
/* ==========================================================================
   PROTOTYPE 1 (/1): LINEAR CRAFT — DESIGN-ENGINEERING STUDIO
   ========================================================================== */
html[data-proto="1"] {
  --bg: #f7f8fc !important;
  --ink: #0c0e14 !important;
  --muted: #5b6375 !important;
  --line: rgba(12, 14, 20, 0.08) !important;
  --accent: #4f46e5 !important;
  --accent-soft: rgba(79, 70, 229, 0.1) !important;
  --surface-1: #ffffff;
  --surface-2: #eef0f7;
  --card-shadow:
    0 0 0 1px rgba(12, 14, 20, 0.07),
    0 10px 28px -6px rgba(12, 14, 20, 0.06),
    0 2px 6px -1px rgba(12, 14, 20, 0.04);
}
html[data-proto="1"][data-theme="dark"] {
  --bg: #06070b !important;
  --ink: #f4f6fb !important;
  --muted: #8c95a8 !important;
  --line: rgba(255, 255, 255, 0.08) !important;
  --accent: #6366f1 !important;
  --accent-soft: rgba(99, 102, 241, 0.16) !important;
  --surface-1: #0c0e16;
  --surface-2: #121624;
  --card-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.11) inset,
    0 0 0 1px rgba(255, 255, 255, 0.06) inset,
    0 20px 44px -10px rgba(0, 0, 0, 0.65),
    0 4px 12px rgba(0, 0, 0, 0.4);
}

html[data-proto="1"] body {
  background-color: var(--bg) !important;
  background-image:
    radial-gradient(ellipse 80% 42% at 50% -8%, rgba(99, 102, 241, 0.22), transparent 68%),
    radial-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px) !important;
  background-size: 100% 100%, 24px 24px !important;
}

/* Floating Studio Pill Header */
html[data-proto="1"] .site-head {
  top: 14px;
  width: min(1200px, calc(100% - 32px));
  margin: 14px auto 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82) !important;
  border: 0 !important;
  box-shadow:
    0 0 0 1px rgba(15, 17, 21, 0.08) inset,
    0 12px 32px -8px rgba(15, 17, 21, 0.08) !important;
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  backdrop-filter: blur(16px) saturate(180%);
}
html[data-proto="1"][data-theme="dark"] .site-head {
  background: rgba(12, 14, 22, 0.82) !important;
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.12) inset,
    0 0 0 1px rgba(255, 255, 255, 0.07) inset,
    0 12px 32px -8px rgba(0, 0, 0, 0.6) !important;
}
html[data-proto="1"] .site-head .nav {
  height: 56px;
  width: 100%;
  padding: 0 18px;
  border-bottom: 0;
}

/* Recruiter Studio Top Strip (⌘K Command Trigger + Section Filter Clip-Path Tabs) */
.p1-studio-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 22px;
  padding: 10px 14px;
  border-radius: 16px;
  background: var(--surface-1);
  box-shadow: var(--card-shadow);
}
.p1-studio-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.p1-proto-tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 11px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.p1-proto-tag i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}
.p1-cmdk-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 32px;
  padding: 0 12px;
  border-radius: 9px;
  background: var(--surface-2);
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0 0 0 1px var(--line) inset;
  transition: color 150ms var(--ease-out), background 150ms var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .p1-cmdk-btn:hover {
    color: var(--ink);
  }
}
.p1-cmdk-btn kbd {
  font: 500 10.5px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  padding: 3px 6px;
  border-radius: 5px;
  background: var(--surface-1);
  color: var(--ink);
  box-shadow: 0 0 0 1px var(--line) inset;
}

/* Clip-path Twin-Layer Filter Tabs (Emil's exact recipe from animate/RECIPES.md) */
.p1-clip-tabs {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 3px;
  border-radius: 999px;
  background: var(--surface-2);
  box-shadow: 0 0 0 1px var(--line) inset;
}
.p1-clip-layer {
  display: flex;
  align-items: center;
  gap: 2px;
}
.p1-clip-btn {
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 550;
  color: var(--muted);
  background: transparent;
  white-space: nowrap;
}
.p1-clip-layer.is-overlay {
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  background: var(--accent);
  border-radius: 999px;
  pointer-events: none;
  clip-path: var(--clip-rect, inset(0 75% 0 0 round 999px));
  transition: clip-path 240ms var(--ease-in-out);
}
.p1-clip-layer.is-overlay .p1-clip-btn {
  color: #ffffff !important;
}

/* Hero Bento Transformation in Prototype 1 */
html[data-proto="1"] .hero {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 18px;
  padding: 18px 0 36px;
  border-bottom: 0;
  align-items: stretch;
}
html[data-proto="1"] .hero-copy {
  background: var(--surface-1);
  box-shadow: var(--card-shadow);
  border-radius: 22px;
  padding: 34px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
html[data-proto="1"] .hero h1 {
  font-size: clamp(36px, 4.2vw, 54px);
  letter-spacing: -0.055em;
  line-height: 1.04;
  margin-top: 10px;
}
html[data-proto="1"] .hero-intro {
  max-width: 62ch;
  margin-top: 18px;
}

/* Choreographed --i Stagger Entrance (choreograph/RECIPES.md) */
.p1-stagger > * {
  --step: 55ms;
  animation: p1-enter 480ms var(--ease-out) both;
  animation-delay: calc(var(--step) * var(--i, 0));
}
@keyframes p1-enter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .p1-stagger > * {
    animation-name: p1-fade;
    animation-delay: 0ms;
  }
  @keyframes p1-fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}

/* Asymmetric Hold-to-Copy Recruiter Pitch Button (Emil's Hold-to-Confirm Recipe) */
.p1-hold-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--ink);
  font-size: 12px;
  font-weight: 550;
  box-shadow: 0 0 0 1px var(--line) inset;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  transition: transform 160ms var(--ease-out);
}
.p1-hold-overlay {
  position: absolute;
  inset: 0;
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 18px;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 180ms var(--ease-out); /* fast snap-back on release */
  pointer-events: none;
}
.p1-hold-btn.is-holding .p1-hold-overlay {
  clip-path: inset(0 0% 0 0);
  transition: clip-path 1.15s linear; /* deliberate linear progress on hold */
}

/* 3D Spring-Tilt Photo Card + Warm-Tooltip Stack Matrix */
html[data-proto="1"] .photo-card {
  max-width: none;
  width: 100%;
  margin: 0;
  transform: none;
  background: var(--surface-1) !important;
  border: 0 !important;
  box-shadow: var(--card-shadow) !important;
  border-radius: 22px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 280ms var(--ease-out);
  will-change: transform;
}
html[data-proto="1"] .photo-card img {
  height: 220px;
  border-radius: 14px;
  filter: saturate(0.92);
}

/* Warm-Handoff Architecture Tooltips (Emil's 0ms neighbor delay rule) */
.p1-warm-bar {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 14px 20px;
  border-radius: 18px;
  background: var(--surface-1);
  box-shadow: var(--card-shadow);
}
.p1-warm-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}
.p1-warm-pills {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.p1-warm-item {
  position: relative;
}
.p1-warm-trigger {
  height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--ink);
  font-size: 11.5px;
  font-weight: 550;
  box-shadow: 0 0 0 1px var(--line) inset;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.p1-warm-trigger span {
  color: var(--accent);
  font-weight: 700;
}
.p1-warm-popover {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  width: 265px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #0d1118;
  color: #f3f5f8;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.12) inset,
    0 16px 32px rgba(0, 0, 0, 0.45);
  font-size: 11.5px;
  line-height: 1.5;
  pointer-events: none;
  opacity: 0;
  transform: translateX(-50%) scale(0.95) translateY(4px);
  transform-origin: bottom center;
  transition:
    opacity 140ms var(--ease-out),
    transform 140ms var(--ease-out);
  z-index: 90;
}
.p1-warm-popover strong {
  display: block;
  color: #818cf8;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 3px;
}
.p1-warm-item[data-open="true"] .p1-warm-popover {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
/* Once one tooltip is open in the group, neighbors open with 0ms transition! */
.p1-warm-pills[data-warm="true"] .p1-warm-popover {
  transition-duration: 0ms !important;
}

/* Interactive Lumina BLE GATT Hex Controller inside Bento Card #1 */
.p1-ble-widget {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 11px;
  background: var(--surface-2);
  box-shadow: 0 0 0 1px var(--line) inset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
.p1-ble-hex {
  font: 600 11px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  color: var(--ink);
  letter-spacing: 0.03em;
}
.p1-ble-hex b {
  color: var(--ble-color, #6366f1);
  transition: color 180ms ease;
}
.p1-ble-swatches {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.p1-ble-swatch {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.25);
  transition: transform 150ms var(--ease-out);
}
.p1-ble-swatch[aria-pressed="true"] {
  transform: scale(1.18);
  border-color: var(--ink);
}

/* Cursor-Spotlight Surface Cards (Linear Craft) */
html[data-proto="1"] .neos-stage,
html[data-proto="1"] .work-slide,
html[data-proto="1"] .bento-card,
html[data-proto="1"] .oss-card,
html[data-proto="1"] .about-card,
html[data-proto="1"] .footer-contact {
  background: var(--surface-1) !important;
  border: 0 !important;
  box-shadow: var(--card-shadow) !important;
  position: relative;
  overflow: hidden;
}
@media (hover: hover) and (pointer: fine) {
  html[data-proto="1"] .bento-card::before,
  html[data-proto="1"] .oss-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      420px circle at var(--mx, 50%) var(--my, 50%),
      rgba(99, 102, 241, 0.14),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 200ms ease;
    pointer-events: none;
  }
  html[data-proto="1"] .bento-card:hover::before,
  html[data-proto="1"] .oss-card:hover::before {
    opacity: 1;
  }
}

/* Zero-Animation ⌘K Command Palette (Emil's 100+/day rule: instant open/close) */
.p1-cmdk {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(5, 7, 11, 0.62);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  display: none;
  align-items: flex-start;
  justify-content: center;
  padding-top: 13vh;
}
.p1-cmdk[data-open="true"] {
  display: flex; /* Instant: 0ms animation per Emil's Raycast / keyboard shortcut rule */
}
.p1-cmdk-box {
  width: min(560px, calc(100vw - 32px));
  border-radius: 16px;
  background: #0e121a;
  color: #f3f5f8;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.12) inset,
    0 28px 70px rgba(0, 0, 0, 0.65);
  overflow: hidden;
}
.p1-cmdk-input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.p1-cmdk-input {
  flex: 1;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 16px; /* >=16px prevents iOS zoom (mobile-native rule) */
  outline: none;
}
.p1-cmdk-list {
  max-height: 320px;
  overflow-y: auto;
  padding: 6px;
}
.p1-cmdk-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  background: transparent;
  color: #cbd5e1;
  font-size: 13px;
  text-align: left;
}
.p1-cmdk-item[data-selected="true"],
.p1-cmdk-item:hover {
  background: rgba(99, 102, 241, 0.24);
  color: #ffffff;
}
.p1-cmdk-item small {
  font-size: 11px;
  color: #818cf8;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

/* Sonner-Style Stacked Notification Toasts (Emil's Sonner recipe) */
.p1-toaster {
  position: fixed;
  right: 20px;
  bottom: 72px;
  z-index: 99990;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
}
.p1-toast {
  pointer-events: auto;
  width: min(340px, calc(100vw - 40px));
  padding: 12px 15px;
  border-radius: 13px;
  background: #0e121b;
  color: #f8fafc;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.1) inset,
    0 14px 32px rgba(0, 0, 0, 0.4);
  font-size: 12.5px;
  line-height: 1.45;
  opacity: 1;
  transform: translateY(0) scale(1);
  transition:
    transform 360ms ease,
    opacity 360ms ease;
  touch-action: pan-y;
}
@starting-style {
  .p1-toast {
    opacity: 0;
    transform: translateY(100%) scale(0.96);
  }
}
.p1-toast strong {
  display: block;
  font-weight: 600;
  color: #fff;
  margin-bottom: 2px;
}
.p1-toast span {
  color: #94a3b8;
  font-size: 11.5px;
}

@media (max-width: 760px) {
  html[data-proto="1"] .hero {
    grid-template-columns: 1fr;
  }
  html[data-proto="1"] .hero-copy {
    padding: 22px 20px;
  }
  .p1-clip-tabs {
    display: none;
  }
}
"""

P1_JS = r"""
(function(){
  /* 1. Sonner-style toast notification helper with swipe-to-dismiss */
  const toaster = document.getElementById('p1-toaster');
  window.showProtoToast = function(title, sub) {
    if (!toaster) return;
    const el = document.createElement('div');
    el.className = 'p1-toast';
    el.innerHTML = `<strong>${title}</strong><span>${sub || ''}</span>`;
    toaster.appendChild(el);
    let startX = 0, startTime = 0, dragging = false;
    el.addEventListener('pointerdown', (e) => {
      dragging = true;
      startX = e.clientX;
      startTime = Date.now();
      el.setPointerCapture(e.pointerId);
      el.style.transition = 'none';
    });
    el.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = Math.max(-20, e.clientX - startX);
      el.style.transform = `translateX(${dx}px)`;
    });
    el.addEventListener('pointerup', (e) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - startX;
      const vel = Math.abs(dx) / Math.max(1, Date.now() - startTime);
      el.style.transition = '';
      if (dx > 65 || vel > 0.15) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(110%)';
        setTimeout(() => el.remove(), 260);
      } else {
        el.style.transform = '';
      }
    });
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px) scale(0.96)';
      setTimeout(() => el.remove(), 350);
    }, 3400);
  };

  /* 2. Clip-Path Twin-Layer Filter Tabs (animate/RECIPES.md) */
  const clipTabs = document.getElementById('p1-clip-tabs');
  if (clipTabs) {
    const baseBtns = [...clipTabs.querySelectorAll('.p1-clip-layer:not(.is-overlay) .p1-clip-btn')];
    const overlay = clipTabs.querySelector('.p1-clip-layer.is-overlay');
    function setClipTab(idx) {
      const btn = baseBtns[idx];
      if (!btn || !overlay) return;
      const totalW = overlay.offsetWidth || 1;
      const leftPct = (btn.offsetLeft / totalW) * 100;
      const rightPct = 100 - ((btn.offsetLeft + btn.offsetWidth) / totalW) * 100;
      overlay.style.setProperty('--clip-rect', `inset(0 ${rightPct.toFixed(1)}% 0 ${leftPct.toFixed(1)}% round 999px)`);
    }
    baseBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        setClipTab(idx);
        const target = btn.dataset.jump;
        if (target === 'top') window.scrollTo({top: 0, behavior: 'smooth'});
        else document.getElementById(target)?.scrollIntoView({behavior: 'smooth'});
      });
    });
    setTimeout(() => setClipTab(0), 60);
    window.addEventListener('resize', () => setClipTab(0));
  }

  /* 3. Hold-to-Copy 30s Recruiter Pitch (Asymmetric 1.15s linear press / 180ms ease-out release) */
  const holdBtn = document.getElementById('p1-hold-pitch');
  if (holdBtn) {
    let holdTimer = null;
    const pitchText = "Maciek Geneja — Systems Placement Developer at Next plc (FTSE 100) & First-Class BSc CS at Loughborough (89% OS & Networks, 86% Logic). Sole owner of NEOS AI Attribution 2.0 (highlighted by CEO Simon Wolfson), lead on NEOS Item Tracker Blazor->React port (v5 merged to main), creator of Do It & Nothing But Net. Contact: maciekgeneja@gmail.com | https://maciekgeneja.me";
    function startHold() {
      holdBtn.classList.add('is-holding');
      clearTimeout(holdTimer);
      holdTimer = setTimeout(async () => {
        holdBtn.classList.remove('is-holding');
        try { await navigator.clipboard.writeText(pitchText); } catch {}
        window.showProtoToast('Recruiter pitch copied to clipboard', 'Full 30-second executive summary + contact details ready to paste.');
      }, 1150);
    }
    function cancelHold() {
      clearTimeout(holdTimer);
      holdBtn.classList.remove('is-holding');
    }
    holdBtn.addEventListener('pointerdown', startHold);
    holdBtn.addEventListener('pointerup', cancelHold);
    holdBtn.addEventListener('pointerleave', cancelHold);
    holdBtn.addEventListener('pointercancel', cancelHold);
  }

  /* 4. Warm-Group Architecture Tooltips (260ms initial delay -> 0ms instant neighbor handoff) */
  const warmGroup = document.getElementById('p1-warm-pills');
  if (warmGroup) {
    const items = [...warmGroup.querySelectorAll('.p1-warm-item')];
    let warmTimer = null, cooldownTimer = null, isWarm = false;
    items.forEach(item => {
      item.addEventListener('pointerenter', () => {
        clearTimeout(cooldownTimer);
        clearTimeout(warmTimer);
        if (isWarm) {
          warmGroup.setAttribute('data-warm', 'true');
          items.forEach(el => el.setAttribute('data-open', String(el === item)));
        } else {
          warmTimer = setTimeout(() => {
            isWarm = true;
            items.forEach(el => el.setAttribute('data-open', String(el === item)));
          }, 240);
        }
      });
      item.addEventListener('pointerleave', () => {
        clearTimeout(warmTimer);
        item.setAttribute('data-open', 'false');
        cooldownTimer = setTimeout(() => {
          isWarm = false;
          warmGroup.removeAttribute('data-warm');
        }, 420);
      });
    });
  }

  /* 5. Interactive Lumina 9-Byte BLE GATT Frame Controller in Bento Card #1 */
  document.querySelectorAll('[data-ble-rgb]').forEach(btn => {
    btn.addEventListener('click', () => {
      const hexBytes = btn.dataset.bleRgb;
      const color = btn.dataset.bleCss;
      const widget = btn.closest('.p1-ble-widget');
      if (!widget) return;
      widget.querySelectorAll('[data-ble-rgb]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      const out = widget.querySelector('[data-ble-out]');
      if (out) out.textContent = hexBytes;
      widget.style.setProperty('--ble-color', color);
      window.showProtoToast('BLE GATT Packet Queued', `7e 07 05 03 ${hexBytes} 10 ef → characteristic 0000fff3`);
    });
  });

  /* 6. Cursor-tracking radial spotlight on Bento & OSS cards + 3D spring tilt on Portrait */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.bento-card, .oss-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
    const photoCard = document.querySelector('.photo-card');
    if (photoCard) {
      photoCard.addEventListener('pointermove', e => {
        const r = photoCard.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        photoCard.style.transform = `perspective(800px) rotateY(${(nx * 6).toFixed(2)}deg) rotateX(${(-ny * 6).toFixed(2)}deg) translateY(-2px)`;
      });
      photoCard.addEventListener('pointerleave', () => {
        photoCard.style.transform = '';
      });
    }
  }

  /* 7. Instant 0ms ⌘K Recruiter Command Palette (Emil's 100+/day rule) */
  const cmdk = document.getElementById('p1-cmdk');
  const cmdkInput = document.getElementById('p1-cmdk-input');
  const cmdkItems = [...document.querySelectorAll('.p1-cmdk-item')];

  function openCmdk() {
    if (!cmdk) return;
    cmdk.setAttribute('data-open', 'true');
    if (cmdkInput) {
      cmdkInput.value = '';
      filterCmdk('');
      cmdkInput.focus();
    }
  }
  function closeCmdk() {
    if (!cmdk) return;
    cmdk.setAttribute('data-open', 'false');
  }
  function filterCmdk(q) {
    const clean = q.trim().toLowerCase();
    const visible = [];
    cmdkItems.forEach(item => {
      const match = !clean || item.textContent.toLowerCase().includes(clean);
      item.style.display = match ? 'flex' : 'none';
      if (match) visible.push(item);
    });
    visible.forEach((el, i) => el.setAttribute('data-selected', String(i === 0)));
  }

  document.querySelectorAll('[data-open-cmdk]').forEach(b => b.addEventListener('click', openCmdk));
  cmdk?.addEventListener('click', e => { if (e.target === cmdk) closeCmdk(); });
  cmdkInput?.addEventListener('input', e => filterCmdk(e.target.value));

  cmdkItems.forEach(item => {
    item.addEventListener('click', () => {
      const act = item.dataset.cmdAction;
      closeCmdk();
      if (act === 'brief') document.getElementById('brief-dialog')?.showModal();
      else if (act === 'talk') document.getElementById('talk-dialog')?.showModal();
      else if (act === 'email') {
        navigator.clipboard?.writeText('maciekgeneja@gmail.com');
        window.showProtoToast('Email copied', 'maciekgeneja@gmail.com copied to clipboard.');
      } else if (act === 'theme') {
        document.querySelector('[data-theme-toggle]')?.click();
        window.showProtoToast('Theme switched', 'Synced site & live app stage screenshots.');
      } else if (act?.startsWith('#')) {
        document.querySelector(act)?.scrollIntoView({behavior: 'smooth'});
      }
    });
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdk?.getAttribute('data-open') === 'true') closeCmdk();
      else openCmdk();
    } else if (e.key === 'Escape' && cmdk?.getAttribute('data-open') === 'true') {
      closeCmdk();
    }
  });
})();
"""


def build_prototype_1() -> str:
    html = base_html
    html = html.replace('<html lang="en" data-theme="dark">', '<html lang="en" data-theme="dark" data-proto="1">', 1)
    html = html.replace(
        "<title>Maciek Geneja | Enterprise Systems, Applied AI &amp; Full-Stack Software Engineer</title>",
        "<title>Maciek Geneja · Prototype 1 (Linear Craft) | Design-Engineering Studio</title>",
        1,
    )

    studio_bar = """
  <div class="p1-studio-bar wrap">
    <div class="p1-studio-left">
      <span class="p1-proto-tag"><i aria-hidden="true"></i>Prototype 01 · Linear Craft</span>
      <button type="button" class="p1-cmdk-btn" data-open-cmdk>
        <span>Recruiter Quick Jump &amp; Actions</span>
        <kbd>⌘K</kbd>
      </button>
    </div>
    <div class="p1-clip-tabs" id="p1-clip-tabs" aria-label="Section filter">
      <div class="p1-clip-layer">
        <button type="button" class="p1-clip-btn" data-jump="top">Overview</button>
        <button type="button" class="p1-clip-btn" data-jump="placement">01 Next plc</button>
        <button type="button" class="p1-clip-btn" data-jump="work">02 Flagships</button>
        <button type="button" class="p1-clip-btn" data-jump="opensource">03 T3 OSS</button>
        <button type="button" class="p1-clip-btn" data-jump="foundations">04 1st-Class</button>
      </div>
      <div class="p1-clip-layer is-overlay" aria-hidden="true">
        <span class="p1-clip-btn">Overview</span>
        <span class="p1-clip-btn">01 Next plc</span>
        <span class="p1-clip-btn">02 Flagships</span>
        <span class="p1-clip-btn">03 T3 OSS</span>
        <span class="p1-clip-btn">04 1st-Class</span>
      </div>
    </div>
  </div>
"""
    html = html.replace('<main id="main">', '<main id="main">' + studio_bar, 1)

    html = html.replace('<div class="hero-copy">', '<div class="hero-copy p1-stagger">', 1)
    html = html.replace('<p class="eyebrow">Systems Placement Developer', '<p class="eyebrow" style="--i:0">Systems Placement Developer', 1)
    html = html.replace('<h1 id="intro-title">', '<h1 id="intro-title" style="--i:1">', 1)
    html = html.replace('<p class="hero-intro desktop-only">', '<p class="hero-intro desktop-only" style="--i:2">', 1)
    html = html.replace('<div class="hero-actions">', '<div class="hero-actions" style="--i:3">', 1)

    hold_btn_html = """
        <button class="p1-hold-btn" type="button" id="p1-hold-pitch" title="Hold for 1.1s to copy full recruiter brief">
          <span>Hold to copy 30s pitch</span>
          <span class="p1-hold-overlay" aria-hidden="true"><span>✓ Copying recruiter pitch…</span></span>
        </button>
"""
    html = html.replace(
        '<a class="plain-link desktop-only-inline" href="#work">Explore live builds ↓</a>',
        hold_btn_html,
        1,
    )

    warm_matrix_html = """
    <div class="p1-warm-bar">
      <span class="p1-warm-label">Hover to inspect architecture (0ms warm-tooltip handoff)</span>
      <div class="p1-warm-pills" id="p1-warm-pills">
        <div class="p1-warm-item" data-open="false">
          <button type="button" class="p1-warm-trigger"><span>01</span> NEOS Shield AI 2.0</button>
          <div class="p1-warm-popover" role="tooltip">
            <strong>Next plc · FTSE 100 Production</strong>
            Sole owner of AI Attribution 2.0. Auto-approves ≥90% Shield predictions and classifies editor changes into FeedbackAccept / Override / Reject.
          </div>
        </div>
        <div class="p1-warm-item" data-open="false">
          <button type="button" class="p1-warm-trigger"><span>02</span> Blazor → React v5</button>
          <div class="p1-warm-popover" role="tooltip">
            <strong>Agentic Migration &amp; Skills</strong>
            Merged Item Tracker v5 to main with reusable hill-climbing review-loop skills and Playwright font/interaction evidence gates.
          </div>
        </div>
        <div class="p1-warm-item" data-open="false">
          <button type="button" class="p1-warm-trigger"><span>03</span> Do It · 240 Par RLS</button>
          <div class="p1-warm-popover" role="tooltip">
            <strong>Next.js 16 + Supabase + AES-256-GCM</strong>
            Two-player habit parity calibrated to a 240 Daily Par ceiling with server-only encrypted wearable OAuth tokens.
          </div>
        </div>
        <div class="p1-warm-item" data-open="false">
          <button type="button" class="p1-warm-trigger"><span>04</span> NBN · 5r Hough CV</button>
          <div class="p1-warm-popover" role="tooltip">
            <strong>Python OpenCV + React 19 + Kotlin</strong>
            640px frame normalization, 5r dynamic ROI tracking, 15r outlier rejection, and 2nd-degree parabola shot fitting.
          </div>
        </div>
        <div class="p1-warm-item" data-open="false">
          <button type="button" class="p1-warm-trigger"><span>05</span> 1st-Class CS (89%)</button>
          <div class="p1-warm-popover" role="tooltip">
            <strong>Loughborough BSc CS · AAA Cambridge</strong>
            12 First-Class Honours modules including 89% Operating Systems &amp; Networks 2 and 86% Logic for Computer Science.
          </div>
        </div>
      </div>
    </div>
  </section>
"""
    html = html.replace("  </section>\n\n  <!-- 01. PRIMARY SELLING POINT", warm_matrix_html + "\n  <!-- 01. PRIMARY SELLING POINT", 1)

    # Inject interactive Lumina BLE GATT Hex Controller into Bento Card #1
    ble_widget = """
            <div class="p1-ble-widget" style="--ble-color:#6366f1">
              <span class="p1-ble-hex">7e 07 05 03 <b data-ble-out>63 66 f1</b> 10 ef</span>
              <div class="p1-ble-swatches" role="group" aria-label="Simulate BLE GATT RGB packet">
                <button type="button" class="p1-ble-swatch" style="background:#6366f1" data-ble-rgb="63 66 f1" data-ble-css="#6366f1" aria-pressed="true" aria-label="Indigo packet"></button>
                <button type="button" class="p1-ble-swatch" style="background:#10b981" data-ble-rgb="10 b9 81" data-ble-css="#10b981" aria-pressed="false" aria-label="Emerald packet"></button>
                <button type="button" class="p1-ble-swatch" style="background:#f59e0b" data-ble-rgb="f5 9e 0b" data-ble-css="#f59e0b" aria-pressed="false" aria-label="Amber packet"></button>
                <button type="button" class="p1-ble-swatch" style="background:#ec4899" data-ble-rgb="ec 48 99" data-ble-css="#ec4899" aria-pressed="false" aria-label="Rose packet"></button>
              </div>
            </div>
"""
    html = html.replace(
        "Synced to Windows Media &amp; Spotify.</p>\n          </div>",
        "Synced to Windows Media &amp; Spotify.</p>\n" + ble_widget + "\n          </div>",
        1,
    )

    cmdk_and_toaster = """
<!-- INSTANT 0ms ⌘K RECRUITER COMMAND PALETTE -->
<div class="p1-cmdk" id="p1-cmdk" data-open="false" role="dialog" aria-modal="true" aria-label="Recruiter Command Menu">
  <div class="p1-cmdk-box">
    <div class="p1-cmdk-input-wrap">
      <span>⌘K</span>
      <input class="p1-cmdk-input" id="p1-cmdk-input" type="text" placeholder="Jump to section, open 30s brief, or copy email…" autocomplete="off">
    </div>
    <div class="p1-cmdk-list">
      <button type="button" class="p1-cmdk-item" data-cmd-action="brief" data-selected="true"><span>Open 30-Second Recruiter Executive Brief</span><small>ENTER</small></button>
      <button type="button" class="p1-cmdk-item" data-cmd-action="email"><span>Copy Direct Email (maciekgeneja@gmail.com)</span><small>COPY</small></button>
      <button type="button" class="p1-cmdk-item" data-cmd-action="#placement"><span>01 · Next plc FTSE 100 Placement (NEOS Shield AI &amp; React Port)</span><small>JUMP</small></button>
      <button type="button" class="p1-cmdk-item" data-cmd-action="#work"><span>02 · Live Flagship Apps (Do It &amp; Nothing But Net)</span><small>JUMP</small></button>
      <button type="button" class="p1-cmdk-item" data-cmd-action="#opensource"><span>03 · Open Source T3 Code PRs &amp; Cross-Machine Lab</span><small>JUMP</small></button>
      <button type="button" class="p1-cmdk-item" data-cmd-action="#foundations"><span>04 · First-Class Honours Marks (89% OS &amp; Networks, 86% Logic)</span><small>JUMP</small></button>
      <button type="button" class="p1-cmdk-item" data-cmd-action="talk"><span>Open Direct Contact Sheet (Email, LinkedIn, WhatsApp)</span><small>MODAL</small></button>
      <button type="button" class="p1-cmdk-item" data-cmd-action="theme"><span>Toggle Dark / Light Studio Theme</span><small>THEME</small></button>
    </div>
  </div>
</div>

<!-- SONNER-STYLE STACKED TOAST CONTAINER -->
<div class="p1-toaster" id="p1-toaster" aria-live="polite"></div>
"""

    html = html.replace("</style>", SHARED_EMIL_CSS + "\n" + P1_CSS + "\n</style>", 1)
    html = html.replace("</body>", cmdk_and_toaster + make_picker_html(1) + f"<script>{SHARED_EMIL_JS}\n{P1_JS}</script>\n</body>", 1)
    return html


# ==============================================================================
# PROTOTYPE 2 (/2): "RECRUITER COCKPIT" — SPLIT-PANE EVALUATION WORKBENCH
# Axis: Persistent left Recruiter Dossier rail + interactive Role Fit Lens filter
#       + Side-by-Side Flagship comparison toggle + Vaul iOS-physics sheet drawer.
# ==============================================================================

P2_CSS = r"""
/* ==========================================================================
   PROTOTYPE 2 (/2): RECRUITER COCKPIT — SPLIT-PANE EVALUATION WORKBENCH
   ========================================================================== */
html[data-proto="2"] {
  --bg: #eef2f6 !important;
  --ink: #0f172a !important;
  --muted: #475569 !important;
  --line: #cbd5e1 !important;
  --accent: #059669 !important;
  --accent-soft: rgba(5, 150, 105, 0.12) !important;
  --panel: #ffffff;
}
html[data-proto="2"][data-theme="dark"] {
  --bg: #05090e !important;
  --ink: #f1f5f9 !important;
  --muted: #94a3b8 !important;
  --line: #1e293b !important;
  --accent: #10b981 !important;
  --accent-soft: rgba(16, 185, 129, 0.15) !important;
  --panel: #0b121c;
}
html[data-proto="2"] body {
  background: var(--bg) !important;
}
html[data-proto="2"] .p2-workbench {
  transition: transform 440ms var(--ease-drawer), filter 440ms var(--ease-drawer);
  transform-origin: center top;
}
html[data-proto="2"][data-sheet-open="true"] .p2-workbench {
  transform: scale(0.975) translateY(6px);
  filter: brightness(0.85);
}

/* Split-Pane Workbench Grid on Desktop */
@media (min-width: 1024px) {
  html[data-proto="2"] .p2-workbench {
    display: grid;
    grid-template-columns: 350px minmax(0, 1fr);
    gap: 24px;
    width: min(1440px, calc(100% - 48px));
    margin: 20px auto 0;
    align-items: start;
  }
  html[data-proto="2"] .p2-rail {
    position: sticky;
    top: 86px;
    max-height: calc(100dvh - 110px);
    overflow-y: auto;
    scrollbar-width: none;
  }
  html[data-proto="2"] .p2-rail::-webkit-scrollbar {
    display: none;
  }
  html[data-proto="2"] .p2-stage .wrap {
    width: 100%;
    margin-inline: 0;
  }
  html[data-proto="2"] .p2-stage .hero {
    display: none; /* Replaced by the persistent Left Recruiter Dossier Rail + Top Stage Summary! */
  }
  html[data-proto="2"] .p2-stage .placement {
    padding-top: 0;
  }
  html[data-proto="2"] .p2-stage .work,
  html[data-proto="2"] .p2-stage .opensource,
  html[data-proto="2"] .p2-stage .specs,
  html[data-proto="2"] .p2-stage .about-section {
    padding-top: 44px;
  }
  html[data-proto="2"] .work-track {
    --page-gap: 0px !important;
    padding: 0 !important;
  }
  html[data-proto="2"] .work-slide {
    flex-basis: 100% !important;
  }
}

/* Left Recruiter Dossier Rail */
.p2-rail {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (max-width: 1023px) {
  .p2-rail {
    width: calc(100% - 36px);
    margin: 16px auto 0;
  }
}
.p2-dossier-head {
  display: flex;
  align-items: center;
  gap: 13px;
}
.p2-avatar {
  width: 56px;
  height: 62px;
  border-radius: 12px;
  object-fit: cover;
  object-position: 35% 50%;
  flex-shrink: 0;
  border: 1px solid var(--line);
}
.p2-dossier-id strong {
  display: block;
  font-size: 16px;
  font-weight: 650;
  letter-spacing: -0.03em;
  color: var(--ink);
}
.p2-dossier-id span {
  display: block;
  font-size: 11.5px;
  color: var(--muted);
  line-height: 1.4;
  margin-top: 2px;
}
.p2-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  padding: 3px 9px;
  border-radius: 99px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 10.5px;
  font-weight: 600;
}
.p2-status-pill i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

/* Role Fit Lens Selector */
.p2-lens-box {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px;
}
.p2-lens-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}
.p2-lens-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}
.p2-lens-btn {
  padding: 7px 10px;
  border-radius: 9px;
  background: var(--panel);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 11.5px;
  font-weight: 550;
  text-align: left;
  transition:
    background 160ms var(--ease-out),
    color 160ms var(--ease-out),
    border-color 160ms var(--ease-out),
    transform 140ms var(--ease-out);
}
.p2-lens-btn[aria-pressed="true"] {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.p2-lens-summary {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  font-size: 11.5px;
  line-height: 1.5;
  color: var(--ink);
  transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out);
}
.p2-lens-summary b {
  color: var(--accent);
}

/* 6-Second Scorecard Grid */
.p2-score-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.p2-score-card {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 11px;
  padding: 9px 11px;
}
.p2-score-card strong {
  display: block;
  font-size: 16px;
  font-weight: 650;
  letter-spacing: -0.03em;
  color: var(--ink);
}
.p2-score-card span {
  display: block;
  font-size: 10.5px;
  color: var(--muted);
  margin-top: 2px;
}

/* Pinned Dossier Quick Actions */
.p2-rail-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}
.p2-rail-btn {
  height: 36px;
  border-radius: 10px;
  font-size: 11.5px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  transition: border-color 160ms var(--ease-out), background 160ms var(--ease-out);
}
.p2-rail-btn.primary {
  grid-column: 1 / -1;
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

/* Right Stage Top Workbench Bar + Side-by-Side Flagship Compare Toggle */
.p2-stage-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 18px;
  padding: 12px 16px;
  border-radius: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
}
.p2-stage-kicker {
  font-size: 12px;
  font-weight: 600;
  color: var(--ink);
}
.p2-stage-kicker span {
  color: var(--accent);
}
.p2-compare-toggle {
  padding: 6px 12px;
  border-radius: 99px;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  font-size: 11.5px;
  font-weight: 600;
}
.p2-compare-toggle[aria-pressed="true"] {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

/* Side-by-Side Dual-Monitor Flagship App Comparison Mode! */
html[data-proto="2"] .work[data-compare="true"] .work-track {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 16px !important;
  overflow: visible !important;
}
html[data-proto="2"] .work[data-compare="true"] .work-slide {
  grid-template-columns: 1fr !important;
  padding: 24px !important;
  height: auto !important;
  min-height: 0 !important;
}
html[data-proto="2"] .work[data-compare="true"] .slide-copy {
  padding-bottom: 12px !important;
}
html[data-proto="2"] .work[data-compare="true"] .slide-art {
  padding: 0 !important;
  height: auto !important;
}
html[data-proto="2"] .work[data-compare="true"] .app-frame {
  width: 100% !important;
  border-radius: 10px !important;
}
html[data-proto="2"] .work[data-compare="true"] .app-frame > img {
  height: 230px !important;
}
html[data-proto="2"] .work[data-compare="true"] .work-controls {
  display: none !important;
}

/* Role Lens Highlighting on Stage Cards */
html[data-proto="2"][data-lens="enterprise"] [data-lens-role]:not([data-lens-role*="enterprise"]),
html[data-proto="2"][data-lens="ai"] [data-lens-role]:not([data-lens-role*="ai"]),
html[data-proto="2"][data-lens="fullstack"] [data-lens-role]:not([data-lens-role*="fullstack"]) {
  opacity: 0.42;
  transform: scale(0.985);
}
html[data-proto="2"] [data-lens-role] {
  transition:
    opacity 240ms var(--ease-out),
    transform 240ms var(--ease-out),
    box-shadow 240ms var(--ease-out);
}
html[data-proto="2"][data-lens="enterprise"] [data-lens-role*="enterprise"],
html[data-proto="2"][data-lens="ai"] [data-lens-role*="ai"],
html[data-proto="2"][data-lens="fullstack"] [data-lens-role*="fullstack"] {
  box-shadow: 0 0 0 2px var(--accent) !important;
}

/* Vaul / Apple-Design Physics Bottom Sheet Drawer (--ease-drawer) */
.p2-sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 99995;
  background: rgba(5, 8, 15, 0.55);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 320ms var(--ease-drawer);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.p2-sheet-backdrop[data-open="true"] {
  opacity: 1;
  pointer-events: auto;
}
.p2-sheet {
  width: min(680px, 100vw);
  max-height: 85dvh;
  background: var(--panel);
  color: var(--ink);
  border-top: 1px solid var(--line);
  border-radius: 22px 22px 0 0;
  padding: 12px 28px 32px;
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 0.45);
  transform: translateY(100%);
  transition: transform 440ms var(--ease-drawer);
  overflow-y: auto;
  touch-action: none;
}
.p2-sheet-backdrop[data-open="true"] .p2-sheet {
  transform: translateY(0);
}
.p2-sheet-handle {
  width: 42px;
  height: 5px;
  border-radius: 99px;
  background: var(--muted);
  opacity: 0.35;
  margin: 4px auto 16px;
  cursor: grab;
}
"""

P2_JS = r"""
(function(){
  /* 1. Role Fit Lens Switcher (Enterprise .NET vs Applied AI/ML vs Full-Stack React) */
  const lensBtns = [...document.querySelectorAll('[data-p2-lens]')];
  const lensSummary = document.getElementById('p2-lens-summary');
  const summaries = {
    all: '<b>All Signal Active:</b> Showing complete FTSE 100 Next plc placement, 2 live SaaS/CV flagships, 5 T3 Code PRs, and 12 First-Class modules.',
    enterprise: '<b>Enterprise .NET &amp; Systems Lens:</b> Spotlighting Next plc NEOS C#/.NET microservices, Field Approval Rules engine, Make-It-All RBAC, Embedded C++ FSM, and 89% OS &amp; Networks.',
    ai: '<b>Applied AI &amp; Computer Vision Lens:</b> Spotlighting NEOS Shield AI Attribution 2.0 (CEO half-year highlight), Nothing But Net 5r Hough OpenCV parabola engine, LyricForge 5-agent audio, and The Lab.',
    fullstack: '<b>Full-Stack React &amp; Product Lens:</b> Spotlighting NEOS Item Tracker Blazor → React port (v5 merged to main), Do It (Next.js 16 + Supabase RLS + AES-256-GCM), and T3 Code TypeScript PRs.'
  };
  lensBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lens = btn.dataset.p2Lens;
      document.documentElement.setAttribute('data-lens', lens);
      lensBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      if (lensSummary && summaries[lens]) {
        lensSummary.style.opacity = '0.3';
        lensSummary.style.transform = 'translateY(3px)';
        setTimeout(() => {
          lensSummary.innerHTML = summaries[lens];
          lensSummary.style.opacity = '1';
          lensSummary.style.transform = 'translateY(0)';
        }, 90);
      }
    });
  });

  /* 2. Side-by-Side Dual-App Comparison Toggle for Do It & Nothing But Net */
  const compareBtn = document.getElementById('p2-compare-btn');
  const workSec = document.getElementById('work');
  if (compareBtn && workSec) {
    if (window.innerWidth >= 1024) {
      workSec.setAttribute('data-compare', 'true');
      compareBtn.setAttribute('aria-pressed', 'true');
      compareBtn.textContent = '⊞ Side-by-Side Flagships: ON';
    }
    compareBtn.addEventListener('click', () => {
      const on = workSec.getAttribute('data-compare') !== 'true';
      workSec.setAttribute('data-compare', String(on));
      compareBtn.setAttribute('aria-pressed', String(on));
      compareBtn.textContent = on ? '⊞ Side-by-Side Flagships: ON' : '⊟ Side-by-Side Flagships: OFF';
    });
  }

  /* 3. Vaul / Apple-Design Physics Drag-to-Dismiss Sheet (skills/gestures + apple-design) */
  const sheetBackdrop = document.getElementById('p2-sheet-backdrop');
  const sheet = document.getElementById('p2-sheet');
  function openSheet() {
    if (!sheetBackdrop || !sheet) return;
    sheet.style.transform = '';
    sheetBackdrop.setAttribute('data-open', 'true');
    document.documentElement.setAttribute('data-sheet-open', 'true');
  }
  function closeSheet() {
    if (!sheetBackdrop || !sheet) return;
    sheetBackdrop.setAttribute('data-open', 'false');
    document.documentElement.removeAttribute('data-sheet-open');
    sheet.style.transform = '';
  }
  document.querySelectorAll('[data-open-p2-sheet]').forEach(b => b.addEventListener('click', openSheet));
  sheetBackdrop?.addEventListener('click', e => { if (e.target === sheetBackdrop) closeSheet(); });

  if (sheet) {
    let dragging = false, startY = 0, startTime = 0;
    sheet.addEventListener('pointerdown', e => {
      if (sheet.scrollTop > 0) return;
      dragging = true;
      startY = e.clientY;
      startTime = Date.now();
      sheet.setPointerCapture(e.pointerId);
      sheet.style.transition = 'none';
    });
    sheet.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dy = e.clientY - startY;
      /* Rubber-band damping when pulled upward past boundary (Emil's gesture rule) */
      const damped = dy < 0 ? -Math.pow(Math.abs(dy), 0.65) : dy;
      sheet.style.transform = `translateY(${damped}px)`;
    });
    sheet.addEventListener('pointerup', e => {
      if (!dragging) return;
      dragging = false;
      const dy = e.clientY - startY;
      const vel = dy / Math.max(1, Date.now() - startTime);
      sheet.style.transition = '';
      if (dy > 90 || vel > 0.14) {
        closeSheet();
      } else {
        sheet.style.transform = '';
      }
    });
  }
})();
"""


def build_prototype_2() -> str:
    html = base_html
    html = html.replace('<html lang="en" data-theme="dark">', '<html lang="en" data-theme="dark" data-proto="2" data-lens="all">', 1)
    html = html.replace(
        "<title>Maciek Geneja | Enterprise Systems, Applied AI &amp; Full-Stack Software Engineer</title>",
        "<title>Maciek Geneja · Prototype 2 (Recruiter Cockpit) | Split-Pane Evaluation Workbench</title>",
        1,
    )

    photo_m = re.search(r'<img src="([^"]+)" alt="Maciek Geneja"', html)
    photo_src = photo_m.group(1) if photo_m else ""

    html = html.replace('<div class="neos-stage reveal">', '<div class="neos-stage reveal" data-lens-role="enterprise ai fullstack">', 1)
    html = html.replace('<article class="work-slide doit-slide">', '<article class="work-slide doit-slide" data-lens-role="fullstack enterprise">', 1)
    html = html.replace('<article class="work-slide nbn-slide">', '<article class="work-slide nbn-slide" data-lens-role="ai fullstack">', 1)
    html = html.replace('<article class="bento-card featured">', '<article class="bento-card featured" data-lens-role="enterprise ai">', 1)
    html = html.replace('<article class="bento-card">', '<article class="bento-card" data-lens-role="ai">', 1)
    html = html.replace('<article class="bento-card m-extra-bento">', '<article class="bento-card m-extra-bento" data-lens-role="enterprise fullstack">', 2)
    html = html.replace('<article class="oss-card">', '<article class="oss-card" data-lens-role="fullstack ai enterprise">', 2)

    rail_and_stage_open = f"""
<div class="p2-workbench">
  <!-- LEFT PERSISTENT RECRUITER DOSSIER RAIL -->
  <aside class="p2-rail" aria-label="Candidate Recruiter Dossier">
    <div class="p2-dossier-head">
      <img class="p2-avatar" src="{photo_src}" alt="Maciek Geneja" width="56" height="62">
      <div class="p2-dossier-id">
        <strong>Maciek Geneja</strong>
        <span>Systems Placement Dev @ Next plc<br>1st-Class BSc CS @ Loughborough</span>
        <span class="p2-status-pill"><i aria-hidden="true"></i>Open to Grad &amp; SWE/ML Roles</span>
      </div>
    </div>

    <div class="p2-lens-box">
      <div class="p2-lens-title">
        <span>Recruiter Role Fit Lens</span>
        <span>Interactive</span>
      </div>
      <div class="p2-lens-grid" role="group" aria-label="Filter portfolio by target role">
        <button type="button" class="p2-lens-btn" data-p2-lens="all" aria-pressed="true">✦ All Signal</button>
        <button type="button" class="p2-lens-btn" data-p2-lens="enterprise">C# / .NET Systems</button>
        <button type="button" class="p2-lens-btn" data-p2-lens="ai">Applied AI &amp; CV</button>
        <button type="button" class="p2-lens-btn" data-p2-lens="fullstack">React / Next.js</button>
      </div>
      <p class="p2-lens-summary" id="p2-lens-summary">
        <b>All Signal Active:</b> Showing complete FTSE 100 Next plc placement, 2 live SaaS/CV flagships, 5 T3 Code PRs, and 12 First-Class modules.
      </p>
    </div>

    <div class="p2-score-grid">
      <div class="p2-score-card"><strong>FTSE 100</strong><span>Next plc · NEOS AI 2.0</span></div>
      <div class="p2-score-card"><strong>1st Class</strong><span>89% OS/Net · 86% Logic</span></div>
      <div class="p2-score-card"><strong>20+ PRs</strong><span>210+ production commits</span></div>
      <div class="p2-score-card"><strong>5 OSS PRs</strong><span>Merged in pingdotgg/t3code</span></div>
    </div>

    <div class="p2-rail-actions">
      <button type="button" class="p2-rail-btn primary" data-open-p2-sheet>Swipeable 30s Recruiter Sheet ↑</button>
      <a class="p2-rail-btn" href="mailto:maciekgeneja@gmail.com?subject=Software%20Engineering%20Opportunity">Email ↗</a>
      <a class="p2-rail-btn" href="https://www.linkedin.com/in/maciekgeneja" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a class="p2-rail-btn" href="https://github.com/Maseeek" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <button type="button" class="p2-rail-btn" data-open-talk>All Contact</button>
    </div>
  </aside>

  <!-- RIGHT INTERACTIVE EVIDENCE WORKBENCH -->
  <div class="p2-stage">
    <div class="p2-stage-bar">
      <div class="p2-stage-kicker"><span>Prototype 02 · Recruiter Cockpit</span> — Zero-scroll-waste split-pane evaluation workbench</div>
      <button type="button" class="p2-compare-toggle" id="p2-compare-btn" aria-pressed="false">⊞ Side-by-Side Flagships: OFF</button>
    </div>
"""

    html = html.replace('<main id="main">', '<main id="main">' + rail_and_stage_open, 1)
    html = html.replace('</main>', '  </div>\n</div>\n</main>', 1)

    vaul_sheet_html = """
<!-- VAUL / APPLE-DESIGN PHYSICS DRAG-TO-DISMISS SHEET -->
<div class="p2-sheet-backdrop" id="p2-sheet-backdrop" data-open="false" role="dialog" aria-modal="true" aria-label="Recruiter 30-second sheet">
  <div class="p2-sheet" id="p2-sheet">
    <div class="p2-sheet-handle" aria-hidden="true"></div>
    <p class="eyebrow muted">Drag down to dismiss · Apple / Vaul cubic-bezier(0.32, 0.72, 0, 1)</p>
    <h2 style="font-size:28px;letter-spacing:-0.04em;margin:6px 0 10px">30-Second Candidate Evaluation</h2>
    <p style="font-size:13.5px;color:var(--muted);line-height:1.6;margin-bottom:14px">
      Drag this sheet 1:1 with your pointer or flick downward to dismiss with momentum physics.
    </p>
    <dl class="brief-list">
      <div><dt>FTSE 100 Impact</dt><dd><strong>Systems Placement Developer at Next plc</strong>. Sole owner of <strong>NEOS AI Attribution 2.0</strong> for Shield AI (highlighted by CEO Simon Wolfson in half-year results) &amp; lead on the agentic <strong>Blazor → React Item Tracker port</strong> (<code>v5</code> merged to <code>main</code>).</dd></div>
      <div><dt>Academic Track</dt><dd><strong>First-Class Honours BSc Computer Science</strong> at Loughborough University (12 First-Class modules: 89% OS &amp; Networks 2, 86% Logic, 77% Maths). A, A, A at Hills Road Cambridge.</dd></div>
      <div><dt>Live Flagships</dt><dd><strong>Do It</strong> (Next.js 16 + Supabase RLS + AES-256-GCM wearable sync) &amp; <strong>Nothing But Net</strong> (Python OpenCV 5r Hough ROI + React 19 + Kotlin).</dd></div>
    </dl>
    <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap">
      <a class="button" href="mailto:maciekgeneja@gmail.com?subject=Engineering%20Opportunity">Email Maciek</a>
      <a class="button secondary-cta" href="https://www.linkedin.com/in/maciekgeneja" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="button secondary-cta" href="https://wa.me/447383557416" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  </div>
</div>
"""

    html = html.replace("</style>", SHARED_EMIL_CSS + "\n" + P2_CSS + "\n</style>", 1)
    html = html.replace("</body>", vaul_sheet_html + make_picker_html(2) + f"<script>{SHARED_EMIL_JS}\n{P2_JS}</script>\n</body>", 1)
    return html


# ==============================================================================
# PROTOTYPE 3 (/3): "SWISS MONOGRAPH" — ARCHITECTURAL CASE-STUDY PUBLICATION
# Axis: Warm Archival Stone Paper default + Exposed 1px architectural grid,
#       high-contrast editorial serif + mono typography, WAAPI/CSS clip-path
#       curtain reveals, and interactive animated system pipeline blueprints.
# ==============================================================================

P3_CSS = r"""
/* ==========================================================================
   PROTOTYPE 3 (/3): SWISS MONOGRAPH — ARCHITECTURAL CASE-STUDY PUBLICATION
   ========================================================================== */
html[data-proto="3"] {
  --bg: #f5f1e8 !important;
  --ink: #111315 !important;
  --muted: #57534e !important;
  --line: #d4cdc0 !important;
  --accent: #d9381e !important; /* International Swiss Engineering Vermilion */
  --accent-soft: rgba(217, 56, 30, 0.12) !important;
  --blueprint-bg: #0f172a;
  --serif: "Instrument Serif", "Newsreader", "Playfair Display", "Iowan Old Style", Georgia, serif;
  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
html[data-proto="3"][data-theme="dark"] {
  --bg: #090b10 !important;
  --ink: #f2efe9 !important;
  --muted: #9ca3af !important;
  --line: #242b38 !important;
  --accent: #f97316 !important;
  --accent-soft: rgba(249, 115, 22, 0.15) !important;
  --blueprint-bg: #0b111e;
}

html[data-proto="3"] body {
  background: var(--bg) !important;
  color: var(--ink) !important;
  /* Exposed architectural vertical grid lines */
  background-image:
    linear-gradient(to right, var(--line) 1px, transparent 1px),
    linear-gradient(to right, var(--line) 1px, transparent 1px) !important;
  background-size: min(1240px, calc(100% - 64px)) 100% !important;
  background-position: center top !important;
  background-repeat: no-repeat !important;
}

html[data-proto="3"] .site-head {
  background: var(--bg) !important;
  border-bottom: 1px solid var(--line) !important;
}

/* Editorial Masthead Strip */
.p3-masthead {
  border-bottom: 1px solid var(--line);
  padding: 10px 0;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  background: var(--bg);
}
.p3-masthead-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.p3-coord {
  color: var(--accent);
  font-weight: 700;
}

/* High-Contrast Editorial Serif Display Headings (apple-design §15 optical sizing & tracking) */
html[data-proto="3"] .hero h1,
html[data-proto="3"] .section-heading h2,
html[data-proto="3"] .footer-contact h2 {
  font-family: var(--serif) !important;
  font-weight: 400 !important;
  letter-spacing: -0.03em !important;
  line-height: 0.98 !important;
}
html[data-proto="3"] .hero h1 {
  font-size: clamp(54px, 6.4vw, 86px) !important;
}
html[data-proto="3"] .section-heading h2 {
  font-size: clamp(42px, 4.8vw, 64px) !important;
}
html[data-proto="3"] .eyebrow {
  font-family: var(--mono) !important;
  font-size: 11px !important;
  letter-spacing: 0.08em !important;
}

/* Exposed Hairline Architectural Frames (Sharp 2px corners instead of rounded bubbles) */
html[data-proto="3"] .neos-stage,
html[data-proto="3"] .work-slide,
html[data-proto="3"] .bento-card,
html[data-proto="3"] .oss-card,
html[data-proto="3"] .about-card,
html[data-proto="3"] .footer-contact,
html[data-proto="3"] .photo-card {
  border-radius: 2px !important;
  background: var(--bg) !important;
  border: 1px solid var(--line) !important;
  box-shadow: none !important;
}

/* Full-Width Editorial Monograph Spreads for Do It & Nothing But Net (No horizontal scroll!) */
html[data-proto="3"] .work-track {
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow: visible !important;
  padding: 0 !important;
  width: min(1200px, calc(100% - 96px));
  margin-inline: auto;
}
html[data-proto="3"] .work-slide {
  flex: none !important;
  width: 100% !important;
  min-height: 0 !important;
  height: auto !important;
  padding: 36px !important;
  grid-template-columns: 1fr 1.55fr !important;
}
html[data-proto="3"] .work-controls {
  display: none !important;
}

/* Interactive System Pipeline Blueprint Overlay inside Flagship Spreads */
.p3-mode-switch {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px;
  border: 1px solid var(--line);
  background: var(--bg);
  font-family: var(--mono);
  font-size: 10.5px;
}
.p3-mode-btn {
  padding: 5px 10px;
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--muted);
  background: transparent;
}
.p3-mode-btn.is-active {
  background: var(--accent);
  color: #fff;
}

.p3-blueprint {
  display: none;
  background: var(--blueprint-bg);
  color: #e2e8f0;
  border: 1px solid rgba(96, 165, 250, 0.35);
  padding: 22px;
  font-family: var(--mono);
  min-height: 365px;
  flex-direction: column;
  justify-content: space-between;
  background-image:
    linear-gradient(to right, rgba(96, 165, 250, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(96, 165, 250, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
}
.app-stage[data-blueprint="true"] .app-frame {
  display: none !important;
}
.app-stage[data-blueprint="true"] .p3-blueprint {
  display: flex !important;
  animation: p3-bp-in 240ms var(--ease-out) both;
}
@keyframes p3-bp-in {
  from {
    opacity: 0;
    transform: scale(0.97);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.p3-bp-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #93c5fd;
  border-bottom: 1px solid rgba(96, 165, 250, 0.22);
  padding-bottom: 10px;
}
.p3-bp-nodes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 18px 0;
}
.p3-bp-node {
  padding: 12px 10px;
  border: 1px solid rgba(96, 165, 250, 0.3);
  background: rgba(15, 23, 42, 0.85);
  color: #cbd5e1;
  text-align: left;
  font-family: var(--mono);
  font-size: 11px;
  transition: border-color 160ms var(--ease-out), transform 160ms var(--ease-out);
}
.p3-bp-node[aria-selected="true"] {
  border-color: #38bdf8;
  background: rgba(30, 58, 138, 0.55);
  color: #fff;
}
.p3-bp-node small {
  display: block;
  color: #38bdf8;
  font-size: 9.5px;
  margin-bottom: 4px;
}
.p3-bp-detail {
  padding: 14px;
  background: rgba(2, 6, 23, 0.78);
  border-left: 3px solid #38bdf8;
  font-size: 12px;
  line-height: 1.6;
  color: #e2e8f0;
}

/* Emil's Scroll Reveal Curtain Recipe (clip-path: inset(0 0 100% 0) -> inset(0 0 0 0)) */
.js .p3-curtain {
  clip-path: inset(0 0 100% 0);
  transition: clip-path 580ms var(--ease-in-out);
}
.js .p3-curtain.is-visible {
  clip-path: inset(0 0 0 0);
}
@media (prefers-reduced-motion: reduce) {
  .js .p3-curtain {
    clip-path: none !important;
  }
}

@media (max-width: 900px) {
  html[data-proto="3"] .work-track {
    width: calc(100% - 36px);
  }
  html[data-proto="3"] .work-slide {
    grid-template-columns: 1fr !important;
    padding: 22px !important;
  }
  .p3-bp-nodes {
    grid-template-columns: 1fr 1fr;
  }
}
"""

P3_JS = r"""
(function(){
  /* Default Prototype 3 to Warm Archival Stone Paper ('light') so its Swiss Monograph identity shines immediately (toggleable via Theme button) */
  if (typeof applySiteTheme === 'function') {
    applySiteTheme('light');
  }

  /* 1. Curtain Reveal Observer (Emil's clip-path scroll reveal recipe, fired once) */
  const headings = document.querySelectorAll('.section-heading h2');
  headings.forEach(h => h.classList.add('p3-curtain'));
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          co.unobserve(en.target);
        }
      });
    }, {threshold: 0.15});
    headings.forEach(h => co.observe(h));
  } else {
    headings.forEach(h => h.classList.add('is-visible'));
  }

  /* 2. Interactive Live UI <-> System Pipeline Blueprint Toggle on Flagship Spreads */
  document.querySelectorAll('[data-p3-stage-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      const stage = btn.closest('.app-stage');
      if (!stage) return;
      const isBp = btn.dataset.p3StageMode === 'blueprint';
      stage.setAttribute('data-blueprint', String(isBp));
      stage.querySelectorAll('[data-p3-stage-mode]').forEach(b => b.classList.toggle('is-active', b === btn));
    });
  });

  /* 3. Interactive Blueprint Pipeline Node Inspector */
  document.querySelectorAll('.p3-bp-node').forEach(node => {
    node.addEventListener('click', () => {
      const bp = node.closest('.p3-blueprint');
      if (!bp) return;
      bp.querySelectorAll('.p3-bp-node').forEach(n => n.setAttribute('aria-selected', String(n === node)));
      const detail = bp.querySelector('.p3-bp-detail');
      if (detail && node.dataset.bpSpec) {
        detail.textContent = node.dataset.bpSpec;
      }
    });
  });
})();
"""


def build_prototype_3() -> str:
    html = base_html
    html = html.replace('<html lang="en" data-theme="dark">', '<html lang="en" data-theme="light" data-proto="3">', 1)
    html = html.replace(
        "<title>Maciek Geneja | Enterprise Systems, Applied AI &amp; Full-Stack Software Engineer</title>",
        "<title>Maciek Geneja · Prototype 3 (Swiss Monograph) | Architectural Case-Study Publication</title>",
        1,
    )

    masthead = """
<div class="p3-masthead">
  <div class="wrap p3-masthead-inner">
    <span><b class="p3-coord">[MONOGRAPH 03 // SWISS EDITORIAL]</b> · MACIEK GENEJA ENGINEERING DOSSIER</span>
    <span>FTSE 100 NEXT PLC · 1ST-CLASS HONOURS BSC CS (89% TOP) · LOUGHBOROUGH, UK</span>
  </div>
</div>
"""
    html = html.replace('<header class="site-head">', masthead + '<header class="site-head">', 1)

    doit_bp_toggle = """
              <div class="p3-mode-switch" role="group" aria-label="Display mode">
                <button type="button" class="p3-mode-btn is-active" data-p3-stage-mode="ui">LIVE UI</button>
                <button type="button" class="p3-mode-btn" data-p3-stage-mode="blueprint">BLUEPRINT</button>
              </div>
              <button type="button" class="mode-pill" data-doit-mode="dark" aria-pressed="true">◐ Dark UI</button>
"""
    html = html.replace(
        '<button type="button" class="mode-pill" data-doit-mode="dark" aria-pressed="true">◐ Dark UI</button>',
        doit_bp_toggle,
        1,
    )

    doit_bp_panel = """
          <div class="p3-blueprint" aria-label="Do It Interactive System Architecture Blueprint">
            <div class="p3-bp-head">
              <span>SCHEMATIC 02.A // DO IT HABIT PARITY ENGINE</span>
              <span>CLICK NODE TO INSPECT INVARIANT</span>
            </div>
            <div class="p3-bp-nodes">
              <button type="button" class="p3-bp-node" aria-selected="true" data-bp-spec="STAGE 01 [WEARABLE INGEST]: OAuth2 pipelines for Apple Health, Google Health, Strava, and Hevy normalize workout & biometric telemetry into deterministic habit completions.">
                <small>01 // INGEST</small>Wearable OAuth Sync
              </button>
              <button type="button" class="p3-bp-node" aria-selected="false" data-bp-spec="STAGE 02 [CRYPTO VAULT]: Refresh & access tokens are encrypted server-side via AES-256-GCM with per-row IVs before persistence; client bundles never touch raw credentials.">
                <small>02 // CRYPTO</small>AES-256-GCM Vault
              </button>
              <button type="button" class="p3-bp-node" aria-selected="false" data-bp-spec="STAGE 03 [MULTI-TENANT RLS]: PostgreSQL Row-Level Security policies enforce strict slot isolation (player_a_id / player_b_id) across every head-to-head duel query.">
                <small>03 // ISOLATION</small>Supabase Slot RLS
              </button>
              <button type="button" class="p3-bp-node" aria-selected="false" data-bp-spec="STAGE 04 [240 DAILY PAR]: Normalizes asymmetric player schedules to an invariant 240-point Daily Par ceiling so a software engineer and marathon runner compete on equal terms.">
                <small>04 // SCORING</small>240 Daily Par Engine
              </button>
            </div>
            <div class="p3-bp-detail">
              STAGE 01 [WEARABLE INGEST]: OAuth2 pipelines for Apple Health, Google Health, Strava, and Hevy normalize workout &amp; biometric telemetry into deterministic habit completions.
            </div>
          </div>
"""
    html = html.replace(
        'alt="Do It signed-in two-player habit competition dashboard" width="1080" height="675" loading="lazy">\n          </div>',
        'alt="Do It signed-in two-player habit competition dashboard" width="1080" height="675" loading="lazy">\n          </div>\n' + doit_bp_panel,
        1,
    )

    nbn_bp_toggle = """
              <div class="p3-mode-switch" role="group" aria-label="Display mode">
                <button type="button" class="p3-mode-btn is-active" data-p3-stage-mode="ui">LIVE UI</button>
                <button type="button" class="p3-mode-btn" data-p3-stage-mode="blueprint">BLUEPRINT</button>
              </div>
              <button type="button" class="mode-pill" data-nbn-mode="dark" aria-pressed="true">◐ Dark UI</button>
"""
    html = html.replace(
        '<button type="button" class="mode-pill" data-nbn-mode="dark" aria-pressed="true">◐ Dark UI</button>',
        nbn_bp_toggle,
        1,
    )

    nbn_bp_panel = """
          <div class="p3-blueprint" aria-label="Nothing But Net Interactive Computer Vision Blueprint">
            <div class="p3-bp-head">
              <span>SCHEMATIC 02.B // NOTHING BUT NET OPENCV TRAJECTORY PIPELINE</span>
              <span>CLICK NODE TO INSPECT INVARIANT</span>
            </div>
            <div class="p3-bp-nodes">
              <button type="button" class="p3-bp-node" aria-selected="true" data-bp-spec="STAGE 01 [640PX NORMALIZATION]: Incoming Kotlin CameraX / web footage is resampled to a canonical 640px width and masked in HSV color space to isolate basketball orange.">
                <small>01 // FRAME</small>640px + HSV Mask
              </button>
              <button type="button" class="p3-bp-node" aria-selected="false" data-bp-spec="STAGE 02 [5R DYNAMIC ROI]: Adaptive Hough Circle Transforms search inside a moving 5-radius Region of Interest window locked to the ball's velocity vector.">
                <small>02 // TRACKING</small>5r Hough ROI Window
              </button>
              <button type="button" class="p3-bp-node" aria-selected="false" data-bp-spec="STAGE 03 [15R OUTLIER GATE]: Candidate detections jumping >15 radii from the predicted kinematic arc are rejected as crowd/jersey false positives.">
                <small>03 // FILTER</small>15r Outlier Reject
              </button>
              <button type="button" class="p3-bp-node" aria-selected="false" data-bp-spec="STAGE 04 [PARABOLIC FIT]: Fits a 2nd-degree polynomial (y = Ax² + Bx + C) via NumPy least-squares to compute entry angle, apex height, and rim intersection.">
                <small>04 // REGRESSION</small>y = Ax² + Bx + C
              </button>
            </div>
            <div class="p3-bp-detail">
              STAGE 01 [640PX NORMALIZATION]: Incoming Kotlin CameraX / web footage is resampled to a canonical 640px width and masked in HSV color space to isolate basketball orange.
            </div>
          </div>
"""
    html = html.replace(
        'alt="Nothing But Net live basketball analytics application" width="1080" height="675" loading="lazy">\n          </div>',
        'alt="Nothing But Net live basketball analytics application" width="1080" height="675" loading="lazy">\n          </div>\n' + nbn_bp_panel,
        1,
    )

    html = html.replace("</style>", SHARED_EMIL_CSS + "\n" + P3_CSS + "\n</style>", 1)
    html = html.replace("</body>", make_picker_html(3) + f"<script>{SHARED_EMIL_JS}\n{P3_JS}</script>\n</body>", 1)
    return html


def main():
    p1 = build_prototype_1()
    p2 = build_prototype_2()
    p3 = build_prototype_3()

    for idx, content in [(1, p1), (2, p2), (3, p3)]:
        pub_path = PUBLIC / f"prototype-{idx}.html"
        con_path = CONCEPTS / f"prototype-{idx}.html"
        pub_path.write_text(content, encoding="utf-8")
        con_path.write_text(content, encoding="utf-8")
        print(f"Built {pub_path} ({pub_path.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
