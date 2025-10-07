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
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
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
        institution: 'Kazi Nazrul University, Asansol',
        degree: 'Bachelor of Technology - BTech, Computer Science',
        duration: '2024 - 2028',
        description: 'Keen to learn more about Computer Science and excited to build a career around it!'
    },
    {
        institution: 'Dreamland School, Makhla',
        degree: 'ISC (Class 12), Science',
        duration: '2015 - 2023',
        description: 'Grade: 87.75% in ISC 12th grade | 93.4% in ICSE 10th grade. Scored 99 out of 100 in Computer Science.'
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

export const experiences = [
    {
        role: "Contributor",
        company: "GirlScript Summer of Code",
        duration: "Aug 2025 - Present",
        location: "Remote",
        description: "Contributed to open-source projects, focusing on AI and Git-based workflows.",
        skills: ["Open-Source Development", "Git", "GitHub", "Artificial Intelligence (AI)"]
    },
    {
        role: "Founding Lead",
        company: "GeeksforGeeks Campus Body - KNU",
        duration: "Jul 2025 - Present",
        location: "Asansol, West Bengal, India",
        description: "Established and led the GFG Campus Body at Kazi Nazrul University, fostering a community of student developers.",
        skills: ["Organizational Leadership", "Team Building"]
    },
    {
        role: "Founder and Vice President",
        company: "TERMINAL TROOPS",
        duration: "May 2025 - Present",
        location: "Asansol, West Bengal, India",
        description: "Co-founded a tech group focused on competitive programming and technical skill development.",
        skills: ["Administration", "Coding", "Competitive Programming", "Technical Leadership"]
    },
    {
        role: "Campus Ambassador",
        company: "GeeksforGeeks",
        duration: "Dec 2024 - Present",
        location: "Remote",
        description: "Represented GeeksforGeeks, managing programs and fostering university relations.",
        skills: ["Brand Ambassadorship", "Leadership", "Program Management", "University Relations"]
    },
    {
        role: "Co-Founder (Exited)",
        company: "Judgement Studios",
        duration: "Feb 2025 - Jul 2025",
        location: "Asansol, West Bengal, India",
        description: "Built and scaled an e-commerce platform from the ground up, managing everything from web development to logistics and sales.",
        skills: ["Shopify", "Technical Leadership", "Web Development", "SEO", "CRM"]
    },
    {
        role: "Contributor",
        company: "Social Winter of Code (SWOC)",
        duration: "Jan 2025 - Mar 2025",
        location: "Remote",
        description: "Contributed to various open-source software projects on different platforms.",
        skills: ["Open-Source Software", "Open-Source Development", "Open Source Platforms"]
    }
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
    github: "https://github.com/xthxr",
    linkedin: "https://www.linkedin.com/in/xthxr",
    youtube: "https://youtube.com/@atharakram",
    twitter: "https://x.com/xthxr__/",
    instagram: "https://www.instagram.com/athar.codes"
}
