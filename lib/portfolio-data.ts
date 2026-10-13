export type ProjectRecord = {
  id: string;
  name: string;
  kind: string;
  description: string;
  impact: string;
  status: "active" | "dormant";
  year: number;
  size: number;
  energy: number;
  technologies: string[];
  source?: string;
  live?: string;
};

export const portfolioConfig = {
  siteName: "xthxr",
  person: "Athar Akram",
  role: "developer / systems / applied AI",
  location: "Kolkata, India",
  email: "myselfatharakram@gmail.com",
  github: "https://github.com/xthxr",
  linkedin: "https://www.linkedin.com/in/xthxr/",
  education: "B.Tech, Computer Science & Engineering (Data Science), Kazi Nazrul University · 2024–2028 · GPA 8.56",
  hiddenRepositories: [] as string[],
  featuredRepositories: ["BizChat", "WatchTower", "PIIK.ME", "DS Visualizer", "leet-collab"],
};

// Resume-backed project snapshot. GitHub ingestion supplements these records
// when PORTFOLIO_GITHUB_USER is configured.
export const projects: ProjectRecord[] = [
  {
    id: "bizchat",
    name: "BIZCHAT",
    kind: "AI OPS LAYER",
    description: "Turns unstructured WhatsApp Business conversations into orders, payments, and customer history for small businesses.",
    impact: "Built to reduce missed follow-ups and revenue leakage in chat-driven workflows.",
    status: "active", year: 2026, size: 1, energy: 1,
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    id: "watchtower",
    name: "WATCHTOWER",
    kind: "AI OVERSIGHT SYSTEM",
    description: "A Worker / Watchtower / Judge system for tracing and auditing misalignment risks in autonomous agent workflows.",
    impact: "Evaluates deception, manipulation, power-seeking, and goal conflict through structured scenarios.",
    status: "active", year: 2026, size: 0.95, energy: 0.96,
    technologies: ["Python", "Multi-Agent Systems", "AI Safety"],
  },
  {
    id: "piik-me",
    name: "PIIK.ME",
    kind: "CREATOR ANALYTICS",
    description: "Link management and engagement analytics for creators, with live tracking and dashboard workflows.",
    impact: "5,000+ tracked clicks and 200+ real users reported in the CV.",
    status: "active", year: 2026, size: 0.88, energy: 0.9,
    technologies: ["JavaScript", "Node.js", "Socket.io", "Firebase", "Redis"],
    live: "https://piik.me/",
  },
  {
    id: "ds-visualizer",
    name: "DS VISUALIZER",
    kind: "VS CODE EXTENSION",
    description: "An editor-native DSA execution visualizer for arrays, variables, pointers, and debugging playback.",
    impact: "Designed as a zero-config learning workflow for plain JavaScript.",
    status: "active", year: 2026, size: 0.78, energy: 0.82,
    technologies: ["TypeScript", "VS Code API", "JavaScript"],
  },
  {
    id: "smartsetu",
    name: "SMARTSETU",
    kind: "FINANCIAL ACCESS TOOL",
    description: "An AI-assisted tool for assessing loan eligibility and helping small vendors explore fair financial opportunities.",
    impact: "Uses alternative scoring concepts beyond traditional CIBIL checks.",
    status: "active", year: 2025, size: 0.85, energy: 0.82,
    technologies: ["TypeScript", "Next.js", "Firebase", "Gemini"],
    live: "https://smart-setu.vercel.app/",
  },
  {
    id: "gistify",
    name: "GISTIFY",
    kind: "AI SUMMARIZER",
    description: "A webpage summarizer that contrasts original and reduced content while estimating time saved.",
    impact: "Built during Hack with Gujarat as a rapid AI product prototype.",
    status: "dormant", year: 2025, size: 0.66, energy: 0.62,
    technologies: ["React", "Node.js", "DeepSeek API"],
    source: "https://github.com/xthxr/gistify",
  },
  {
    id: "leet-collab",
    name: "LEET COLLAB",
    kind: "COLLABORATIVE PRACTICE",
    description: "A collaborative coding project from the xthxr GitHub profile.",
    impact: "Open-source project maintained under the xthxr developer identity.",
    status: "active", year: 2026, size: 0.66, energy: 0.74,
    technologies: ["JavaScript", "GitHub"],
    source: "https://github.com/xthxr/leet-collab",
  },
  {
    id: "chrome-dino-java",
    name: "DINO / JAVA",
    kind: "GAME SYSTEM",
    description: "A Java recreation of the familiar Chrome Dino game loop.",
    impact: "A compact study in interaction, timing, and game-state architecture.",
    status: "dormant", year: 2025, size: 0.52, energy: 0.5,
    technologies: ["Java", "Game Development"],
    source: "https://github.com/xthxr/chrome-dino-game-java",
  },
  {
    id: "xthxr-dev",
    name: "XTHXR.DEV",
    kind: "DEVELOPER IDENTITY",
    description: "The original personal portfolio and public developer presence for xthxr.",
    impact: "A continually evolving surface for work, writing, and engineering identity.",
    status: "active", year: 2026, size: 0.6, energy: 0.76,
    technologies: ["React", "TypeScript", "Portfolio"],
    source: "https://github.com/xthxr/xthxr.dev",
    live: "https://xthxr-dev.vercel.app/",
  },
];

