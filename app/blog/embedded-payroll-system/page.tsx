import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EmbeddedPayrollBlog() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 sm:px-12 font-sans selection:bg-accent/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Embedded Payroll System
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              Navigating extreme hardware constraints with C++ and Arduino.
            </p>
          </div>
        </header>

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
    </div>
  );
}
