import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { contributions } from '@/lib/data';
import Link from 'next/link';
import { Github } from 'lucide-react';

export function OpenSourceSection() {
  return (
    <section id="opensource" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Open Source
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Giving back to the community is a core part of my identity as a developer.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {contributions.map((item, index) => (
            <Card key={index} className="transition-all hover:shadow-glow hover:border-accent/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{item.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                     <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
