"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ResumeData } from "@/app/data/resume";
import { useRef } from "react";
import Link from "next/link";
import Magnetic from "./ui/magnetic";

export const Hero = ({ profile }: { profile: ResumeData["profile"] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background -z-20" />
      <div className="absolute inset-0 bg-dot-white opacity-20 -z-10" />
      <div className="absolute inset-0 bg-background/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] -z-10" />

      {/* Floating abstract shapes */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-[80px] md:blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px] -z-10"
      />

      <motion.div
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)] w-full relative z-10 pt-32 md:pt-48"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10 md:mb-16">
          <span className="text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.4em] text-foreground/70 font-bold">
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

        <h1 className="text-[clamp(3.5rem,15vw,14rem)] font-black tracking-[-0.07em] leading-[0.85] md:leading-[0.82]">
          <div className="overflow-hidden h-[1.1em] -mb-[0.1em]">
            <motion.span variants={titleVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
              {profile.name.split(" ")[0].toUpperCase()}
            </motion.span>
          </div>
          <div className="overflow-hidden h-[1.1em]">
            <motion.span variants={titleVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground/90 to-foreground/30">
              {profile.name.split(" ")[1].toUpperCase()}
            </motion.span>
          </div>
        </h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-10 md:gap-20 mt-20 md:mt-32 items-start md:items-end"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full md:w-auto">
            <Magnetic>
              <Link href="/#contact" className="cta-pill group relative overflow-hidden w-full sm:w-auto text-center justify-center bg-foreground !text-background border-none hover:scale-105 active:scale-95 transition-transform duration-300">
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Work with me 
                  <motion.span className="inline-block transition-transform group-hover:translate-x-1">→</motion.span>
                </span>
              </Link>
            </Magnetic>
            <Link href="/#work" className="text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              View Projects
            </Link>
          </div>
          <p className="text-[clamp(1rem,1.8vw,1.4rem)] text-foreground/80 font-light leading-relaxed max-w-2xl">
            {profile.subHeadline}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/40 font-medium">
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 md:h-16 bg-gradient-to-b from-muted-foreground/30 to-transparent"
        />
      </motion.div>
    </section>

  );
};

