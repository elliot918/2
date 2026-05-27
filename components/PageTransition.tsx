'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Fade in content on route change
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'all' }
    )
  }, [pathname])

  return (
    <>
      {/* Thin gold line that sweeps across on transition */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#B9965A] z-[100] origin-left scale-x-0"
      />
      <div ref={contentRef}>{children}</div>
    </>
  )
}
