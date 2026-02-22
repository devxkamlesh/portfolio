export default function Loading() {
  return (
    <main className="mx-auto w-[min(1120px,92vw)] py-14 sm:py-16" aria-busy="true" aria-live="polite">
      <section className="loading-shell">
        <div className="loading-orb loading-orb-a" aria-hidden />
        <div className="loading-orb loading-orb-b" aria-hidden />

        <div className="relative z-10 space-y-5">
          <div className="loading-line h-6 w-32" />
          <div className="loading-line h-11 w-[min(760px,95%)] rounded-lg" />
          <div className="loading-line h-5 w-[min(680px,90%)]" />

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div className="loading-block h-48 sm:h-52" />
            <div className="loading-block h-48 sm:h-52" />
          </div>

          <div className="space-y-3 pt-1">
            <div className="loading-line h-4 w-full" />
            <div className="loading-line h-4 w-11/12" />
            <div className="loading-line h-4 w-10/12" />
          </div>

          <div className="loading-progress" />
        </div>
      </section>
    </main>
  );
}
