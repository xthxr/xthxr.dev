export type ProjectRecord = {
  id: string;
  name: string;
  kind: string;
  description: string;
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
  role: "Software / systems / experiments",
  email: "",
  github: "",
  hiddenRepositories: [] as string[],
  featuredRepositories: ["VyaparSathi", "CODEFIELD"],
};

// Known work only. A generated snapshot can replace this normalized source.
export const projects: ProjectRecord[] = [
  {
    id: "vyaparsathi",
    name: "VYAPARSATHI",
    kind: "BUSINESS SYSTEM",
    description: "An operating system for everyday business workflows.",
    status: "active",
    year: 2026,
    size: 1,
    energy: 0.92,
    technologies: ["React", "TypeScript", "Python"],
  },
  {
    id: "codefield",
    name: "CODEFIELD",
    kind: "COMPUTATIONAL INTERFACE",
    description: "Developer activity translated into a navigable physical system.",
    status: "active",
    year: 2026,
    size: 0.82,
    energy: 1,
    technologies: ["React", "TypeScript", "Canvas"],
  },
];

export const signals = [
  { name: "GITHUB", label: "source activity", strength: 0.84 },
  { name: "SYSTEM", label: "field telemetry", strength: 0.61 },
];
