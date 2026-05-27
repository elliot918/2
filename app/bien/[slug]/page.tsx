import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPropertyBySlug, allProperties } from '@/lib/properties'
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

  // Specs line — only include defined values
  const specs = [
    `${property.surface} m²`,
    `${property.rooms} pièces`,
    property.bedrooms ? `${property.bedrooms} chambres` : null,
    property.land ? `terrain ${property.land.toLocaleString('fr-FR')} m²` : null,
  ].filter(Boolean) as string[]

  return (
    <>
      {/* ── 1. Hero photo — full width, 500 px ── */}
      <div style={{ width: '100%', height: '500px', position: 'relative', overflow: 'hidden' }}>
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          sizes="100vw"
        />
      </div>

      {/* ── 2. Content — ivory background ── */}
      <div style={{ backgroundColor: '#F7F3EE', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Location eyebrow */}
          <p style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#B9965A',
            marginBottom: '0.75rem',
          }}>
            {property.location} · {property.type === 'vente' ? 'À vendre' : 'Location saisonnière'}
          </p>

          {/* Name + Price row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
            <h1 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#1F1D1A',
              lineHeight: 1,
              margin: 0,
            }}>
              {property.name}
            </h1>
            <p style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: '#B9965A',
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              {property.priceDisplay}
            </p>
          </div>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #D8C3A5', margin: '1.5rem 0' }} />

          {/* Specs — one line */}
          <p style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            color: '#6F7358',
            textTransform: 'uppercase',
          }}>
            {specs.join(' · ')}
          </p>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #D8C3A5', margin: '1.5rem 0' }} />

          {/* Description */}
          <p style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.9375rem',
            lineHeight: 1.8,
            color: '#3a3835',
            maxWidth: '72ch',
          }}>
            {property.description}
          </p>

          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #D8C3A5', margin: '3rem 0 2rem' }} />

          {/* Contact form */}
          <p style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#B9965A',
            marginBottom: '1.75rem',
          }}>
            Nous contacter pour ce bien
          </p>
          <BienContactForm propertyName={property.name} />

        </div>
      </div>
    </>
  )
}
