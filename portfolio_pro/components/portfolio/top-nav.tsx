"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

export function TopNav() {
  const sectionHrefs = useMemo(() => siteConfig.navigation.map((item) => item.href), []);
  const activeHref = useActiveSection(sectionHrefs);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === "dark" || currentTheme === "light") {
      setTheme(currentTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, isHydrated]);

  const nextTheme = theme === "dark" ? "Light" : "Dark";

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-40 border-b border-line/70 bg-[color:var(--surface-strong)] backdrop-blur-md shadow-[var(--nav-shadow)]"
    >
      <Container className="flex min-h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 font-display text-sm font-semibold tracking-wide transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {siteConfig.shortName}
        </Link>

        <div className="flex items-center gap-2">
          <ul className="flex flex-wrap items-center gap-1 text-sm text-muted sm:gap-2">
            {siteConfig.navigation.map((item) => {
              const isActive = item.href === activeHref;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-3 py-1.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? "bg-accent text-white shadow-sm"
                        : "hover:bg-[color:var(--surface)] hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-pressed={theme === "dark"}
            aria-label={`Switch to ${nextTheme.toLowerCase()} mode`}
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            className="rounded-full border border-line/70 bg-[color:var(--surface)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isHydrated ? nextTheme : "Theme"}
          </button>
        </div>
      </Container>
    </nav>
  );
}
