import { skills } from '@/lib/data';
import { MotionWrapper } from '../motion-wrapper';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 lg:py-20 bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col space-y-8">
          <MotionWrapper>
            <p className="text-lg text-muted-foreground mb-4">My Toolbox</p>
            <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter">
              Skills & Technologies
            </h2>
          </MotionWrapper>
          <MotionWrapper className="flex items-center gap-4">
              <Asterisk className="text-primary w-6 h-6" />
              <div className="w-full h-px bg-border"></div>
          </MotionWrapper>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <MotionWrapper key={skill} className="px-6 py-3 border-2 border-border text-lg font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'}}>
                {skill}
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
