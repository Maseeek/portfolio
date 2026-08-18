"use client";

import React from "react";

export type LogoVariant = 
  | "fluid-monolith"    // Primary Signature: Smooth flowing continuous curves with diagonal negative-space slash
  | "neural-apex" 
  | "bracket-kernel" 
  | "isometric-compute" 
  | "architectural-monogram";

interface BrandLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: LogoVariant;
  size?: number;
  className?: string;
  glow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "fluid-monolith",
  size = 32,
  className = "",
  glow = true,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
      {...props}
    >
      <defs>
        {/* Sleek Chrome / Silver Gradient */}
        <linearGradient id={`m-chrome-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>

        {/* Electric Indigo to Cyan Accent Gradient */}
        <linearGradient id={`m-accent-flow-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5B4FC" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Soft Ambient Glow Filter */}
        {glow && (
          <filter id={`m-glow-${variant}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>

      {/* ========================================================================= */}
      {/* SIGNATURE FLUID-MONOLITH 'M' */}
      {/* Ultra-minimalist continuous flowing curves with sharp diagonal negative-space slash */}
      {/* ========================================================================= */}
      {variant === "fluid-monolith" && (
        <g className="group-hover:scale-105 transition-transform duration-300 origin-center">
          {/* Left Flowing Monolith Wing */}
          <path
            d="M 18 82 C 18 82 18 36 18 28 C 18 16.5 28.5 14 36 14 C 44 14 49.5 19 51.5 25.5 L 34 76.5 C 33 79 30 82 26 82 C 21 82 18 82 18 82 Z"
            fill={`url(#m-chrome-${variant})`}
          />

          {/* Left Inner Flow Accent */}
          <path
            d="M 22 80 V 30 C 22 20.5 28 16.5 35 16.5 C 42 16.5 47.5 20.5 50.5 27 L 35 80 Z"
            fill={`url(#m-accent-flow-${variant})`}
            opacity="0.85"
          />

          {/* Right Flowing Monolith Wing */}
          <path
            d="M 43 78 L 60.5 25 C 62.5 19 67.5 14 75 14 C 82.5 14 88 19 88 28 V 78 C 88 81.5 84.5 84 81 84 C 77.5 84 75 81.5 75 78 V 32 C 75 25.5 71.5 22.5 67.5 22.5 C 63.5 22.5 59.5 26.5 57.5 32 L 43 78 Z"
            fill={`url(#m-chrome-${variant})`}
          />

          {/* Continuous Flowing Center Arch (Underlay with Glow) */}
          <path
            d="M 22 76 C 22 30 24 17 36 17 C 46 17 50 25 52.5 34 C 55 25 59 17 69 17 C 80 17 82 30 82 76"
            stroke={`url(#m-accent-flow-${variant})`}
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={glow ? `url(#m-glow-${variant})` : undefined}
          />

          {/* Crisp Diagonal Negative-Space Cutter (Carving the diagonal slice) */}
          <path
            d="M 31 86 L 68 12"
            stroke="#030407"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Fallback Concept: Neural Apex */}
      {variant === "neural-apex" && (
        <g>
          <path d="M14 82V20C14 16.7 16.7 14 20 14H28L48 54L38 68L24 40V82H14Z" fill={`url(#m-chrome-${variant})`} />
          <path d="M86 82V20C86 16.7 83.3 14 80 14H72L52 54L62 68L76 40V82H86Z" fill={`url(#m-chrome-${variant})`} />
          <path d="M32 24L50 56L68 24" stroke={`url(#m-accent-flow-${variant})`} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="50,14 58,22 50,30 42,22" fill="#38BDF8" />
        </g>
      )}

      {/* Fallback Concept: Architectural Monogram */}
      {variant === "architectural-monogram" && (
        <g>
          <rect x="14" y="16" width="14" height="68" rx="5" fill={`url(#m-chrome-${variant})`} />
          <rect x="72" y="16" width="14" height="68" rx="5" fill={`url(#m-chrome-${variant})`} />
          <path d="M32 20L50 56L68 20H58L50 36L42 20H32Z" fill={`url(#m-accent-flow-${variant})`} />
        </g>
      )}

      {/* Fallback Concept: Bracket Kernel */}
      {variant === "bracket-kernel" && (
        <g>
          <path d="M34 16L12 50L34 84" stroke={`url(#m-chrome-${variant})`} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M66 16L88 50L66 84" stroke={`url(#m-chrome-${variant})`} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 38L50 62L66 38" stroke={`url(#m-accent-flow-${variant})`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="45" y="18" width="10" height="10" rx="3" transform="rotate(45 50 23)" fill="#38BDF8" />
        </g>
      )}

      {/* Fallback Concept: Isometric Compute */}
      {variant === "isometric-compute" && (
        <g>
          <path d="M16 32L34 22V66L16 76V32Z" fill={`url(#m-chrome-${variant})`} />
          <path d="M34 22L48 30V74L34 66V22Z" fill="#4338CA" />
          <path d="M16 32L34 22L48 30L30 40L16 32Z" fill="#E0E7FF" />
          <path d="M52 30L66 22V66L52 74V30Z" fill="#6366F1" />
          <path d="M66 22L84 32V76L66 66V22Z" fill="#38BDF8" />
          <path d="M52 30L66 22L84 32L70 40L52 30Z" fill="#FFFFFF" />
          <polygon points="50,42 60,48 50,54 40,48" fill="#FFFFFF" />
        </g>
      )}
    </svg>
  );
};
