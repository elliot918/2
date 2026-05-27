import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getPropertyBySlug,
  allProperties,
  venteProperties,
  locationProperties,
} from '@/lib/properties'
import PropertyCard from '@/components/PropertyCard'
import HeroParallax from './HeroParallax'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProperties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const p = getPropertyBySlug(slug)
  return {
    title: p?.name ?? 'Bien',
    description: p?.description ?? '',
  }
}

export default async function BienPage({ params }: PageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    notFound()
  }

  // Related properties: same type, exclude current
  const pool = property.type === 'vente' ? venteProperties : locationProperties
  const related = pool.filter((p) => p.slug !== property.slug).slice(0, 2)

  const stats = [
    { label: 'Surface', value: `${property.surface} m²` },
    { label: 'Pièces', value: `${property.rooms}` },
    ...(property.bedrooms ? [{ label: 'Chambres', value: `${property.bedrooms}` }] : []),
    ...(property.land
      ? [{ label: 'Terrain', value: `${property.land.toLocaleString('fr-FR')} m²` }]
      : []),
  ]

  return (
    <>
      {/* ── 1. Hero (client component for GSAP parallax) ── */}
      <HeroParallax
        imageUrl={property.imageUrl}
        name={property.name}
        location={property.location}
        type={property.type}
      />

      {/* ── 2. Details ── */}
      <section className="bg-[#F7F3EE] py-20 px-6">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-3 gap-16">
          {/* Left — 2/3 */}
          <div className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-light italic text-[#1F1D1A] mb-8"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              La propriété
            </h2>

            <p
              className="text-sm md:text-base text-[#6F7358] leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              {property.description}
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {property.features.map((f) => (
                <p
                  key={f}
                  className="text-sm text-[#1F1D1A] flex items-start gap-2"
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  <span className="text-[#B9965A] mt-0.5">·</span>
                  {f}
                </p>
              ))}
            </div>

            {/* Image gallery */}
            {property.images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-12">
                {property.images.map((src, i) => (
                  <div key={i} className="relative h-40 overflow-hidden">
                    <Image
                      src={src}
                      alt={`${property.name} — vue ${i + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 33vw, 25vw"
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right sidebar — 1/3 */}
          <div className="lg:sticky lg:top-8 self-start">
            {/* Price */}
            <p
              className="text-3xl md:text-4xl font-light text-[#B9965A] mb-8"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {property.priceDisplay}
            </p>

            {/* Key stats */}
            <div className="border-t border-[#D8C3A5]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between items-center py-3 border-b border-[#D8C3A5]"
                >
                  <span
                    className="text-xs uppercase tracking-widest text-[#6F7358]"
                    style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="text-sm text-[#1F1D1A] font-light"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contact" className="btn-primary text-center">
                Nous contacter pour ce bien
              </Link>
              <Link
                href="/estimation"
                className="text-xs tracking-widest uppercase text-[#6F7358] hover:text-[#B9965A] transition-colors text-center py-2"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Estimation de votre bien →
              </Link>
            </div>

            {/* Contact block */}
            <div className="mt-8 pt-8 border-t border-[#D8C3A5]">
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-[#B9965A] mb-3"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Contact
              </p>
              <p
                className="text-sm text-[#1F1D1A]"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                <a
                  href="tel:+33494564485"
                  className="block hover:text-[#B9965A] transition-colors mb-1"
                >
                  +33 (0)4 94 56 44 85
                </a>
                <a
                  href="mailto:barrys@lesbarrys.com"
                  className="block hover:text-[#B9965A] transition-colors"
                >
                  barrys@lesbarrys.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Autres biens ── */}
      {related.length > 0 && (
        <section className="bg-[#1F1D1A] py-24 px-6">
          <div className="max-w-[1440px] mx-auto">
            <h2
              className="text-4xl font-light italic text-white mb-12"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Autres biens
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((p, i) => (
                <PropertyCard key={p.slug} {...p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
