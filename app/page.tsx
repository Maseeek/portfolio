import Image from "next/image";
import { resumeData } from "./data/resume";
import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectBentoCard } from "@/components/ui/project-bento-card";
import { ServicesSection } from "@/components/services-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LiveIconsBar } from "@/components/live-icons-bar";
import { SkillsSection } from "@/components/skills-section";
import { ContactCTA } from "@/components/contact-cta";
import { Award, Briefcase, Zap, Layers } from "lucide-react";

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

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="w-full aspect-[2/3] max-w-[480px] mx-auto rounded-2xl overflow-hidden relative group border border-white/10 hover:border-accent/50 transition-all duration-700 hover:scale-[1.01] shadow-2xl bg-card/30">
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
              <div className="space-y-6">
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[1.05]">
                  I build high-performance
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">
                    systems & software.
                  </span>
                </h2>
                <p className="text-slate-300 text-lg font-light leading-relaxed">
                  {resumeData.about.bio}
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-widest text-accent font-bold">
                    📍 {resumeData.profile.location}
                  </span>
                </div>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 pt-3">
                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-accent">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Academics</span>
                    </div>
                    <div className="text-sm font-black text-white">1st Class Honours</div>
                    <p className="text-[11px] text-muted-foreground">Year 1 Loughborough CS</p>
                  </div>

                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Placement</span>
                    </div>
                    <div className="text-sm font-black text-white">Next PIM Strategy</div>
                    <p className="text-[11px] text-muted-foreground">AI Attribution & Blazor WASM</p>
                  </div>

                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Zap className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Web Vitals</span>
                    </div>
                    <div className="text-sm font-black text-white">&lt; 450ms LCP</div>
                    <p className="text-[11px] text-muted-foreground">100/100 Core Web Vitals</p>
                  </div>

                  <div className="stat-card-gradient p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Layers className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Full-Stack</span>
                    </div>
                    <div className="text-sm font-black text-white">Microservices</div>
                    <p className="text-[11px] text-muted-foreground">.NET, Blazor, React & Cloud</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="relative py-16 md:py-24 lg:py-28">
        {/* Section Background Glow - Hardware Composited */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10 will-change-transform transform-gpu" />
        
        <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">
          <div className="section-header">
            <span className="section-label">Selected Work</span>
            <span className="section-label">02</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
            {resumeData.projects.map((project, i) => (
              <ProjectBentoCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

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
