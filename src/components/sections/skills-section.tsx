import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Technical Skills
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-lg px-6 py-3 border-primary/50 text-primary-foreground bg-primary/20 transition-all hover:bg-primary/40 hover:shadow-glow cursor-pointer"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
