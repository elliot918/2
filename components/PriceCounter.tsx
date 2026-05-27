'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Format a number the French way: 19 950 000 */
function formatFR(n: number): string {
  return new Intl.NumberFormat('fr-FR').format(Math.round(n))
}

interface Props {
  price: number        // raw integer; 0 = no animation (show priceDisplay as-is)
  priceDisplay: string // e.g. "19 950 000 €" or "Prix sur demande"
  className?: string
  style?: React.CSSProperties
}

export default function PriceCounter({ price, priceDisplay, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || price <= 0) return

    // Detect prefix / suffix from the stored display string
    const isWeekly = priceDisplay.includes('/sem.')
    const prefix   = isWeekly ? 'À partir de ' : ''
    const suffix   = isWeekly ? ' €/sem.'       : ' €'

    // Reset to zero immediately so scroll-in always starts from 0
    el.textContent = `${prefix}0${suffix}`

    const obj = { value: 0 }

    const tween = gsap.to(obj, {
      value: price,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate() {
        el.textContent = `${prefix}${formatFR(obj.value)}${suffix}`
      },
      onComplete() {
        // Guarantee exact final label (handles rounding edge-cases)
        el.textContent = priceDisplay
      },
    })

    return () => { tween.kill() }
  }, [price, priceDisplay])

  return (
    <p ref={ref} className={className} style={style}>
      {priceDisplay}
    </p>
  )
}
