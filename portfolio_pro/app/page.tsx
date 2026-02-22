import { ValidationChecklist } from "@/components/dev/validation-checklist";
import {
  AboutSection,
  CtaSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  TopNav
} from "@/components/portfolio";
import { JsonLd } from "@/components/seo/json-ld";
import { loadMarkdownSource, portfolioContent } from "@/lib/content";
import { buildJsonLd } from "@/lib/seo";
import { runContentValidation } from "@/lib/validation";

export default async function Page() {
  const markdownSource = await loadMarkdownSource();
  const validationResults = runContentValidation(portfolioContent, markdownSource);
  const structuredData = buildJsonLd(portfolioContent);

  return (
    <>
      {structuredData.map((entry, index) => (
        <JsonLd key={`json-ld-${index}`} id={`json-ld-${index}`} data={entry} />
      ))}

      <TopNav />
      <main id="main-content">
        <HeroSection hero={portfolioContent.hero} />
        <AboutSection about={portfolioContent.about} />
        <ProjectsSection projects={portfolioContent.projects} />
        <SkillsSection
          skills={portfolioContent.skills}
          supportingSkills={portfolioContent.supporting_skills}
        />
        <ServicesSection services={portfolioContent.services} />
        <CtaSection cta={portfolioContent.cta} />
      </main>
      {process.env.NODE_ENV === "development" ? (
        <ValidationChecklist results={validationResults} />
      ) : null}
    </>
  );
}
