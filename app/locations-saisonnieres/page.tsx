'use client'

import { useEffect, useRef } from 'react'
import PropertyCard from '@/components/PropertyCard'
import PropertyBackdrop from '@/components/PropertyBackdrop'
import { locationProperties } from '@/lib/properties'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ENGAGEMENTS = [
  {
    title: 'Sélection exclusive',
    body:
      "Chaque propriété de notre portefeuille est rigoureusement sélectionnée pour ses prestations, son emplacement et son caractère d'exception.",
  },
  {
    title: 'Accompagnement sur place',
    body:
      'Notre équipe est présente tout au long de votre séjour pour répondre à vos demandes et garantir un séjour sans faille.',
  },
  {
    title: 'Confidentialité garantie',
    body:
      'La discrétion est au cœur de notre déontologie. Vos informations et votre séjour restent strictement confidentiels.',
  },
]

export default function LocationsSaisonnieresPage() {
  const gridRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const engagementsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
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
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              once: true,
            },
          }
        )
      })

      engagementsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          }
        )
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <header className="bg-[#1F1D1A] h-[40vh] flex items-end pb-16 px-6 md:px-20">
        <div>
          <p
            className="text-[10px] tracking-[0.4em] uppercase text-[#B9965A] mb-4"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            LOCATION SAISONNIÈRE
          </p>
          <h1
            className="text-6xl md:text-7xl font-light italic text-white leading-none"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Locations Saisonnières
          </h1>
          <p
            className="mt-4 text-[#D8C3A5] text-sm max-w-md"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            Des résidences d&apos;exception pour des vacances inoubliables
          </p>
        </div>
      </header>

      {/* ── Intro strip ── */}
      <div className="bg-[#D8C3A5]/20 py-8 px-6 md:px-20 border-b border-[#D8C3A5]">
        <p
          className="text-sm text-[#6F7358] max-w-3xl"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          Les Barrys vous proposent une sélection de villas et propriétés d&apos;exception
          en location saisonnière dans le Golfe de Saint-Tropez. Chaque bien est choisi
          pour ses prestations cinq étoiles, sa situation privilégiée et son ambiance
          unique — pour des vacances à la hauteur de vos exigences.
        </p>
      </div>

      {/* ── Properties grid ── */}
      <section className="bg-[#F7F3EE] py-16 relative">
        <PropertyBackdrop />

        <div className="container-barrys relative z-10" ref={gridRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationProperties.map((p, i) => (
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

      {/* ── Nos engagements ── */}
      <section className="bg-[#1F1D1A] py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <p
            className="text-[10px] tracking-[0.4em] uppercase text-[#B9965A] mb-4 text-center"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            CE QUE NOUS GARANTISSONS
          </p>
          <h2
            className="text-4xl md:text-5xl font-light italic text-white text-center mb-16"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Nos engagements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {ENGAGEMENTS.map((e, i) => (
              <div
                key={e.title}
                ref={(el) => {
                  if (el) engagementsRef.current[i] = el
                }}
                className="border border-[#D8C3A5]/20 p-8 hover:border-[#B9965A]/60 transition-colors"
              >
                <span
                  className="text-[#B9965A] text-4xl font-light"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-xl font-light text-white mt-4 mb-3"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {e.title}
                </h3>
                <p
                  className="text-sm text-[#D8C3A5]/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
