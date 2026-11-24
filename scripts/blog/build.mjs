#!/usr/bin/env node
// Builds the static blog: public/blog/index.html and public/blog/<slug>.html.
// Sources: content/case-studies/*.md (case studies) and content/blogs/*.md (articles, also written by the admin CMS).
// Styling mirrors the portfolio (public/05-the-full-portfolio.html). Run with `npm run blog`; `npm run build` runs it first.
import { readFile, writeFile, readdir, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { micromark } from "micromark";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = path.join(ROOT, "public", "blog");
const SITE = "https://maciekgeneja.me";
const HERE = path.join(ROOT, "scripts", "blog");

const css = (await readFile(path.join(HERE, "blog.css"), "utf8"))
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s*\n\s*/g, "")
  .trim();
const imageSizes = JSON.parse(await readFile(path.join(HERE, "images.json"), "utf8"));

const GROUPS = [
  ["products", "Live products", "Apps you can open and use today."],
  ["projects", "Projects", "Hardware, hackathons and team builds."],
  ["coursework", "Coursework", "University modules and where things started."],
];

const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const slugify = (s) =>
  s.toLowerCase().replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const abs = (u) => (u && u.startsWith("/") ? SITE + u : u);

const icon = {
  arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  sun: '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>',
  moon: '<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z" fill="currentColor"/></svg>',
};

async function load(dir, type) {
  const full = path.join(ROOT, dir);
  let files = [];
  try {
    files = (await readdir(full)).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
  const items = [];
  for (const f of files) {
    const { data, content } = matter(await readFile(path.join(full, f), "utf8"));
    if (data.published === false) continue;
    if (!data.slug || !data.title) throw new Error(`${dir}/${f}: frontmatter needs slug and title`);
    if (!/^[a-z0-9-]+$/.test(data.slug)) throw new Error(`${dir}/${f}: slug must be lowercase letters, digits and dashes`);
    items.push({ ...data, type, body: content });
  }
  return items;
}

// `sizes` values for the three places images appear
const SIZES = {
  hero: "(max-width: 640px) calc(100vw - 32px), (max-width: 900px) calc(100vw - 64px), min(1200px, calc(100vw - 96px))",
  prose: "(max-width: 640px) calc(100vw - 32px), 720px",
  feature: "(max-width: 1000px) calc(100vw - 32px), 640px",
};

function figure(src, alt, caption, { eager = false, sizes = SIZES.prose } = {}) {
  const size = imageSizes[src];
  const dims = size ? ` width="${size[0]}" height="${size[1]}"` : "";
  const small = src.replace(/\.webp$/, "-800.webp");
  const srcset = size && small !== src && imageSizes[small] ? ` srcset="${small} 800w, ${src} ${size[0]}w" sizes="${sizes}"` : "";
  const loading = eager ? ' fetchpriority="high"' : ' loading="lazy"';
  const cap = caption ? `<figcaption>${caption}</figcaption>` : "";
  return `<img src="${src}"${srcset} alt="${alt}"${dims}${loading} decoding="async">${cap}`;
}

function renderBody(md) {
  let html = micromark(md, { allowDangerousHtml: true });
  const toc = [];
  const used = new Set();
  html = html.replace(/<h1>([\s\S]*?)<\/h1>/g, "<h2>$1</h2>");
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    let id = slugify(text) || "section";
    while (used.has(id)) id += "-2";
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  html = html.replace(
    /<p><img src="([^"]+)" alt="([^"]*)"(?: title="([^"]*)")? \/><\/p>/g,
    (_, src, alt, cap) => `<figure>${figure(src, alt, cap)}</figure>`,
  );
  html = html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return { html, toc, minutes: Math.max(1, Math.round(words / 220)) };
}

const head = ({ title, description, url, image, type, jsonld }) => `<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0d1118" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/icon.svg?v=2" type="image/svg+xml">
<link rel="shortcut icon" href="/favicon.ico?v=2">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="Maciek Geneja">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${abs(image || "/og-card.png")}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@maseeek">
<meta name="twitter:creator" content="@maseeek">
<script>(function(){var d=document.documentElement,q=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)');d.setAttribute('data-theme',!q||q.matches?'dark':'light');})()</script>
<style>${css}</style>
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>
</head>
<body>`;

const header = (current) => `<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <nav class="nav wrap" aria-label="Main navigation">
    <a class="brand" href="/" aria-label="Maciek Geneja, back to the portfolio"><svg viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M4 24V7l11 12L26 7v17" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Maciek Geneja</span></a>
    <div class="nav-links">
      <a class="wide" href="/#placement">Experience</a>
      <a class="wide" href="/#work">Work</a>
      <a class="wide" href="/#about">About</a>
      <a href="/blog" aria-current="${current}">Writing</a>
      <div class="nav-actions">
        <button class="theme-btn" type="button" data-theme-toggle aria-label="Toggle light and dark theme" title="Toggle theme">${icon.sun}${icon.moon}</button>
        <a class="nav-contact" href="/#contact">Let's talk</a>
      </div>
    </div>
  </nav>
</header>`;

