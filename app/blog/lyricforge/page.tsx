import Link from "next/link";
import { ArrowLeft, Mic, Sparkles, Code, Clock, Brain, Github } from "lucide-react";

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
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Hackathon Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
              lyric<span className="text-accent">forge</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
              24 hours, sleeping on chairs, and AI-powered lyric generation. A creative sprint at HackNotts 2025.
            </p>
          </div>
        </header>

        {/* Hackathon Alert */}
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">The 24-Hour Crucible</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While we didn't end up winning any prizes, the sheer volume of learning, the chaotic 3 AM debugging sessions, and the experience of shipping a working product in 24 hours made it a massive success.
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
                { icon: Brain, title: "AI Lyrics", desc: "Leveraging the Gemini API for creative, mood-based text generation." },
                { icon: Mic, title: "Audio Integration", desc: "Using ElevenLabs API to synthesize the rewritten lyrics." },
                { icon: Clock, title: "Rapid Prototyping", desc: "Going from concept to functional prototype in under 24 hours." },
                { icon: Code, title: "Flow Preservation", desc: "Algorithmically striving to preserve original rhythm and song structure." },
              ].map((feature, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="p-2 h-fit rounded-lg bg-white/5 text-accent">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
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
                    ["Backend", "Python, Flask"],
                    ["AI Text", "Google Gemini API"],
                    ["AI Audio", "ElevenLabs API"],
                    ["Frontend", "HTML, CSS"],
                  ].map(([label, tech]) => (
                    <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                      <td className="p-4 font-bold text-accent w-32">{label}</td>
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
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">HackNotts 2025</h2>
            <p>
              LyricForge was built during HackNotts 2025, which happened to be my first proper hackathon. It was an incredibly intense and rewarding experience. By the end of the 24 hours, I was so exhausted I ended up sleeping on the chairs!
            </p>
            <p>
              The concept was an AI-powered platform that could take an existing song and rewrite its lyrics to fit entirely different moods, all while striving to preserve the original rhythm and flow. We built it out using Python and Flask, heavily leveraging the Gemini API for the creative text generation and the ElevenLabs API for audio integration.
            </p>
          </section>
        </article>
    </div>
  );
}
