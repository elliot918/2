'use client'

import { Phone } from 'lucide-react'

export default function StickyPhone() {
  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{
          backgroundColor: 'rgba(185, 150, 90, 0.30)',
        }}
        aria-hidden="true"
      />
      <a
        href="tel:+33494564485"
        className="relative flex items-center justify-center rounded-full shadow-lg"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#B9965A',
          color: '#ffffff',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
        }}
        aria-label="Appeler Les Barrys"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
        }}
      >
        <Phone size={22} strokeWidth={1.75} />
      </a>
    </div>
  )
}
