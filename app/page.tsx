import type { Metadata } from 'next'
import { Truck, Plane, Car, CheckCircle, ArrowRight } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import AnimatedSection from '@/components/AnimatedSection'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    "TRANS'HORSES : transport de chevaux en France et à l'étranger. Liaisons hebdomadaires Normandie-Paris, Paris-Côte d'Azur. Location de véhicules PL et VL avec ou sans chauffeur.",
}

const trustItems = [
  {
    title: 'Chauffeurs professionnels qualifiés',
    description:
      'Nos conducteurs sont formés au transport équestre et maîtrisent les exigences du bien-être animal lors de chaque trajet.',
  },
  {
    title: 'Organisation personnalisée',
    description:
      'Chaque demande est étudiée sur mesure : itinéraire, horaires, conditions de transport adaptées à votre équidé.',
  },
  {
    title: 'Trajets groupés ou individuels',
    description:
      'Profitez de nos liaisons régulières en groupage pour maîtriser vos coûts, ou optez pour un transport privatif.',
  },
  {
    title: 'Suivi et communication tout au long du trajet',
    description:
      'Nous vous tenons informé à chaque étape, de la prise en charge à la livraison de votre cheval.',
  },
]

const liaisons = [
  { label: 'Normandie', destination: 'Paris' },
  { label: 'Paris', destination: 'Côte d\'Azur' },
  { label: 'France', destination: 'Étranger' },
]

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroSection
        title="Transport de chevaux & location de véhicules spécialisés"
        subtitle="Liaisons hebdomadaires · Groupage · France & étranger — avec ou sans chauffeur"
        imageUrl="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Cheval galopant en liberté"
        ctas={[
          { label: 'Demander un devis', href: '/services-devis', variant: 'primary' },
          { label: 'Nous contacter', href: '/contact', variant: 'outline' },
        ]}
        height="full"
        badge="Depuis plus de 20 ans"
      />

      {/* ── 2. Nos services ── */}
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
              Nos services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<Truck className="h-6 w-6" />}
              title="Transport Routier"
              description="Liaisons hebdomadaires, groupage, trajets individuels. France et étranger."
              href="/transport-chevaux"
              imageUrl="https://images.unsplash.com/photo-1535440724399-15ca4f772090?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard
              icon={<Plane className="h-6 w-6" />}
              title="Aérien & Maritime"
              description="Transport international de chevaux par avion ou bateau, avec toutes les formalités."
              href="/aerien-maritime"
              imageUrl="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard
              icon={<Car className="h-6 w-6" />}
              title="Location PL & VL"
              description="Location de poids lourds et véhicules légers, avec ou sans chauffeur."
              href="/location-poids-lourds"
              imageUrl="https://images.unsplash.com/photo-1499147463149-adc471bbc639?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ── 3. Liaisons régulières ── */}
      <section className="bg-[#1b3a2d] py-16 px-4">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
            Hebdomadaires
          </span>
          <h2
            className="mb-10 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Nos liaisons régulières
          </h2>

          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
            {liaisons.map((l, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-sm">
                  <span className="flex items-center gap-2 text-lg font-semibold text-white">
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-[#c8a84b]" />
                    {l.destination}
                  </span>
                </div>
                {i < liaisons.length - 1 && (
                  <span className="hidden text-white/30 md:block">|</span>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── 4. Pourquoi nous choisir ── */}
      <section className="bg-[#f7f4ef] py-20 px-4">
        <AnimatedSection className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Notre engagement
            </span>
            <h2
              className="text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Pourquoi nous choisir
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-7 w-7 text-[#c8a84b]" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold text-[#1b3a2d]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b7280]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── 5. Demande rapide ── */}
      <section className="bg-white py-20 px-4">
        <AnimatedSection className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8a84b]">
              Gratuit & sans engagement
            </span>
            <h2
              className="text-4xl font-bold text-[#1b3a2d] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Demande rapide
            </h2>
            <p className="mt-4 text-[#6b7280]">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans
              les plus brefs délais.
            </p>
          </div>

          <QuoteForm />
        </AnimatedSection>
      </section>
    </>
  )
}
