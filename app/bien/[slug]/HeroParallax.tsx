import Image from 'next/image'

interface Props {
  imageUrl: string
  name: string
  location: string
  type: 'vente' | 'location'
}

/** Static full-screen hero — image + overlay + centred title. No GSAP. */
export default function HeroParallax({ imageUrl, name, location, type }: Props) {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background photo */}
      <Image
        src={imageUrl}
        alt={name}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(31,29,26,0.55)' }} />

      {/* Centred text */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 1.5rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-manrope), sans-serif',
          fontSize: '10px',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: '#D8C3A5',
          marginBottom: '1.25rem',
        }}>
          {location} · {type === 'vente' ? 'À vendre' : 'Location saisonnière'}
        </p>
        <h1 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
          color: '#ffffff',
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}>
          {name}
        </h1>
      </div>
    </section>
  )
}
