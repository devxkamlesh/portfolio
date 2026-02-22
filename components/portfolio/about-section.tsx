import type { About } from "@/lib/portfolio-types";

type AboutSectionProps = {
  about: About;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section shell">
      <div className="about-layout">
        <div>
          <div className="section-head about-head">
            <span className="section-eyebrow">Profile</span>
            <h2>Engineering Mindset</h2>
          </div>
          <div className="about-copy">
            <p>{about.intro_p1}</p>
            <p>{about.intro_p2}</p>
          </div>
        </div>
        <ul className="proof-list">
          {about.proof_bullets.map((proof) => (
            <li key={proof}>{proof}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
