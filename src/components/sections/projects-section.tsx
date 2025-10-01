import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my work, from conceptual web apps to interactive 3D experiences.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all hover:scale-105 hover:shadow-glow">
              <CardHeader className="p-0">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  data-ai-hint={project.image.imageHint}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-1 p-6">
                 <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                 <CardDescription className="flex-1">{project.description}</CardDescription>
                 <Button asChild variant="link" className="p-0 h-auto mt-4 self-start text-accent">
                    <Link href={project.link}>
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
