import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionSafeReveal } from "@/components/motion/motion-safe-reveal";
import type { Service } from "@/lib/types";

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <SectionWrapper
      id="services"
      eyebrow="Services"
      title="What I Deliver"
      description="High-impact execution lanes designed for recruiter confidence and client conversion."
    >
      {services.length === 0 ? (
        <p className="surface-soft p-5 text-sm text-muted">
          Services data unavailable.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <MotionSafeReveal key={service.title} delay={index * 0.05}>
              <article className="surface-card p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glass">
                <h3 className="text-lg font-display font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </article>
            </MotionSafeReveal>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
