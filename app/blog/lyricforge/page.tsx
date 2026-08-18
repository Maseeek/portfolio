import Link from "next/link";
import { ArrowLeft, Mic, Sparkles, Code, Clock, Brain, Zap, Layers } from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

export default function LyricForgeBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

      <header className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <Clock className="w-3 h-3 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">HackNotts 2025 • Multi-Agent GenAI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
            lyric<span className="text-accent">forge</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
            An AI-powered multi-agent pipeline for thematic lyric rewriting and text-to-speech synthesis built during a 24-hour hackathon sprint.
          </p>
        </div>
      </header>

      {/* Multi-Agent Orchestration Alert */}
      <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Multi-Agent AI Pipeline & Latency Optimization</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Coordinated a multi-agent backend using Python and Flask to orchestrate semantic song understanding, vocal isolation, and ElevenLabs text-to-speech generation—minimizing pipeline latency while strictly preserving rhyme schemes, syllabic cadence, and emotional tone.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Core Capabilities
          </h2>
          <ul className="space-y-4">
            {[
              { icon: Brain, title: "Multi-Agent AI Pipeline", desc: "Coordinating LLM agents in Python/Flask to decouple semantic decomposition from poetic rewriting." },
              { icon: Mic, title: "Context-Aware Audio Synthesis", desc: "ElevenLabs API orchestration with custom voice timbre and emotion-conditioned speech synthesis." },
              { icon: Layers, title: "Syllabic Meter & Rhyme Preservation", desc: "Algorithmic validation enforcing syllable count matching and rhythm cadence against original song tracks." },
              { icon: Zap, title: "Low-Latency Concurrency", desc: "Asynchronous stream dispatch minimizing perceived waiting time during complex multi-step generation." },
            ].map((feature, i) => (
              <li key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="p-2 h-fit rounded-lg bg-white/5 text-accent shrink-0">
                  <feature.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-accent" />
            Technology Stack
          </h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                {[
                  ["Backend Layer", "Python 3.x, Flask, Async Dispatch"],
                  ["LLM Orchestration", "Google Gemini API (Multi-Agent Prompts)"],
                  ["Audio Synthesis", "ElevenLabs API (TTS Voice Cloning)"],
                  ["Client Interface", "TypeScript, React, HTML5 Audio"],
                  ["Event", "HackNotts 2025 (24-Hour Crucible)"],
                ].map(([label, tech]) => (
                  <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-accent w-36">{label}</td>
                    <td className="p-4 text-gray-400">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">HackNotts 2025 Crucible</h2>
          <p>
            LyricForge was developed during HackNotts 2025 in an intense 24-hour sprint. The ambition was to build an intelligent creative studio that could take any existing musical track and rewrite its lyrics to match an entirely new theme or emotion—all while retaining the track&apos;s original syllabic structure, rhythm, and rhyme scheme.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Multi-Agent Pipeline Architecture</h2>
          <p>
            A naive single-prompt approach fails because LLMs struggle to balance lyrical creativity with rigid meter constraints simultaneously. To solve this:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>
              <strong>Analyzer Agent:</strong> Breaks input lyrics into verses, measuring syllable counts, stress patterns, and rhyme schemes (e.g. AABB, ABAB).
            </li>
            <li>
              <strong>Thematic Composer Agent:</strong> Rewrites lines according to target moods while respecting the extracted rhythmic skeleton.
            </li>
            <li>
              <strong>Synthesis Agent:</strong> Dispatches rewritten lyrics to ElevenLabs API to generate emotionally nuanced vocal output with minimal latency.
            </li>
          </ul>
        </section>
      </article>

      {/* Project Pagination */}
      <ProjectPagination currentSlug="lyricforge" />
    </div>
  );
}
