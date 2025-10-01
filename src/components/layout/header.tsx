'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { useState, useEffect } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const desktopNavLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/40 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-lg font-headline">
            xthxr
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="https://drive.google.com/file/d/1I6U0c5EMmQDiZzc7ZUwEcScrdZfaJ1uS/preview" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            RESUME
          </Link>
          <div className="w-8 h-px bg-muted-foreground"></div>
          <span className="text-foreground">{time}</span>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="p-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-background border-r border-border/40">
             <Link
              href="/"
              className="flex items-center px-4"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold text-lg font-headline">
                xthxr
              </span>
            </Link>
            <div className="my-8 h-[calc(100vh-8rem)] pb-10">
              <div className="flex flex-col space-y-6 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
