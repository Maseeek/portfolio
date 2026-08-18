import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Bluetooth, Music, Monitor, Sparkles, Terminal, Code } from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

export default function LedRemoteControlBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      {/* Navigation */}
      <Link 
        href="/"
        className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

        {/* Header */}
        <header className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Code className="w-3 h-3 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Personal Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
              led<span className="text-accent">remote</span>control
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
              Automating the vibe. Building a responsive web app to seamlessly sync Bluetooth LEDs with Spotify playback.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://github.com/Maseeek/LED-REMOTE-CONTROL.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-accent hover:text-white rounded-full text-sm font-bold transition-all transform hover:scale-105"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </div>
        </header>

        {/* Vision Alert */}
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1">The Jarvis Ecosystem</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This is just the first step. My ultimate goal is to evolve this infrastructure into a full-fledged, Jarvis-style automated assistant—an AI that intuitively understands my environment, manages my devices, and anticipates my needs.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-accent" />
              Core Architecture
            </h2>
            <ul className="space-y-4">
              {[
                { icon: Bluetooth, title: "Persistent BLE", desc: "Asynchronous background connection to LED controller." },
                { icon: Music, title: "Smart Playback Sync", desc: "Syncing light transitions with OS-level Spotify state." },
                { icon: Monitor, title: "CV Fallback", desc: "Automated OS interaction (mss/pyautogui) to ensure playback." },
                { icon: Sparkles, title: "Self-Healing", desc: "Background thread automatically reconnects on Bluetooth drops." },
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
                    ["Backend", "Python, Flask, SQLite"],
                    ["Bluetooth", "bleak"],
                    ["OS Integration", "winrt, pyautogui, mss"],
                    ["Frontend", "HTML, CSS, JavaScript"],
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

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Vision</h2>
            <p>
              I wanted a way to automatically adjust the ambiance of my room based on the music I'm listening to. 
              Instead of manually fiddling with an infrared remote or relying on closed-ecosystem apps, I decided to build a centralized 
              web application that connects my Bluetooth Low Energy (BLE) light strips directly to my Spotify playback state. 
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">How The Processing Works</h2>
            <p>
              To make this system reliable, responsive, and seamless, I architected a Python backend using Flask and asynchronous background workers. 
              Here is a breakdown of the core processing pipeline:
            </p>
            
            <div className="space-y-6 mt-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">1. Persistent BLE Communication</h3>
                <p className="text-sm">
                  Using the <code className="text-accent bg-accent/10 px-1 py-0.5 rounded">bleak</code> library, the system maintains a persistent, asynchronous 
                  connection to the LED controller's <code className="text-accent bg-accent/10 px-1 py-0.5 rounded">0000fff3</code> characteristic. This runs in a 
                  dedicated background thread with a thread-safe queue. When you select a new "Mood" on the web dashboard, the color command is immediately pushed 
                  to the queue and transmitted to the LEDs without blocking the main web server. The connection is self-healing; if the Bluetooth drops, the worker 
                  silently attempts to reconnect.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">2. Smart Playback Synchronization</h3>
                <p className="text-sm">
                  It's not enough to just change the lights; they need to sync with the music. The backend leverages Windows Media Transport Controls 
                  (<code className="text-accent bg-accent/10 px-1 py-0.5 rounded">winrt</code>) to monitor the exact playback state of the operating system. 
                  This ensures that the LEDs only transition to the new mood when the Spotify track actually starts playing, eliminating awkward pauses 
                  where the lights change but the music hasn't kicked in yet.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">3. Computer Vision Fallback</h3>
                <p className="text-sm">
                  Sometimes API calls aren't enough to force Spotify to start playing. To guarantee playback, the application utilizes a computer vision 
                  fallback mechanism. Using <code className="text-accent bg-accent/10 px-1 py-0.5 rounded">mss</code> for rapid screen reading and 
                  <code className="text-accent bg-accent/10 px-1 py-0.5 rounded">pyautogui</code> for automated OS interaction, the system can visually locate 
                  the distinct green "Play" button within the Spotify desktop app interface and physically click it, mimicking human interaction perfectly.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Looking Forward</h2>
            <p>
              The current stack—Flask, SQLite for storing custom URIs/Colors, and async Python workers—provides a robust foundation. 
              As I move towards a more intelligent "Jarvis" system, I plan to integrate voice commands, LLM-based intent recognition, and broader smart-home IoT protocols. 
            </p>
            <p>
              Feel free to check out the code, fork it, and automate your own setup!
            </p>
            <div className="pt-4">
              <a 
                href="https://github.com/Maseeek/LED-REMOTE-CONTROL.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1"
              >
                Get the Source Code
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </section>
        </article>

        {/* Project Pagination */}
        <ProjectPagination currentSlug="led-remote-control" />
    </div>
  );
}
