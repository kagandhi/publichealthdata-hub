import { ArrowUpRight, Building2, Flag, Landmark, MapPin, Search } from 'lucide-react'

type Level = 'Municipal' | 'County' | 'State' | 'Federal'

type Portal = {
  name: string
  location: string
  level: Level
  url: string
}

const levelIcons = {
  Municipal: Building2,
  County: MapPin,
  State: Landmark,
  Federal: Flag,
} satisfies Record<Level, typeof Building2>

const portalGroups: { region: string; portals: Portal[] }[] = [
  {
    region: 'Massachusetts',
    portals: [
      {
        name: 'Boston Public Health Commission',
        location: 'Boston, MA',
        level: 'Municipal',
        url: 'https://www.bphc.org',
      },
    ],
  },
  {
    region: 'Michigan',
    portals: [
      {
        name: 'Michigan Department of Health',
        location: 'Michigan',
        level: 'State',
        url: 'https://www.michigan.gov/mdhhs',
      },
    ],
  },
  {
    region: 'Illinois',
    portals: [
      {
        name: 'Illinois Department of Public Health — Data & Statistics',
        location: 'Illinois',
        level: 'State',
        url: 'https://dph.illinois.gov/data-statistics.html',
      },
      {
        name: 'Chicago Health Atlas',
        location: 'Chicago, IL',
        level: 'Municipal',
        url: 'https://chicagohealthatlas.org',
      },
      {
        name: 'City of Chicago Data Portal',
        location: 'Chicago, IL',
        level: 'Municipal',
        url: 'https://data.cityofchicago.org',
      },
    ],
  },
  {
    region: 'New York City',
    portals: [
      {
        name: 'NYC Environment & Health Data Portal',
        location: 'New York, NY',
        level: 'Municipal',
        url: 'https://a816-dohbesp.nyc.gov/IndicatorPublic/',
      },
      {
        name: 'NYC EpiQuery',
        location: 'New York, NY',
        level: 'Municipal',
        url: 'https://a816-health.nyc.gov/hdi/epiquery/',
      },
    ],
  },
  {
    region: 'Other US cities',
    portals: [
      {
        name: 'Philadelphia Department of Public Health',
        location: 'Philadelphia, PA',
        level: 'Municipal',
        url: 'https://www.phila.gov/departments/department-of-public-health/',
      },
      {
        name: 'San Francisco Department of Public Health',
        location: 'San Francisco, CA',
        level: 'Municipal',
        url: 'https://www.sf.gov/departments/department-public-health',
      },
      {
        name: 'Los Angeles County Public Health — Epidemiology',
        location: 'Los Angeles County, CA',
        level: 'County',
        url: 'http://publichealth.lacounty.gov/epi/',
      },
      {
        name: 'Public Health — Seattle & King County Data & Reports',
        location: 'Seattle & King County, WA',
        level: 'County',
        url: 'https://kingcounty.gov/en/dept/dph/about-king-county/about-public-health/data-reports',
      },
    ],
  },
  {
    region: 'National',
    portals: [
      {
        name: 'CDC Data Portal',
        location: 'United States',
        level: 'Federal',
        url: 'https://data.cdc.gov',
      },
      {
        name: 'HealthData.gov',
        location: 'United States',
        level: 'Federal',
        url: 'https://healthdata.gov',
      },
    ],
  },
]

const portalCount = portalGroups.reduce((total, group) => total + group.portals.length, 0)

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
        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-3xl font-semibold text-primary">
            Municipal and state sources
          </h2>
          <p className="text-sm text-muted-foreground">
            {portalCount} portals across {portalGroups.length} regions
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {portalGroups.map((group) => (
            <div key={group.region}>
              <h3 className="border-b border-border pb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                {group.region}
              </h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.portals.map((portal) => {
                  const Icon = levelIcons[portal.level]
                  return (
                    <li key={portal.url}>
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold leading-snug text-card-foreground group-hover:text-primary">
                            {portal.name}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </p>
                          <p className="mt-1.5 text-sm text-muted-foreground">
                            {portal.location} · {portal.level}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
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
