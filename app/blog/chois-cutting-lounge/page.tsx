import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ChoisCuttingLoungeBlog() {
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
              Choi's Cutting Lounge
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              A modern web presence designed for freelance client acquisition.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://chois-cutting-lounge.vercel.app/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:border-accent/40">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </a>
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Pitch</h2>
            <p>
              I built this project as a freelance pitch. When you are trying to secure local businesses as clients, having a tangible, high-quality demo to show them is incredibly powerful. 
            </p>
            <p>
              I constructed this production-ready website using Next.js, styled it with Tailwind CSS, and deployed it on Vercel. The goal was to demonstrate how a modern web presence could drastically improve a barbershop's booking visibility, client communication, and overall brand identity compared to standard legacy sites or social media pages.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
