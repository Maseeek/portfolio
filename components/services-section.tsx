"use client";
import { ScrollReveal } from "@/components/scroll-reveal";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance, responsive web applications built with modern frameworks like Next.js, React, and Node.js.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Clean, functional interfaces that prioritize user experience and visual polish for maximum engagement.",
  },
  {
    num: "03",
    title: "AI Integration",
    desc: "Integrating generative AI, computer vision, and predictive models into production applications.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div className="section-header">
          <span className="section-label">Services</span>
          <span className="section-label">05</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc) => (
            <ScrollReveal key={svc.num}>
              <div className="svc-card group border border-white/5 bg-card/40 backdrop-blur-md rounded-3xl p-10 md:p-12 transition-all duration-700 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:bg-card/60 relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover:from-accent/10 transition-colors duration-700" />
                <div className="relative z-10">
                  <div className="text-6xl font-black text-white/[0.02] group-hover:text-accent/20 transition-all duration-500 mb-6 tracking-tighter group-hover:translate-x-2">
                    {svc.num}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">{svc.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-300">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
