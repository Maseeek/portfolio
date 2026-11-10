# AGENTS

## Portfolio Architecture & Canonical Sources of Truth

- **Active Portfolio (`main` branch)**:
  - The live flagship portfolio is served from `public/05-the-full-portfolio.html` (and `concepts/05-the-full-portfolio.html` / `concepts/index.html`), routed at `/` via `next.config.ts` (`beforeFiles` rewrite).
  - Deep-dive `/blog/*` routes (`app/blog/*`) remain live and accessible on `main`.
- **Legacy Next.js Portfolio (`legacy-portfolio` branch)**:
  - The complete previous Next.js portfolio (`bc33bf7`) is preserved on the **`legacy-portfolio`** branch (`origin/legacy-portfolio`).
  - Whenever an agent needs historical copy, full-length architectural case studies, resume data (`app/data/resume.ts`), or component implementations from the previous portfolio (e.g., `Valdris`, `Enterprise Agentic Systems / The Lab`, `Nothing But Net`, `Do It`, `Make-It-All`, `ENT Care Hub`, `LyricForge`, `Lumina / LED-REMOTE-CONTROL`, `Embedded Payroll System`, `Event Ticket Booking`, `Choi's Cutting Lounge`, `Python Basketball Analysis`, or `content/blogs/architecting-distributed-ai-inference.md`), inspect **`legacy-portfolio`** (or `app/blog/*` and `app/data/resume.ts`) as a canonical source of truth.
  - Quick inspection commands:
    - `git show legacy-portfolio:app/data/resume.ts`
    - `git show legacy-portfolio:app/page.tsx`
    - `git ls-tree -r --name-only legacy-portfolio app/blog/`

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues on `Maseeek/portfolio`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary — `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

