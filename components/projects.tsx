import { ArrowUpRight, Code, Server } from 'lucide-react'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="scroll-mt-16">
      <h2
        id="proyectos-title"
        className="mb-6 font-mono text-sm uppercase tracking-widest text-primary"
      >
        Proyectos
      </h2>
      <ul className="flex flex-col gap-5">
        {projects.map((project) => (
          <li key={project.title}>
            <article className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir demo de ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                )}
              </div>

              <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-col gap-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="size-4" /> Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <Code className="size-4" /> Código
                  </a>
                )}
                {project.apiUrl && (
                  <a
                    href={project.apiUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Server className="size-4" /> API
                  </a>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
