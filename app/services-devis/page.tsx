import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Services & Devis',
  description:
    'Demandez votre devis personnalisé pour transport de chevaux ou location de véhicules. Réponse rapide de l'équipe TRANS'HORSES.',
}

const engagements = [
  {
    icon: '⏱',
    title: 'Réponse sous 24h',
    description: 'Nous accusons réception et vous revenons rapidement.',
  },
  {
    icon: '📋',
    title: 'Devis gratuit et sans engagement',
    description: 'Aucun frais, aucune obligation de votre côté.',
  },
  {
    icon: '🤝',
    title: 'Accompagnement personnalisé',
    description: 'Un interlocuteur dédié pour chaque demande.',
  },
]

export default function ServicesDevis() {
  return (
    <main className="bg-[#f7f4ef]">
      <HeroSection
        title="Services & Devis"
        subtitle="Décrivez votre besoin, nous vous répondons rapidement avec un devis sur mesure"
        imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Portrait de cheval"
        height="medium"
        ctas={[]}
      />

      {/* Form + Sidebar */}
      <AnimatedSection className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Quote form — takes 2/3 */}
            <div className="lg:col-span-2">
              <h2
                className="mb-8 text-2xl font-bold text-[#1b3a2d] md:text-3xl"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Votre demande de devis
              </h2>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <QuoteForm />
              </div>
            </div>

            {/* Contact sidebar — takes 1/3 */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <h3
                    className="mb-6 text-xl font-bold text-[#1b3a2d]"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    Besoin d&apos;aide&nbsp;?
                  </h3>

                  {/* Response badge */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1b3a2d]/10 px-4 py-2 text-sm font-medium text-[#1b3a2d]">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Réponse sous 24h
                  </div>

                  {/* Phone numbers */}
                  <div className="mb-4 space-y-3">
                    <a
                      href="tel:+33608233369"
                      className="flex items-center gap-3 text-[#1a1a1a] transition-colors hover:text-[#c8a84b]"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f7f4ef] text-lg">
                        📞
                      </span>
                      <span className="font-medium">06.08.23.33.69</span>
                    </a>
                    <a
                      href="tel:+33134763033"
                      className="flex items-center gap-3 text-[#1a1a1a] transition-colors hover:text-[#c8a84b]"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f7f4ef] text-lg">
                        📞
                      </span>
                      <span className="font-medium">01.34.76.30.33</span>
                    </a>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:mail@transhorses.com"
                    className="flex items-center gap-3 text-[#1a1a1a] transition-colors hover:text-[#c8a84b]"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f7f4ef] text-lg">
                      ✉️
                    </span>
                    <span className="font-medium">mail@transhorses.com</span>
                  </a>

                  {/* Map note */}
                  <div className="mt-6 border-t border-[#e2ddd5] pt-6">
                    <p className="flex items-start gap-2 text-sm text-[#6b7280]">
                      <span className="mt-0.5">📍</span>
                      <span>
                        Dammartin-en-Serve (78) &amp; Orange (84)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Engagements */}
      <AnimatedSection className="py-20 px-4" delay={0.1}>
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#1b3a2d] md:text-4xl"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Nos engagements
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {engagements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3
                  className="mb-3 text-lg font-semibold text-[#1b3a2d]"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b7280]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
