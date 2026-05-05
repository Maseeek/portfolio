"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ResumeData } from "@/app/data/resume";
import { useRef } from "react";

export const Hero = ({ profile }: { profile: ResumeData["profile"] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background -z-20" />
      <div className="absolute inset-0 bg-dot-white opacity-40 -z-10" />
      <div className="absolute inset-0 bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)] -z-10" />

      {/* Floating abstract shapes for extra "wow" - disabled or simplified on small screens for performance */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10"
      />

      <motion.div
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)] w-full relative z-10 pt-20 md:pt-0"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 md:mb-10">
          <span className="text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground">
            Software Engineer & Designer
          </span>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.2em] text-green-500 font-semibold">
              Available
            </span>
          </div>
        </motion.div>

        <h1 className="text-[clamp(2.5rem,15vw,14rem)] font-black tracking-[-0.06em] leading-[0.8] md:leading-[0.78]">
          <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
            {profile.name.split(" ")[0].toUpperCase()}
          </motion.span>
          <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground/90 to-foreground/40">
            {profile.name.split(" ")[1].toUpperCase()}
          </motion.span>
        </h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 mt-12 md:mt-20 items-start md:items-end"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto">
            <a href="#contact" className="cta-pill group relative overflow-hidden w-full sm:w-auto text-center justify-center">
              <span className="relative z-10 flex items-center gap-2">
                Work with me 
                <motion.span className="inline-block transition-transform group-hover:translate-x-1">→</motion.span>
              </span>
            </a>
            <a href="#work" className="text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              View Projects
            </a>
          </div>
          <p className="text-[clamp(0.9rem,1.5vw,1.35rem)] text-muted-foreground font-normal leading-relaxed max-w-2xl">
            {profile.subHeadline}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};
