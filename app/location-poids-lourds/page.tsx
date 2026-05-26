import type { Metadata } from 'next'
import { Truck, CheckCircle, UserCheck, Key } from 'lucide-react'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Location de Poids Lourds',
  description:
    'Location de poids lourds spécialisés transport équestre, avec ou sans chauffeur. Véhicules adaptés au transport de chevaux disponibles en France.',
}

const vehicules = [
  {
    title: 'Semi-remorque équestre',
    icon: '🚛',
    specs: [
      'Longueur utile : 13,6 m',
      'Capacité : jusqu\'à 12 chevaux',
      'PTAC : 44 tonnes',
      'Permis requis : CE',
    ],
    description:
      "Idéal pour les grands déplacements collectifs ou les courses de haut niveau. Aménagement intérieur modulable avec séparations individuelles.",
  },
  {
    title: 'Camion bétaillère',
    icon: '🚚',
    specs: [
      'Longueur utile : 7,5 m',
      'Capacité : jusqu\'à 6 chevaux',
      'PTAC : 19 tonnes',
      'Permis requis : C',
    ],
    description:
      "Solution polyvalente pour les liaisons régionales. Plancher antidérapant, ventilation naturelle renforcée, accès rampe arrière.",
  },
  {
    title: 'Camion plateau / van',
    icon: '🚐',
    specs: [
      'Longueur utile : 4,5 m',
      'Capacité : 2 à 3 chevaux',
      'PTAC : 7,5 tonnes',
      'Permis requis : B (selon PTAC)',
    ],
    description:
      "Parfait pour les courts trajets ou les propriétaires souhaitant conduire eux-mêmes. Maniable et facile à stationner.",
  },
]

const withDriver = [
  'Chauffeur professionnel qualifié transport équestre',
  'Connaissance approfondie du bien-être animal',
  'Conduite souple adaptée au confort des chevaux',
  'Prise en charge des documents de transport',
  'Disponible 7j/7 sur réservation',
]

const withoutDriver = [
  'Flexibilité totale sur vos horaires',
  'Tarif réduit à la journée ou à la semaine',
  'Formation de prise en main incluse',
  'Assistance téléphonique 24h/24',
  'Kilométrage illimité selon formule',
]

export default function LocationPoidsLourdsPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroSection
        title="Location de Poids Lourds"
        subtitle="Véhicules spécialisés transport équestre, disponibles avec ou sans chauffeur"
        imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c5c2bb4a?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Semi-remorque sur autoroute"
        height="large"
      />

      {/* ── 2. Nos véhicules ── */}
      <section className="bg-[#f7f4ef] py-20 px-4">
        <AnimatedSection className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Notre flotte
            </span>
            <h2
              className="text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Nos véhicules
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#6b7280]">
              Tous nos véhicules sont régulièrement entretenus et spécifiquement
              aménagés pour le transport d&apos;équidés.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {vehicules.map((v) => (
              <div
                key={v.title}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                {/* Icon header */}
                <div className="flex items-center justify-center bg-[#1b3a2d] py-10 text-6xl">
                  {v.icon}
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3
                    className="mb-3 text-xl font-bold text-[#1b3a2d]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {v.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">
                    {v.description}
                  </p>

                  {/* Specs table */}
                  <div className="space-y-1.5 border-t border-[#e2ddd5] pt-4">
                    {v.specs.map((s) => (
                      <div
                        key={s}
                        className="flex items-center gap-2 text-sm text-[#1a1a1a]"
                      >
                        <Truck className="h-3.5 w-3.5 flex-shrink-0 text-[#c8a84b]" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── 3. Avec ou sans chauffeur ── */}
      <section className="bg-white py-20 px-4">
        <AnimatedSection className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Selon vos besoins
            </span>
            <h2
              className="text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Avec ou sans chauffeur
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Avec chauffeur */}
            <div className="rounded-2xl border-2 border-[#1b3a2d] bg-[#f7f4ef] p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b3a2d] text-white">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#1b3a2d]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Avec chauffeur
                </h3>
              </div>
              <p className="mb-6 text-sm text-[#6b7280]">
                La solution tout-inclus : vous vous occupez de vos chevaux, nous
                nous chargeons de la conduite et de la logistique.
              </p>
              <ul className="space-y-3">
                {withDriver.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1b3a2d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sans chauffeur */}
            <div className="rounded-2xl border-2 border-[#c8a84b] bg-[#f7f4ef] p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8a84b] text-white">
                  <Key className="h-6 w-6" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#1b3a2d]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Sans chauffeur
                </h3>
              </div>
              <p className="mb-6 text-sm text-[#6b7280]">
                Si vous disposez du permis requis, louez notre véhicule et
                organisez votre transport en toute liberté.
              </p>
              <ul className="space-y-3">
                {withoutDriver.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c8a84b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
