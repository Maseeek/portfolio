"use client";
import React from "react";
import { BentoGridItem } from "./bento-grid";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectProps {
    title: string;
    description: string;
    url?: string;
    stack: readonly string[];
    size?: "small" | "medium" | "large";
    image?: string;
}

export const ProjectCard = ({ project, className }: { project: ProjectProps, className?: string }) => {
    const content = (
        <BentoGridItem
            className={project.url ? "h-full" : className}
            title={
                <div className="flex items-center justify-between">
                    <span className="font-display tracking-tight text-3xl lowercase">{project.title}</span>
                    {project.url && (
                        <div className="p-2 rounded-full glass border-white/5 group-hover/bento:bg-white/10 transition-colors">
                            <ExternalLink className="w-5 h-5 text-neutral-400 group-hover/bento:text-accent transition-colors" />
                        </div>
                    )}
                </div>
            }
            description={
                <div className="flex flex-col h-full">
                    <p className="mb-8 text-neutral-400 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-1.5 text-[11px] rounded-full border border-white/5 bg-white/5 text-neutral-300 font-medium tracking-wide"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            }
            header={
                project.image ? (
                    <div className="w-full h-64 md:h-full min-h-[16rem] rounded-2xl overflow-hidden relative group/img border border-white/5">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/10 transition-colors duration-500" />
                    </div>
                ) : (
                    <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/5 flex items-center justify-center group-hover/bento:border-accent/30 transition-all duration-500">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover/bento:scale-110 transition-transform">
                            <span className="text-3xl grayscale group-hover/bento:grayscale-0 transition-all">⚡</span>
                        </div>
                    </div>
                )
            }
        />
    );


    if (project.url) {
        return (
            <Link href={project.url} target="_blank" className={cn("block h-full cursor-pointer", className)}>
                {content}
            </Link>
        );
    }

    return content;
};
