import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { contact } from '@/lib/data'

export function Intro() {
  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:justify-between lg:py-24">
      <div>
        <p className="font-mono text-sm text-primary">{}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
          Gastón Estévez
        </h1>
        <h2 className="mt-3 text-lg font-medium text-foreground sm:text-xl">
          Técnico en Desarrollo Web
        </h2>
        <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground text-pretty">
          Desarrollador Full Stack con experiencia práctica en .NET, React y SQL Server. He desarrollado proyectos personales y académicos enfocados en APIs REST, autenticación JWT, despliegue en Azure y Vercel. Busco mi primera experiencia profesional para seguir creciendo y aportar valor dentro de un equipo de desarrollo.
        </p>

        <nav aria-label="Navegación interna" className="mt-10 hidden lg:block">
          <ul className="flex flex-col gap-4 font-mono text-sm">
            {[
              { href: '#sobre-mi', label: 'Sobre mí' },
              { href: '#stack', label: 'Stack técnico' },
              { href: '#proyectos', label: 'Proyectos' },
              { href: '#formacion', label: 'Formación' },
              { href: '#contacto', label: 'Contacto' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="h-px w-8 bg-border transition-all group-hover:w-12 group-hover:bg-primary" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
       
        <a
          href="/CV Estevez Gaston 2026.pdf"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Descargar CV <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-primary"
        >
          <Mail className="size-4" /> {contact.email}
        </a>
        <a
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-primary"
        >
          <Phone className="size-4" /> {contact.phone}
        </a>
      </div>
    </header>
  )
}
