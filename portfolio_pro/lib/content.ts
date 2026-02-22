import { promises as fs } from "node:fs";
import path from "node:path";

import source from "@/data/PORTFOLIO_COPY.json";
import type { PortfolioContent } from "@/lib/types";

export const portfolioContent = source as PortfolioContent;

export async function loadMarkdownSource(): Promise<string> {
  const filePath = path.join(process.cwd(), "data", "PORTFOLIO_COPY.md");
  return fs.readFile(filePath, "utf8");
}
