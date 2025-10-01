import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-48 bg-grid-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
              Athar Akram
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Engineering Student • Developer • Creator
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#contact">
              <Button size="lg" className="transition-all hover:shadow-glow hover:scale-105">
                Get In Touch
              </Button>
            </Link>
            <Link href="#projects">
              <Button size="lg" variant="outline" className="transition-all hover:text-accent hover:border-accent hover:shadow-glow hover:scale-105">
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
