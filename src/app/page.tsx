import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <MotionWrapper>
        <AboutSection />
      </MotionWrapper>
       <MotionWrapper>
        <ExperienceSection />
      </MotionWrapper>
      <MotionWrapper>
        <EducationSection />
      </MotionWrapper>
      <MotionWrapper>
        <ProjectsSection />
      </MotionWrapper>
      <MotionWrapper>
        <AchievementsSection />
      </MotionWrapper>
      <MotionWrapper>
        <SkillsSection />
      </MotionWrapper>
      <MotionWrapper>
        <ContactSection />
      </MotionWrapper>
      <Footer />
    </div>
  );
}
