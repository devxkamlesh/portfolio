import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-[min(1120px,92vw)] items-center justify-center py-16">
      <section className="w-full max-w-xl rounded-2xl border border-line bg-[color:var(--surface)] p-6 text-center shadow-glass">
        <h1 className="text-2xl font-display font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-muted">
          The requested page does not exist. Return to the portfolio homepage.
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accentStrong"
        >
          Go home
        </Link>
      </section>
    </main>
  );
}
