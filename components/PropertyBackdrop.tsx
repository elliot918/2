'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import gsap from 'gsap'

export default function PropertyBackdrop() {
  const ref = useRef<HTMLDivElement>(null)
  const [imageUrl, setImageUrl] = useState('')
  const pathname = usePathname()

  // Reset when navigating away (e.g. clicking a card before mouseleave fires)
  useEffect(() => {
    if (!ref.current) return
    gsap.killTweensOf(ref.current)
    gsap.set(ref.current, { opacity: 0 })
    setImageUrl('')
  }, [pathname])

  useEffect(() => {
    const handleHover = (e: CustomEvent) => {
      if (!ref.current) return
      gsap.killTweensOf(ref.current)
      if (e.detail.active) {
        setImageUrl(e.detail.imageUrl)
        gsap.to(ref.current, { opacity: 0.3, duration: 0.5, ease: 'power2.out' })
      } else {
        gsap.to(ref.current, { opacity: 0, duration: 0.4, ease: 'power2.in' })
      }
    }

    window.addEventListener('property-hover', handleHover as EventListener)
    return () => window.removeEventListener('property-hover', handleHover as EventListener)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 opacity-0 pointer-events-none"
      style={{ isolation: 'isolate' }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
      )}
    </div>
  )
}
