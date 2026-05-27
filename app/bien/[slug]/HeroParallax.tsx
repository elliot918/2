'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HeroParallaxProps {
  imageUrl: string
  name: string
  location: string
  type: 'vente' | 'location'
}

export default function HeroParallax({ imageUrl, name, location, type }: HeroParallaxProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imageRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 scale-110">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F1D1A]/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p
          className="text-[10px] tracking-[0.4em] uppercase text-[#D8C3A5] mb-4"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          {location} · {type === 'vente' ? 'À vendre' : 'Location saisonnière'}
        </p>
        <h1
          className="text-5xl md:text-7xl font-light italic text-white leading-none"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {name}
        </h1>
      </div>
    </section>
  )
}
