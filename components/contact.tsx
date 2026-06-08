import { Code, Link as LinkIcon, Mail, MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/lib/data'

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-16">
      <h2
        id="contacto-title"
        className="mb-4 font-mono text-sm uppercase tracking-widest text-primary"
      >
        Contacto
      </h2>
      <p className="mb-6 leading-relaxed text-muted-foreground text-pretty">
        ¿Te interesa mi perfil o querés charlar sobre una oportunidad? Estoy
        disponible y respondo rápido.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {[
          { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
          {
            icon: Phone,
            label: contact.phone,
            href: `tel:${contact.phone.replace(/\s/g, '')}`,
          },
          { icon: LinkIcon, label: 'LinkedIn', href: contact.linkedin },
          { icon: Code, label: 'GitHub', href: contact.github },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <item.icon className="size-4 text-primary" />
              <span className="truncate">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-lg border border-border bg-card p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
          <MessageCircle className="size-4 shrink-0 text-primary" />
          <span>Escribime por WhatsApp</span>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
          <div
            role="img"
            aria-label="Código QR para contactar a Gastón Estévez por WhatsApp"
            className="h-44 w-44 shrink-0 rounded-lg bg-white bg-no-repeat"
            style={{
              backgroundImage: 'url(/whatsapp-qr.jpg)',
              backgroundSize: '235%',
              backgroundPosition: 'center 50%',
            }}
          />
          <p className="text-center text-sm leading-relaxed text-muted-foreground text-pretty sm:text-left">
            Escaneá este código con la cámara de WhatsApp para abrir un chat
            conmigo al instante.
          </p>
        </div>
      </div>
    </section>
  )
}
