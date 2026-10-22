import { Database } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#portals', label: 'Portals' },
  { href: '#why', label: 'Why it matters' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <Database className="size-5" aria-hidden="true" />
          <span>Public Health Data Hub</span>
        </a>
        <nav aria-label="Main">
          <ul className="hidden items-center gap-6 text-sm text-primary-foreground/80 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
