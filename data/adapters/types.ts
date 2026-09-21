export type Profile = { id: string; name: string; url?: string; avatarUrl?: string };
export type Stats = Record<string, number | string | null>;
export type Activity = { id: string; at: string; intensity: number; label: string };
export type ExternalProject = { id: string; name: string; url?: string; metadata: Record<string, unknown> };

export interface CodingSource {
  profile(): Promise<Profile>;
  stats(): Promise<Stats>;
  projects(): Promise<ExternalProject[]>;
  activity(): Promise<Activity[]>;
}
