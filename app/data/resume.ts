export const resumeData = {
  profile: {
    name: "Maciek Geneja",
    headline: "Full Stack Developer & Software Engineer",
    subHeadline: "Building high-performance web applications, microservices, and creative software. Placement Developer at Next.",
    location: "Cambridge / Loughborough, UK",
    links: {
      github: "https://github.com/Maseeek",
      linkedin: "https://www.linkedin.com/in/maciek-geneja-552325332/",
      email: "maciekgeneja@gmail.com",
    },
  },
  about: {
    bio: "Second-year Computer Science student at Loughborough University (First-Class Honours in Year 1). Placement Developer at Next in the PIM (Product Information & Management) Strategic Team. Passionate about software engineering, microservice architectures, and modern web applications across C#, Blazor WASM, Next.js, and Python.",
  },
  skills: {
    languages: ["C#", "Blazor WASM", "Python", "TypeScript", "Java", "C++", "SQL", "PHP"],
    web: ["Blazor WebAssembly", ".NET / C#", "React 19", "Next.js", "Microservices", "REST APIs", "Tailwind CSS", "Docker", "Node.js", "Flask", "MySQL", "GCP"],
    ai: ["AI Product Attribution", "OpenCV", "Computer Vision", "Predictive Modeling", "Generative AI & LLMs"],
    tools: ["Multi-Repo Environments", "Git", "Docker", "Linux / POSIX", "Arduino / C++", "BLE Protocol"],
  },
  experience: [
    {
      company: "Next",
      role: "Placement Developer — PIM Strategy & AI Attribution",
      period: "Present (2025 - 2026)",
      description: "Engineering internal enterprise software within the Product Information and Management (PIM) strategic team. Leading the UI redesign for AI Attribution 2.0 built with Blazor WebAssembly in a multi-repository, multi-solution microservice architecture. Configured complex cross-environment services and implemented core product classification, approval, and rejection workflows.",
      isCurrent: true,
      team: "PIM Strategic Team",
      skills: ["Blazor WASM", "C# / .NET", "Microservices", "AI Attribution 2.0", "Multi-Repo Config", "Enterprise UI"],
    },
    {
      company: "Outlier AI",
      role: "AI Training & Code Evaluation Contributor",
      period: "Nov 2024 - Present",
      description: "Evaluating model code generation accuracy, developing automated verification test suites, and diagnosing logic errors in programming models.",
      skills: ["Python", "Algorithms", "Model Evaluation", "Code Verification"],
    },
    {
      company: "Co-op",
      role: "Operations & Customer Experience",
      period: "Oct 2023 - Oct 2025",
      description: "Managed fast-paced store operations, high-volume inventory reconciliation, and frontline customer service leadership.",
      skills: ["Operations", "Problem Solving", "Team Leadership"],
    },
  ],
  projects: [
    {
      title: "Nothing But Net",
      url: "/blog/nothing-but-net",
      stack: ["React 19", "Vite", "OpenCV", "Python", "Node.js", "Stripe"],
      description: "A basketball analytics studio and performance tracking platform with automated shot tracking via OpenCV and precision trajectory mapping.",
      size: "large", // 2x2
      color: "#FF6B6B", // Coral Red
      image: "/images/nbn-home.png",
      gallery: ["/images/nbn-dash.png", "/images/nbn-upload.png"],
    },
    {
      title: "LED Remote Control & Sync",
      url: "/blog/led-remote-control",
      stack: ["Python", "Flask", "BLE", "Computer Vision", "SQLite"],
      description: "A full-stack application syncing BLE LED light strips with Spotify playback using async BLE background workers.",
      size: "tall", // 1x2
      color: "#4ECDC4", // Teal
      image: "/images/led-remote.png",
      gallery: [],
    },
    {
      title: "Make-It-All",
      url: "/blog/make-it-all",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Docker", "GCP", "Recharts"],
      description: "A multi-tenant enterprise productivity platform featuring role-based dashboards, containerized microservices on GCP, and real-time productivity analytics.",
      size: "wide", // 2x1
      color: "#45B7D1", // Sky Blue
      image: "/images/make-it-all.png",
      gallery: [],
    },
    {
      title: "Python Basketball Analysis",
      url: "/blog/python-basketball-analysis",
      stack: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      description: "Using polynomial regression to calculate predicted shot trajectory and release angles for basketball shots from video frames.",
      size: "medium", // 1x1
      color: "#F7B731", // Amber
      image: "/images/nbn-trajectory.png",
      gallery: ["/images/nbn-hud.png"],
    },
    {
      title: "Choi's Cutting Lounge",
      url: "/blog/chois-cutting-lounge",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      description: "Production commercial web platform for local business, achieving 100/100 Core Web Vitals performance and sub-450ms Largest Contentful Paint (LCP).",
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
      description: "AI-powered platform built at HackNotts 2025 that rewrites song lyrics to fit any mood while preserving syllabic rhythm.",
      size: "medium", // 1x1
      color: "#20BF6B", // Emerald
      image: "/images/lyricforge.png",
      gallery: [],
    },
    {
      title: "Embedded Payroll System",
      url: "/blog/embedded-payroll-system",
      stack: ["C++", "Arduino", "UART Protocol"],
      description: "Deterministic Finite State Machine (FSM) in low-level C++ for memory-constrained hardware with custom serial communication.",
      size: "medium", // 1x1
      color: "#EB3B5A", // Rose
      image: "/images/embedded-payroll.png",
      gallery: ["/images/arduino-stock.png"],
    },
  ],
} as const;

export type ResumeData = typeof resumeData;
