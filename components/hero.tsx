"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ResumeData } from "@/app/data/resume";
import { useRef } from "react";
import Link from "next/link";
import Magnetic from "./ui/magnetic";
import { BrandLogo } from "./ui/brand-logo";

export const Hero = ({ profile }: { profile: ResumeData["profile"] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.8], [0.12, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background -z-20" />
      <div className="absolute inset-0 bg-dot-white opacity-20 -z-10" />
      <div className="absolute inset-0 bg-background/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] -z-10" />

      {/* Floating Ambient Brand Watermark */}
      <motion.div
        style={{ y: watermarkY, opacity: watermarkOpacity }}
        className="absolute top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 pointer-events-none -z-10 select-none hidden sm:block"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] -z-10" />
          <BrandLogo variant="fluid-monolith" size={420} glow={false} className="opacity-70 drop-shadow-[0_0_80px_rgba(99,102,241,0.15)]" />
        </div>
      </motion.div>

      {/* Floating abstract lighting orbs - Pure GPU Composited */}
      <div 
        className="absolute top-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none animate-orb-1 transform-gpu"
      />
      <div 
        className="absolute bottom-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none animate-orb-2 transform-gpu"
      />

      <motion.div
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] w-full relative z-10 pt-24 md:pt-36 lg:pt-40"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
          <span className="text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.35em] text-foreground/70 font-bold">
            {profile.headline.toUpperCase()}
          </span>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full glass border-accent/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.2em] text-green-500 font-bold">
              Available
            </span>
          </div>
        </motion.div>

        <h1 className="text-[clamp(3rem,13vw,13rem)] font-black tracking-[-0.06em] leading-[0.9] md:leading-[0.85]">
          <div className="overflow-hidden pb-1 -mb-1">
            <motion.span variants={titleVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              {profile.name.split(" ")[0].toUpperCase()}
            </motion.span>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.span variants={titleVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
              {profile.name.split(" ")[1].toUpperCase()}
            </motion.span>
          </div>
        </h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-6 md:gap-14 lg:gap-20 mt-10 md:mt-16 lg:mt-20 items-start md:items-end"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 w-full md:w-auto">
            <Magnetic>
              <Link 
                href="/#contact" 
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Work with me 
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Magnetic>
            <Link 
              href="/#work" 
              className="text-[0.7rem] md:text-[0.75rem] font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-white transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              View Projects
            </Link>
          </div>
          <p className="text-[clamp(1.05rem,1.8vw,1.4rem)] text-slate-300 font-light leading-relaxed max-w-2xl">
            {profile.subHeadline}
          </p>
        </motion.div>
      </motion.div>
    </section>

  );
};
