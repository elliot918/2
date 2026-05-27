'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function PropertyBackdrop() {
  const ref = useRef<HTMLDivElement>(null)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const handleHover = (e: CustomEvent) => {
      if (e.detail.active) {
        setImageUrl(e.detail.imageUrl)
        gsap.to(ref.current, { opacity: 1, duration: 0.5, ease: 'power2.out' })
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
      className="fixed inset-0 z-0 opacity-0 pointer-events-none"
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1F1D1A]/60" />
    </div>
  )
}
