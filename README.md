# maciekgeneja.me

My personal portfolio site. It shows the software I've built, with long-form case studies for the bigger projects and a small private admin area where I write blog posts.

Live site: [maciekgeneja.me](https://maciekgeneja.me)

## What it does

- The homepage is a single portfolio page covering my work, experience and projects.
- Case study pages under `/blog` walk through individual projects such as Nothing But Net, Valdris and Do It.
- A Markdown blog lists posts, estimates reading time and supports tags and drafts.
- A private `/admin` area lets me sign in with GitHub or Google, then write, edit and delete posts.
- A brand lab page in the admin area is where I try out colours, type and motion before using them on the public site.

## How it's built

Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4, deployed on Vercel. Framer Motion handles animation on the React pages.

A few decisions worth pointing out:

- Owner-only auth without a library. Only one person ever needs to log in, so instead of a full auth provider the site runs its own GitHub and Google OAuth flows and checks the result against an allowlist of my email and GitHub username. Sessions are stateless cookies signed with HMAC-SHA256 through the Web Crypto API, and they expire after seven days. The code is in `lib/auth.ts`.
- Guarded routes in middleware. `middleware.ts` checks the session on every `/admin` and `/api/admin` request. Pages redirect to the login screen and API calls get a 401.
- Two kinds of blog content. Case studies are hand-written React pages, so each one can have its own layout and interactive pieces. Regular posts are Markdown files with frontmatter in `content/blogs/`, read and written by `lib/blog-store.ts`.
- Performance checks. `npm run perf` builds the site and runs Lighthouse against key pages on phone, tablet and desktop profiles, then writes an HTML report. `npm run perf:check` fails if a page misses its targets. See [the performance guide](docs/performance.md).

The reasoning behind the auth and blog design is written up in [`docs/adr/`](docs/adr/), with the original spec in [`docs/specs/`](docs/specs/).

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

The public pages work without any setup. To use the admin area, create a `.env.local` with:

```env
OWNER_SECRET_KEY="a long random string for signing sessions"
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
ALLOWED_OWNER_EMAILS="you@example.com"
ALLOWED_OWNER_GITHUB_USERS="your-github-username"
```

Other useful commands:

```bash
npm run build      # production build
npm run lint       # ESLint
npm run perf       # Lighthouse performance report
```

## License

MIT
