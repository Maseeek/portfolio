"use client";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    isIncoming?: boolean;
}

export const ExperienceTimeline = ({ experiences }: { experiences: readonly Experience[] }) => {
    return (
        <div className="relative border-l-2 border-white/5 ml-3 md:ml-6 space-y-12 py-8">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pl-10 md:pl-16"
                >
                    {/* Dot on the timeline */}
                    <div className={cn(
                        "absolute -left-[9px] top-6 h-4 w-4 rounded-full border-4 border-background transition-colors duration-500",
                        exp.isIncoming ? "bg-accent shadow-[0_0_15px_var(--accent)]" : "bg-white/10 group-hover:bg-white/20"
                    )} />

                    <div className={cn(
                        "rounded-[2rem] p-8 md:p-10 transition-all duration-500 glass group/item hover:bg-white/[0.08] hover:border-white/20",
                        exp.isIncoming && "border-accent/30 bg-accent/5 ring-1 ring-accent/20"
                    )}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                                <div className="flex items-center gap-3 text-neutral-400 font-medium">
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-dark text-xs border-white/5 uppercase tracking-widest text-accent">
                                        {exp.company}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono bg-white/5 px-4 py-1.5 rounded-full border border-white/5 self-start md:self-center">
                                <Calendar className="w-3.5 h-3.5" />
                                {exp.period}
                            </div>
                        </div>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-4xl">
                            {exp.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

