'use client';

import { Phone } from 'lucide-react';

export default function StickyPhone() {
  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50" aria-label="Appeler TRANS'HORSES">
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          backgroundColor: 'var(--color-gold)',
          opacity: 0.35,
          transform: 'scale(1.3)',
        }}
        aria-hidden="true"
      />
      <a
        href="tel:+33608233369"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 active:scale-95"
        style={{ backgroundColor: 'var(--color-gold)', color: 'white' }}
        aria-label="Appeler le 06.08.23.33.69"
      >
        <Phone size={24} strokeWidth={2} />
      </a>
    </div>
  );
}
