import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { resumeData } from "@/app/data/resume";
import { ScrollReveal } from "./scroll-reveal";

export function OpenSourceSection() {
  return (
    <section id="open-source" aria-labelledby="open-source-heading" className="py-16 md:py-24 lg:py-28 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">
        <div className="section-header">
          <span className="section-label">Open Source</span>
          <span className="section-label">03</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 lg:gap-20 items-start">
          <ScrollReveal>
            <div className="space-y-5">
              <h2 id="open-source-heading" className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-[-0.04em] leading-[1.05] text-white">
                Open Source<br />Contributions
              </h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                Improvements contributed to the tools I use, reviewed by their maintainers and merged upstream.
              </p>
              <a href={resumeData.profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                My GitHub profile <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {resumeData.openSourceContributions.map((contribution) => (
              <ScrollReveal key={contribution.pullRequestUrl}>
                <article aria-labelledby={`contribution-${contribution.pullRequestNumber}`} className="p-6 md:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <GitPullRequest className="w-4 h-4" aria-hidden="true" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">{contribution.role}</span>
                    </div>
                    <span className="text-xs text-emerald-300">
                      Merged <time dateTime={contribution.mergedDateISO}>{contribution.mergedDate}</time>
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-mono text-emerald-400">{contribution.project}</p>
                    <h3 id={`contribution-${contribution.pullRequestNumber}`} className="font-bold text-xl md:text-2xl text-white">{contribution.title}</h3>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">{contribution.description}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{contribution.details}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contribution.skills.map((skill) => (
                      <span key={skill} className="text-xs text-slate-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">{skill}</span>
                    ))}
                  </div>
                  <a href={contribution.pullRequestUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">
                    View merged PR #{contribution.pullRequestNumber}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
