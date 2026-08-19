"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, ArrowRight, ShieldCheck, AlertCircle, ArrowLeft, Eye, EyeOff, KeyRound } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";

function LoginForm() {
  const [secret, setSecret] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";
  const urlError = searchParams.get("error");

  // Format OAuth error codes into user-friendly messages
  const getErrorMessage = () => {
    if (error) return error;
    if (urlError === "unauthorized_account") {
      return "Access Denied: This account is not whitelisted. Access is strictly restricted to maseeek (GitHub) and maciekgeneja@gmail.com (Google).";
    }
    if (urlError === "oauth_not_configured") {
      return "OAuth credentials are not configured in environment variables. Please use the Master Secret Key below.";
    }
    if (urlError === "oauth_exchange_failed" || urlError === "invalid_oauth_request") {
      return "OAuth authentication failed during provider handshake. Please try again or use the Master Secret Key.";
    }
    if (urlError === "oauth_server_error") {
      return "Server error occurred during OAuth verification.";
    }
    return null;
  };

  const activeError = getErrorMessage();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!secret.trim()) {
      setError("Please enter the owner secret key.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Authentication failed. Invalid secret key.");
        setLoading(false);
        return;
      }

      router.push(from);
      router.refresh();
    } catch {
      setError("Network or server error during login.");
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
      {activeError && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono flex items-start gap-3">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{activeError}</span>
        </div>
      )}

      {/* OAuth One-Click Logins */}
      <div className="space-y-3">
        <a
          href="/api/auth/github"
          className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer group"
        >
          <FaGithub className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          <span>Continue with GitHub (maseeek)</span>
        </a>

        <a
          href="/api/auth/google"
          className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer group"
        >
          <FaGoogle className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
          <span>Continue with Google (maciekgeneja)</span>
        </a>
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="border-t border-white/10 w-full" />
        <span className="bg-background px-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest absolute">
          or master key
        </span>
      </div>

      {/* Master Secret Key Form */}
      <form onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5 text-accent" /> Master Secret Key
          </label>
          <div className="relative">
            <input
              type={showSecret ? "text" : "password"}
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter OWNER_SECRET_KEY..."
              required
              className="w-full px-4 py-3.5 pr-12 rounded-xl bg-black/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm text-white placeholder:text-white/30 font-mono transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowSecret(!showSecret)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-xs font-mono tracking-wider uppercase transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Authenticate Key</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Whitelist Badge */}
      <div className="pt-4 border-t border-white/5 space-y-2 text-[11px] font-mono text-white/40">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Whitelisted Owner Only
          </span>
          <span className="text-accent font-bold">maseeek</span>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-accent transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
          </Link>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 text-accent mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">
            Owner Access
          </h1>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Restricted Control Panel & Brand Lab
          </p>
        </div>

        <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-muted-foreground">Loading authentication interface...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
