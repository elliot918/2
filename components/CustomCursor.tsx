'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsPointerFine(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!mounted || !isPointerFine) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let gsap: typeof import('gsap').gsap | null = null

    let dotSetX: ((v: number) => void) | null = null
    let dotSetY: ((v: number) => void) | null = null

    const initGsap = async () => {
      const mod = await import('gsap')
      gsap = mod.gsap

      dotSetX = gsap.quickSetter(dot, 'x', 'px') as (v: number) => void
      dotSetY = gsap.quickSetter(dot, 'y', 'px') as (v: number) => void

      // Initial position off-screen
      gsap.set([dot, ring], { x: -100, y: -100 })
    }

    let initialized = false

    const onMouseMove = (e: MouseEvent) => {
      if (!gsap || !dotSetX || !dotSetY) return

      const { clientX: x, clientY: y } = e

      dotSetX(x)
      dotSetY(y)

      gsap.to(ring, {
        x,
        y,
        duration: 0.15,
        ease: 'power2.out',
      })

      if (!initialized) {
        initialized = true
        gsap.to([dot, ring], { opacity: 1, duration: 0.3, ease: 'power2.out' })
      }
    }

    const hoverTargets = 'a, button, [data-cursor="pointer"]'

    const onPointerEnter = () => {
      if (!gsap) return
      gsap.to(ring, {
        scale: 2.5,
        opacity: 0.8,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const onPointerLeave = () => {
      if (!gsap) return
      gsap.to(ring, {
        scale: 1,
        opacity: 0.6,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    // Event delegation for hover targets
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest(hoverTargets)) {
        onPointerEnter()
      }
    }
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest(hoverTargets)) {
        onPointerLeave()
      }
    }

    initGsap()

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [mounted, isPointerFine])

  // SSR: return null
  if (typeof window === 'undefined') return null
  // Non-touch only
  if (mounted && !isPointerFine) return null
  if (!mounted) return null

  return (
    <>
      {/* Dot — follows instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#B9965A',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          willChange: 'transform',
        }}
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1px solid rgba(185, 150, 90, 0.6)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          willChange: 'transform',
        }}
      />
    </>
  )
}