export const signals = [
  { name: "GITHUB / XTHXR", label: "repositories · source activity", strength: 0.86 },
  { name: "SYNTHICA", label: "software engineering intern · research workflows", strength: 0.78 },
  { name: "GSSOC'26", label: "open-source mentor and project admin", strength: 0.72 },
  { name: "TERMINAL TROOPS", label: "coding club vice president · 50+ developers", strength: 0.68 },
  { name: "GEEKSFORGEEKS", label: "founding lead · campus body, KNU", strength: 0.65 },
];

export const experience = [
  { role: "Software Engineer Intern", organization: "Synthica", detail: "Research workflow platform; journal dashboards, submission tracking, analytics, and publication management." },
  { role: "Website Manager Intern", organization: "Project Q2", detail: "Maintaining and improving a live WordPress presence for performance and accessibility." },
  { role: "Research Assistant", organization: "Kazi Nazrul University", detail: "ML work on ribosomal disease detection, data augmentation, and model efficiency." },
  { role: "Founding Lead", organization: "GeeksforGeeks Campus Body — KNU", detail: "Established a student-developer community around programs, events, and technical growth." },
];

export const hackathons = [
  { name: "Smart India Hackathon 2025", outcome: "Internal rank #2", project: "MineKavach — AI rockfall prediction and alerts" },
  { name: "Hack with Gujarat", outcome: "Team lead", project: "Gistify — AI webpage summarizer" },
  { name: "ICDMAI", outcome: "Semi-finalist", project: "Team project" },
  { name: "National Coding League 2.0", outcome: "Regional qualifier", project: "Team lead" },
  { name: "Diversion 2K26 — MLH", outcome: "36-hour build", project: "Channelized stray-animal rescue system" },
];

export const achievements = [
  { code: "01", category: "HACKATHON", title: "Smart India Hackathon 2026", detail: "Won the university internal round, held on 14 September 2026." },
  { code: "02", category: "COMPETITION", title: "Amazon ML Challenge 2026", detail: "Ranked among the top 500 teams with my team in Amazon’s machine-learning challenge." },
  { code: "03", category: "MENTORSHIP", title: "Code Cubicle 6.0", detail: "Mentored participants at Code Cubicle 6.0, helping builders move from ideas to working solutions." },
  { code: "04", category: "CREATOR", title: "Tech Content Creator", detail: "Built a 25K+ follower community on Instagram around technology, learning, and building in public." },
  { code: "05", category: "HACKATHON", title: "Diversion 2K26 / MLH", detail: "Built a channelized stray-animal rescue system during the 36-hour MLH-partnered hackathon." },
  { code: "06", category: "RESEARCH", title: "AI Agent Security Research", detail: "Research paper on enhancing AI security selected as one of 20 ICT papers at the 8th Regional Science and Technology Congress." },
  { code: "07", category: "HACKATHON", title: "Smart India Hackathon 2025", detail: "Led MineKavach, a rockfall prediction system for open-pit mines, to internal rank #2." },
  { code: "08", category: "SELECTION", title: "Apple Developer Academy 2026", detail: "Qualified for the Apple Developer Academy cohort in Bali, Indonesia." },
  { code: "09", category: "ASSESSMENT", title: "Naukri Campus Young Turks", detail: "Scored 97.39 percentile and All India Rank 416 in the national assessment." },
  { code: "10", category: "OPEN SOURCE", title: "Open Source", detail: "Hacktoberfest 2025 Super Contributor and GSSOC’26 open-source mentor / project admin." },
];

export const technologyAtlas = ["TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "Firebase", "AI Safety", "VS Code API", "Git", "Linux"];
