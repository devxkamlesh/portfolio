export const siteConfig = {
  name: "Kamlesh Choudhary Portfolio",
  shortName: "Kamlesh Portfolio",
  description:
    "Full Stack Engineer and AI Systems Architect building production-ready SaaS products with secure architecture, modern UX, and measurable delivery outcomes.",
  url: "https://kiro-powers.vercel.app",
  locale: "en_US",
  author: "Kamlesh Choudhary",
  links: {
    github: "https://github.com/devxkamlesh",
    linkedin: "https://linkedin.com/in/devxkamlesh",
    portfolio: "https://kiro-powers.vercel.app"
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ] as const
};

export type SiteConfig = typeof siteConfig;
