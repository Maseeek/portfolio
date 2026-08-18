# Spec: Owner Authentication Guard, Private Brand Lab, and Dynamic Blog Publishing Suite

## Problem Statement

The portfolio's Brand Lab (`/brand-preview`) is currently exposed to the public internet and linked in global navigation elements. The site owner has no authentication mechanism to guard private internal tooling or brand exploration spaces. Furthermore, all technical project breakdowns are hardcoded TSX pages (`/blog/[slug]`), preventing the site owner from rapidly drafting, editing, and publishing new technical blog posts and articles directly through a web interface.

## Solution

1. Implement a lightweight **Single-Owner Authentication Guard** that distinguishes between the verified portfolio **Owner** and public **Visitors**.
2. Restrict and relocate the **Brand Lab** to `/admin/brand-lab`, stripping public navigation links and returning a strict `404 Not Found` to unauthenticated Visitors.
3. Provide an authenticated `/admin` portal featuring:
   - A private **Brand Lab** workspace.
   - A dynamic **Blog Post** editor with live Markdown preview, metadata editing, draft/published state control, and automated slug generation.
4. Establish a hybrid dynamic routing architecture under `/blog/[slug]` that seamlessly serves newly published Markdown **Blog Posts** while preserving all existing bespoke interactive **Case Studies** (Valdris, Nothing But Net, Make-It-All, etc.).

## User Stories

1. As a Visitor, I want to browse the public portfolio and read existing Case Studies without needing an account or encountering broken links.
2. As a Visitor, I want attempts to navigate to `/admin`, `/admin/brand-lab`, or `/brand-preview` to yield a `404 Not Found` response so that private tooling has zero discoverable public surface.
3. As the Owner, I want to navigate to a secure login screen at `/admin/login` so that I can establish an authenticated administrative session.
4. As the Owner, I want to authenticate using a secure credentials or OAuth whitelist check so that unauthorized users cannot access internal tooling.
5. As the Owner, I want a persistent, encrypted HTTP-only session cookie so that I remain authenticated across browser tabs and navigation without re-entering credentials.
6. As the Owner, I want to access the Brand Lab at `/admin/brand-lab` so that I can experiment with brandmarks, typography, vector apexes, and in-situ navbar simulations in private.
7. As the Owner, I want to view an administrative dashboard at `/admin` listing all published and draft Blog Posts alongside metrics and quick actions.
8. As the Owner, I want to access a Markdown editor at `/admin/blogs/new` so that I can draft new Blog Posts with real-time formatting preview.
9. As the Owner, I want to specify title, summary, tags, publish date, cover image, and read time for each Blog Post.
10. As the Owner, I want to toggle the publication state of a Blog Post between `Draft` and `Published` so that work-in-progress content is not visible to Visitors.
11. As the Owner, I want to edit existing Blog Posts at `/admin/blogs/[id]/edit` to update content or metadata after initial publication.
12. As the Owner, I want to delete obsolete Blog Posts from the admin dashboard with a confirmation step so that retired articles can be removed cleanly.
13. As the Owner, I want to sign out securely from the admin portal, clearing the session cookie and returning to the public portfolio.
14. As a Visitor, I want to view newly published Blog Posts rendered with responsive typography, code syntax highlighting, and cohesive design matching the portfolio theme.
15. As a Visitor, I want existing bespoke Case Studies (`/blog/valdris`, `/blog/nothing-but-net`, etc.) to continue rendering their custom interactive UI components without regression.

## Implementation Decisions

- **Identity & Authorization Model**:
  - Adopt a strict Single-Owner authorization model (`Owner` vs. `Visitor`) rather than a multi-tier RBAC permission matrix, eliminating schema complexity while providing an impenetrable security boundary.
  - Verification is performed via a server-side session token matching the configured owner credentials in environment variables (`OWNER_SECRET_KEY` / `NEXT_AUTH_SECRET`).
- **Route Namespace & Protection**:
  - All protected functionality is consolidated under `/admin/*` (`/admin/dashboard`, `/admin/brand-lab`, `/admin/blogs/*`, `/admin/api/*`).
  - Next.js Edge / Server Middleware intercepts all `/admin/*` and `/api/admin/*` routes. Unauthenticated requests receive an HTTP 404 (for page requests) or HTTP 401 Unauthorized (for API routes), except for the isolated `/admin/login` entrypoint.
  - Public references to `/brand-preview` are removed from the global navigation header (`components/navbar.tsx`) and footer (`components/footer.tsx`).
- **Blog Publishing & Storage**:
  - Blog Posts are stored in a structured file-based Markdown store (or local persistent JSON/MDX storage under `content/blogs/`) with frontmatter metadata parsing.
  - The dynamic route handler at `app/blog/[slug]/page.tsx` checks for matching published Blog Posts in the store if no hardcoded bespoke Case Study route exists.
  - Markdown rendering utilizes unified/remark/rehype with syntax highlighting and Tailwind typography styles matching the portfolio's luxury dark aesthetic.
- **Admin Workspace UI**:
  - Build a cohesive, minimalist glassmorphism interface for `/admin` utilizing existing design tokens (Tailwind CSS, Lucide icons, Framer Motion transitions).

## Testing Decisions

- **Testing Philosophy**: Test only external behavior at the highest possible seams (HTTP route endpoints, middleware interception, and dynamic slug resolution) rather than implementation details.
- **Modules to be Tested**:
  1. *Authentication & Middleware Seam*:
     - Unauthenticated requests to `/admin/brand-lab` and `/admin/blogs` produce a 404/redirect response.
     - Valid credentials generate an authenticated session cookie.
     - Authenticated requests to `/admin/brand-lab` render the Brand Lab workspace with 200 OK.
  2. *Blog Storage & Resolution Seam*:
     - CRUD API endpoints (`POST /api/admin/blogs`, `PUT /api/admin/blogs/[id]`, `DELETE /api/admin/blogs/[id]`) correctly update the store and reject unauthenticated requests.
     - `GET /blog/[slug]` renders the published Blog Post for valid published slugs, returns 404 for draft slugs when unauthenticated, and allows preview when authenticated as Owner.
     - Existing hardcoded Case Studies (`/blog/valdris`, etc.) continue to resolve without collision.

## Out of Scope

- Multi-user authentication, self-service user registration, or multi-tenant permission tiers.
- Third-party comment systems or public visitor discussion threads on Blog Posts.
- Full Git commit/push automation from the web browser (content is persisted via the server storage layer).

## Further Notes

- Legacy `/brand-preview` URL will redirect to `/admin/brand-lab` when authenticated, and return 404 when unauthenticated.
- All domain terminology conforms to the canonical definitions in `CONTEXT.md` (`Owner`, `Visitor`, `Brand Lab`, `Case Study`, `Blog Post`).
