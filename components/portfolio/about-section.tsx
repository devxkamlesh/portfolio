import type { About } from "@/lib/portfolio-types";
import { SectionShell } from "@/components/portfolio/section-shell";

type AboutSectionProps = {
  about: About;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionShell id="about" eyebrow="Profile" title="Engineering Mindset">
      <div className="about-grid">
        <div className="about-copy">
          <p>{about.intro_p1}</p>
          <p>{about.intro_p2}</p>
        </div>
        <ul className="proof-list">
          {about.proof_bullets.map((proof) => (
            <li key={proof}>{proof}</li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
