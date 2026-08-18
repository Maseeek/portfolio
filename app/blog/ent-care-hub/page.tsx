import Link from "next/link";
import { 
  ArrowLeft, Database, Search, Star, ShieldCheck, 
  Layers, Code, Server, Award, Table
} from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

export default function EntCareHubBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

      <header className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <Database className="w-3 h-3 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Relational Database & Full-Stack</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
            ent<span className="text-accent">care</span>hub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
            A data-driven health consultant discovery and review platform powered by complex relational SQL aggregations and dynamic React filtering.
          </p>
        </div>
      </header>

      {/* SQL & Architecture Callout */}
      <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
          <Table className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Relational SQL & Dynamic Aggregation</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The heart of ENT Care Hub is a normalized MySQL database. Complex SQL queries leveraging multi-table JOINs, subqueries, and aggregate functions compute consultant scorecards, verified review averages, and specialization rankings in real time.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-accent" />
            Core Features
          </h2>
          <ul className="space-y-4">
            {[
              { 
                icon: Database, 
                title: "Complex SQL Leaderboards", 
                desc: "Dynamic ranking algorithms utilizing multi-table JOINs, GROUP BY, and mathematical weighting." 
              },
              { 
                icon: Search, 
                title: "Instant Search & Filtering", 
                desc: "Client-side React filtering with debounced REST queries across clinical specializations and geographic locations." 
              },
              { 
                icon: Star, 
                title: "Verified Review Pipeline", 
                desc: "Structured feedback mechanism calculating multi-dimensional consultant ratings and verified patient reviews." 
              },
              { 
                icon: ShieldCheck, 
                title: "PHP Authentication & RBAC", 
                desc: "Secure session management, password hashing, and role verification separating patients from verified practitioners." 
              },
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
                  ["Database", "MySQL (Normalized 3NF Schema)"],
                  ["Backend Services", "PHP (REST API & Auth)"],
                  ["Frontend Layer", "React, JavaScript, Tailwind CSS"],
                  ["Query Engine", "Relational SQL (JOINs, Aggregates, Indexes)"],
                  ["Security", "Bcrypt Hashing, SQL Injection Parameterization, XSS Sanitization"],
                ].map(([label, tech]) => (
                  <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-accent w-36">{label}</td>
                    <td className="p-4 text-gray-400">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
            <h3 className="font-bold text-emerald-400 flex items-center gap-2">
              <Code className="w-4 h-4" />
              SQL Optimization Focus
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed font-mono">
              SELECT c.id, c.name, AVG(r.rating) AS avg_score, COUNT(r.id) AS review_count<br />
              FROM consultants c<br />
              INNER JOIN reviews r ON c.id = r.consultant_id<br />
              GROUP BY c.id HAVING review_count &gt;= 5<br />
              ORDER BY avg_score DESC;
            </p>
          </div>
        </div>
      </section>

      <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Mission</h2>
          <p>
            Patients navigating specialized Ear, Nose, and Throat (ENT) healthcare often struggle to find validated consultant ratings, specialization breakdowns, and transparent waiting times. ENT Care Hub was engineered to bridge this gap by delivering a structured, data-driven discovery engine.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Relational Database & Query Optimization</h2>
          <p>
            The project prioritizes database normalization, establishing foreign key constraints and composite indexes across tables for consultants, hospital clinics, clinical sub-specialties, and verified patient reviews.
          </p>
          <p>
            To compute dynamic leaderboards without sacrificing query response times, I wrote complex SQL queries utilizing multi-table <code>JOIN</code> operations, aggregated subqueries, and conditional scoring functions. This ensured that ranking scores accurately reflected both weighted review volume and categorical patient feedback.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Full-Stack Integration & Security</h2>
          <p>
            The PHP backend was structured as a secure RESTful service, enforcing prepared statements to eliminate SQL injection vulnerabilities and implementing password hashing via <code>bcrypt</code> for account authentication. The responsive React frontend consumes these endpoints, rendering interactive consultant cards with live search filtering and dynamic review modals.
          </p>
        </section>
      </article>

      {/* Project Pagination */}
      <ProjectPagination currentSlug="ent-care-hub" />
    </div>
  );
}
