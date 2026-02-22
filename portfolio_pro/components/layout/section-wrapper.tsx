import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type SectionWrapperProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-9 sm:py-11 ${className ?? ""}`.trim()}
    >
      <Container>
        <div className="glass-panel p-5 sm:p-7">
          <header className="mb-4 sm:mb-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accentStrong">
              {eyebrow}
            </p>
            <h2 id={`${id}-title`} className="mt-2 text-[1.8rem] font-display leading-tight sm:text-[2.15rem]">
              {title}
            </h2>
            {description ? (
              <p className="mt-2.5 max-w-3xl text-base leading-7 text-muted">{description}</p>
            ) : null}
          </header>
          {children}
        </div>
      </Container>
    </section>
  );
}
