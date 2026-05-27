'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  className,
}: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const counter = { val: 0 }

    const trigger = ScrollTrigger.create({
      trigger: spanRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (spanRef.current) {
              spanRef.current.textContent =
                prefix + Math.round(counter.val).toLocaleString('fr-FR') + suffix
            }
          },
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [end, prefix, suffix, duration])

  return (
    <span ref={spanRef} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
