'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

interface HeroCTA {
  label: string
  href: string
  variant: 'primary' | 'outline'
}

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageUrl: string
  imageAlt: string
  ctas?: HeroCTA[]
  height?: 'full' | 'large' | 'medium'
  badge?: string
}

const heightClasses: Record<NonNullable<HeroSectionProps['height']>, string> = {
  full: 'h-screen',
  large: 'h-[80vh] min-h-[600px]',
  medium: 'h-[60vh] min-h-[400px]',
}

export default function HeroSection({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  ctas,
  height = 'large',
  badge,
}: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = [badgeRef.current, titleRef.current, subtitleRef.current, ctasRef.current].filter(Boolean)

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
      }
    )

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <section className={`relative overflow-hidden ${heightClasses[height]}`}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          preload
          loading="eager"
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {badge && (
          <span
            ref={badgeRef}
            className="mb-4 inline-block rounded-full border border-[#c8a84b] px-4 py-1.5 text-sm font-medium text-[#c8a84b] tracking-wide"
          >
            {badge}
          </span>
        )}

        <h1
          ref={titleRef}
          className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl"
          style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#FFFFFF' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            ref={subtitleRef}
            className="mb-8 max-w-2xl text-lg md:text-xl"
            style={{ color: '#FFFFFF' }}
          >
            {subtitle}
          </p>
        )}

        {ctas && ctas.length > 0 && (
          <div ref={ctasRef} className="flex flex-wrap justify-center gap-4">
            {ctas.map((cta) =>
              cta.variant === 'primary' ? (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="rounded-full bg-[#c8a84b] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#b8983b]"
                >
                  {cta.label}
                </Link>
              ) : (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#1b3a2d]"
                >
                  {cta.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  )
}
