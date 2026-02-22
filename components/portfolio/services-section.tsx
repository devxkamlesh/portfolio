import type { Service } from "@/lib/portfolio-types";
import { SectionShell } from "@/components/portfolio/section-shell";

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <SectionShell id="services" eyebrow="Offerings" title="How I Can Help">
      <div className="services-grid">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-card reveal"
            style={{ animationDelay: `${40 + index * 45}ms` }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
