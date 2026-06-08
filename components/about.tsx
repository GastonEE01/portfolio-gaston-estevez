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
          formado en la universidad, apasionado por construir aplicaciones
          fullstack de punta a punta: desde la interfaz en React hasta la API en
          .NET y el despliegue en la nube.
        </p>
        <p>
          Para afianzar lo aprendido desarrollé{' '}
          <span className="text-foreground">tres proyectos personales</span>{' '}
          completos, cada uno con autenticación, base de datos e integraciones
          reales como pagos e inteligencia artificial. Me interesa escribir
          código prolijo, seguir buenas prácticas y seguir aprendiendo en
          equipo.
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
