import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LyricForgeBlog() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 sm:px-12 font-sans selection:bg-accent/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              LyricForge
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              24 hours, sleeping on chairs, and AI-powered lyric generation.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">HackNotts 2025</h2>
            <p>
              LyricForge was built during HackNotts 2025, which happened to be my first proper hackathon. It was an incredibly intense and rewarding experience. By the end of the 24 hours, I was so exhausted I ended up sleeping on the chairs!
            </p>
            <p>
              The concept was an AI-powered platform that could take an existing song and rewrite its lyrics to fit entirely different moods, all while striving to preserve the original rhythm and flow. We built it out using Python and Flask, heavily leveraging the Gemini API for the creative text generation and the ElevenLabs API for audio integration.
            </p>
            <p>
              While we didn't end up winning any prizes, the sheer volume of learning, the chaotic 3 AM debugging sessions, and the experience of shipping a working product in 24 hours made it a massive success in my book.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
