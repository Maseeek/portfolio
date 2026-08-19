"use client";

import React, { useState } from "react";
import { BrandLogo, LogoVariant } from "@/components/ui/brand-logo";
import { ArrowLeft, Sparkles, Layers, Code2, Box, Check, Copy, Flame, Compass, Shield } from "lucide-react";
import Link from "next/link";

interface ConceptDetails {
  id: LogoVariant;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  story: string;
  skillsConnected: string[];
  visualHighlights: string[];
  recommended?: boolean;
}

const concepts: ConceptDetails[] = [
  {
    id: "fluid-monolith",
    title: "Fluid Monolith 'M'",
    subtitle: "Active Brand Identity • Smooth Flow & Negative Space",
    icon: Sparkles,
    recommended: true,
    story:
      "A pure, ultra-minimalist 'M' formed by smooth continuous flowing ribbons sliced diagonally by a razor-sharp negative space laser cut. Eliminates superfluous dots for a clean, aerodynamic luxury tech aesthetic.",
    skillsConnected: [
      "AI Systems & Computer Vision",
      "Full-Stack Microservices",
      "Fluid UI Engineering",
      "High-Performance Architecture",
    ],
    visualHighlights: [
      "Continuous smooth hyperbolic bezier curves",
      "Dynamic diagonal negative-space incision",
      "Sleek silver-to-indigo metallic gradient",
      "Pure minimalist silhouette — zero extraneous clutter",
    ],
  },
  {
    id: "neural-apex",
    title: "Neural / Vector Apex",
    subtitle: "Computer Vision & Edge-AI Tensor Rays",
    icon: Compass,
    story:
      "Sculpted from aerodynamic geometric vector wings converging toward a central neural tensor apex and glowing focal aperture.",
    skillsConnected: [
      "PyTorch & OpenCV",
      "WebGPU / ONNX Inference",
      "60 FPS Object Tracking",
      "Edge-AI Architecture",
    ],
    visualHighlights: [
      "Converging vector wings",
      "Focal aperture / diamond tensor core",
      "Sleek coordinate vectors",
      "High-speed edge inference homage",
    ],
  },
  {
    id: "bracket-kernel",
    title: "Bracket & Kernel",
    subtitle: "Full-Stack Code Syntax & Computational AST",
    icon: Code2,
    story:
      "Crafted from interlocking angle brackets (< >) that symbolize clean code architecture, ASTs, and algorithmic flow.",
    skillsConnected: [
      "C# / .NET & Blazor WASM",
      "Next.js & React 19",
      "Microservice Architectures",
      "Algorithmic Pipelines",
    ],
    visualHighlights: [
      "Interlocking chevron angle brackets",
      "Central compilation diamond",
      "Clean algorithmic symmetry",
      "Homage to compiler pipelines",
    ],
  },
  {
    id: "isometric-compute",
    title: "Isometric Compute",
    subtitle: "3D Silicon GPU Tensor & Systems Monolith",
    icon: Box,
    story:
      "A 2.5D isometric polyhedral 'M' inspired by silicon GPU tensor cores, CUDA thread blocks, and low-level memory architecture.",
    skillsConnected: [
      "C++ & CUDA Acceleration",
      "Embedded Systems / FSM",
      "High-Performance Computing",
      "Deterministic State Machines",
    ],
    visualHighlights: [
      "Isometric 3D geometric facets",
      "High-contrast lighting planes",
      "Central illuminated tensor prism",
      "Industrial hardware presence",
    ],
  },
];

