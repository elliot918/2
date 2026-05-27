import type { Metadata } from 'next'
import { CalendarDays, User, Users, Globe, Shield, Droplets, Star, Phone } from 'lucide-react'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Transport de Chevaux',
  description:
    "Transport professionnel de chevaux et équidés en France et à l'étranger. Liaisons hebdomadaires Normandie-Paris, Paris-Côte d'Azur. Groupage et trajets individuels disponibles.",
}

const prestations = [
  {
    icon: CalendarDays,
    title: 'Liaisons hebdomadaires',
    description:
      "Normandie ↔ Paris, Paris ↔ Côte d'Azur et bien d'autres liaisons régulières. Des départs programmés chaque semaine pour une planification sereine.",
  },
  {
    icon: User,
    title: 'Transport individuel',
    description:
      "Organisation d'un trajet sur mesure pour votre équidé, à la date qui vous convient. Un service dédié, flexible et attentionné.",
  },
  {
    icon: Users,
    title: 'Groupage',
    description:
      "Mutualisez les coûts en partageant un véhicule avec d'autres propriétaires. Une solution économique sans compromis sur la qualité.",
  },
  {
    icon: Globe,
    title: 'International',
    description:
      "Liaisons vers toute l'Europe et au-delà, avec gestion des documents douaniers. Nous coordonnons chaque étape pour vous.",
  },
]

const equipements = [
  {
    icon: Shield,
    title: 'Véhicules adaptés aux équidés',
    description:
      'Nos camions sont spécialement aménagés pour garantir confort et sécurité : revêtements antidérapants, ventilation optimale, cloisons amovibles.',
  },
  {
    icon: Droplets,
    title: 'Litière et eau fournis',
    description:
      "Votre cheval voyage avec tout le nécessaire : litière fraîche, eau à disposition, foin fourni à chaque étape selon la durée du trajet.",
  },
  {
    icon: Star,
    title: 'Chauffeurs expérimentés',
    description:
      "Nos conducteurs cumulent des années d'expérience dans le transport équestre. Ils savent gérer le stress animal et adapter leur conduite.",
  },
  {
    icon: Phone,
    title: 'Suivi de votre animal',
    description:
      'Vous êtes informé à chaque étape du trajet. Nous restons joignables à tout moment et vous contactons dès la livraison effectuée.',
  },
]

export default function TransportChevauxPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroSection
        title="Transport de Chevaux & Équidés"
        subtitle="Des solutions de transport adaptées à chaque besoin — du transport individuel au groupage hebdomadaire"
        imageUrl="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Cheval galopant en plein air"
        height="large"
      />

      {/* ── 2. Nos prestations ── */}
      <section className="bg-[#f7f4ef] py-20 px-4">
        <AnimatedSection className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Ce que nous proposons
            </span>
            <h2
              className="text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Nos prestations de transport
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {prestations.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="flex gap-5 rounded-2xl border-l-4 border-[#1b3a2d] bg-white p-6 shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f4ef] text-[#1b3a2d]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-xl font-semibold text-[#1b3a2d]"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6b7280]">
                      {p.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* ── 3. Nos équipements ── */}
      <section className="bg-white py-20 px-4">
        <AnimatedSection className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Matériel & savoir-faire
            </span>
            <h2
              className="text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Nos équipements
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipements.map((e) => {
              const Icon = e.icon
              return (
                <div
                  key={e.title}
                  className="rounded-2xl bg-[#f7f4ef] p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1b3a2d] text-[#c8a84b]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#1b3a2d]">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b7280]">
                    {e.description}
                  </p>
                </div>
              )
            })}
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
