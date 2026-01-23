import { resumeData } from "./data/resume";
import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ProjectCard } from "@/components/ui/project-card";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { TechBadge } from "@/components/ui/tech-badge";
import { MoreSection } from "@/components/more-section";

import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <Hero profile={resumeData.profile} />

      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-20">

        {/* About & Skills Section - 2 Column Layout */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter flex items-center gap-4">
              <span className="w-12 h-[2px] bg-accent rounded-full inline-block" />
              about <span className="text-accent text-glow">me</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed text-pretty font-light tracking-wide">
              {resumeData.about.bio}
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter flex items-center gap-4">
              <span className="w-12 h-[2px] bg-accent rounded-full inline-block" />
              tech <span className="text-accent text-glow">stack</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {[...resumeData.skills.languages, ...resumeData.skills.web, ...resumeData.skills.ai, ...resumeData.skills.tools].map((skill, i) => (
                <TechBadge key={i} name={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <h2 className="text-5xl font-bold tracking-tighter flex items-center gap-6">
            <span className="w-16 h-[2px] bg-accent rounded-full inline-block" />
            experience
          </h2>
          <ExperienceTimeline experiences={resumeData.experience} />
        </section>

        {/* Projects Section - Bento Grid */}
        <section id="projects" className="space-y-12">
          <h2 className="text-5xl font-bold tracking-tighter flex items-center gap-6">
            <span className="w-16 h-[2px] bg-accent rounded-full inline-block" />
            featured <span className="text-accent text-glow">work</span>
          </h2>


          <BentoGrid className="max-w-7xl mx-auto">
            {resumeData.projects.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                className={cn(
                  project.size === "large" ? "md:col-span-2 md:row-span-2" : "",
                  project.size === "medium" ? "md:col-span-1 md:row-span-1" : ""
                )}
              />
            ))}
          </BentoGrid>
        </section>

        <MoreSection />

      </div>

      <Footer profile={resumeData.profile} />
    </main>
  );
}
