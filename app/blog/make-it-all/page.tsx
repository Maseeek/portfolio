import Link from "next/link";
import { ArrowLeft, Building, Lock, LineChart, Server, Layout, ShieldCheck, Users } from "lucide-react";

export default function MakeItAllBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

        <header className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Building className="w-3 h-3 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Enterprise Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
              make<span className="text-accent">it</span>all
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
              Fusing disjointed systems into a unified platform with role-based access control and real-time enterprise analytics.
            </p>
          </div>
        </header>

        {/* Integration Alert */}
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">Codebase Unification</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The real challenge wasn't just building from scratch—it was taking two entirely separate, semester-long legacy codebases (a to-do app and a messaging app) and architecting a cohesive, secure platform around them.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-accent" />
              Core Features
            </h2>
            <ul className="space-y-4">
              {[
                { icon: Lock, title: "RBAC Security", desc: "Secure Role-Based Access Control via JWT for managers vs employees." },
                { icon: Users, title: "Unified Platform", desc: "Fusing two disparate systems into a seamless user experience." },
                { icon: LineChart, title: "Real-time Analytics", desc: "Recharts integration predicting productivity and tracking team satisfaction." },
                { icon: Layout, title: "Enterprise UX", desc: "Scalable dashboard interfaces built with Next.js and Tailwind." },
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
              <Server className="w-5 h-5 text-accent" />
              Technology Stack
            </h2>
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Frontend", "Next.js, TypeScript, Tailwind"],
                    ["Visualization", "Recharts"],
                    ["Database", "MySQL"],
                    ["DevOps", "Docker, Google Cloud Platform"],
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
  );
}
