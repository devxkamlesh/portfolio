import Image from "next/image";

import { Container } from "@/components/layout/container";
import { MotionSafeReveal } from "@/components/motion/motion-safe-reveal";
import type { Hero } from "@/lib/types";

type HeroSectionProps = {
  hero: Hero;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden bg-hero-gradient py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <MotionSafeReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentStrong">
              Available for work
            </p>
            <h1 className="mt-3 text-balance text-4xl font-display leading-tight sm:text-5xl">
              {hero.name}
            </h1>
            <p className="mt-2 text-xl font-semibold text-accent sm:text-2xl">{hero.headline}</p>
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{hero.subheadline}</p>
            <p className="mt-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accentStrong">
              {hero.availability}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accentStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {hero.primary_cta}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line bg-[color:var(--surface-strong)] px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {hero.secondary_cta}
              </a>
            </div>
          </MotionSafeReveal>

          <MotionSafeReveal delay={0.08}>
            <div className="glass-panel p-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line/70 bg-[color:var(--surface)]">
                <Image
                  src="/images/hero-abstract.svg"
                  alt="Abstract visual highlighting engineering, architecture, and growth metrics."
                  fill
                  priority
                />
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl border border-line/80 bg-[color:var(--surface-strong)] p-2">
                  <dt className="text-xs text-muted">Features</dt>
                  <dd className="text-lg font-display font-bold text-accentStrong">83</dd>
                </div>
                <div className="rounded-xl border border-line/80 bg-[color:var(--surface-strong)] p-2">
                  <dt className="text-xs text-muted">Admin</dt>
                  <dd className="text-lg font-display font-bold text-accentStrong">32+</dd>
                </div>
                <div className="rounded-xl border border-line/80 bg-[color:var(--surface-strong)] p-2">
                  <dt className="text-xs text-muted">Suite LOC</dt>
                  <dd className="text-lg font-display font-bold text-accentStrong">19,540+</dd>
                </div>
              </dl>
            </div>
          </MotionSafeReveal>
        </div>
      </Container>
    </header>
  );
}
