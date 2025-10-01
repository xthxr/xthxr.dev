import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-me');

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I'm a passionate engineering student with a love for building innovative solutions. My journey in technology started with a simple "Hello, World!" and has since evolved into a full-fledged passion for full-stack development, open-source contribution, and creating impactful digital experiences.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                When I'm not coding, you can find me exploring the latest tech trends, contributing to creative projects, or sharing my knowledge on YouTube. I believe in the power of technology to solve real-world problems and am always eager to learn and grow.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square border-4 border-primary/50 shadow-glow"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
