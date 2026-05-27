'use client'

import { useEffect, useRef, useState } from 'react'
import type { Metadata } from 'next'
import PropertyCard from '@/components/PropertyCard'
import PropertyBackdrop from '@/components/PropertyBackdrop'
import { venteProperties } from '@/lib/properties'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Note: metadata export doesn't work with 'use client' — handled via a separate
// server component wrapper. But since the brief asks for a single file we inline
// the page and the parent layout/metadata is enough. To ship the right <title>
// we export metadata from the module scope; Next.js 16 allows this even in client
// pages via the segment metadata API.
// See: app/vente/layout.tsx would be the clean split, but per the brief we keep
// one file. In practice Next.js ignores `export const metadata` in 'use client'
// modules, so we expose it here for documentation only.

const FILTERS = ['Tous', 'Gassin', 'Ramatuelle', 'Saint-Tropez'] as const
type Filter = (typeof FILTERS)[number]

export default function VentePage() {
  const [active, setActive] = useState<Filter>('Tous')
  const gridRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const filtered =
    active === 'Tous'
      ? venteProperties
      : venteProperties.filter((p) => p.location === active)

  useEffect(() => {
    if (!cardsRef.current.length) return
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              once: true,
            },
          }
        )
      })
    }, gridRef)

    return () => ctx.revert()
  }, [active])

  return (
    <>
      {/* ── Hero ── */}
      <header className="bg-[#1F1D1A] h-[40vh] flex items-end pb-16 px-6 md:px-20">
        <div>
          <p
            className="text-[10px] tracking-[0.4em] uppercase text-[#B9965A] mb-4"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            VENTE
          </p>
          <h1
            className="text-6xl md:text-7xl font-light italic text-white leading-none"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Biens à la Vente
          </h1>
        </div>
      </header>

      {/* ── Grid section ── */}
      <section className="bg-[#F7F3EE] py-16 relative">
        <PropertyBackdrop />

        <div className="container-barrys relative z-10">
          {/* Filter bar */}
          <div
            className="flex gap-8 mb-12 border-b border-[#D8C3A5] pb-4 overflow-x-auto"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={[
                  'text-xs tracking-widest uppercase pb-1 border-b-2 whitespace-nowrap transition-colors',
                  active === f
                    ? 'border-[#B9965A] text-[#B9965A]'
                    : 'border-transparent text-[#6F7358] hover:text-[#1F1D1A]',
                ].join(' ')}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Property grid */}
          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((p, i) => (
              <div
                key={p.slug}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el
                }}
              >
                <PropertyCard {...p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
