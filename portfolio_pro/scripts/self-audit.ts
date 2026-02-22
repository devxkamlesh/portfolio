import { loadMarkdownSource, portfolioContent } from "../lib/content";
import { runContentValidation, summarizeValidation } from "../lib/validation";

async function main() {
  const markdown = await loadMarkdownSource();
  const results = runContentValidation(portfolioContent, markdown);
  const summary = summarizeValidation(results);

  console.log("Self Audit Report");
  console.log("=================");
  for (const result of results) {
    const status = result.passed ? "PASS" : "FAIL";
    console.log(`[${status}] [${result.category}] ${result.title}`);
    if (!result.passed) {
      console.log(`  -> ${result.detail}`);
    }
  }
  console.log("-----------------");
  console.log(`Passed: ${summary.passed}`);
  console.log(`Failed: ${summary.failed}`);

  if (!summary.ok) {
    process.exitCode = 1;
    return;
  }

  console.log("Audit complete: all checks passed.");
}

main().catch((error: unknown) => {
  console.error("Audit failed due to execution error:", error);
  process.exitCode = 1;
});
