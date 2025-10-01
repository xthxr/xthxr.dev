import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
