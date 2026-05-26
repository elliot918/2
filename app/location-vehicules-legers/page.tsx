import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location de Véhicules Légers',
  description:
    'Location de véhicules légers spécialisés pour le transport d'équidés — van, camionnette, remorque — avec ou sans chauffeur.',
}

const vehicles = [
  {
    icon: '🚐',
    title: 'Van équestre',
    description: 'Idéal pour 1 à 2 chevaux. Confort et sécurité optimaux.',
  },
  {
    icon: '🚚',
    title: 'Camionnette avec remorque',
    description: 'Solution polyvalente pour vos besoins ponctuels.',
  },
  {
    icon: '🛻',
    title: 'Véhicule léger plateau',
    description: 'Pour les petits équidés et le matériel.',
  },
]

const advantages = [
  'Permis B suffisant selon véhicule',
  'Flexibilité totale sur les horaires',
  'Disponible à la journée, au week-end ou à la semaine',
  'Option chauffeur disponible',
]

export default function LocationVehiculesLegers() {
  return (
    <main className="bg-[#f7f4ef]">
      <HeroSection
        title="Location de Véhicules Légers"
        subtitle="Vans, camionnettes et véhicules spécialisés — avec ou sans chauffeur, à la journée ou plus"
        imageUrl="https://images.unsplash.com/photo-1566435809256-d1f6a72e4a9c?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Van pour transport de chevaux"
        height="large"
      />

      {/* Nos véhicules légers */}
      <AnimatedSection className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#1b3a2d] md:text-4xl"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Nos véhicules légers
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{vehicle.icon}</div>
                <h3
                  className="mb-3 text-xl font-semibold text-[#1b3a2d]"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  {vehicle.title}
                </h3>
                <p className="leading-relaxed text-[#6b7280]">
                  {vehicle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Avantages */}
      <AnimatedSection className="py-20 px-4" delay={0.1}>
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-10 text-center text-3xl font-bold text-[#1b3a2d] md:text-4xl"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Avantages
          </h2>
          <ul className="space-y-4">
            {advantages.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#c8a84b] text-xs font-bold text-white">
                  ✓
                </span>
                <span className="text-[#1a1a1a]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.15}>
        <div className="bg-[#1b3a2d] py-20 px-4 text-center">
          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Besoin d&apos;un véhicule léger ?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Contactez-nous pour vérifier la disponibilité et obtenir un devis
            personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services-devis"
              className="rounded-full bg-[#c8a84b] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#b8983b]"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#1b3a2d]"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
