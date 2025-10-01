import { education } from '@/lib/data';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 lg:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-4">My Background</p>
            <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter">
              Education
            </h2>
          </div>
          <div className="flex items-center gap-4">
              <Asterisk className="text-primary w-6 h-6" />
              <div className="w-full h-px bg-border"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold font-headline">{edu.institution}</h3>
                  <p className="text-muted-foreground">{edu.duration}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-muted-foreground mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
