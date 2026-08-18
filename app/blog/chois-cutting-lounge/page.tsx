import Link from "next/link";
import { ArrowLeft, ExternalLink, Scissors, Calendar, Smartphone, Layout, Star, Code, Briefcase } from "lucide-react";

export default function ChoisCuttingLoungeBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

        <header className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Briefcase className="w-3 h-3 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Freelance Pitch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
              choi's<span className="text-accent">cutting</span>lounge
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
              A modern web presence designed for freelance client acquisition. Elevating barbershops from standard social pages to premium digital experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://chois-cutting-lounge.vercel.app/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-accent hover:text-white rounded-full text-sm font-bold transition-all transform hover:scale-105">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </a>
          </div>
        </header>

        {/* Development Status Alert */}
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">The Power of a Tangible Demo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When trying to secure local businesses as clients, words aren't enough. Having a tangible, high-quality, production-ready demo to show them is incredibly powerful for visualizing their brand's potential.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              Core Features
            </h2>
            <ul className="space-y-4">
              {[
                { icon: Scissors, title: "Modern Aesthetic", desc: "Premium styling tailored to highlight grooming services and shop ambiance." },
                { icon: Calendar, title: "Booking Integration", desc: "Clear call-to-actions funneling clients to scheduling platforms." },
                { icon: Smartphone, title: "Mobile First", desc: "Fully responsive layouts designed for on-the-go browsing." },
                { icon: Layout, title: "Brand Identity", desc: "Polished UI components to establish trust and professional presence." },
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
                    ["Framework", "Next.js"],
                    ["Styling", "Tailwind CSS"],
                    ["Deployment", "Vercel"],
                    ["Architecture", "Component-driven React"],
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
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Pitch</h2>
            <p>
              I built this project as a freelance pitch. The goal was to demonstrate how a modern web presence could drastically improve a barbershop's booking visibility, client communication, and overall brand identity compared to standard legacy sites or social media pages.
            </p>
            <p>
              By leveraging Next.js and Tailwind CSS, I was able to rapidly prototype a performant and visually striking site that acts as a strong foundation for any grooming business looking to elevate their digital storefront.
            </p>
          </section>
        </article>
    </div>
  );
}
