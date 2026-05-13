import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function NothingButNetBlog() {
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
              Nothing But Net: Full-Stack Shot Tracking
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              From a simple computer vision script to a complete basketball analytics platform.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://nothingbutnet.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:border-accent/40">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Live Site
            </a>
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Evolution</h2>
            <p>
              What started as a basic Python script to predict the trajectory of a basketball using OpenCV quickly evolved into a full-fledged shot tracking service. I wanted a way to automatically log makes, misses, and release angles.
            </p>
            <p>
              I built out a full-stack platform using React, Node.js, and MongoDB, integrating my Python computer vision logic as the core processing engine. The application now provides a real-time dashboard and historical analysis for players to track their shooting progression.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Technical Hurdles</h2>
            <p>
              The most significant challenge by far was the computer vision aspect. Relying on the Hough Circle Transform for tracking the basketball proved incredibly difficult when factoring in varying environments, unpredictable lighting conditions, and camera qualities.
            </p>
            <p>
              It's still an ongoing challenge to get it completely robust across all edge cases. Because traditional CV techniques can be brittle in diverse environments, I've been experimenting with small, lightweight Neural Networks like YOLO to handle the object detection phase more reliably. 
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
