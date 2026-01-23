"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ResumeData } from "@/app/data/resume";
import React from "react";
import { cn } from "@/lib/utils";

export const Hero = ({ profile }: { profile: ResumeData["profile"] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const nameX = useTransform(x, [-0.5, 0.5], [-30, 30]);
  const nameY = useTransform(y, [-0.5, 0.5], [-30, 30]);
  const roleX = useTransform(x, [-0.5, 0.5], [15, -15]);
  const roleY = useTransform(y, [-0.5, 0.5], [15, -15]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full -z-10" />

      <motion.div
        style={{ x: nameX, y: nameY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-20 relative group w-full px-6 flex flex-col items-center"
      >
        <div className="relative inline-block">
          <h1 className={cn(
            "text-[12vw] md:text-[8vw] xl:text-[9rem] font-bold tracking-tighter leading-[0.9] lowercase gradient-text",
            "transition-all duration-700 select-none"
          )}
          >
            {profile.name}
          </h1>
          <div className="absolute -inset-x-2 -inset-y-2 bg-gradient-to-r from-accent to-primary blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
        </div>
      </motion.div>

      <motion.div
        style={{ x: roleX, y: roleY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 text-center z-10 max-w-3xl px-4 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium secondary-gradient-text tracking-tight lowercase">
          {profile.headline}
        </h2>
        <p className="mt-6 text-neutral-400 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          {profile.subHeadline}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex gap-4"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
            View Work
          </a>
          <a href="#about" className="px-8 py-3 rounded-full border border-white/10 glass hover:bg-white/10 transition-colors">
            About Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};

