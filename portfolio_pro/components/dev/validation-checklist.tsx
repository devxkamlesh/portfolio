import type { ValidationResult } from "@/lib/types";

type ValidationChecklistProps = {
  results: ValidationResult[];
};

const categoryOrder: ValidationResult["category"][] = [
  "SEO",
  "Accessibility",
  "Performance",
  "Consistency",
  "Metric Accuracy",
  "Validation Rules"
];

export function ValidationChecklist({ results }: ValidationChecklistProps) {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: results.filter((result) => result.category === category)
    }))
    .filter((group) => group.items.length > 0);

  return (
    <aside
      aria-label="Development validation checklist"
      className="mx-auto mt-8 w-[min(1120px,92vw)] rounded-2xl border border-line bg-[color:var(--surface-strong)] p-4 text-sm shadow-glass"
    >
      <h2 className="text-base font-display font-semibold">Dev Validation Checklist</h2>
      <p className="mt-1 text-muted">
        Visible in development mode to enforce metric integrity and portfolio consistency rules.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {grouped.map((group) => (
          <section key={group.category} className="rounded-xl border border-line/70 bg-[color:var(--surface-soft)] p-3">
            <h3 className="text-sm font-semibold">{group.category}</h3>
            <ul className="mt-2 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-lg border border-line/60 bg-[color:var(--surface-strong)] p-2"
                >
                  <p className={`font-medium ${item.passed ? "text-green-700" : "text-red-700"}`}>
                    {item.passed ? "PASS" : "FAIL"} - {item.title}
                  </p>
                  <p className="mt-1 text-[0.78rem] text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}