const cta = `<section class="cta wrap" aria-labelledby="cta-title">
  <div>
    <p class="eyebrow">Get in touch</p>
    <h2 id="cta-title">Want the longer version?</h2>
    <p>I'm happy to walk through the code, the trade-offs, or what I'd do differently next time.</p>
  </div>
  <div class="cta-actions">
    <a class="pill primary" href="/#contact">Let's talk</a>
    <a class="pill" href="mailto:maciekgeneja@gmail.com">Email me</a>
  </div>
</section>`;

const footer = `<footer class="site-foot wrap">
  <p>© ${new Date().getFullYear()} Maciek Geneja · Loughborough, UK</p>
  <div class="socials">
    <a href="mailto:maciekgeneja@gmail.com">Email</a>
    <a href="https://www.linkedin.com/in/maciekgeneja" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://github.com/Maseeek" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://wa.me/447383557416" target="_blank" rel="noopener noreferrer">Reach out on WhatsApp</a>
  </div>
</footer>
<script>(function(){var d=document.documentElement,b=document.querySelector('[data-theme-toggle]'),q=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)'),manual=false;if(b)b.addEventListener('click',function(){manual=true;d.setAttribute('data-theme',d.getAttribute('data-theme')==='dark'?'light':'dark');});if(q&&q.addEventListener)q.addEventListener('change',function(e){if(!manual)d.setAttribute('data-theme',e.matches?'dark':'light');});})()</script>
</body>
</html>
`;

const author = { "@type": "Person", name: "Maciek Geneja", url: SITE };

function pagerLink(item, cls, label) {
  if (!item) return "";
  return `<a class="${cls}" href="/blog/${item.slug}"><small>${label}</small><strong>${esc(item.title)}</strong><span>${esc(item.card || item.summary)}</span></a>`;
}

