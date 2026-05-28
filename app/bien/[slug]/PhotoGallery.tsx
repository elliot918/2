import Image from 'next/image'

interface Props {
  images: string[]
  name: string
}

export default function PhotoGallery({ images, name }: Props) {
  if (images.length <= 1) return null

  // Show up to 9 photos: first photo spans 2 rows, rest fill a grid
  const shown = images.slice(1, 10)

  return (
    <section style={{ backgroundColor: '#F7F3EE', padding: '0 1.5rem 5rem' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-manrope), sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#B9965A',
          marginBottom: '1.5rem',
        }}>
          Galerie
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '260px',
          gap: '8px',
        }}>
          {/* First photo — spans 2 columns + 2 rows */}
          <div style={{ gridColumn: '1 / 3', gridRow: '1 / 3', position: 'relative', overflow: 'hidden' }}>
            <Image
              src={images[1]}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          {/* Remaining photos fill the right column and below */}
          {shown.slice(0, 8).map((url, i) => (
            <div key={url} style={{ position: 'relative', overflow: 'hidden' }}>
              <Image
                src={url}
                alt={`${name} — photo ${i + 2}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
