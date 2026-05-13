import Image from "next/image";
import { resumeData } from "./data/resume";
import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectBentoCard } from "@/components/ui/project-bento-card";
import { ServicesSection } from "@/components/services-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LiveIconsBar } from "@/components/live-icons-bar";
import { SkillsSection } from "@/components/skills-section";
import Magnetic from "@/components/ui/magnetic";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <Hero profile={resumeData.profile} />

      {/* Dynamic Tech Bar */}
      <LiveIconsBar />

      {/* About Section */}
      <section id="about" className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
          <div className="section-header">
            <span className="section-label">About</span>
            <span className="section-label">01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
            <ScrollReveal>
              <div className="w-full h-auto rounded-lg overflow-hidden relative group border border-border hover:border-accent/50 transition-all duration-700 hover:scale-[1.02] shadow-2xl bg-card/20">
                <Image
                  src="/images/maseeek-cool.jpg"
                  alt="Maciek Geneja"
                  width={800}
                  height={1200}
                  priority
                  className="w-full h-auto object-contain grayscale-0 transition-all duration-700"
                />
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

      <section id="work" className="relative pt-12 pb-32 md:pt-16 md:pb-40">
        {/* Section Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
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
      <section id="experience" className="pt-20 pb-16 md:pt-24 md:pb-20">
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
          
          <h2 className="text-[clamp(4rem,20vw,16rem)] font-black tracking-tighter leading-[0.75] mb-16 md:mb-24 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/30">
            LET&apos;S
            <br />
            BUILD.
          </h2>
          
          <div className="group inline-block">
            <Magnetic>
              <a href={`mailto:${resumeData.profile.links.email}`} className="cta-email text-[clamp(1.5rem,3vw,3rem)] font-bold tracking-tight inline-flex items-center gap-4 transition-transform">
                {resumeData.profile.links.email}
                <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
