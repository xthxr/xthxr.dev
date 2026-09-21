import { mkdir, writeFile } from "node:fs/promises";
import config from "../portfolio.config.mjs";

if (!config.githubUser) {
  console.log("Set PORTFOLIO_GITHUB_USER to generate the GitHub snapshot; keeping the checked-in known-work dataset.");
  process.exit(0);
}

const headers = { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) };
const response = await fetch(`https://api.github.com/users/${config.githubUser}/repos?per_page=100&sort=updated&type=owner`, { headers });
if (!response.ok) throw new Error(`GitHub ingestion failed (${response.status})`);
const repos = (await response.json()).filter((repo) => !repo.fork && !repo.archived && !config.hiddenRepositories.includes(repo.name)).map((repo) => ({ id: String(repo.id), name: repo.name, description: repo.description, source: repo.html_url, live: repo.homepage || undefined, createdAt: repo.created_at, updatedAt: repo.updated_at, size: repo.size, stars: repo.stargazers_count, forks: repo.forks_count, issues: repo.open_issues_count, primaryLanguage: repo.language, topics: repo.topics ?? [], featured: config.featuredRepositories.includes(repo.name), ...(config.overrides[repo.name] ?? {}) }));
await mkdir("public/data", { recursive: true });
await writeFile("public/data/portfolio-data.json", `${JSON.stringify({ generatedAt: new Date().toISOString(), source: "github", repositories: repos }, null, 2)}\n`);
console.log(`Generated ${repos.length} normalized repositories.`);
