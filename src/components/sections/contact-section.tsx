import { ContactForm } from '@/components/contact-form';

const Asterisk = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/><path d="m4.22 4.22 15.56 15.56"/><path d="M2 12h20"/><path d="m4.22 19.78 15.56-15.56"/>
    </svg>
)

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 lg:py-20 bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-4">Get in Touch</p>
            <h2 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter">
              Contact Me
            </h2>
          </div>
          <div className="flex items-center gap-4 w-full max-w-2xl">
              <Asterisk className="text-primary w-6 h-6" />
              <div className="w-full h-px bg-border"></div>
          </div>
           <p className="text-lg max-w-2xl text-muted-foreground">
              Have a project in mind or want to connect? Feel free to send me a message. I'm always open to discussing new opportunities and collaborations.
            </p>
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
