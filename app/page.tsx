import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroVideo from '@/components/HeroVideo'
import PropertyCard from '@/components/PropertyCard'
import CountUp from '@/components/CountUp'
import { venteProperties, locationProperties } from '@/lib/properties'

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    "Les Barrys — Agence immobilière de prestige dans le Golfe de Saint-Tropez. Villas d’exception à vendre et en location à Gassin, Ramatuelle et Saint-Tropez.",
}

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroVideo
        videoUrl="https://videos.pexels.com/video-files/34349611/14552730_2560_1440_30fps.mp4"
        title="L'Immobilier de Prestige"
        subtitle="Golfe de Saint-Tropez · Depuis 1999"
        scrollCue
        cta={{ label: 'Découvrir nos biens', href: '/vente' }}
      />

      {/* ── 2. Statement ── */}
      <section className="bg-[#F7F3EE] py-32 px-6 text-center">
        <p
          className="text-[10px] tracking-[0.4em] uppercase text-[#B9965A] mb-6"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          NOS SERVICES
        </p>
        <h2
          className="text-4xl md:text-6xl font-light italic leading-tight max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          Experts du luxe immobilier
          <br />
          sur la presqu&apos;île de Saint-Tropez
        </h2>
        <p
          className="mt-8 text-sm md:text-base text-[#6F7358] max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          Depuis plus de 20 ans, Les Barrys accompagnent une clientèle exigeante dans
          l&apos;acquisition et la location de propriétés d&apos;exception sur la presqu&apos;île
          de Saint-Tropez. Notre connaissance intime du territoire et notre réseau exclusif
          nous permettent d&apos;offrir un service sur mesure, discret et personnalisé.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-12 mt-20 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <span
              className="text-6xl font-light text-[#B9965A]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              <CountUp end={20} suffix=" ans" />
            </span>
            <p
              className="text-sm text-[#6F7358] uppercase tracking-widest mt-3"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              d&apos;expertise locale
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span
              className="text-6xl font-light text-[#B9965A]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              <CountUp end={10} suffix=" biens" />
            </span>
            <p
              className="text-sm text-[#6F7358] uppercase tracking-widest mt-3"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              d&apos;exception en portefeuille
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span
              className="text-6xl font-light text-[#B9965A]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              <CountUp end={2} />
            </span>
            <p
              className="text-sm text-[#6F7358] uppercase tracking-widest mt-3"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              adresses au cœur du Golfe
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Vente ── */}
      <section className="py-24 px-6 relative">
        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <h2
              className="text-5xl font-light italic text-[#1F1D1A]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Biens à la Vente
            </h2>
            <Link
              href="/vente"
              className="text-xs tracking-widest uppercase text-[#B9965A] hover:text-[#1F1D1A] transition-colors"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              Voir tous →
            </Link>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {venteProperties.slice(0, 3).map((p, i) => (
              <PropertyCard key={p.slug} {...p} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/vente"
              className="btn-outline text-[#1F1D1A] border-[#1F1D1A] hover:bg-[#1F1D1A] hover:text-white"
            >
              Voir toutes nos propriétés
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Location saisonnière ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2
              className="text-5xl font-light italic text-[#1F1D1A]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Location Saisonnière
            </h2>
            <Link
              href="/locations-saisonnieres"
              className="text-xs tracking-widest uppercase text-[#B9965A] hover:text-[#1F1D1A] transition-colors"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              Voir tous →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locationProperties.slice(0, 2).map((p, i) => (
              <PropertyCard key={p.slug} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Estimation CTA ── */}
      <section className="bg-[#B9965A] py-24 px-6 text-center">
        <h2
          className="text-5xl font-light italic text-white max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          Vous souhaitez vendre&nbsp;?
        </h2>
        <p
          className="mt-6 text-white/80 max-w-xl mx-auto text-sm md:text-base"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          Bénéficiez de l&apos;expertise de nos négociateurs pour estimer votre bien au
          juste prix.
        </p>
        <Link
          href="/estimation"
          className="mt-10 inline-flex items-center justify-center border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#B9965A] transition-colors"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          Estimation gratuite
        </Link>
      </section>

      {/* ── 6. Agence ── */}
      <section className="bg-[#1F1D1A] py-24 px-6">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p
              className="text-[10px] tracking-[0.4em] uppercase text-[#B9965A] mb-6"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              LES BARRYS
            </p>
            <h2
              className="text-4xl md:text-5xl font-light italic text-white leading-tight"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Une agence d&apos;exception
              <br />
              au cœur du Golfe
            </h2>
            <p
              className="mt-8 text-sm text-[#D8C3A5] leading-relaxed max-w-lg"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              Depuis 1999, Les Barrys cultivent une présence unique sur la presqu&apos;île
              de Saint-Tropez. Notre philosophie repose sur la discrétion, l&apos;excellence
              et une expertise géographique sans égale. Chaque mandat est traité avec la
              même exigence, qu&apos;il s&apos;agisse d&apos;une villa en bord de mer ou d&apos;un
              domaine viticole.
            </p>
            <Link href="/notre-agence" className="btn-outline text-white border-white mt-10">
              Notre histoire
            </Link>
          </div>

          {/* Right — image */}
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1760681556931-52ee66c4d88f?auto=format&fit=crop&w=1200&q=85"
              alt="Les Barrys — agence de prestige"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  )
}
