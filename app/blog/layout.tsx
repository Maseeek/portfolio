import React from "react";
import "./blog-theme.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pf-blog min-h-screen">
      <div className="pf-nav-wrap">
        <nav className="pf-nav" aria-label="Primary">
          <a href="/" className="pf-brand">
            <span className="pf-brand-dot" aria-hidden="true">MG</span>
            Maciek Geneja
          </a>
          <div className="pf-links">
            <a href="/#work" className="pf-hide-sm">Work</a>
            <a href="/blog">Writing</a>
            <a href="/#contact" className="pf-contact">Contact</a>
          </div>
        </nav>
      </div>

      <main className="px-4 sm:px-6 md:px-8 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>

      <footer className="pf-foot">
        <div className="pf-foot-in">
          <span>© {new Date().getFullYear()} Maciek Geneja · Cambridge, UK</span>
          <a href="/">Back to portfolio</a>
        </div>
      </footer>
    </div>
  );
}
