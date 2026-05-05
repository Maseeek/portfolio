"use client";

import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/app/data/resume";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed top-0 left-0 right-0 z-[60] py-6 md:py-8 backdrop-blur-sm bg-background/50"
      >
        <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)] flex justify-between items-center">
          <div className="flex items-center gap-12">
            <a
              href="#"
              className="text-[1.1rem] font-bold tracking-[-0.03em] hover:opacity-70 transition-opacity"
            >
              MG.
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[0.7rem] uppercase tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 border-r border-border pr-8">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={resumeData.profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={resumeData.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>

            <a href="#contact" className="hidden sm:inline-flex cta-pill !py-2.5 !px-5 !text-[0.65rem] md:!py-3 md:!px-6 md:!text-[0.7rem]">
              Let's Talk
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col justify-center px-8 md:px-16"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[3.5rem] font-black tracking-tighter hover:text-accent transition-colors leading-none"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-20 pt-8 border-t border-border flex items-center gap-8">
              <a href={resumeData.profile.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm uppercase tracking-widest font-bold">GitHub</a>
              <a href={resumeData.profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm uppercase tracking-widest font-bold">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
