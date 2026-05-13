import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function LedRemoteControlBlog() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 sm:px-12 font-sans selection:bg-accent/30">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation */}
        <Link 
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Automating the Vibe: LED Remote Control & Spotify Sync
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide">
              Building a responsive web app to seamlessly sync Bluetooth LEDs with Spotify playback.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://github.com/Maseeek/LED-REMOTE-CONTROL.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:border-accent/40"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Vision</h2>
            <p>
              I wanted a way to automatically adjust the ambiance of my room based on the music I'm listening to. 
              Instead of manually fiddling with an infrared remote or relying on closed-ecosystem apps, I decided to build a centralized 
              web application that connects my Bluetooth Low Energy (BLE) light strips directly to my Spotify playback state. 
            </p>
            <p>
              This is just the first step. My ultimate goal is to evolve this infrastructure into a full-fledged, 
              <strong> Jarvis (Iron Man) style automated assistant</strong>—an AI that intuitively understands my environment, manages my devices, 
              and anticipates my needs across my entire room and workflow.
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
      </div>
    </div>
  );
}
