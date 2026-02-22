import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionSafeReveal } from "@/components/motion/motion-safe-reveal";
import type { Cta } from "@/lib/types";
import { isExternalLink, parseLabeledLink } from "@/lib/utils";

type CtaSectionProps = {
  cta: Cta;
};

export function CtaSection({ cta }: CtaSectionProps) {
  const parsedLinks = cta.links.map(parseLabeledLink);

  return (
    <SectionWrapper id="contact" eyebrow="Call To Action" title={cta.heading}>
      <MotionSafeReveal>
        <div className="rounded-2xl border border-accent/30 bg-[linear-gradient(120deg,rgba(0,110,141,0.14),rgba(25,200,165,0.14))] p-5 sm:p-6">
          <p className="max-w-3xl text-sm text-muted sm:text-base">{cta.body}</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {parsedLinks.map((entry) => (
              <li
                key={`${entry.label}-${entry.value}`}
                className="rounded-lg border border-line/70 bg-[color:var(--surface-strong)] px-3 py-2"
              >
                <span className="font-semibold text-ink">{entry.label}:</span>{" "}
                {isExternalLink(entry.value) ? (
                  <a
                    href={entry.value}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:text-accentStrong"
                  >
                    {entry.value}
                  </a>
                ) : (
                  <span className="text-muted">{entry.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </MotionSafeReveal>
    </SectionWrapper>
  );
}
