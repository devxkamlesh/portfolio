import {
  AboutSection,
  CtaSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection
} from "@/components/portfolio";
import { content } from "@/lib/portfolio-data";

export default function HomePage() {
  return (
    <main className="page-wrap">
      <HeroSection hero={content.hero} />
      <AboutSection about={content.about} />
      <ProjectsSection projects={content.projects} />
      <SkillsSection skills={content.skills} supportingSkills={content.supporting_skills} />
      <ServicesSection services={content.services} />
      <CtaSection cta={content.cta} />
    </main>
  );
}
