"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
                scrolled ? "w-[90%] md:w-auto" : "w-full px-6"
            )}
        >
            <div className={cn(
                "mx-auto flex items-center justify-between gap-8 px-6 py-3 transition-all duration-300",
                scrolled
                    ? "glass rounded-full px-8 py-3"
                    : "bg-transparent"
            )}>
                <a href="#" className="text-xl font-bold tracking-tighter shrink-0">
                    M<span className="text-accent">.</span>G
                </a>

                <div className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden md:block"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="mailto:maciekgeneja@gmail.com"
                        className="px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all whitespace-nowrap"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};
