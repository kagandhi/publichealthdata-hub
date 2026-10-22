import { Hero } from '@/components/hero'
import { AboutSection, PortalsSection, WhySection } from '@/components/project-sections'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <PortalsSection />
        <WhySection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          Public Health Data Hub
        </div>
      </footer>
    </>
  )
}
