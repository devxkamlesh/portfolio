import type { Cta } from "@/lib/portfolio-types";
import { SectionShell } from "@/components/portfolio/section-shell";

type ParsedLink = {
  label: string;
  value: string;
  href?: string;
};

type CtaSectionProps = {
  cta: Cta;
};

function parseCtaLink(raw: string): ParsedLink {
  const [label, ...rest] = raw.split(":");
  const value = rest.join(":").trim();
  const href = /^https?:\/\//.test(value) ? value : undefined;

  return {
    label: label.trim(),
    value,
    href
  };
}

export function CtaSection({ cta }: CtaSectionProps) {
  const links = cta.links.map(parseCtaLink);

  return (
    <SectionShell id="contact" eyebrow="Contact" title={cta.heading}>
      <div className="cta-block">
        <p>{cta.body}</p>
        <ul>
          {links.map((item) => (
            <li key={`${item.label}-${item.value}`}>
              <strong>{item.label}:</strong>{" "}
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
