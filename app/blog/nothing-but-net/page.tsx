import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Layout, Sparkles, CreditCard, Crosshair, Zap, Code } from "lucide-react";

export default function NothingButNetBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

        <header className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Premium Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              nothing<span className="text-accent">but</span>net
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
              The AI-Powered Basketball Analytics Studio. A premium, full-stack performance platform leveraging Computer Vision to track shooting metrics and trajectories.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://nothingbutnet.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-accent hover:text-white rounded-full text-sm font-bold transition-all transform hover:scale-105">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Live Site
            </a>
          </div>
        </header>

        {/* Development Status Alert */}
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">Ecosystem Expansion</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While the core CV engine is battle-tested, I am currently developing a comprehensive web interface to complement the mobile analysis experience, bringing the full "Analytics Studio" to the big screen.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Core Features
            </h2>
            <ul className="space-y-4">
              {[
                { icon: Cpu, title: "AI Shot Tracking", desc: "Automated detection of FGM and FGA using OpenCV-powered analysis." },
                { icon: Layout, title: "Analytics Studio", desc: "High-performance dashboard with bento-grid layouts and Chart.js visuals." },
                { icon: Sparkles, title: "Liquid Glass Design", desc: "Modern aesthetic with fluid animations powered by Framer Motion." },
                { icon: CreditCard, title: "Membership Tiers", desc: "Integrated Stripe payments for Guest, Free, and Pro tiers." },
                { icon: Crosshair, title: "Coordinate Mapping", desc: "Precision hoop and ball detection for accurate trajectory estimation." },
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
              <Cpu className="w-5 h-5 text-accent" />
              Technology Stack
            </h2>
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Frontend", "React 19, Vite 6, Framer Motion, Three.js"],
                    ["Backend", "Node.js (Express 5), MongoDB, Stripe SDK"],
                    ["CV Service", "Python 3.x, Flask, OpenCV, NumPy"],
                    ["Visualization", "Chart.js, Vanilla CSS"],
                  ].map(([label, tech]) => (
                    <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                      <td className="p-4 font-bold text-accent w-32">{label}</td>
                      <td className="p-4 text-gray-400">{tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-3">
              <h3 className="font-bold text-orange-400 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Performance Optimization
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Currently implementing <strong>Phase 1 Optimization</strong>:
              </p>
              <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                <li>80% reduction in processing latency</li>
                <li>Migration to YOLOv8/v11-nano tracking</li>
                <li>Native C++ porting for on-device processing</li>
              </ul>
            </div>
          </div>
        </section>

        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Mission</h2>
            <p>
              Nothing But Net was born from the intersection of competitive basketball and creative engineering. The goal was to build more than just a tracking app—I wanted to create a professional-grade studio that provides elite-level intelligence to any player with a smartphone.
            </p>
            <p>
              The transition from traditional CV techniques (like Hough Circle Transform) to modern AI object detection has been a core focus, ensuring that the platform remains robust in real-world outdoor court environments.
            </p>
          </section>
        </article>
    </div>
  );
}
