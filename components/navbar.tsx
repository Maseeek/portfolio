"use client";

import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/app/data/resume";
import { Github, Linkedin, Menu, X, Sparkles, MapPin, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Magnetic from "./ui/magnetic";
import { BrandLogo } from "./ui/brand-logo";

const navItems = [
  { name: "About", href: "/#about", id: "about" },
  { name: "Work", href: "/#work", id: "work" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Services", href: "/#services", id: "services" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsLogoHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsLogoHovered(false);
    }, 250);
  };

  useEffect(() => {
    // Scroll spy using IntersectionObserver for active section highlight
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));

    // Handle Escape key to close mobile menu & popover
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsLogoHovered(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed top-0 left-0 right-0 z-[60] py-3 md:py-4 glass border-none m-3 md:m-5 rounded-2xl md:rounded-full"
      >
        <div className="max-w-[1400px] mx-auto px-[clamp(1rem,3.5vw,3rem)] flex justify-between items-center">
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Standalone Brandmark with Interactive Ripple & Status Popover */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
            >
              <Magnetic>
                <Link
                  href="/"
                  className="relative group p-1.5 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                  aria-label="Maciek Geneja Home"
                >
                  {/* Micro-glow Ripple Ring */}
                  <motion.div
                    animate={isLogoHovered ? { scale: [1, 1.4, 1.2], opacity: [0.3, 0.8, 0.4] } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: isLogoHovered ? Infinity : 0, ease: "easeInOut" }}
                    className="absolute -inset-1.5 rounded-full bg-accent/20 blur-md pointer-events-none -z-10"
                  />
                  
                  {/* Standalone Fluid-M Logo */}
                  <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 shadow-sm">
                    <BrandLogo variant="fluid-monolith" size={24} glow={true} />
                  </div>
                </Link>
              </Magnetic>

              {/* Interactive Status Popover Card */}
              <AnimatePresence>
                {isLogoHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-3.5 w-72 md:w-80 rounded-2xl p-4 md:p-5 bg-black/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-accent/10 z-[70] pointer-events-auto"
                  >
                    {/* Header with Name & Live Status */}
                    <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <BrandLogo variant="fluid-monolith" size={20} glow={false} />
                        </div>
                        <div>
                          <h4 className="text-sm font-black tracking-tight text-white">
                            {resumeData.profile.name}
                          </h4>
                          <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-mono">
                            <MapPin className="w-2.5 h-2.5 text-accent" />
                            {resumeData.profile.location.split(",")[0]}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-400">
                          Active
                        </span>
                      </div>
                    </div>

                    {/* Headline & Bio Excerpt */}
                    <div className="pt-3 space-y-2">
                      <p className="text-xs font-semibold text-slate-200 leading-snug">
                        {resumeData.profile.headline}
                      </p>
                      <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                        Loughborough CS (1st Class, Y1 & Y2) • Next PIM Placement Developer
                      </p>
                    </div>

                    {/* Quick Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 mt-1 border-t border-white/5">
                      {["Next.js", "Blazor WASM", "C# / .NET", "TypeScript", "Python"].map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer link to Brand Lab */}
                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground font-mono">
                        Brand Mark: Fluid-M
                      </span>
                      <Link
                        href="/brand-preview"
                        className="text-[10px] font-mono text-accent hover:underline flex items-center gap-0.5 font-bold"
                      >
                        Brand Lab <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[0.7rem] uppercase tracking-[0.15em] font-medium transition-all relative py-1 ${
                      isActive ? "text-white font-bold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-8">
            <div className="hidden md:flex items-center gap-5 border-r border-border pr-6">
              <a
                href={resumeData.profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 p-1.5"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={resumeData.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 p-1.5"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <Link 
              href="/#contact" 
              className="cta-pill !py-2 !px-4 !text-[0.65rem] md:!py-2.5 md:!px-5 md:!text-[0.7rem]"
            >
              Let&apos;s Talk
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2.5 text-foreground rounded-xl hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between px-8 py-12 md:px-16"
          >
            {/* Top Brand Signature in Mobile Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 pt-12">
              <div className="flex items-center gap-3">
                <BrandLogo variant="fluid-monolith" size={36} glow={true} />
                <div>
                  <h3 className="text-base font-black tracking-tight text-white">{resumeData.profile.name}</h3>
                  <span className="text-[10px] font-mono text-accent">{resumeData.profile.headline}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 my-auto">
              {navItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[clamp(2.2rem,7vw,3.5rem)] font-black tracking-tighter hover:text-accent transition-colors leading-none block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-6">
                <a 
                  href={resumeData.profile.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  GitHub ↗
                </a>
                <a 
                  href={resumeData.profile.links.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>

              <Link
                href="/brand-preview"
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
              >
                Brand Lab <Sparkles className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
