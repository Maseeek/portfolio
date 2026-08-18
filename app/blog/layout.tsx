import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[450px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        {children}
      </div>
    </div>
  );
}
