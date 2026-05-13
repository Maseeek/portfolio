import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MakeItAllBlog() {
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
              Make-It-All: Enterprise Productivity
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              Fusing disjointed systems into a unified platform with role-based access control.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Challenge</h2>
            <p>
              Make-It-All was a major university group project. The interesting twist was that I was tasked with compiling two entirely separate codebases—a semester-long to-do application and a semester-long messaging application, built by different groups—into a single, cohesive platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Solution</h2>
            <p>
              I engineered a high-performance enterprise productivity platform using Next.js, TypeScript, and Tailwind CSS. The backend was containerized with Docker, leveraging MySQL and hosted on Google Cloud Platform. 
            </p>
            <p>
              A core focus was building out Role-Based Access Control (RBAC) securely with JWT authentication to manage different tiers of users (managers, employees, etc.). Furthermore, I integrated Recharts to visualize real-time analytics, predicting productivity trends and tracking team satisfaction across the newly unified toolset.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
