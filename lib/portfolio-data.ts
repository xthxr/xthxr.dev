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
  person: "Athar Akram",
  role: "full-stack / systems / applied AI",
  location: "Kolkata, India",
  email: "myselfatharakram@gmail.com",
  github: "https://github.com/xthxr",
  linkedin: "https://www.linkedin.com/in/xthxr/",
  education: "B.Tech, Computer Science & Engineering (Data Science), Kazi Nazrul University · 2024–2028 · GPA 8.56",
  hiddenRepositories: [] as string[],
  featuredRepositories: ["BizChat", "WatchTower", "PIIK.ME", "DS Visualizer"],
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
];

export const signals = [
  { name: "GITHUB / XTHXR", label: "repositories · source activity", strength: 0.86 },
  { name: "SYNTHICA", label: "software engineering intern · research workflows", strength: 0.78 },
  { name: "GSSOC'26", label: "open-source mentor and project admin", strength: 0.72 },
  { name: "TERMINAL TROOPS", label: "coding club vice president · 50+ developers", strength: 0.68 },
];

export const experience = [
  { role: "Software Engineer Intern", organization: "Synthica", detail: "Research workflow platform; journal dashboards, submission tracking, analytics, and publication management." },
  { role: "Website Manager Intern", organization: "Project Q2", detail: "Maintaining and improving a live WordPress presence for performance and accessibility." },
  { role: "Research Assistant", organization: "Kazi Nazrul University", detail: "ML work on ribosomal disease detection, data augmentation, and model efficiency." },
];

export const hackathons = [
  { name: "Smart India Hackathon 2025", outcome: "Internal rank #2", project: "MineKavach — AI rockfall prediction and alerts" },
  { name: "Hack with Gujarat", outcome: "Team lead", project: "Gistify — AI webpage summarizer" },
  { name: "ICDMAI", outcome: "Semi-finalist", project: "Team project" },
  { name: "National Coding League 2.0", outcome: "Regional qualifier", project: "Team lead" },
];
