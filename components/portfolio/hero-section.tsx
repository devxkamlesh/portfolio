import type { Hero } from "@/lib/portfolio-types";

type HeroSectionProps = {
  hero: Hero;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <header className="hero shell">
      <div className="hero-bg" aria-hidden />
      <div className="hero-content reveal">
        <p className="hero-kicker">Jaipur, India | Hindi + English</p>
        <h1>{hero.name}</h1>
        <p className="hero-title">{hero.headline}</p>
        <p className="hero-subtitle">{hero.subheadline}</p>
        <p className="hero-availability">{hero.availability}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            {hero.primary_cta}
          </a>
          <a className="btn btn-secondary" href="#contact">
            {hero.secondary_cta}
          </a>
        </div>
      </div>
      <div className="hero-stats reveal" style={{ animationDelay: "70ms" }}>
        <article>
          <span>83</span>
          <p>Implemented Features</p>
        </article>
        <article>
          <span>32+</span>
          <p>Admin Capabilities</p>
        </article>
        <article>
          <span>19,540+</span>
          <p>LOC in Open Source Suite</p>
        </article>
      </div>
    </header>
  );
}
