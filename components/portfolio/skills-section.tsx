import type { SkillCategory, SupportingSkill } from "@/lib/portfolio-types";
import { SectionShell } from "@/components/portfolio/section-shell";

type SkillsSectionProps = {
  skills: SkillCategory[];
  supportingSkills: SupportingSkill[];
};

export function SkillsSection({ skills, supportingSkills }: SkillsSectionProps) {
  return (
    <SectionShell id="skills" eyebrow="Capabilities" title="Technical Skills">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article
            key={skill.category}
            className="skill-card reveal"
            style={{ animationDelay: `${40 + index * 40}ms` }}
          >
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{skill.applied_value}</p>
          </article>
        ))}
      </div>

      <div className="supporting-skill-block reveal" style={{ animationDelay: "120ms" }}>
        <h3>Supporting Skills</h3>
        <ul>
          {supportingSkills.map((skill) => (
            <li key={skill.skill}>
              <strong>
                {skill.skill} ({skill.level})
              </strong>
              : {skill.note}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
