export const resumeData = {
  profile: {
    name: "Maciek Geneja",
    headline: "Systems & Full-Stack Software Engineer",
    subHeadline: "Building high-performance web applications, microservices, and deterministic data platforms. Systems Placement Developer at Next.",
    location: "Cambridge / Loughborough, UK",
    phone: "07383 557 416",
    links: {
      github: "https://github.com/Maseeek",
      linkedin: "https://www.linkedin.com/in/maciek-geneja-552325332/",
      email: "maciekgeneja@gmail.com",
    },
  },
  about: {
    bio: "Computer Science undergraduate at Loughborough University (First-Class Honours across 1st & 2nd Year). Systems Placement Developer at Next plc within the PIM (Product Information & Management) Strategic Team. Experienced across C#, .NET, Blazor WASM, Python, PostgreSQL RLS, OpenCV, and modern distributed web architectures. Combines strong academic grounding in algorithms and discrete logic with practical experience building secure, high-throughput systems.",
  },
  skills: {
    languages: ["Python (Advanced)", "C#", "TypeScript", "JavaScript", "Kotlin", "Java", "C/C++", "SQL", "PHP", "HTML/CSS"],
    web: ["Blazor WebAssembly", ".NET / C#", "React 19", "Next.js", "Node.js", "Express", "Flask", "Microservices", "REST API Design", "Tailwind CSS", "Vite"],
    ai: ["AI Product Attribution", "Anthropic Claude SDK", "OpenCV", "Computer Vision", "Predictive Trajectory Modeling", "TensorFlow", "PyTorch", "NumPy", "Pandas"],
    tools: ["Android SDK", "PostgreSQL (RLS)", "MySQL", "MongoDB", "Docker", "Git", "GitHub Actions (CI/CD)", "Vercel", "Render", "Linux / POSIX", "Playwright", "Vitest", "Arduino"],
    competencies: ["Data Structures & Algorithms", "Systems Architecture", "Multi-Tenant Data Isolation", "GDPR Article 9 Compliance", "Object-Oriented Programming (OOP)", "Agile Methodologies"],
  },
  academics: {
    university: {
      institution: "Loughborough University",
      degree: "BSc (Hons) Computer Science",
      period: "2024 – Present",
      classification: "First-Class Honours (1st & 2nd Year)",
      modules: [
        { name: "Logic for Computer Science", grade: "86%", category: "Discrete Math & Logic" },
        { name: "Mathematics for Computer Science", grade: "77%", category: "Applied Mathematics" },
        { name: "Formal Languages & Theory of Computation", grade: "76%", category: "Theoretical CS" },
        { name: "Computer Graphics", grade: "76%", category: "Visual Computing" },
        { name: "Introduction to Algorithms", grade: "75%", category: "Core Algorithms" },
        { name: "Embedded Systems Programming", grade: "75%", category: "Low-Level Systems" },
        { name: "Operating Systems, Networks & Internet", grade: "71%", category: "Systems & Infrastructure" },
      ],
    },
    preUniversity: {
      college: "Hills Road Sixth Form College",
      period: "2022 – 2024",
      aLevels: "Mathematics (A), Physics (A), Computing (A)",
      gcses: "7x Grade 9, 2x Grade 8, 2x Grade 7",
    },
  },
  extracurriculars: [
    {
      title: "University Athletics",
      desc: "Competitive Basketball player and representative for the Loughborough University Athletics Union (AU) Volleyball team. High-pressure teamwork and athletic discipline.",
      icon: "trophy",
    },
    {
      title: "Towers Hall Committee RAG Rep",
      desc: "Elected Hall Committee representative organizing university hall events and coordinating charity fundraising campaigns.",
      icon: "users",
    },
    {
      title: "Bilingual Proficiency",
      desc: "Native English and Native / Bilingual Polish speaker with strong technical communication and cross-cultural collaboration skills.",
      icon: "globe",
    },
  ],
  experience: [
    {
      company: "Next plc",
      role: "Systems Placement Developer — PIM Strategy & Enterprise Architecture",
      period: "July 2026 / Active Placement",
      description: "Secured competitive 12-month industrial placement in the Systems Team of a FTSE 100 retailer. Leading UI re-architecture for AI Attribution 2.0 using Blazor WebAssembly in a multi-repository, multi-solution microservice ecosystem. Engineering cross-environment services, infrastructure reliability, and core automated product classification workflows.",
      isCurrent: true,
      team: "PIM Strategic Team",
      skills: ["Blazor WASM", "C# / .NET", "Microservices", "AI Attribution 2.0", "Multi-Repo Config", "Enterprise Systems"],
    },
    {
      company: "Valdris",
      role: "Senior Full-Stack Engineer / Technical Architect",
      period: "July 2026 – Present",
      description: "High-performance sports science multi-tenant analytics platform providing athlete readiness scoring and compliance gating. Implemented PostgreSQL Row-Level Security (RLS) bound to JWT claims, GDPR Article 9 dynamic data masking, deterministic Composite Load Score (CLS) engine with 28-day rolling z-scores, Anthropic Claude AI regex firewall, and Vitest/Playwright cross-tenant test suites.",
      isCurrent: false,
      team: "Core Architecture & Compliance",
      skills: ["PostgreSQL RLS", "GDPR Article 9", "Claude SDK", "Vitest & Playwright", "Deterministic Scoring", "Sports Science"],
    },
    {
      company: "Outlier AI",
      role: "AI Training Contributor (Data Science)",
      period: "Nov 2024 – Present",
      description: "Authoring comprehensive evaluation rubrics to benchmark LLM accuracy and reasoning against expected outcomes. Writing and executing Data Science Python scripts to validate model outputs, diagnosing logic errors, and mitigating hallucinations.",
      isCurrent: false,
      team: "Data Science QA",
      skills: ["Python", "Algorithms", "Model Evaluation", "Data Science QA", "Code Verification"],
    },
    {
      company: "Co-op",
      role: "Operations & Customer Experience",
      period: "Oct 2023 – Oct 2025",
      description: "Demonstrated strong time management and resilience by balancing a demanding Computer Science degree with part-time retail work, collaborating within a 15+ member team to consistently hit operational targets in a fast-paced environment.",
      isCurrent: false,
      skills: ["Operations", "Resilience", "Team Leadership"],
    },
  ],
  projects: [
    {
      title: "Valdris Sports Analytics",
      url: "/blog/valdris",
      stack: ["PostgreSQL RLS", "TypeScript", "Claude SDK", "Playwright", "Vitest"],
      description: "Enterprise multi-tenant sports science platform with database-level RLS, GDPR Article 9 dynamic data masking, deterministic z-score readiness engine, and Claude AI legal firewalls.",
      size: "large", // 2x2
      color: "#6366F1", // Indigo
      image: "/images/nbn-dash.png",
      gallery: [],
    },
    {
      title: "Nothing But Net",
      url: "/blog/nothing-but-net",
      stack: ["React 19", "Node.js", "Python", "OpenCV", "Android (Companion)", "Render"],
      description: "Flagship full-stack basketball analytics web platform (nothingbutnet.online) with dynamic ROI tracking, physics false-positive rejection, trajectory polynomial regression, and native Android companion capture.",
      size: "large", // 2x2
      color: "#FF6B6B", // Coral Red
      image: "/images/nbn-home.png",
      gallery: ["/images/nbn-dash.png", "/images/nbn-upload.png"],
    },
    {
      title: "Make-It-All",
      url: "/blog/make-it-all",
      stack: ["Node.js", "Express", "React", "MySQL", "JWT", "Chart.js"],
      description: "Monorepo internal collaboration platform with RBAC, soft-deletes, MySQL connection pooling, drag-and-drop Kanban state, and real-time manager analytics presented to external stakeholders.",
      size: "wide", // 2x1
      color: "#45B7D1", // Sky Blue
      image: "/images/make-it-all.png",
      gallery: [],
    },
    {
      title: "ENT Care Hub",
      url: "/blog/ent-care-hub",
      stack: ["PHP", "MySQL", "React", "JavaScript", "REST"],
      description: "Data-driven health consultant discovery platform with complex relational multi-table JOINs, aggregate leaderboards, PHP authentication, and instant React search.",
      size: "medium", // 1x1
      color: "#10B981", // Emerald
      image: "/images/chois.png",
      gallery: [],
    },
    {
      title: "Event Ticket Booking System",
      url: "/blog/event-ticket-booking",
      stack: ["Java", "Swing (GUI)", "OOP Design", "RBAC"],
      description: "Desktop software applying strict OOP (Inheritance, Polymorphism, Encapsulation) with modular role separation between Administrator and Customer workflows.",
      size: "medium", // 1x1
      color: "#8B5CF6", // Violet
      image: "/images/embedded-payroll.png",
      gallery: [],
    },
    {
      title: "LyricForge",
      url: "/blog/lyricforge",
      event: "HackNotts 2025",
      stack: ["Python", "Flask", "Gemini API", "ElevenLabs API"],
      description: "AI-powered multi-agent pipeline built at HackNotts 2025 that coordinates semantic parsing, vocal isolation, and speech synthesis while preserving syllabic rhythm.",
      size: "medium", // 1x1
      color: "#20BF6B", // Green
      image: "/images/lyricforge.png",
      gallery: [],
    },
    {
      title: "Embedded Payroll System",
      url: "/blog/embedded-payroll-system",
      stack: ["C/C++", "Arduino Uno", "UART Protocol", "FSM"],
      description: "Deterministic Finite State Machine (FSM) in low-level C++ managing memory constraints and custom serial communication protocols on an Arduino Uno.",
      size: "medium", // 1x1
      color: "#EB3B5A", // Rose
      image: "/images/embedded-payroll.png",
      gallery: ["/images/arduino-stock.png"],
    },
    {
      title: "LED Remote Control & Sync",
      url: "/blog/led-remote-control",
      stack: ["Python", "Flask", "BLE (bleak)", "Computer Vision", "SQLite"],
      description: "Full-stack IoT application syncing BLE LED light strips with Spotify playback using async background workers and self-healing reconnection.",
      size: "tall", // 1x2
      color: "#4ECDC4", // Teal
      image: "/images/led-remote.png",
      gallery: [],
    },
  ],
} as const;

export type ResumeData = typeof resumeData;
