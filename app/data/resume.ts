export const resumeData = {
  profile: {
    name: "Maciek Geneja",
    headline: "Full Stack Developer & Creative Engineer",
    subHeadline: "Building predictive web apps and scalable infrastructure. Incoming Placement Developer at Next.",
    location: "Cambridge / Loughborough, UK",
    links: {
      github: "https://github.com/Maseeek",
      linkedin: "https://www.linkedin.com/in/maciek-geneja-552325332/",
      email: "maciekgeneja@gmail.com",
    },
  },
  about: {
    bio: "Second-year Computer Science student at Loughborough University (Year 1: First-Class Honours). I combine a curious, analytical mindset with full-stack engineering skills. Native English and Polish speaker. When I'm not coding, I'm playing competitive basketball, representing the AU Volleyball team, or travelling to explore new places.",
  },
  skills: {
    languages: ["Python", "TypeScript", "Java", "C++", "SQL", "PHP"],
    web: ["React", "Next.js", "Node.js", "Flask", "Tailwind", "MySQL", "GCP", "Google Cloud APIs"],
    ai: ["OpenCV", "TensorFlow", "Computer Vision", "Predictive Techniques", "Generative AI & LLMs (Gemini, OpenAI)"],
    tools: ["Git", "Docker", "MongoDB", "Arduino", "JWT"],
  },
  experience: [
    {
      company: "Next",
      role: "Incoming Placement Developer (Full Stack)",
      period: "July 2026 - July 2027",
      description: "Selected for a competitive 12-month industrial placement focusing on enterprise-scale web applications.",
      isIncoming: true,
    },
    {
      company: "Outlier AI",
      role: "AI Training Contributor (Coding)",
      period: "Nov 2024 - Present",
      description: "Evaluating AI model accuracy, writing Python evaluation rubrics, and fixing 'hallucinations' in code generation models.",
    },
    {
      company: "Co-op",
      role: "Retail & Customer Service",
      period: "Oct 2023 - Oct 2025",
      description: "Developed strong interpersonal skills and problem-solving in fast-paced environments.",
    },
  ],
  projects: [
    {
      title: "Nothing But Net",
      url: "/blog/nothing-but-net",
      stack: ["React 19", "Vite 6", "Framer Motion", "OpenCV", "Python", "Node.js", "Stripe"],
      description: "A premium AI-powered basketball analytics studio and performance platform. Features automated FGM/FGA tracking via OpenCV, precision trajectory mapping, and a 'Liquid Glass' dashboard.",
      size: "large", // 2x2
      color: "#FF6B6B", // Coral Red
      image: "/images/nbn-home.png",
      gallery: ["/images/nbn-dash.png", "/images/nbn-upload.png"],
    },
    {
      title: "LED Remote Control & Sync",
      url: "/blog/led-remote-control",
      stack: ["Python", "Flask", "BLE", "Computer Vision", "SQLite"],
      description: "A full-stack application that syncs BLE LED light strips with Spotify playback. Features async BLE workers and a computer vision fallback.",
      size: "tall", // 1x2
      color: "#4ECDC4", // Teal
      image: "/images/led-remote.png",
      gallery: [],
    },
    {
      title: "Make-It-All",
      url: "/blog/make-it-all",
      stack: ["Next.js", "TypeScript", "Tailwind", "MySQL", "Docker", "GCP", "Recharts"],
      description: "A high-performance enterprise productivity platform with role-based dashboards and real-time productivity analytics.",
      size: "wide", // 2x1
      color: "#45B7D1", // Sky Blue
      image: "/images/make-it-all.png",
      gallery: [],
    },
    {
      title: "Python Basketball Analysis",
      url: "/blog/python-basketball-analysis",
      stack: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      description: "Using polynomial regression to calculate predicted trajectory and release angles for basketball shots.",
      size: "medium", // 1x1
      color: "#F7B731", // Amber
      image: "/images/nbn-trajectory.png",
      gallery: ["/images/nbn-hud.png"],
    },
    {
      title: "Choi's Cutting Lounge",
      url: "/blog/chois-cutting-lounge",
      stack: ["Next.js", "Vercel", "Tailwind"],
      description: "Production website for a local business, improving client booking visibility and brand presence.",
      size: "medium", // 1x1
      color: "#A55EEA", // Purple
      image: "/images/chois.png",
      gallery: ["/images/chois-more.png"],
    },
    {
      title: "LyricForge",
      url: "/blog/lyricforge",
      event: "HackNotts 2025",
      stack: ["Python", "Flask", "Gemini API", "ElevenLabs API"],
      description: "AI-powered platform that rewrites song lyrics to fit any mood while preserving rhythm.",
      size: "medium", // 1x1
      color: "#20BF6B", // Emerald
      image: "/images/lyricforge.png",
      gallery: [],
    },
    {
      title: "Embedded Payroll System",
      url: "/blog/embedded-payroll-system",
      stack: ["C++", "Arduino"],
      description: "Finite State Machine (FSM) for memory-constrained hardware with custom serial protocols.",
      size: "medium", // 1x1
      color: "#EB3B5A", // Rose
      image: "/images/embedded-payroll.png",
      gallery: ["/images/arduino-stock.png"],
    },
  ],
} as const;

export type ResumeData = typeof resumeData;
