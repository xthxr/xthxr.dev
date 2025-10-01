import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

function getImage(id: string): ImagePlaceholder {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        // Fallback image if not found
        return {
            id: 'fallback',
            imageUrl: 'https://picsum.photos/seed/fallback/600/400',
            description: 'Fallback image',
            imageHint: 'placeholder'
        };
    }
    return image;
}

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'Express.js', 'Python', 'Flask', 'Java', 'Spring Boot',
  'PostgreSQL', 'MongoDB', 'Docker', 'Git & GitHub', 'Tailwind CSS'
];

export type Project = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
};

export async function getGithubProjects(username: string): Promise<Project[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`);
    if (!response.ok) {
      console.error('Failed to fetch projects from GitHub');
      return [];
    }
    const data = await response.json();
    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      topics: repo.topics || [],
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}


export const projects = [
  {
    title: 'maistro',
    description: 'A platform for music producers to collaborate, share, and get feedback on their work. Built with Next.js, tRPC, and Prisma.',
    link: 'https://github.com/xthxr/maistro',
    image: getImage('project-1'),
  },
  {
    title: 'portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills.',
    link: 'https://github.com/xthxr/portfolio',
    image: getImage('project-2'),
  },
  {
    title: 'clerk-next-app-router-trpc',
    description: 'A starter template for building a full-stack application with Next.js App Router, Clerk for authentication, and tRPC for type-safe APIs.',
    link: 'https://github.com/xthxr/clerk-next-app-router-trpc',
    image: getImage('project-3'),
  },
];

export const education = [
    {
        institution: 'University of Technology',
        degree: 'Bachelor of Science in Computer Engineering',
        duration: '2021 - 2025',
        description: 'Focusing on software development, data structures, and algorithms. Actively involved in the university coding club and hackathon team.'
    }
];

export const achievements = [
    {
        title: "SIH 2025 Team Lead",
        description: "Led team to rank #2 in our university's internal hackathon.",
    },
    {
        title: "Naukri Campus Young Turks 2025",
        description: "Achieved a 97.39 percentile score in the national exam.",
    },
    {
        title: "Apple Developer Academy",
        description: "Qualified for the 2026 cohort in Indonesia.",
    },
    {
        title: "GFG Linux Contest",
        description: "Achieved Rank #1 multiple times in GeeksforGeeks contests.",
    },
    {
        title: "ICDMAI Hackathon",
        description: "Advanced to the semi-finalist stage.",
    },
    {
        title: "National Coding League 2.0",
        description: "Competed and reached the semi-finalist round.",
    },
];

export const contributions = [
  {
    title: 'Hacktoberfest Validator',
    description: 'Contributed a new validation module to check for repository topic compliance, ensuring higher quality pull requests during Hacktoberfest.',
    link: '#',
    tags: ['Go', 'CI/CD']
  },
  {
    title: 'Next.js Documentation',
    description: 'Authored a new guide on advanced server-side rendering patterns, clarifying complex concepts for the developer community.',
    link: '#',
    tags: ['Docs', 'React']
  },
   {
    title: 'Lucide Icons',
    description: 'Designed and submitted several new technology-related icons, expanding the library for developers and designers.',
    link: '#',
    tags: ['SVG', 'Design']
  },
];

export const socialLinks = {
    github: "https://github.com/atharakram",
    linkedin: "https://www.linkedin.com/in/atharakram",
    youtube: "https://youtube.com/@atharakram"
}
