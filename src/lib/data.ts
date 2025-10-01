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
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#opensource" },
    { name: "Contact", href: "#contact" },
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'Express.js', 'Python', 'Flask', 'Java', 'Spring Boot',
  'PostgreSQL', 'MongoDB', 'Docker', 'Git & GitHub', 'Tailwind CSS'
];

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
