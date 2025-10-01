import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function HeroSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-me');

  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center lg:justify-start relative group">
            <div className="absolute -bottom-2 -left-2 w-full h-full border-2 border-muted-foreground group-hover:border-primary transition-all duration-300" style={{clipPath: 'polygon(0 100%, 0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%)'}}></div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={500}
                height={500}
                className="object-cover aspect-square max-w-md w-full z-10"
                priority
              />
            )}
            <span className="absolute bottom-4 -left-12 transform -rotate-90 text-xs text-muted-foreground tracking-widest">
              VIDEO_459
            </span>
          </div>

          <div className="flex flex-col space-y-8">
             <div>
                <p className="text-lg text-muted-foreground mb-4">Hi, I'm Athar Akram</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter font-stretch-condensed -ml-1">
                    <span className="block">CREATIVE</span>
                    <span className="block italic">DevOps & Cloud</span>
                    <span className="block">DEVELOPER</span>
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <Asterisk className="text-primary w-6 h-6" />
                <div className="w-full h-px bg-border"></div>
            </div>

            <p className="text-lg max-w-md text-muted-foreground">
              I create immersive, high-performing websites and applications tailored for startups, agencies, and in-house teams that need speed, scalability, and full control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm text-base font-bold py-6 px-8">
                  Get in touch
                </Button>
              </Link>
              <Link href="#projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-sm text-base font-bold py-6 px-8 border-2 hover:bg-foreground hover:text-background">
                  See work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
