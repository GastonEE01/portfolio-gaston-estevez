import { techStack } from '@/lib/data'

export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="scroll-mt-16">
      <h2
        id="sobre-mi-title"
        className="mb-4 font-mono text-sm uppercase tracking-widest text-primary lg:hidden"
      >
        Sobre mí
      </h2>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          Soy <span className="text-foreground">Técnico en Desarrollo Web</span>{' '}
          , con formación en desarrollo de aplicaciones web y experiencia práctica mediante proyectos académicos y personales.
        </p>
        <p>
         Tengo interés en el desarrollo Full Stack, trabajando tanto en la interfaz de usuario como en APIs, bases de datos y despliegue de aplicaciones.
        </p>
        <p>
          Actualmente continúo fortaleciendo mis conocimientos a través de proyectos propios utilizando tecnologías como React, .NET y SQL Server, aplicando buenas prácticas de desarrollo y explorando nuevas herramientas para seguir creciendo profesionalmente.
        </p>
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-16">
      <h2
        id="stack-title"
        className="mb-6 font-mono text-sm uppercase tracking-widest text-primary"
      >
        Stack técnico
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {techStack.map((group) => (
          <div key={group.group}>
            <h3 className="mb-3 text-sm font-medium text-foreground">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
