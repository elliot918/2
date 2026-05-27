import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPropertyBySlug, allProperties } from '@/lib/properties'
import HeroParallax from './HeroParallax'
import BienContactForm from './BienContactForm'

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

  if (!property) notFound()

  const stats = [
    { label: 'Surface',  value: `${property.surface} m²` },
    { label: 'Pièces',   value: `${property.rooms}` },
    ...(property.bedrooms
      ? [{ label: 'Chambres', value: `${property.bedrooms}` }]
      : []),
    ...(property.land
      ? [{ label: 'Terrain', value: `${property.land.toLocaleString('fr-FR')} m²` }]
      : []),
  ]

  const serif   = 'var(--font-cormorant), Georgia, serif'
  const sans    = 'var(--font-manrope), sans-serif'
  const gold    = '#B9965A'
  const dark    = '#1F1D1A'
  const muted   = '#6F7358'
  const divider = '1px solid #D8C3A5'

  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroParallax
        imageUrl={property.imageUrl}
        name={property.name}
        location={property.location}
        type={property.type}
      />

      {/* ── 2. Main content — 2-col grid ── */}
      <section style={{ backgroundColor: '#F7F3EE', padding: '5rem 1.5rem' }}>
        <div
          className="grid lg:grid-cols-3"
          style={{ maxWidth: '1320px', margin: '0 auto', gap: '4rem' }}
        >

          {/* Left — description (2/3) */}
          <div className="lg:col-span-2">
            <h2 style={{
              fontFamily: serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              color: dark,
              marginBottom: '1.5rem',
            }}>
              La propriété
            </h2>
            <p style={{
              fontFamily: sans,
              fontSize: '0.9375rem',
              lineHeight: 1.85,
              color: '#4a4845',
              maxWidth: '64ch',
            }}>
              {property.description}
            </p>
          </div>

          {/* Right — price + stats (1/3) */}
          <div style={{ alignSelf: 'start' }}>

            {/* Price */}
            <p style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
              color: gold,
              marginBottom: '2rem',
              lineHeight: 1.1,
            }}>
              {property.priceDisplay}
            </p>

            {/* Stats rows */}
            <div style={{ borderTop: divider }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    borderBottom: divider,
                  }}
                >
                  <span style={{ fontFamily: sans, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: muted }}>
                    {s.label}
                  </span>
                  <span style={{ fontFamily: serif, fontSize: '1rem', fontWeight: 300, color: dark }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: divider }}>
              <p style={{ fontFamily: sans, fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: gold, marginBottom: '0.75rem' }}>
                Contact
              </p>
              <a href="tel:+33494564485" style={{ fontFamily: sans, fontSize: '0.875rem', color: dark, display: 'block', marginBottom: '0.25rem' }}>
                +33 (0)4 94 56 44 85
              </a>
              <a href="mailto:barrys@lesbarrys.com" style={{ fontFamily: sans, fontSize: '0.875rem', color: gold, display: 'block' }}>
                barrys@lesbarrys.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Contact form ── */}
      <section style={{ backgroundColor: '#F7F3EE', borderTop: divider, padding: '4rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: sans, fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: gold, marginBottom: '2rem' }}>
            Nous contacter pour ce bien
          </p>
          <BienContactForm propertyName={property.name} />
        </div>
      </section>
    </>
  )
}
