import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Github, Linkedin, Youtube } from 'lucide-react';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-section');

  return (
    <section id="about" className="w-full py-12 lg:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
             <div>
                <p className="text-lg text-muted-foreground mb-4">A Little Bit About Me</p>
                <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter">
                    I have a passion for creating amazing software experiences and explore the backend.
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <Asterisk className="text-primary w-6 h-6" />
                <div className="w-full h-px bg-border"></div>
            </div>

            <p className="text-lg max-w-2xl text-muted-foreground">
              As an aspiring DevOps & Cloud Engineer, I am deeply passionate about building scalable, high-performance infrastructure and automating development pipelines. My journey into technology was driven by a curiosity for how complex systems work together to deliver seamless user experiences. I thrive on solving challenging problems and continuously learning new skills in the ever-evolving world of cloud computing and automation.
            </p>
            
            <div className="flex flex-row gap-4">
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="rounded-full border-2">
                  <Github />
                </Button>
              </Link>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="rounded-full border-2">
                  <Linkedin />
                </Button>
              </Link>
               <Link href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="rounded-full border-2">
                  <Youtube />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative group">
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-muted-foreground group-hover:border-primary transition-all duration-300" style={{clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)'}}></div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={500}
                height={500}
                className="object-cover aspect-square max-w-md w-full z-10"
              />
            )}
             <span className="absolute top-4 -right-12 transform rotate-90 text-xs text-muted-foreground tracking-widest">
              PHOTO_782
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
