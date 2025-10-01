import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-background text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Athar Akram. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Github className="w-5 h-5"/>
            </Link>
             <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5"/>
            </Link>
             <Link href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5"/>
            </Link>
        </div>
      </div>
    </footer>
  );
}
