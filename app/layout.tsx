import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { resumeData } from "./data/resume";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030407",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Maciek Geneja | Software Engineer & Full Stack Developer",
  description:
    "Computer Science student and Full Stack Developer specializing in high-performance web applications, modern software, and microservices.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React 19",
    "Next.js",
    "Blazor WASM",
    "C#",
    "Python",
    "Portfolio",
    "Maciek Geneja",
  ],
  authors: [{ name: "Maciek Geneja" }],
  openGraph: {
    title: "Maciek Geneja | Software Engineer & Full Stack Developer",
    description:
      "Building high-performance web apps, enterprise systems, and scalable infrastructure.",
    url: "https://maciek.dev",
    siteName: "Maciek Geneja Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maciek Geneja | Software Engineer & Full Stack Developer",
    description:
      "Building high-performance web apps, enterprise systems, and scalable infrastructure.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maciek Geneja",
    jobTitle: "Software Engineer & Developer",
    url: "https://maciek.dev",
    sameAs: [
      resumeData.profile.links.github,
      resumeData.profile.links.linkedin,
    ],
    knowsAbout: [
      "Software Engineering",
      "Next.js",
      "React",
      "Blazor WebAssembly",
      "C#",
      "Python",
      "TypeScript",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Loughborough University",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground grain min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-white font-mono text-xs font-bold shadow-2xl"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer profile={resumeData.profile} />
        </SmoothScroll>
      </body>
    </html>
  );
}

