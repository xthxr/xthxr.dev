import type { Activity, CodingSource, ExternalProject, Profile, Stats } from "./types";

type GitHubRepo = { id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number; open_issues_count: number; size: number; created_at: string; updated_at: string; topics?: string[]; archived: boolean; fork: boolean };

export class GitHubSource implements CodingSource {
  constructor(private readonly user: string, private readonly token?: string) {}
  private async request<T>(path: string): Promise<T> {
    const response = await fetch(`https://api.github.com${path}`, { headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}) }, next: { revalidate: 21600 } });
    if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
    return response.json() as Promise<T>;
  }
  profile() { return this.request<{ login: string; name: string | null; html_url: string; avatar_url: string }>(`/users/${this.user}`).then((p): Profile => ({ id: p.login, name: p.name ?? p.login, url: p.html_url, avatarUrl: p.avatar_url })); }
  async stats(): Promise<Stats> { const repos = await this.repos(); return { repositories: repos.length, stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0), forks: repos.reduce((sum, repo) => sum + repo.forks_count, 0) }; }
  async projects(): Promise<ExternalProject[]> { return (await this.repos()).map((repo) => ({ id: String(repo.id), name: repo.name, url: repo.html_url, metadata: repo })); }
  async activity(): Promise<Activity[]> { return (await this.repos()).slice(0, 20).map((repo) => ({ id: String(repo.id), at: repo.updated_at, intensity: Math.min(1, .25 + repo.stargazers_count * .04), label: repo.name })); }
  private repos() { return this.request<GitHubRepo[]>(`/users/${this.user}/repos?per_page=100&sort=updated&type=owner`); }
}
