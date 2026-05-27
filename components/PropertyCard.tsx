'use client'

import Link from 'next/link'
import Image from 'next/image'

interface PropertyCardProps {
  slug: string
  name: string
  location: string
  surface: number
  rooms: number
  price: number
  priceDisplay: string
  type: 'vente' | 'location'
  imageUrl: string
  index?: number
}

export default function PropertyCard({
  slug,
  name,
  location,
  surface,
  rooms,
  priceDisplay,
  imageUrl,
}: PropertyCardProps) {
  return (
    <Link
      href={`/bien/${slug}`}
      className="group relative block overflow-hidden bg-white"
      data-image={imageUrl}
      onMouseEnter={() => {
        window.dispatchEvent(
          new CustomEvent('property-hover', {
            detail: { imageUrl, active: true },
          })
        )
      }}
      onMouseLeave={() => {
        window.dispatchEvent(
          new CustomEvent('property-hover', {
            detail: { imageUrl, active: false },
          })
        )
      }}
    >
      {/* Image section */}
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Info section */}
      <div className="p-6 bg-[#F7F3EE]">
        {/* Location badge */}
        <p
          className="text-[10px] tracking-[0.3em] uppercase text-[#6F7358] mb-2"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          {location}
        </p>

        {/* Name */}
        <h3
          className="text-2xl font-light text-[#1F1D1A]"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {name}
        </h3>

        {/* Details row */}
        <p
          className="text-xs text-[#6b7280] mt-2"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          {surface} m² · {rooms} pièces
        </p>

        {/* Price */}
        <p
          className="text-[#B9965A] text-xl mt-3"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {priceDisplay}
        </p>

        {/* Arrow link */}
        <p
          className="text-xs tracking-widest uppercase text-[#1F1D1A] mt-4 group-hover:text-[#B9965A] transition-colors"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          → Découvrir
        </p>
      </div>
    </Link>
  )
}
