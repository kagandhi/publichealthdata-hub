export function Hero() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
          Project overview
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">
          Public Health Data Hub
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          A centralized directory connecting researchers to public health data portals across the US.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#portals"
            className="rounded-md bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            See included portals
          </a>
          <a
            href="#why"
            className="rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            Why it matters
          </a>
        </div>
      </div>
    </section>
  )
}
