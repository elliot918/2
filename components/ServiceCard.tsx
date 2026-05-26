import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  imageUrl?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  imageUrl,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Optional top image */}
      {imageUrl && (
        <div className="relative h-[240px] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Card body */}
      <div className="p-6">
        {/* Icon */}
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f4ef] p-3 text-[#1b3a2d]">
          {icon}
        </div>

        {/* Title */}
        <h3
          className="mb-2 text-xl font-semibold text-[#1b3a2d]"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">
          {description}
        </p>

        {/* CTA */}
        <span className="inline-block text-sm font-semibold text-[#c8a84b] transition-transform duration-200 group-hover:translate-x-1">
          En savoir plus →
        </span>
      </div>
    </Link>
  )
}
