import { experiences } from '@/lib/data';
import { Briefcase } from 'lucide-react';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 lg:py-20 bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-4">My Professional Journey</p>
            <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter">
              Experience
            </h2>
          </div>
          <div className="flex items-center gap-4">
              <Asterisk className="text-primary w-6 h-6" />
              <div className="w-full h-px bg-border"></div>
          </div>
          <div className="relative">
             <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
             {experiences.map((exp, index) => (
                 <div key={index} className="relative flex items-start gap-8 mb-12 last:mb-0">
                     <div className="hidden md:flex flex-col items-center w-1/2 pr-8 text-right">
                         <h3 className="text-xl font-bold font-headline text-primary">{exp.role}</h3>
                         <p className="text-muted-foreground">{exp.company}</p>
                         <p className="text-sm text-muted-foreground mt-1">{exp.duration} &middot; {exp.location}</p>
                     </div>

                     <div className="absolute left-4 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-primary" />
                     </div>

                     <div className="flex flex-col items-start w-full md:w-1/2 pl-16 md:pl-8">
                         <div className="md:hidden mb-4">
                            <h3 className="text-xl font-bold font-headline text-primary">{exp.role}</h3>
                            <p className="text-muted-foreground">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mt-1">{exp.duration} &middot; {exp.location}</p>
                         </div>
                         <p className="text-muted-foreground mb-4">{exp.description}</p>
                         <div className="flex flex-wrap gap-2">
                             {exp.skills.map((skill) => (
                                 <div key={skill} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
                                     {skill}
                                 </div>
                             ))}
                         </div>
                     </div>
                 </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
