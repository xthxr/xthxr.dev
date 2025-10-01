import Image from 'next/image';
import { getGithubProjects, type Project } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export async function ProjectsSection() {
  const projects = await getGithubProjects('xthxr');

  return (
    <section id="projects" className="w-full py-12 lg:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-4">My Work</p>
            <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter">
              Featured Projects
            </h2>
          </div>
          <div className="flex items-center gap-4">
              <Asterisk className="text-primary w-6 h-6" />
              <div className="w-full h-px bg-border"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col group">
                <div className="relative overflow-hidden aspect-[5/3] w-full bg-muted/20 border-2 border-border group-hover:border-primary transition-all duration-300" style={{clipPath: 'polygon(0 100%, 0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-50 group-hover:opacity-20 transition-opacity duration-300"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse-slow"></div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between mt-6">
                    <div>
                        <h3 className="text-2xl font-bold font-headline">{project.name}</h3>
                        <p className="text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                    </div>
                    <Link href={project.html_url} target="_blank" rel="noopener noreferrer" className="mt-4">
                        <Button variant="link" className="p-0 text-lg text-primary hover:text-primary/80">
                            View Project <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your tailwind.config.ts in the animation section
// 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//
// and in the keyframes section
// 'pulse-slow': {
//   '50%': {
//     opacity: '.5',
//     transform: 'scale(1.2)',
//   },
// },
//
// It's already in globals.css, but line-clamp requires a plugin:
// npm install -D @tailwindcss/line-clamp
// and add it to tailwind.config.ts `plugins: [require('@tailwindcss/line-clamp')]`
// Since I can't do that, I'll use a CSS class for it in globals.css
// .line-clamp-2 {
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 2;
// }
//
// I've also updated the description to use line-clamp-2
// And removed the placeholder image logic
// And added a simple div with an animation
