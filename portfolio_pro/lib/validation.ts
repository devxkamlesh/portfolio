import type { PortfolioContent, ValidationResult } from "@/lib/types";
import { extractNumericTokens } from "@/lib/utils";

const REQUIRED_SECTIONS: Array<keyof PortfolioContent> = [
  "hero",
  "about",
  "projects",
  "skills",
  "supporting_skills",
  "services",
  "cta",
  "seo"
];

export function runContentValidation(content: PortfolioContent, markdown: string): ValidationResult[] {
  const plainMarkdown = markdown.toLowerCase();
  const normalizedMarkdown = normalizeText(markdown);
  const heroLower = `${content.hero.headline} ${content.hero.subheadline}`.toLowerCase();
  const aboutLower = `${content.about.intro_p1} ${content.about.intro_p2}`.toLowerCase();
  const serviceLower = content.services.map((service) => `${service.title} ${service.description}`).join(" ").toLowerCase();
  const projectLower = content.projects
    .map((project) => `${project.name} ${project.problem} ${project.solution} ${project.outcomes.join(" ")}`)
    .join(" ")
    .toLowerCase();

  const supportNames = content.supporting_skills.map((skill) => skill.skill.toLowerCase());
  const claims = [...content.about.proof_bullets, ...content.projects.flatMap((project) => project.metrics)];

  const criticalMetricTokens = extractNumericTokens(claims.join(" "));
  const markdownTokens = extractNumericTokens(markdown);
  const missingMetricTokens = criticalMetricTokens.filter((token) => !markdownTokens.includes(token));

  const nonNumericClaims = claims.filter((claim) => extractNumericTokens(claim).length === 0);
  const nonNumericClaimFailures = nonNumericClaims.filter((claim) => {
    const anchors = extractAnchors(claim);
    const matchedCount = anchors.filter((anchor) => normalizedMarkdown.includes(anchor)).length;
    return matchedCount < Math.min(2, anchors.length);
  });

  const seoWordpressOutsideSupporting =
    serviceLower.includes("seo") ||
    serviceLower.includes("wordpress") ||
    projectLower.includes("wordpress") ||
    heroLower.includes("wordpress") ||
    aboutLower.includes("wordpress");

  const results: ValidationResult[] = [
    {
      id: "required-sections",
      category: "Consistency",
      title: "All required content sections exist",
      passed: REQUIRED_SECTIONS.every((section) => content[section] !== undefined && content[section] !== null),
      detail: REQUIRED_SECTIONS.join(", ")
    },
    {
      id: "positioning-hero",
      category: "Consistency",
      title: "Hero reinforces Full Stack + AI positioning",
      passed: heroLower.includes("full stack") && heroLower.includes("ai"),
      detail: "Headline and subheadline must surface full-stack and AI positioning."
    },
    {
      id: "positioning-about",
      category: "Consistency",
      title: "About section supports core positioning",
      passed: aboutLower.includes("full stack") || aboutLower.includes("ai"),
      detail: "About copy should reinforce core role narrative."
    },
    {
      id: "metric-claims-markdown",
      category: "Metric Accuracy",
      title: "Structured claims are traceable in markdown source",
      passed: missingMetricTokens.length === 0 && nonNumericClaimFailures.length === 0,
      detail:
        missingMetricTokens.length === 0 && nonNumericClaimFailures.length === 0
          ? "Metric tokens and non-numeric claim anchors are traceable in PORTFOLIO_COPY.md."
          : `Missing metric tokens: ${missingMetricTokens.join(", ") || "none"}; Missing non-numeric claims: ${nonNumericClaimFailures.join(" | ") || "none"}`
    },
    {
      id: "metric-token-integrity",
      category: "Metric Accuracy",
      title: "Numeric tokens from claims are preserved",
      passed: missingMetricTokens.length === 0,
      detail:
        missingMetricTokens.length === 0
          ? "All numeric tokens from claims are preserved."
          : `Missing numeric tokens: ${missingMetricTokens.join(", ")}`
    },
    {
      id: "seo-wordpress-scope",
      category: "Validation Rules",
      title: "SEO and WordPress remain supporting-only",
      passed:
        supportNames.includes("on-page seo") &&
        supportNames.includes("wordpress") &&
        !seoWordpressOutsideSupporting,
      detail: "SEO and WordPress should only appear in supporting skills, not as core service positioning."
    },
    {
      id: "seo-metadata",
      category: "SEO",
      title: "SEO metadata fields are complete",
      passed:
        content.seo.title.trim().length > 0 &&
        content.seo.meta_description.trim().length > 50 &&
        content.seo.short_bio.trim().length > 30,
      detail: "Title, meta description, and short bio must be populated."
    },
    {
      id: "cta-presence",
      category: "Accessibility",
      title: "CTA includes at least three actionable links",
      passed: content.cta.links.length >= 3,
      detail: "CTA should provide direct paths for recruiter/client action."
    },
    {
      id: "performance-shape",
      category: "Performance",
      title: "Project list is data-driven and finite",
      passed: content.projects.length > 0 && content.projects.length <= 12,
      detail: "Dynamic rendering should remain efficient for static generation."
    },
    {
      id: "validation-rules-source",
      category: "Validation Rules",
      title: "Validation rules are discoverable in markdown source",
      passed:
        plainMarkdown.includes("validation") ||
        plainMarkdown.includes("positioning test") ||
        plainMarkdown.includes("proof test"),
      detail: "PORTFOLIO_COPY.md should expose or imply validation requirements."
    }
  ];

  return results;
}

export function summarizeValidation(results: ValidationResult[]): {
  passed: number;
  failed: number;
  ok: boolean;
} {
  const passed = results.filter((result) => result.passed).length;
  const failed = results.length - passed;
  return {
    passed,
    failed,
    ok: failed === 0
  };
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9+\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function extractAnchors(value: string): string[] {
  const stopWords = new Set([
    "project",
    "reported",
    "features",
    "with",
    "and",
    "the",
    "for",
    "that",
    "this",
    "from",
    "were",
    "not",
    "into",
    "using",
    "under"
  ]);

  const words = normalizeText(value)
    .split(" ")
    .filter((word) => word.length >= 4 && !stopWords.has(word));

  return Array.from(new Set(words));
}
