import Link from "next/link";
import { 
  ArrowLeft, Code2, Users, Shield, Ticket, 
  Layers, Lock, CheckCircle2, Terminal, Cpu
} from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

export default function EventTicketBookingBlog() {
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
            <Code2 className="w-3 h-3 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Object-Oriented Design</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
            event<span className="text-accent">ticket</span>booking
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
            A modular multi-user desktop application built in Java, applying strict Object-Oriented principles (Inheritance, Polymorphism, Encapsulation) and RBAC workflows.
          </p>
        </div>
      </header>

      {/* OOP Architecture Callout */}
      <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Strict Object-Oriented Principles in Practice</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineered with a clean class hierarchy where abstract user and event models encapsulate core domain behaviors, while polymorphic controllers drive differing permissions between administrative and customer operations.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-accent" />
            System Architecture
          </h2>
          <ul className="space-y-4">
            {[
              { 
                icon: Users, 
                title: "Role-Based Access Control", 
                desc: "Strict encapsulation separating Administrator privilege functions from Customer seat selection and booking." 
              },
              { 
                icon: Layers, 
                title: "Polymorphism & Inheritance", 
                desc: "Modular class hierarchies modeling distinct event types, seating tiers, and customized pricing algorithms." 
              },
              { 
                icon: Ticket, 
                title: "Transaction & Booking State", 
                desc: "Thread-safe data handling ensuring inventory decrements reliably and preventing double-booking race conditions." 
              },
              { 
                icon: Shield, 
                title: "Input Validation & Error Recovery", 
                desc: "Robust exception handling pipelines preventing invalid payment strings, overflows, and corrupted serialized states." 
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
            <Cpu className="w-5 h-5 text-accent" />
            Technology Stack
          </h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                {[
                  ["Core Language", "Java (JDK 17+)"],
                  ["User Interface", "Java Swing / AWT (Event Dispatch Thread)"],
                  ["Design Patterns", "MVC Architecture, Factory Pattern, Singleton"],
                  ["Data Management", "Object Serialization & In-Memory Data Models"],
                  ["Key Competencies", "Inheritance, Polymorphism, Encapsulation, RBAC"],
                ].map(([label, tech]) => (
                  <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-accent w-36">{label}</td>
                    <td className="p-4 text-gray-400">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-2">
            <h3 className="font-bold text-purple-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Polymorphic Event Modeling
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed font-mono">
              public abstract class Event &#123;<br />
              &nbsp;&nbsp;public abstract double calculatePrice(SeatTier tier);<br />
              &nbsp;&nbsp;public abstract boolean validateCapacity();<br />
              &#125;
            </p>
          </div>
        </div>
      </section>

      <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Challenge</h2>
          <p>
            Building robust desktop software requires structured state management, clean component separation, and comprehensive validation. The objective of this project was to architect a production-grade multi-user ticketing platform in Java demonstrating textbook Object-Oriented principles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Object-Oriented Design & RBAC</h2>
          <p>
            The software models the business domain using strict encapsulation and inheritance hierarchies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>
              <strong>Encapsulation:</strong> Sensitive customer payment tokens and administrator credentials remain private, accessed exclusively through guarded getters and validated mutation methods.
            </li>
            <li>
              <strong>Polymorphism:</strong> Differing event categories (e.g. VIP Concerts, General Admission Sports, Conferences) extend a base <code>Event</code> class, overriding pricing multipliers and seating capacity validation dynamically.
            </li>
            <li>
              <strong>Role Separation:</strong> Distinct interface flows ensure Administrators can create events, adjust venue seating layouts, and inspect revenue ledgers, while standard Customers interact solely with discovery, seat reservation, and digital receipt generation.
            </li>
          </ul>
        </section>
      </article>

      {/* Project Pagination */}
      <ProjectPagination currentSlug="event-ticket-booking" />
    </div>
  );
}
