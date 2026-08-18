import Link from "next/link";
import { ArrowLeft, Cpu, Database, ShieldAlert, Monitor, Microchip, HardDrive, Terminal } from "lucide-react";

export default function EmbeddedPayrollBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

        <header className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Microchip className="w-3 h-3 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">University Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
              embedded<span className="text-accent">payroll</span>system
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
              Navigating extreme hardware constraints. Designing a functional system within the tight limits of an Arduino Uno using C++.
            </p>
          </div>
        </header>

        {/* Constraints Alert */}
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <HardDrive className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">Memory-Constrained Environment</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Developing on an Arduino Uno means strictly managing kilobytes of RAM. Every variable, protocol, and state transition was rigorously optimized to prevent memory leaks and overflows.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-accent" />
              Core Architecture
            </h2>
            <ul className="space-y-4">
              {[
                { icon: ShieldAlert, title: "Finite State Machine", desc: "Structured core logic using a robust FSM to maintain predictable operations." },
                { icon: Terminal, title: "Custom Serial Protocol", desc: "Designed efficient data transfer protocols to communicate reliably." },
                { icon: Monitor, title: "LCD Integration", desc: "Interfaced with an LCD screen to display real-time payroll data securely." },
                { icon: Database, title: "Low-Level Memory", desc: "Direct hardware manipulation and tight memory management in C++." },
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
              <Microchip className="w-5 h-5 text-accent" />
              Technology Stack
            </h2>
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Language", "C++"],
                    ["Hardware", "Arduino Uno"],
                    ["Interface", "LCD Screen / Serial"],
                    ["Concepts", "FSM, Memory Optimization"],
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
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Project</h2>
            <p>
              This project was developed for a university module focused on embedded systems. The objective was to design a functional payroll system, but with a major catch: it had to run entirely on memory-constrained hardware, specifically an Arduino Uno interacting with an LCD screen.
            </p>
            <p>
              To make it work reliably within the tight memory limits, I wrote the software in C++ and structured the core logic around a Finite State Machine (FSM). I also had to design and implement custom serial communication protocols to handle data transfer efficiently without overwhelming the microcontroller's limited resources. It was a rigorous exercise in low-level programming and optimization.
            </p>
          </section>
        </article>
    </div>
  );
}