function renderPost(item, prev, next) {
  const { html, toc, minutes } = renderBody(item.body);
  const isArticle = item.type === "article";
  const url = `${SITE}/blog/${item.slug}`;
  const image = item.image || item.coverImage;
  const eyebrow = isArticle
    ? `<b>Article</b>${item.publishedAt ? ` · ${fmtDate(item.publishedAt)}` : ""} · ${minutes} min read`
    : `<b>Case study</b>${item.year ? ` · ${esc(item.year)}` : ""}${item.kind ? ` · ${esc(item.kind)}` : ""}`;
  const actions = [
    item.live && `<a class="pill primary" href="${esc(item.live)}" target="_blank" rel="noopener noreferrer">${esc(item.liveLabel || "Open the live app")} ${icon.arrowUpRight}</a>`,
    item.repo && `<a class="pill" href="${esc(item.repo)}" target="_blank" rel="noopener noreferrer">${icon.github} ${esc(item.repoLabel || "Source on GitHub")}</a>`,
  ].filter(Boolean);
  const facts = (item.facts || []).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`);
  if (!isArticle) facts.push(`<div><dt>Read</dt><dd>${minutes} min</dd></div>`);
  const chips = item.stack || item.tags || [];
  const tocHtml =
    toc.length > 2
      ? `<nav class="toc" aria-label="On this page"><p class="eyebrow">On this page</p><ol>${toc.map((t) => `<li><a href="#${t.id}">${t.text}</a></li>`).join("")}</ol></nav>`
      : "<div></div>";
  const jsonld = {
    "@context": "https://schema.org",
    "@type": isArticle ? "BlogPosting" : "TechArticle",
    headline: item.title,
    description: item.summary,
    url,
    author,
    ...(image ? { image: abs(image) } : {}),
    ...(item.publishedAt ? { datePublished: new Date(item.publishedAt).toISOString() } : {}),
  };
  return `${head({
    title: `${item.title} · ${isArticle ? "Article" : "Case study"} · Maciek Geneja`,
    description: item.summary,
    url,
    image,
    type: "article",
    jsonld,
  })}
${header("true")}
<main id="main">
<article class="post wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/blog">${icon.arrowLeft} Writing</a></nav>
  <header class="post-head">
    <p class="eyebrow">${eyebrow}</p>
    <h1 class="post-title${item.title.length > 32 ? " long" : ""}">${esc(item.title)}</h1>
    ${item.tagline ? `<p class="post-tagline">${esc(item.tagline)}</p>` : ""}
    <p class="lede">${esc(item.summary)}</p>
    ${actions.length ? `<div class="post-actions">${actions.join("")}</div>` : ""}
  </header>
  ${image ? `<figure class="post-hero">${figure(image, esc(item.imageAlt || ""), "", { eager: true, sizes: SIZES.hero })}</figure>` : ""}
  ${facts.length ? `<dl class="facts">${facts.join("")}</dl>` : ""}
  ${chips.length ? `<div class="stack"><p class="eyebrow">${isArticle ? "Topics" : "Stack"}</p><ul class="chips">${chips.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>` : ""}
  <div class="post-body">
    ${tocHtml}
    <div class="prose">${html}</div>
  </div>
  ${prev || next ? `<nav class="pager" aria-label="More ${isArticle ? "articles" : "case studies"}">${pagerLink(prev, "prev", "Previous")}${pagerLink(next, "next", "Next")}</nav>` : ""}
</article>
${cta}
</main>
${footer}`;
}

function renderIndex(articles, studies) {
  const total = articles.length + studies.length;
  const featureCards = articles
    .map((a, i) => {
      const img = a.coverImage || a.image;
      const { minutes } = renderBody(a.body);
      return `<a class="feature" href="/blog/${a.slug}">
      ${img ? figure(img, "", "", { eager: i === 0, sizes: SIZES.feature }) : ""}
      <div class="feature-copy">
        <p class="eyebrow"><b>Article</b>${a.publishedAt ? ` · ${fmtDate(a.publishedAt)}` : ""}</p>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.summary)}</p>
        <p class="meta">${minutes} min read${a.tags?.length ? ` · ${a.tags.map(esc).join(" · ")}` : ""}</p>
      </div>
    </a>`;
    })
    .join("\n");
  const groups = GROUPS.map(([key, name, blurb]) => {
    const items = studies.filter((s) => s.group === key);
    if (!items.length) return "";
    return `<section class="group" aria-labelledby="g-${key}">
    <div class="group-head"><h2 id="g-${key}">${name}</h2><p>${blurb}</p></div>
    <ul class="cards">${items
      .map(
        (s) => `<li><a class="card" href="/blog/${s.slug}">
        <div class="card-top"><h3>${esc(s.title)}</h3>${icon.arrowUpRight}</div>
        <p class="card-sub">${esc(s.card)}</p>
        <p class="card-meta">${[s.year, (s.stack || []).slice(0, 3).join(" · ")].filter(Boolean).map(esc).join(" · ")}</p>
      </a></li>`,
      )
      .join("")}</ul>
  </section>`;
  }).join("\n");
  const description = "Case studies and articles by Maciek Geneja: how the projects on the portfolio were built, and what I learned building them.";
  return `${head({
    title: "Writing · Maciek Geneja",
    description,
    url: `${SITE}/blog`,
    type: "website",
    jsonld: { "@context": "https://schema.org", "@type": "Blog", name: "Writing · Maciek Geneja", url: `${SITE}/blog`, author },
  })}
${header("page")}
<main id="main">
<div class="wrap">
  <header class="index-head">
    <p class="eyebrow"><b>Writing</b> · ${total} pieces</p>
    <h1>Case studies<br>and notes.</h1>
    <p class="lede">How I built the projects on my portfolio: the architecture, the trade-offs, and the parts that didn't work the first time.</p>
  </header>
  ${articles.length ? `<section class="group" aria-labelledby="g-articles"><div class="group-head"><h2 id="g-articles">Articles</h2><p>Longer technical write-ups.</p></div>${featureCards}</section>` : ""}
  ${groups}
</div>
${cta}
</main>
${footer}`;
}

const studies = (await load("content/case-studies", "case-study")).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
const articles = (await load("content/blogs", "article")).sort(
  (a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0),
);
const slugs = new Set();
for (const item of [...studies, ...articles]) {
  if (slugs.has(item.slug)) throw new Error(`Duplicate slug: ${item.slug}`);
  slugs.add(item.slug);
  if (item.type === "case-study" && !GROUPS.some(([k]) => k === item.group))
    throw new Error(`${item.slug}: group must be one of ${GROUPS.map(([k]) => k).join(", ")}`);
}

await mkdir(OUT, { recursive: true });
for (const f of await readdir(OUT)) if (f.endsWith(".html")) await rm(path.join(OUT, f));

const write = (name, html) => writeFile(path.join(OUT, name), html);
await write("index.html", renderIndex(articles, studies));
const ordered = GROUPS.flatMap(([k]) => studies.filter((s) => s.group === k));
for (const [i, s] of ordered.entries()) await write(`${s.slug}.html`, renderPost(s, ordered[i - 1], ordered[i + 1]));
for (const [i, a] of articles.entries()) await write(`${a.slug}.html`, renderPost(a, articles[i - 1], articles[i + 1]));
console.log(`blog: wrote ${1 + studies.length + articles.length} pages to public/blog`);
