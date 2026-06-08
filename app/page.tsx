import { Intro } from '@/components/intro'
import { About, Stack } from '@/components/about'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12 sm:px-10 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-12">
        <Intro />
        <div className="flex flex-col gap-16 pt-16 lg:w-1/2 lg:py-24">
          <About />
          <Stack />
          <Projects />
          <Contact />
          <footer className="border-t border-border pt-6 font-mono text-xs text-muted-foreground">
            Hecho con React, Next.js y Tailwind CSS · {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </main>
  )
}
