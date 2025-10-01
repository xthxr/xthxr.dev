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
    { name: "Contact", href: "#contact" },
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'Express.js', 'Python', 'Flask', 'Java', 'Spring Boot',
  'PostgreSQL', 'MongoDB', 'Docker', 'Git & GitHub', 'Tailwind CSS'
];

export const projects = [
  {
    title: 'QuantumLeap',
    description: 'A conceptual platform for collaborative quantum computing experiments. Built with Next.js, TypeScript, and a custom simulation engine.',
    link: '#',
    image: getImage('project-1'),
  },
  {
    title: 'SynthWave API',
    description: 'A RESTful API for generating procedural 80s-inspired music tracks. Powered by Node.js, Express, and Tone.js.',
    link: '#',
    image: getImage('project-2'),
  },
  {
    title: 'CodeSphere',
    description: 'An interactive 3D visualization of GitHub repository structures using Three.js and React, offering a unique way to explore codebases.',
    link: '#',
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
