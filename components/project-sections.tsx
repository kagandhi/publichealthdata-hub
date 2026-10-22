import { Building2, Landmark, MapPin, Search } from 'lucide-react'

const portals = [
  {
    name: 'Boston Public Health Commission',
    level: 'Municipal',
    icon: Building2,
  },
  {
    name: 'Michigan Department of Health',
    level: 'State',
    icon: Landmark,
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-ring">{children}</p>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-8 border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-20 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <SectionLabel>What it is</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">
            One directory for public health data
          </h2>
        </div>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          Public Health Data Hub is a centralized directory that connects researchers to public
          health data portals across the US, bringing municipal and state sources together in a
          single place.
        </p>
      </div>
    </section>
  )
}

export function PortalsSection() {
  return (
    <section id="portals" className="scroll-mt-8 border-b border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionLabel>Portals included</SectionLabel>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">
          Municipal and state sources
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {portals.map((portal) => (
            <li
              key={portal.name}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <portal.icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">{portal.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {portal.level} health data portal
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section id="why" className="scroll-mt-8">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-8 rounded-xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:gap-12 md:p-12">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
            <Search className="size-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Why it matters
            </p>
            <h2 className="mt-3 text-balance font-serif text-2xl font-semibold leading-snug md:text-3xl">
              Makes municipal and state health data easy to find in one place.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
