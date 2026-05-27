'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Saint-Tropez aerial overhead view — poster shown while video loads
const POSTER_URL =
  'https://images.unsplash.com/photo-1560612162-87be8d8df316?auto=format&fit=crop&w=1920&q=85'

interface HeroVideoProps {
  videoUrl: string
  title: string
  subtitle?: string
  scrollCue?: boolean
  cta?: { label: string; href: string }
}

export default function HeroVideo({
  videoUrl,
  title,
  subtitle,
  scrollCue = false,
  cta,
}: HeroVideoProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoWrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  /* ── GSAP ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: wrapper (video + poster) translates up slower than scroll
      gsap.to(videoWrapRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Fade + lift text out as user scrolls
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '35% top',
          scrub: 1,
        },
      })

      // Entrance animation: title + subtitle stagger in
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: 'power3.out', delay: 0.3 }
      )
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.9 }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* ── Video autoplay fallback ── */
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay blocked — poster stays visible, no error shown
      })
    }
    v.addEventListener('canplaythrough', () => setVideoReady(true), { once: true })
    tryPlay()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#1F1D1A]"
    >
      {/* ── Video wrapper (parallax target) — scaled 130% to absorb yPercent travel ── */}
      <div
        ref={videoWrapRef}
        className="absolute inset-0 scale-[1.3] origin-center"
      >
        {/* Poster image shown immediately while video buffers */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER_URL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoReady ? 0 : 1,
            transition: 'opacity 0.8s ease',
          }}
        />

        {/* Aerial Mediterranean video from Pexels — autoPlay muted loop */}
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER_URL}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
      </div>

      {/* Dark overlay — léger 40% */}
      <div className="absolute inset-0 bg-[#1F1D1A]/40" style={{ zIndex: 1 }} />

      {/* Thin gold gradient at bottom for legibility */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(31,29,26,0.45) 0%, transparent 100%)',
        }}
      />

      {/* ── Content ── */}
      <div
        ref={contentRef}
        className="relative flex h-full flex-col items-center justify-center text-center text-[#F7F3EE] px-6"
        style={{ zIndex: 10 }}
      >
        {/* Eyebrow */}
        <p
          className="text-[10px] font-light tracking-[0.45em] uppercase text-[#D8C3A5] mb-8"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          GASSIN · SAINT-TROPEZ
        </p>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-light italic leading-none tracking-wide"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            ref={subtitleRef}
            className="text-[11px] md:text-sm tracking-[0.3em] uppercase text-[#D8C3A5] mt-7 max-w-md"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA */}
        {cta && (
          <Link
            href={cta.href}
            className="btn-primary mt-12"
          >
            {cta.label}
          </Link>
        )}
      </div>

      {/* Scroll cue */}
      {scrollCue && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D8C3A5]"
          style={{ zIndex: 10 }}
        >
          <span
            className="text-[9px] tracking-[0.4em] uppercase"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            DÉFILER
          </span>
          <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            className="animate-bounce"
            aria-hidden="true"
          >
            <line x1="7" y1="0" x2="7" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M1 12l6 8 6-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </section>
  )
}
