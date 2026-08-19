"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Shield, Sparkles, PlusCircle, LayoutDashboard, ExternalLink, LogOut } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  // Do not render nav on the login page
  if (pathname === "/admin/login") {
    return null;
  }

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      setLoggingOut(false);
    }
  };

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { href: "/admin/brand-lab", label: "Brand Lab", icon: Sparkles },
    { href: "/admin/blogs/new", label: "Write Blog", icon: PlusCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand / Title */}
        <div className="flex items-center gap-3">
          <Link href="/admin" className="flex items-center gap-2.5 group">
            <BrandLogo variant="fluid-monolith" size={28} glow={false} />
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                MASEEEK // OWNER
              </span>
              <span className="text-[9px] font-mono text-accent uppercase tracking-widest">
                Control Suite
              </span>
            </div>
          </Link>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent">
            <Shield className="w-3 h-3" /> Authenticated
          </span>
        </div>

        {/* Center/Right: Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all ${
                  isActive
                    ? "bg-white/10 text-white font-bold border border-white/10"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <div className="h-4 w-px bg-white/10 mx-1" />

          {/* View Live Portfolio */}
          <Link
            href="/"
            target="_blank"
            className="px-3 py-1.5 rounded-xl text-xs font-mono text-muted-foreground hover:text-accent hover:bg-white/5 flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Live Site</span>
          </Link>

          {/* Sign Out */}
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="px-3 py-1.5 rounded-xl text-xs font-mono text-rose-400/80 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
