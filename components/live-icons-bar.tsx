"use client";

import { useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate the stack once for the marquee effect
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div ref={containerRef} className="relative w-full py-8 md:py-12 border-y border-white/5 bg-black/20 backdrop-blur-md overflow-hidden group my-8 md:my-14">
      <div className="flex overflow-hidden">
        <div className="flex items-center gap-14 md:gap-28 whitespace-nowrap px-6 md:px-10 animate-marquee">
          {duplicatedStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 md:gap-4 group/icon select-none"
            >
              <div className="relative">
                <tech.icon className={`text-2xl md:text-3xl ${tech.color} opacity-70 group-hover/icon:opacity-100 group-hover/icon:scale-110 transition-all duration-300`} />
                {/* Subtle glow on hover */}
                <div className={`absolute inset-0 blur-lg opacity-0 group-hover/icon:opacity-40 transition-opacity duration-300 ${tech.color} bg-current`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white/70 group-hover/icon:text-white/95 transition-colors duration-300">
                  {tech.name}
                </span>
                <div className="h-[1px] w-0 group-hover/icon:w-full bg-accent/50 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Background scanning line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(99,102,241,0.03)_50%,transparent_100%)] w-1/2 h-full -translate-x-full animate-[shimmer_8s_infinite_linear] pointer-events-none" />
    </div>
  );
};

