import Link from "next/link";
import { ArrowLeft, Building, Lock, LineChart, Server, Layout, ShieldCheck, Kanban, Database, Sparkles } from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

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
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Enterprise Monorepo Project</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
            make<span className="text-accent">it</span>all
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
            Full-stack internal collaboration platform with strict RBAC, soft-deletes, shared TypeScript interfaces, and drag-and-drop Kanban analytics.
          </p>
        </div>
      </header>

      {/* Stakeholder Presentation Alert */}
      <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Presented to External Stakeholders</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Co-developed across a 7-member university engineering team. I led the UI/UX architecture and API contracts, successfully demonstrating the live deployment-ready application to industry stakeholders and receiving commendation for technical robustness and intuitive design.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Server className="w-5 h-5 text-accent" />
            Core Engineering Highlights
          </h2>
          <ul className="space-y-4">
            {[
              { icon: Lock, title: "JWT & RBAC Security", desc: "Secured endpoints with bcrypt password hashing and strict Role-Based Access Control distinguishing Managers from Team Members." },
              { icon: Database, title: "MySQL Pooling & Soft-Deletes", desc: "Relational database utilizing connection pooling for high throughput and soft-delete schemas for compliance and audit recovery." },
              { icon: Kanban, title: "Complex Kanban State", desc: "Trello-style drag-and-drop task orchestration with optimistic UI updates and instant conflict resolution." },
              { icon: LineChart, title: "Managerial Analytics (Chart.js)", desc: "Real-time managerial dashboards rendering dynamic Gantt schedules, productivity doughnuts, and team workload distributions." },
              { icon: Layout, title: "Shared TypeScript Monorepo", desc: "Shared domain models and DTO interfaces across Vite/React client and Express backend for 100% end-to-end type safety." },
            ].map((feature, i) => (
              <li key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="p-2 h-fit rounded-lg bg-white/5 text-accent shrink-0">
                  <feature.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{feature.desc}</p>
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
                  ["Architecture", "Monorepo (Node.js/Express REST API + Vite/React SPA)"],
                  ["Database", "MySQL with Connection Pooling & Soft-Deletes"],
                  ["Authentication", "JWT, Bcrypt, Role-Based Access Control (RBAC)"],
                  ["Analytics & UI", "Chart.js, Tailwind CSS, Drag-and-Drop Kanban"],
                  ["Deployment", "Vercel Frontend & Containerized Backend Services"],
                ].map(([label, tech]) => (
                  <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-accent w-36">{label}</td>
                    <td className="p-4 text-gray-400">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 space-y-2">
            <h3 className="font-bold text-cyan-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Type-Safe Service Contracts
            </h3>
            <pre className="text-xs text-gray-300 leading-relaxed font-mono whitespace-pre-wrap">
              <code>{`// Shared Interface across Monorepo
export interface ITaskResponse {
  id: string;
  status: 'BACKLOG' | 'IN_PROGRESS' | 'COMPLETED';
  assignedRole: RoleType;
  deletedAt: string | null; // Soft-delete
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Team Monorepo & System Architecture</h2>
          <p>
            Make-It-All was engineered as a university team project with 7 software engineers. As the UI/UX Lead and core API architect, I established the monorepo structure containing the Node.js/Express REST API and Vite/React single-page application.
          </p>
          <p>
            To eliminate interface mismatches between the front and back ends, we unified data transfer objects (DTOs) into shared TypeScript packages. The MySQL database was configured with connection pooling to maximize concurrent query efficiency, and soft-delete schemas were implemented across all relational tables so that accidentally deleted records could be audited and restored.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Kanban State & Managerial Analytics</h2>
          <p>
            A centerpiece of the application is the interactive Kanban board. Managing drag-and-drop state across columns with optimistic UI updates required robust state management to ensure that network dropouts or permission rejections gracefully roll back card positions.
          </p>
          <p>
            For project managers, we integrated Chart.js to render live Gantt timeline estimations, sprint velocity metrics, and doughnut charts illustrating workload distributions across team members.
          </p>
        </section>
      </article>

      {/* Project Pagination */}
      <ProjectPagination currentSlug="make-it-all" />
    </div>
  );
}
