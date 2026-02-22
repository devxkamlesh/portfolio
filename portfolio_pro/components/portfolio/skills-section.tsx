import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionSafeReveal } from "@/components/motion/motion-safe-reveal";
import type { SkillGroup, SupportingSkill } from "@/lib/types";

type SkillsSectionProps = {
  skills: SkillGroup[];
  supportingSkills: SupportingSkill[];
};

export function SkillsSection({ skills, supportingSkills }: SkillsSectionProps) {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="Core Technical Capability"
      description="Depth in full-stack product engineering and secure system architecture."
    >
      {skills.length === 0 ? (
        <p className="surface-soft p-5 text-sm text-muted">
          Skills data unavailable.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((group, index) => (
            <MotionSafeReveal key={group.category} delay={index * 0.05}>
              <article className="surface-card p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glass">
                <h3 className="text-lg font-display font-semibold">{group.category}</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted">{group.applied_value}</p>
              </article>
            </MotionSafeReveal>
          ))}
        </div>
      )}

      <MotionSafeReveal delay={0.12}>
        <aside className="surface-card mt-5 p-4" aria-label="Supporting skills">
          <h3 className="text-base font-display font-semibold">Supporting Skills</h3>
          {supportingSkills.length === 0 ? (
            <p className="mt-2 text-sm text-muted">No supporting skills listed.</p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {supportingSkills.map((skill) => (
                <li key={skill.skill}>
                  <span className="font-semibold text-ink">
                    {skill.skill} ({skill.level})
                  </span>
                  : {skill.note}
                </li>
              ))}
            </ul>
          )}
        </aside>
      </MotionSafeReveal>
    </SectionWrapper>
  );
}
