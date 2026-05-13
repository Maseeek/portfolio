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
      stack: ["Python", "React", "Node.js", "OpenCV", "MongoDB"],
      description: "A full-stack basketball shot analyzer. Uses Hough Circle Transform for ball tracking and polynomial regression to predict shot success and calculate release angle with >90% precision. Features a real-time dashboard and historical analysis.",
      size: "large", // 2x2
      image: "/images/nbn-home.png",
      gallery: ["/images/nbn-dash.png", "/images/nbn-upload.png"],
    },
    {
      title: "LED Remote Control & Sync",
      url: "/blog/led-remote-control",
      stack: ["Python", "Flask", "BLE", "Computer Vision", "SQLite"],
      description: "A full-stack application that syncs Bluetooth Low Energy (BLE) LED light strips with Spotify playback. Features async BLE workers and a computer vision fallback for seamless automated processing. The first step towards a Jarvis-style assistant.",
      size: "large",
      image: "/images/led-remote.png", // Placeholder image, but layout will handle if missing
      gallery: [],
    },
    {
      title: "Make-It-All",
      url: "/blog/make-it-all",
      stack: ["Next.js", "TypeScript", "Tailwind", "MySQL", "Docker", "GCP", "Recharts"],
      description: "A high-performance enterprise productivity platform with role-based dashboards (RBAC). Features real-time analytics using Recharts for productivity prediction and team satisfaction tracking. Built with a premium atomic component architecture and secure JWT authentication.",
      size: "large",
      image: "/images/make-it-all.png",
      gallery: [],
    },
    {
      title: "Python Basketball Analysis",
      url: "/blog/python-basketball-analysis",
      stack: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      description: "A computer vision based app using OpenCV which using polynomial regression can calculate the predicted trajectory of a basketball shot, allowing us to predict whether it is a make or miss and allows us to calculate the release angle.",
      size: "medium",
      image: "/images/nbn-trajectory.png",
      gallery: ["/images/nbn-hud.png"],
    },
    {
      title: "Choi's Cutting Lounge",
      url: "/blog/chois-cutting-lounge",
      stack: ["Next.js", "Vercel", "Tailwind"],
      description: "Production website for a local business, improving client booking visibility and brand presence.",
      size: "medium", // 1x1 or 1x2
      image: "/images/chois.png",
      gallery: ["/images/chois-more.png"],
    },
    {
      title: "LyricForge",
      url: "/blog/lyricforge",
      event: "HackNotts 2025",
      stack: ["Python", "Flask", "Gemini API", "ElevenLabs API"],
      description: "AI-powered platform that rewrites song lyrics to fit any mood while preserving rhythm. Built in 24 hours.",
      size: "medium",
      image: "/images/lyricforge.png",
      gallery: [],
    },
    {
      title: "Embedded Payroll System",
      url: "/blog/embedded-payroll-system",
      stack: ["C++", "Arduino"],
      description: "Designed a Finite State Machine (FSM) for memory-constrained hardware with custom serial communication protocols.",
      size: "small",
      image: "/images/embedded-payroll.png",
      gallery: ["/images/arduino-stock.png"],
    },
  ],
} as const;

export type ResumeData = typeof resumeData;