export default function AdminBrandLabPage() {
  const [selectedConcept, setSelectedConcept] = useState<LogoVariant>("fluid-monolith");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (variant: string) => {
    navigator.clipboard.writeText(`<BrandLogo variant="${variant}" size={32} />`);
    setCopiedCode(variant);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation / Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
        <div>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-3"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              Brand Identity & Logo Lab
            </h1>
            <span className="text-[10px] uppercase tracking-wider px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-bold rounded-full flex items-center gap-1.5">
              <Shield className="w-3 h-3" /> Private Owner Sandbox
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-2 max-w-2xl">
            Exploring the geometric <strong>Fluid-M</strong> brand identity and its architectural variations, custom-engineered for Maciek Geneja across AI systems, computer vision, and high-performance full-stack engineering.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-white/50">Active Concept:</span>
          <span className="text-xs font-mono font-bold uppercase px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-accent">
            {selectedConcept}
          </span>
        </div>
      </div>

      {/* 4 Cards Grid - Concept Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {concepts.map((concept) => {
          const isSelected = selectedConcept === concept.id;
          const Icon = concept.icon;

          return (
            <div
              key={concept.id}
              onClick={() => setSelectedConcept(concept.id)}
              className={`relative rounded-3xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between border ${
                isSelected
                  ? "bg-white/[0.06] border-accent shadow-[0_0_30px_rgba(99,102,241,0.25)] scale-[1.02]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {concept.recommended && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-accent text-[10px] uppercase font-bold tracking-widest text-white shadow-lg flex items-center gap-1">
                  <Flame className="w-3 h-3 text-white" />
                  Active Identity
                </div>
              )}

              {/* Top Logo Preview Box */}
              <div className="space-y-6">
                <div className="w-full h-44 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-radial from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <BrandLogo variant={concept.id} size={84} glow={true} />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-accent" />
                    <h3 className="font-bold text-base text-white">{concept.title}</h3>
                  </div>
                  <p className="text-[11px] font-mono text-accent/90">{concept.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {concept.story}
                  </p>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="pt-5 mt-5 border-t border-white/5 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {concept.skillsConnected.slice(0, 2).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(concept.id);
                  }}
                  className="w-full py-2 rounded-xl text-xs font-mono border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedCode === concept.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied JSX</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/60" />
                      <span>Copy Component</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive & Mockup Testing Environment */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Contextual Testing & Scale Audit
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">
              Active Focus: {concepts.find((c) => c.id === selectedConcept)?.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {concepts.map((c) => (
              <button
                type="button"
                key={c.id}
                onClick={() => setSelectedConcept(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedConcept === c.id
                    ? "bg-accent text-white font-bold"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {c.id.split("-")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Test 1: Real-world scale comparisons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center justify-center gap-3 text-center">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Favicon / Tab (16px)
            </span>
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
              <BrandLogo variant={selectedConcept} size={16} glow={false} />
            </div>
            <span className="text-[11px] text-white/50">Pixel-crisp readability</span>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center justify-center gap-3 text-center">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Navbar Brandmark (32px)
            </span>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <BrandLogo variant={selectedConcept} size={28} glow={true} />
              <span className="text-xs font-black tracking-wider uppercase text-white">MASEEEK</span>
            </div>
            <span className="text-[11px] text-white/50">Header navigation unit</span>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center justify-center gap-3 text-center">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              App / GitHub Avatar (64px)
            </span>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shadow-xl">
              <BrandLogo variant={selectedConcept} size={48} glow={true} />
            </div>
            <span className="text-[11px] text-white/50">Profile & badge asset</span>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center justify-center gap-3 text-center">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Hero Watermark (128px)
            </span>
            <div className="w-full h-20 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center">
              <BrandLogo variant={selectedConcept} size={64} glow={true} className="opacity-80" />
            </div>
            <span className="text-[11px] text-white/50">Large-scale backdrop</span>
          </div>
        </div>

        {/* Test 2: In-situ Navbar Simulation */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block">
            In-Situ Simulation: Modern Glass Header
          </span>
          <div className="w-full p-4 rounded-2xl glass border border-white/10 flex justify-between items-center bg-black/50 overflow-x-auto">
            <div className="flex items-center gap-3 shrink-0">
              <BrandLogo variant={selectedConcept} size={34} glow={true} />
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tight uppercase text-white">
                  Maciek Geneja
                </span>
                <span className="text-[9px] font-mono text-accent tracking-widest uppercase">
                  AI Systems & Full Stack
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <span className="text-white font-bold">About</span>
              <span>Work</span>
              <span>AI Lab</span>
              <span>Skills</span>
              <span>Experience</span>
            </div>

            <div className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider shrink-0">
              Let's Talk →
            </div>
          </div>
        </div>

        {/* Test 3: Conceptual Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" /> Skillsets & Meaning Embedded
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {concepts
                .find((c) => c.id === selectedConcept)
                ?.skillsConnected.map((skill, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200 font-mono flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{skill}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Geometric Highlights
            </h3>
            <div className="space-y-2">
              {concepts
                .find((c) => c.id === selectedConcept)
                ?.visualHighlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-muted-foreground flex items-center gap-2.5"
                  >
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span>{highlight}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
