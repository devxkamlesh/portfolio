import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionSafeReveal } from "@/components/motion/motion-safe-reveal";
import type { About } from "@/lib/types";

type AboutSectionProps = {
  about: About;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Product-Focused Engineering Execution"
      description="I build with a systems mindset: clear architecture, secure defaults, measurable outcomes."
    >
      <div className="grid items-start gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <MotionSafeReveal>
          <div className="space-y-4 text-base leading-7 text-muted">
            <p>{about.intro_p1}</p>
            <p>{about.intro_p2}</p>
          </div>
        </MotionSafeReveal>

        <MotionSafeReveal delay={0.06} className="lg:mt-2 lg:ml-auto lg:w-[calc(100%-60px)]">
          <aside className="surface-card rounded-xl p-3.5 sm:p-4" aria-label="Proof highlights">
            <h3 className="text-[1.05rem] font-display font-semibold">Proof Highlights</h3>
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[0.93rem] leading-6 text-muted">
              {about.proof_bullets.map((proof) => (
                <li key={proof}>{proof}</li>
              ))}
            </ul>
          </aside>
        </MotionSafeReveal>
      </div>
    </SectionWrapper>
  );
}
