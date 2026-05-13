import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { resumeData } from "./data/resume";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maciek Geneja | Software Engineer & Designer",
  description:
    "Computer Science student and Full Stack Developer specializing in high-performance web applications and AI integration.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Maciek Geneja",
  ],
  authors: [{ name: "Maciek Geneja" }],
  openGraph: {
    title: "Maciek Geneja | Software Engineer & Designer",
    description:
      "Building predictive web apps and scalable infrastructure.",
    url: "https://maciek.dev",
    siteName: "Maciek Geneja Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maciek Geneja | Software Engineer & Designer",
    description:
      "Building predictive web apps and scalable infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground grain`}
        style={{ cursor: "none" }}
      >
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer profile={resumeData.profile} />
      </body>
    </html>
  );
}
