import type { ExternalProject } from "../adapters/types";

export type ProjectDNA = { seed: number; mass: number; luminosity: number; instability: number; erosion: number; pulse: number; satellites: number };

export function deterministicSeed(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index++) hash = Math.imul(hash ^ value.charCodeAt(index), 16777619);
  return hash >>> 0;
}

export function normalizeProjectDNA(project: ExternalProject): ProjectDNA {
  const data = project.metadata as Record<string, number | string | boolean | null>;
  const ageDays = Math.max(1, (Date.now() - new Date(String(data.created_at ?? Date.now())).getTime()) / 86400000);
  const activityDays = Math.max(0, (Date.now() - new Date(String(data.updated_at ?? Date.now())).getTime()) / 86400000);
  return {
    seed: deterministicSeed(`${project.id}:${project.name}`),
    mass: Math.min(1, Math.log10(Number(data.size ?? 1) + 10) / 5),
    luminosity: Math.min(1, .15 + Number(data.stargazers_count ?? 0) / 100),
    instability: Math.min(1, Number(data.open_issues_count ?? 0) / 30),
    erosion: Math.min(1, ageDays / 2200),
    pulse: Math.max(.08, 1 - activityDays / 365),
    satellites: Math.min(12, Number(data.forks_count ?? 0)),
  };
}
