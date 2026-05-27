'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: video moves up slower than scroll
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Fade out content as user scrolls
      gsap.to(contentRef.current, {
        opacity: 0,
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '40% top',
          scrub: true,
        },
      })

      // Entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2 }
      ).fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
    }, sectionRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1F1D1A]/50" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-[#F7F3EE] px-6"
      >
        {/* Eyebrow */}
        <p
          className="text-[10px] font-light tracking-[0.4em] uppercase text-[#D8C3A5] mb-6"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          GASSIN · SAINT-TROPEZ
        </p>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-light italic leading-none"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            ref={subtitleRef}
            className="text-sm md:text-base tracking-[0.2em] uppercase text-[#D8C3A5] mt-6 max-w-md"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA */}
        {cta && (
          <Link href={cta.href} className="btn-primary mt-10">
            {cta.label}
          </Link>
        )}
      </div>

      {/* Scroll cue */}
      {scrollCue && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D8C3A5] z-10">
          <span
            className="text-[9px] tracking-[0.4em] uppercase"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            DÉFILER
          </span>
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            className="animate-bounce"
            aria-hidden="true"
          >
            <path
              d="M7 0v16M1 10l6 8 6-8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </section>
  )
}
