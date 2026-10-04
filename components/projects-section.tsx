"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectBentoCard, type BentoShape } from "@/components/ui/project-bento-card";
import { resumeData } from "@/app/data/resume";
import { Layers, Cpu, Globe, Binary } from "lucide-react";

type CategoryKey = "all" | "ai" | "web" | "systems";

interface CategoryOption {
  key: CategoryKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: CategoryOption[] = [
  { key: "all", label: "All Projects", icon: Layers },
  { key: "ai", label: "AI & Computer Vision", icon: Cpu },
  { key: "web", label: "Full-Stack & Web", icon: Globe },
  { key: "systems", label: "Systems & Security", icon: Binary },
];

const BENTO_PACKING_PATTERNS: Record<number, BentoShape[]> = {
  1: ["hero"],
  2: ["hero", "tall"],
  3: ["hero", "compact", "compact"],
  4: ["hero", "tall", "wide", "wide"],
  5: ["hero", "compact", "compact", "wide", "wide"],
  6: ["hero", "compact", "compact", "compact", "hero", "compact"],
  7: ["hero", "tall", "compact", "hero", "compact", "wide", "wide"],
  8: ["hero", "tall", "compact", "hero", "compact", "compact", "compact", "compact"],
  9: ["hero", "tall", "compact", "hero", "compact", "wide", "wide", "wide", "wide"],
  10: ["hero", "tall", "compact", "hero", "compact", "wide", "wide", "compact", "compact", "compact"],
};

export function getBentoShapes(total: number): BentoShape[] {
  if (total <= 0) return [];
  if (BENTO_PACKING_PATTERNS[total]) {
    return BENTO_PACKING_PATTERNS[total];
  }
  const base = [...BENTO_PACKING_PATTERNS[10]];
  const remaining = total - 10;
  for (let i = 0; i < remaining; i++) {
    base.push(remaining % 2 === 0 ? "wide" : "compact");
  }
  return base;
}

const SHAPE_SPAN_CLASSES: Record<BentoShape, string> = {
  hero: "md:col-span-4 md:row-span-2",
  tall: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-3 md:row-span-1",
  compact: "md:col-span-2 md:row-span-1",
};
export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects = resumeData.projects.filter((project) => {
    if (activeCategory === "all") return true;
    const stackStr = project.stack.join(" ").toLowerCase();
    const descStr = project.description.toLowerCase();
    const titleStr = project.title.toLowerCase();
    const combined = `${stackStr} ${descStr} ${titleStr}`;

    if (activeCategory === "ai") {
      return (
        combined.includes("opencv") ||
        combined.includes("vision") ||
        combined.includes("gemini") ||
        combined.includes("claude") ||
        combined.includes("ai") ||
        combined.includes("analytics") ||
        combined.includes("regression") ||
        combined.includes("trajectory")
      );
    }
    if (activeCategory === "web") {
      return (
        combined.includes("react") ||
        combined.includes("next.js") ||
        combined.includes("tailwind") ||
        combined.includes("mysql") ||
        combined.includes("postgresql") ||
        combined.includes("php") ||
        combined.includes("express") ||
        combined.includes("node") ||
        combined.includes("jwt") ||
        combined.includes("rest")
      );
    }
    if (activeCategory === "systems") {
      return (
        combined.includes("arduino") ||
        combined.includes("c++") ||
        combined.includes("ble") ||
        combined.includes("uart") ||
        combined.includes("fsm") ||
        combined.includes("java") ||
        combined.includes("kotlin") ||
        combined.includes("android") ||
        combined.includes("mobile") ||
        combined.includes("oop") ||
        combined.includes("rls") ||
        combined.includes("security") ||
        combined.includes("hardware") ||
        combined.includes("tailscale") ||
        combined.includes("linux")
      );
    }
    return true;
  });

  const shapes = getBentoShapes(filteredProjects.length);
  return (
    <section id="work" className="relative py-16 md:py-24 lg:py-28">
      {/* Section Background Glow - Hardware Composited */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10 will-change-transform transform-gpu" />

      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">
        <div className="section-header">
          <span className="section-label">Selected Work</span>
          <span className="section-label">02</span>
        </div>

        {/* Header Title & Interactive Domain Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-12">
          <div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-[-0.04em] leading-[1.05] text-white">
              Featured Case Studies
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl font-light">
              High-performance software systems, computer vision platforms, enterprise security architectures, and embedded engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? "text-white shadow-sm font-bold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-accent/30 border border-accent/60 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.25)] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-300" : "text-slate-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6-Column Deterministic Bento Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(215px,auto)] grid-flow-dense gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const shape = shapes[index] ?? "compact";
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={filteredProjects.length === 1 ? "md:col-span-6 md:row-span-2" : SHAPE_SPAN_CLASSES[shape]}
                >
                  <ProjectBentoCard
                    project={project}
                    shape={shape}
                    className="h-full"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
