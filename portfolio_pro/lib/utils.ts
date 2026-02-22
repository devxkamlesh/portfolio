export function isExternalLink(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

export type LabeledLink = {
  label: string;
  value: string;
};

export function parseLabeledLink(raw: string): LabeledLink {
  const [first, ...rest] = raw.split(":");
  const label = first ?? "Link";
  return {
    label: label.trim(),
    value: rest.join(":").trim()
  };
}

export function extractNumericTokens(text: string): string[] {
  const matches = text.match(/\b\d[\d,]*(?:\+|%)?\b/g) ?? [];
  return Array.from(new Set(matches));
}
