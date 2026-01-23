"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPhp, SiMysql,
    SiReact, SiNextdotjs, SiNodedotjs, SiFlask, SiTailwindcss, SiGooglecloud,
    SiOpencv, SiTensorflow, SiGit, SiDocker, SiMongodb, SiArduino, SiOpenai, SiGoogle
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Cpu } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    "Python": <SiPython className="text-[#3776AB]" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    "Java": <FaJava className="text-[#007396]" />,
    "C++": <SiCplusplus className="text-[#00599C]" />,
    "SQL": <SiMysql className="text-[#4479A1]" />, // Using MySQL as generic SQL icon
    "PHP": <SiPhp className="text-[#777BB4]" />,
    "React": <SiReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="markdown-body dark:text-white text-black" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "Flask": <SiFlask className="dark:text-white text-black" />,
    "Tailwind": <SiTailwindcss className="text-[#06B6D4]" />,
    "Google Cloud APIs": <SiGooglecloud className="text-[#4285F4]" />,
    "OpenCV": <SiOpencv className="text-[#5C3EE8]" />,
    "TensorFlow": <SiTensorflow className="text-[#FF6F00]" />,
    "Computer Vision": <Cpu className="text-accent" />, // Generic icon
    "Predictive Techniques": <Cpu className="text-accent" />,
    "Generative AI & LLMs (Gemini, OpenAI)": <div className="flex gap-1"><SiGoogle className="text-white" /><SiOpenai className="text-white" /></div>,
    "Git": <SiGit className="text-[#F05032]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Arduino": <SiArduino className="text-[#00979D]" />,
};

export const TechBadge = ({ name }: { name: string }) => {
    const icon = iconMap[name] || <Cpu className="w-4 h-4" />;

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-neutral-300 hover:border-accent hover:bg-accent/5 hover:shadow-[0_0_20px_-5px_var(--accent)] transition-all cursor-default"
        >
            <span className="text-lg">{icon}</span>
            <span>{name}</span>
        </motion.div>
    );
};
