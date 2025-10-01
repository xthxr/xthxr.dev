import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MotionWrapper } from '../motion-wrapper';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function HeroSection() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center py-12 lg:py-20 bg-background text-foreground relative overflow-hidden">
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <MotionWrapper className="flex justify-center lg:justify-start relative group">
            <div className="absolute -bottom-2 -left-2 w-full h-full border-2 border-muted-foreground group-hover:border-primary transition-all duration-300" style={{clipPath: 'polygon(0 100%, 0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%)'}}></div>
            <Image
              src="/hero-img.jpeg"
              alt="A portrait of Athar Akram"
              width={500}
              height={500}
              className="object-contain aspect-square max-w-md w-full z-10"
              priority
            />
            <span className="absolute bottom-4 -left-12 transform -rotate-90 text-xs text-muted-foreground tracking-widest">
              VIDEO_459
            </span>
          </MotionWrapper>

          <div className="flex flex-col space-y-8">
             <MotionWrapper>
                <p className="text-lg text-muted-foreground mb-4">Hi, I'm Athar Akram</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter font-stretch-condensed -ml-1">
                    <span className="block">ASPIRING</span>
                    <span className="block italic text-primary">DevOps & Cloud</span>
                    <span className="block">ENGINEER</span>
                </h1>
            </MotionWrapper>

            <MotionWrapper className="flex items-center gap-4">
                <Asterisk className="text-primary w-6 h-6" />
                <div className="w-full h-px bg-border"></div>
            </MotionWrapper>

            <MotionWrapper>
              <p className="text-lg max-w-md text-muted-foreground">
                A CSE sophomore, building projects that can scale globally and I'm always ready to collaborate with peers with same mindset.
              </p>
            </MotionWrapper>
            
            <MotionWrapper className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm text-base font-bold py-6 px-8">
                  Get in touch
                </Button>
              </Link>
              <Link href="#projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-sm text-base font-bold py-6 px-8 border-2 hover:bg-foreground hover:text-background">
                  Know more
                </Button>
              </Link>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
