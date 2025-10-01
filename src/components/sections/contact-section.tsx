import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 max-w-3xl">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
