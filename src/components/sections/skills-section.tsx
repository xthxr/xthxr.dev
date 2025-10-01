import { skills } from '@/lib/data';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 lg:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-4">My Toolbox</p>
            <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter">
              Skills & Technologies
            </h2>
          </div>
          <div className="flex items-center gap-4">
              <Asterisk className="text-primary w-6 h-6" />
              <div className="w-full h-px bg-border"></div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <div key={skill} className="px-6 py-3 border-2 border-border text-lg font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'}}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
