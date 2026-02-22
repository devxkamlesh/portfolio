"use client";

import { useEffect, useMemo, useState } from "react";

type SectionRef = {
  href: string;
  element: HTMLElement;
};

export function useActiveSection(hrefs: readonly string[]): string {
  const sectionHrefs = useMemo(
    () => hrefs.filter((href) => href.startsWith("#")),
    [hrefs]
  );
  const [activeHref, setActiveHref] = useState(sectionHrefs[0] ?? "");

  useEffect(() => {
    if (sectionHrefs.length === 0) return;

    const sections = sectionHrefs
      .map((href) => {
        const sectionId = href.slice(1);
        const element = document.getElementById(sectionId);
        return element ? { href, element } : null;
      })
      .filter((section): section is SectionRef => section !== null);

    if (sections.length === 0) return;

    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash && sectionHrefs.includes(hash)) {
        setActiveHref(hash);
      }
    };

    syncFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const topEntry = visibleEntries.reduce((best, current) =>
          current.intersectionRatio > best.intersectionRatio ? current : best
        );

        const matchedSection = sections.find((section) => section.element === topEntry.target);
        if (matchedSection) {
          setActiveHref(matchedSection.href);
        }
      },
      {
        rootMargin: "-38% 0px -48% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section.element));
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [sectionHrefs]);

  return activeHref;
}
