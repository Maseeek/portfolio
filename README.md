# maciekgeneja.me — Engineering Portfolio & Architecture Platform

A high-performance personal engineering platform, interactive design brand lab, and hybrid blog CMS built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

🌐 **Live Platform**: [maciekgeneja.me](https://maciekgeneja.me)  
📐 **Architecture Decision Records**: [`docs/adr/`](docs/adr/)  
📄 **Engineering Specifications**: [`docs/specs/`](docs/specs/)

---

## 🏛️ Architecture Overview

The platform is designed around strict separation of concerns, single-owner administrative security, high-throughput static delivery, and custom interactive laboratory environments:

```
maciekgeneja.me
├── app/
│   ├── (public)/              # Core portfolio, high-fidelity Bento Grid showcase
│   ├── blog/                  # Hybrid blog routing (Static Case Studies & MD Dynamic Posts)
│   ├── admin/                 # Single-owner guarded studio (/brand-lab, /blogs/new)
│   └── api/                   # Zero-dependency auth handlers, contact relay, CMS CRUD
├── lib/
│   ├── auth.ts                # Single-owner OAuth 2.0 & HMAC-SHA256 session token engine
│   ├── blog-store.ts          # Hybrid filesystem markdown + volatile draft persistence
│   └── blog-utils.ts          # Slugification, reading-time estimation, frontmatter parser
└── components/
    ├── ui/                    # BentoGrid, Particle canvas, Magnetic buttons, TechBadge
    └── projects-section.tsx   # Domain-filtered responsive Bento showcase
```

---

## ⚡ Core Engineering Highlights

### 1. Single-Owner OAuth 2.0 & Cryptographic Session Security (`lib/auth.ts`)
Rather than pulling in heavyweight third-party identity providers or complex multi-tenant databases for a personal portfolio, the site implements a deterministic **Single-Owner Authentication Guard**:
- **OAuth 2.0 Integration**: Native GitHub and Google OAuth 2.0 redirect handshakes validating against an authorized single-owner email or identity identifier.
- **HMAC-SHA256 Signed Sessions**: Stateless authentication using cryptographically signed session cookies with constant-time verification (`crypto.timingSafeEqual`) to prevent timing attack vulnerabilities.
- **Route Namespace Guard**: Unauthenticated visitors requesting `/admin` or internal configuration paths receive immediate 404/401 redirects, ensuring administrative surfaces remain shielded.
- **ADR Documented**: Detailed architectural reasoning in [`docs/adr/0001-single-owner-auth-and-hybrid-blog-cms.md`](docs/adr/0001-single-owner-auth-and-hybrid-blog-cms.md).

### 2. Hybrid Blog & Case Study CMS (`lib/blog-store.ts`)
A unified reading pipeline supporting two complementary publishing paradigms:
- **Bespoke Case Studies**: Handcrafted, interactive long-form technical breakdowns (e.g. `/blog/nothing-but-net`, `/blog/valdris`, `/blog/do-it`) featuring live telemetry previews, architectural callouts, and performance tables.
- **Dynamic Markdown Blog Engine**: High-velocity publishing flow backed by local file-based Markdown storage with YAML frontmatter parsing, automatic reading-time calculation, draft management, and tag categorization.
- **Bidirectional Project Pagination**: Reversible traversal across case studies with smart wraps and category awareness.

### 3. Interactive Brand Lab (`/admin/brand-lab`)
A dedicated real-time design sandbox for testing visual tokens, responsive geometry, micro-interactions, particle animations, and typography hierarchies across dark mode themes before deploying them to the public interface.

### 4. Responsive Bento Grid Case Study Showcase
- **Adaptive Layout**: Dynamically balanced CSS grid auto-rows supporting `large` (2x2), `wide` (2x1), `tall` (1x2), and `medium` (1x1) project cards.
- **Filterable Taxonomy**: Domain-driven filtering across AI & Computer Vision, Systems & Security, and Full-Stack Web architectures with smooth Framer Motion transitions.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS v4, Framer Motion, Lucide Icons, Simple Icons |
| **Authentication** | Custom OAuth 2.0 (GitHub / Google), HMAC-SHA256 Token Signing |
| **Data & Content** | File-based Markdown Store, Frontmatter, Static Resume Model |
| **Deployment** | Vercel Edge Network |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or pnpm

### Environment Configuration
Create a `.env.local` file with the following keys:
```env
NEXT_PUBLIC_APP_URL="http://localhost:3000"
AUTH_SECRET="your-32-byte-hex-hmac-key"
OWNER_EMAIL="your-authorized-email@domain.com"
GITHUB_CLIENT_ID="your-github-oauth-client-id"
GITHUB_CLIENT_SECRET="your-github-oauth-client-secret"
GOOGLE_CLIENT_ID="your-google-oauth-client-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-client-secret"
```

### Installation & Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run static type checks
npx tsc --noEmit

# Production build
npm run build
```

---

## 📄 License
MIT © [Maciek Geneja](https://maciekgeneja.me)
