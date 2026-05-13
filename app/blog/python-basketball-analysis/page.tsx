import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PythonBballAnalysisBlog() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 sm:px-12 font-sans selection:bg-accent/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Python Basketball Analysis
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              The foundational computer vision script that sparked a larger ecosystem.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Where It Started</h2>
            <p>
              Before there was "Nothing But Net," there was this initial Python script. I wanted to apply my programming skills to one of my biggest passions: playing competitive basketball. 
            </p>
            <p>
              Using OpenCV and NumPy, I wrote a computer vision pipeline designed to track a basketball in flight. By plotting the detected coordinates across frames, I utilized polynomial regression to model the parabolic trajectory of the ball. This allowed me to calculate the exact release angle of the shot and predict whether the shot would be a make or miss before it even reached the hoop.
            </p>
            <p>
              While this standalone script proved the concept, it also highlighted the massive difficulty of classical computer vision in varying lighting conditions—a problem that pushed me to keep iterating and eventually evolve this logic into the full web service it is today.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
