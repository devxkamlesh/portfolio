import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { PortfolioContent } from "@/lib/types";

type JsonLdObject = Record<string, unknown>;

export function buildMetadata(content: PortfolioContent): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: content.seo.title,
    description: content.seo.meta_description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: "/"
    },
    openGraph: {
      type: "website",
      url: siteConfig.url,
      title: content.seo.title,
      description: content.seo.meta_description,
      siteName: siteConfig.name,
      locale: siteConfig.locale
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.short_bio
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function buildJsonLd(content: PortfolioContent): JsonLdObject[] {
  const person: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.hero.name,
    jobTitle: content.hero.headline,
    description: content.seo.short_bio,
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.portfolio],
    knowsLanguage: ["Hindi", "English"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressCountry: "IN"
    }
  };

  const website: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: content.seo.meta_description
  };

  const projectList: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    itemListElement: content.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.solution,
        creator: content.hero.name
      }
    }))
  };

  return [person, website, projectList];
}
