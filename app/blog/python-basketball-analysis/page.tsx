import Link from "next/link";
import { ArrowLeft, Video, Target, LineChart, Code, Activity, FlaskConical } from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

export default function PythonBballAnalysisBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

        <header className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <FlaskConical className="w-3 h-3 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Research Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
              python<span className="text-accent">basketball</span>analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
              The foundational computer vision script that sparked a larger ecosystem. Modeling parabolic trajectories to predict makes and misses.
            </p>
          </div>
        </header>

        {/* Origin Alert */}
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">The Genesis of Nothing But Net</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While this standalone script proved the mathematical concepts of shot analysis, it also highlighted the immense difficulty of classical computer vision in varying lighting conditions—a problem that pushed me to evolve this logic into modern AI object detection.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Core Mechanisms
            </h2>
            <ul className="space-y-4">
              {[
                { icon: Video, title: "OpenCV Pipeline", desc: "Frame-by-frame processing to detect and isolate the basketball." },
                { icon: LineChart, title: "Trajectory Modeling", desc: "Using polynomial regression to map the parabolic flight path." },
                { icon: Activity, title: "Angle Calculation", desc: "Deriving exact release angles from the generated curve." },
                { icon: Target, title: "Outcome Prediction", desc: "Predicting whether the shot will make or miss before reaching the hoop." },
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
                    ["Language", "Python 3.x"],
                    ["Vision", "OpenCV"],
                    ["Math & Arrays", "NumPy"],
                    ["Approach", "Classical CV (Color Masking)"],
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

        {/* Project Pagination */}
        <ProjectPagination currentSlug="python-basketball-analysis" />
    </div>
  );
}
