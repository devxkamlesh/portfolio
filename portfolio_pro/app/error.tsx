"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-[min(1120px,92vw)] items-center justify-center py-16">
      <section
        aria-labelledby="error-title"
        className="w-full max-w-2xl rounded-2xl border border-red-400/40 bg-red-500/10 p-6 backdrop-blur-sm"
      >
        <h1 id="error-title" className="text-2xl font-display font-semibold text-ink">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm text-muted">
          The page could not load correctly. Try again, and if this persists, inspect the server logs.
        </p>
        <p className="mt-2 rounded-md bg-[color:var(--surface-strong)] p-3 text-xs text-ink/80">
          Error: {error.message}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-4 rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
        >
          Retry
        </button>
      </section>
    </main>
  );
}
