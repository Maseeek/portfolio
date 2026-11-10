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
  display: "optional",
  preload: false,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "optional",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#0d1118",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maciekgeneja.me"),
  title: "Maciek Geneja | Enterprise Systems, Applied AI & Full-Stack Software Engineer",
  description:
    "Systems Placement Developer at Next plc (FTSE 100) & First-Class BSc Computer Science student at Loughborough University. Shipping C# & .NET enterprise systems, applied AI & Python computer vision, and React & TypeScript products.",
  keywords: [
    "Software Engineer",
    "Enterprise Systems",
    "Applied AI",
    "Full Stack Developer",
    "React 19",
    "Next.js",
    "Blazor WASM",
    "C#",
    "Python",
    "Next plc",
    "Maciek Geneja",
  ],
  authors: [{ name: "Maciek Geneja" }],
  openGraph: {
    title: "Maciek Geneja — Enterprise Systems, Applied AI & Full-Stack Engineer",
    description:
      "Systems Placement Developer at Next plc (FTSE 100) · First-Class BSc CS at Loughborough. Sole owner of NEOS AI Attribution 2.0, lead on the Item Tracker Blazor → React port, and creator of Do It & Nothing But Net.",
    url: "https://maciekgeneja.me",
    siteName: "Maciek Geneja",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Maciek Geneja — Enterprise Systems, Applied AI & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maciek Geneja — Enterprise Systems, Applied AI & Full-Stack Engineer",
    description:
      "Systems Placement Developer at Next plc (FTSE 100) · First-Class BSc CS at Loughborough. Sole owner of NEOS AI Attribution 2.0, lead on the Item Tracker Blazor → React port, and creator of Do It & Nothing But Net.",
    images: ["/og-card.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
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
    url: "https://maciekgeneja.me",
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

