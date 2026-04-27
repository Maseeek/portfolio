import Image from "next/image";
import { resumeData } from "./data/resume";
import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectBentoCard } from "@/components/ui/project-bento-card";
import { ServicesSection } from "@/components/services-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LiveIconsBar } from "@/components/live-icons-bar";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <Hero profile={resumeData.profile} />

      {/* Dynamic Tech Bar */}
      <LiveIconsBar />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
          <div className="section-header">
            <span className="section-label">About</span>
            <span className="section-label">01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
            <ScrollReveal>
              <div className="w-full aspect-[3/4] md:aspect-auto md:h-full rounded-lg overflow-hidden relative group border border-border hover:border-accent/50 transition-all duration-700 hover:scale-[1.02] shadow-2xl">
                <Image
                  src="/images/maseeek-cool.jpg"
                  alt="Maciek Geneja"
                  fill
                  priority
                  className="object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-none mb-8">
                  I build things
                  <br />
                  that work.
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                  {resumeData.about.bio}
                </p>
                <span className="text-[0.8rem] uppercase tracking-[0.1em] text-accent">
                  📍 {resumeData.profile.location}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section — Bento Grid */}
      <section id="work" className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
          <div className="section-header">
            <span className="section-label">Selected Work</span>
            <span className="section-label">02</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(280px,auto)] gap-5">
            {resumeData.projects.map((project, i) => (
              <ProjectBentoCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Capabilities Section */}
      <SkillsSection />


      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
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
      <section id="contact" className="relative text-center py-[20vh] overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-12">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent font-semibold">
              Available for new projects
            </span>
          </div>
          
          <h2 className="text-[clamp(3rem,15vw,12rem)] font-black tracking-tighter leading-[0.85] mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50">
            LET&apos;S
            <br />
            WORK
          </h2>
          
          <div className="group inline-block">
            <a href={`mailto:${resumeData.profile.links.email}`} className="cta-email text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight inline-flex items-center gap-4 transition-transform group-hover:scale-105">
              {resumeData.profile.links.email}
              <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
