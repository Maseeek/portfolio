"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  SiPython, SiTypescript, SiNextdotjs, SiReact, 
  SiTailwindcss, SiMysql, SiGooglecloud, SiTensorflow,
  SiDocker, SiMongodb, SiCplusplus, SiPytorch
} from "react-icons/si";

const techStack = [
  { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
  { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
  { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-[#06B6D4]" },
  { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]" },
  { icon: SiGooglecloud, name: "GCP", color: "text-[#4285F4]" },
  { icon: SiTensorflow, name: "TensorFlow", color: "text-[#FF6F00]" },
  { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
  { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
  { icon: SiCplusplus, name: "C++", color: "text-[#00599C]" },
  { icon: SiPytorch, name: "PyTorch", color: "text-[#EE4C2C]" },
];

export const LiveIconsBar = () => {
  const [status, setStatus] = useState("SYSTEMS OPERATIONAL");
  
  useEffect(() => {
    const statuses = [
      "SYSTEMS OPERATIONAL",
      "CORE STACK SYNCED",
      "LATENCY: 12ms",
      "READY FOR DEPLOY",
      "UPTIME: 99.99%",
      "OPTIMIZING ASSETS"
    ];
    const interval = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate the stack once for the marquee effect
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="relative w-full py-8 md:py-12 border-y border-white/5 bg-black/20 backdrop-blur-md overflow-hidden group my-0">
      {/* Dynamic Status Indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 bg-[#080808] border border-white/10 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] font-black text-accent/80 whitespace-nowrap">
          {status}
        </span>
      </div>

      <div className="flex overflow-hidden">
        <div className="flex items-center gap-20 md:gap-32 whitespace-nowrap px-10 animate-marquee">
          {duplicatedStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-4 group/icon"
            >
              <div className="relative">
                <tech.icon className={`text-2xl md:text-4xl ${tech.color} opacity-70 group-hover/icon:opacity-100 group-hover/icon:scale-110 transition-all duration-500`} />
                {/* Subtle glow on hover */}
                <div className={`absolute inset-0 blur-xl opacity-0 group-hover/icon:opacity-40 transition-opacity duration-500 ${tech.color} bg-current`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white/70 group-hover/icon:text-white/90 transition-colors duration-500">
                  {tech.name}
                </span>
                <div className="h-[1px] w-0 group-hover/icon:w-full bg-accent/50 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge Fades - more premium look */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />
      
      {/* Background scanning line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.03)_50%,transparent_100%)] w-1/2 h-full -translate-x-full animate-[shimmer_10s_infinite_linear] pointer-events-none" />
    </div>
  );
};
