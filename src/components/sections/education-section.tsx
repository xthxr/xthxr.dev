import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { education } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Education
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My academic journey and background in engineering.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1">
          {education.map((item, index) => (
            <Card key={index} className="transition-all hover:shadow-glow hover:border-primary/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div className='text-left'>
                        <CardTitle className="font-headline text-xl">{item.institution}</CardTitle>
                        <p className="text-muted-foreground text-sm">{item.degree}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm font-medium">{item.duration}</p>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="text-left">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
