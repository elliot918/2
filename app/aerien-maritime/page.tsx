import type { Metadata } from 'next'
import { Plane, Ship, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Transport Aérien & Maritime',
  description:
    'Transport international de chevaux par avion ou par bateau. Gestion complète des formalités sanitaires, douanières et logistiques pour votre équidé.',
}

const modeCards = [
  {
    icon: Plane,
    title: 'Transport Aérien',
    badge: 'Longue distance & urgence',
    description:
      "Transport par avion pour les déplacements longue distance ou urgents. Containers spécialisés équins (stalls), assistance vétérinaire possible à bord. Idéal pour les compétitions internationales, ventes ou transferts de reproducteurs.",
    highlights: [
      'Stalls homologués IATA',
      'Assistance vétérinaire possible',
      'Départs depuis les principaux aéroports européens',
    ],
  },
  {
    icon: Ship,
    title: 'Transport Maritime',
    badge: 'Voyages longue durée',
    description:
      "Transport par bateau pour certaines destinations, adapté aux longs voyages. Conditions optimales pour le bien-être animal : stabulation dédiée, alimentation et hydratation assurées, personnel qualifié à bord.",
    highlights: [
      'Personnel dédié à bord',
      'Destinations hors-Europe disponibles',
      'Solution économique pour les grands groupes',
    ],
  },
]

const gestions = [
  'Réservation du fret aérien ou maritime',
  'Documents sanitaires et passeports équins',
  'Formalités douanières import/export',
  'Coordination avec les agents aux points d\'arrivée',
  'Transport terrestre jusqu\'à l\'aéroport/port',
  'Suivi en temps réel',
]

export default function AerienMaritimePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroSection
        title="Transport Aérien & Maritime"
        subtitle="Organisation complète de vos transports internationaux — formalités, logistique et accompagnement inclus"
        imageUrl="https://images.unsplash.com/photo-1436891620584-47fd0e3e04a1?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Avion cargo sur piste"
        height="large"
      />

      {/* ── 2. Intro + 2 modes ── */}
      <section className="bg-[#f7f4ef] py-20 px-4">
        <AnimatedSection className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Deux modes de transport
            </span>
            <h2
              className="mb-5 text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Nos solutions internationales
            </h2>
            <p className="mx-auto max-w-2xl text-[#6b7280]">
              Que vous ayez besoin d&apos;un transfert rapide par avion ou
              d&apos;un acheminement maritime vers des destinations lointaines,
              TRANS&apos;HORSES gère l&apos;intégralité de votre dossier, de la
              préparation administrative à la livraison.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {modeCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  {/* Coloured header */}
                  <div className="bg-[#1b3a2d] px-6 py-8 text-white">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c8a84b]">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-widest text-[#c8a84b]">
                          {card.badge}
                        </span>
                        <h3
                          className="text-2xl font-bold"
                          style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="mb-5 text-sm leading-relaxed text-[#6b7280]">
                      {card.description}
                    </p>
                    <ul className="space-y-2">
                      {card.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c8a84b]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* ── 3. Ce que nous gérons ── */}
      <section className="bg-white py-20 px-4">
        <AnimatedSection className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Service clé en main
            </span>
            <h2
              className="text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ce que nous gérons pour vous
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#6b7280]">
              Pas de démarche à effectuer de votre côté : nous prenons en charge
              l&apos;ensemble du processus.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {gestions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#e2ddd5] bg-[#f7f4ef] px-5 py-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1b3a2d]" />
                <span className="text-sm font-medium text-[#1a1a1a]">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── 4. CTA ── */}
      <section className="bg-[#1b3a2d] py-20 px-4">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Besoin d&apos;un transport ?
          </h2>
          <p className="mb-10 text-lg text-white/70">
            Contactez-nous pour un devis personnalisé adapté à votre situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services-devis"
              className="rounded-full bg-[#c8a84b] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#b8983b]"
            >
              Demander un devis
            </Link>
            <a
              href="tel:0608233369"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#1b3a2d]"
            >
              Nous appeler : 06.08.23.33.69
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
