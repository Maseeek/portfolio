import Image from "next/image";
import { resumeData } from "./data/resume";
import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LiveIconsBar } from "@/components/live-icons-bar";
import { SkillsSection } from "@/components/skills-section";
import { ContactCTA } from "@/components/contact-cta";
import { Award, Briefcase, Zap, Layers, GraduationCap, Trophy, Users, Globe2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <Hero profile={resumeData.profile} />

      {/* Dynamic Tech Bar */}
      <LiveIconsBar />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">
          <div className="section-header">
            <span className="section-label">About</span>
            <span className="section-label">01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 lg:gap-20 items-start">
            <ScrollReveal>
              <div className="w-full aspect-[2/3] max-w-[480px] mx-auto rounded-2xl overflow-hidden relative group border border-white/10 hover:border-accent/50 transition-all duration-700 hover:scale-[1.01] shadow-2xl bg-card/30 sticky top-24">
                <Image
                  src="/images/maseeek-cool.jpg"
                  alt="Maciek Geneja"
                  width={800}
                  height={1200}
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="w-full h-full object-cover grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Maciek Geneja</span>
                  <span className="text-accent font-mono">CS @ Loughborough</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[1.05]">
                    I build high-performance
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-indigo-400">
                      systems & software.
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg font-light leading-relaxed">
                    {resumeData.about.bio}
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-widest text-accent font-bold">
                      📍 {resumeData.profile.location}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs uppercase tracking-widest text-emerald-400 font-bold">
                      🏢 Next plc Systems Placement
                    </span>
                  </div>
                </div>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-accent">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Academics</span>
                    </div>
                    <div className="text-sm font-black text-white">1st Class Honours</div>
                    <p className="text-[11px] text-muted-foreground">1st & 2nd Year • Loughborough CS</p>
                  </div>

                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Placement Forefront</span>
                    </div>
                    <div className="text-sm font-black text-white">Next PIM Strategy</div>
                    <p className="text-[11px] text-muted-foreground">AI Attribution & Blazor WASM</p>
                  </div>

                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Zap className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Architecture</span>
                    </div>
                    <div className="text-sm font-black text-white">Valdris Sports Science</div>
                    <p className="text-[11px] text-muted-foreground">PostgreSQL RLS & AI Firewall</p>
                  </div>

                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Layers className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Full-Stack & Systems</span>
                    </div>
                    <div className="text-sm font-black text-white">Microservices & CV</div>
                    <p className="text-[11px] text-muted-foreground">C#, Python, React & Docker</p>
                  </div>
                </div>

                {/* Academic Rigor & Standout Modules Deck */}
                <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-white">Academic Rigor & Algorithmic Foundations</h3>
                        <p className="text-[11px] text-slate-400">BSc Computer Science — Loughborough University</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      1st Class (1st & 2nd Year)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {resumeData.academics.university.modules.map((mod) => (
                      <div 
                        key={mod.name} 
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="space-y-0.5">
                          <span className="text-xs font-medium text-slate-200 block">{mod.name}</span>
                          <span className="text-[10px] font-mono text-slate-400">{mod.category}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20 shrink-0">
                          {mod.grade}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                    <span>
                      <strong className="text-slate-300">A-Levels:</strong> {resumeData.academics.preUniversity.aLevels}
                    </span>
                    <span>
                      <strong className="text-slate-300">GCSEs:</strong> {resumeData.academics.preUniversity.gcses}
                    </span>
                  </div>
                </div>

                {/* Extracurriculars & Leadership Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 text-amber-400">
                      <Trophy className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">AU Athletics</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      Loughborough AU Volleyball representative & competitive Basketball player.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Leadership</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      Towers Hall Committee RAG Representative; charity fundraising & event coordination.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Globe2 className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Bilingual</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      Native English and Native / Bilingual Polish communication.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <ProjectsSection />

      {/* Skills & Capabilities Section */}
      <SkillsSection />

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">
          <div className="section-header">
            <span className="section-label">Experience</span>
            <span className="section-label">04</span>
          </div>

          <ExperienceTimeline experiences={resumeData.experience} />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <ContactCTA profile={resumeData.profile} />
    </div>
  );
}
