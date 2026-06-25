import { techStack } from '@/lib/data'

export function Training() {
  return (
    <section id="formacion" aria-labelledby="formacion-title" className="scroll-mt-16 lg:scroll-mt-24">
      <h2
        id="formacion-title"
        className="mb-6 font-mono text-sm uppercase tracking-widest text-primary"
      >
        Formación e Idiomas
      </h2>
      
      <div className="space-y-6">
        {/* Educación Superior - UNLaM */}
        <article className="grid sm:grid-cols-8 sm:gap-4">
          <header className="sm:col-span-2 mb-0.5 sm:mb-0">
            <time className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              2021 — 2025
            </time>
          </header>
          <div className="sm:col-span-6">
            <h3 className="font-semibold text-base text-foreground leading-none">
              UNLaM
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Tecnicatura en Desarrollo Web
            </p>
          </div>
        </article>

        {/* Educación Secundaria - EET n°6 */}
        <article className="grid sm:grid-cols-8 sm:gap-4">
          <header className="sm:col-span-2 mb-0.5 sm:mb-0">
            <time className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              2013 — 2019
            </time>
          </header>
          <div className="sm:col-span-6">
            <h3 className="font-semibold text-base text-foreground leading-none">
              EET n°6
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Tecnicatura en Electrónica
            </p>
          </div>
        </article>

        {/* Idioma - Inglés */}
        <article className="grid sm:grid-cols-8 sm:gap-4">
          <header className="sm:col-span-2 mb-0.5 sm:mb-0">
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Idioma
            </span>
          </header>
          <div className="sm:col-span-6">
            <h3 className="font-semibold text-base text-foreground leading-none">
              Inglés
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Nivel Inicial (A2) / Lectura técnica
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}