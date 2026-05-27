'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Vente', href: '/vente' },
  { label: 'Locations', href: '/locations-saisonnieres' },
  { label: 'Notre agence', href: '/notre-agence' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: 'background-color 0.4s ease, border-color 0.4s ease, color 0.4s ease',
          backgroundColor: scrolled ? 'rgba(247, 243, 238, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(4px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(216, 195, 165, 0.3)' : '1px solid transparent',
          color: scrolled ? '#1F1D1A' : '#ffffff',
        }}
      >
        <div className="container-barrys">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight group">
              <span
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontStyle: 'italic',
                  letterSpacing: '0.15em',
                  fontSize: '1.25rem',
                  lineHeight: 1.1,
                }}
              >
                LES BARRYS
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  opacity: 0.7,
                  lineHeight: 1.4,
                }}
              >
                GASSIN · SAINT-TROPEZ
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:flex items-center"
              style={{ gap: '2rem' }}
              aria-label="Navigation principale"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-manrope), sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: isActive(link.href) ? '#B9965A' : 'currentColor',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) {
                      (e.currentTarget as HTMLElement).style.color = '#B9965A'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) {
                      (e.currentTarget as HTMLElement).style.color = 'currentColor'
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA: Estimation */}
            <div className="hidden lg:block">
              <Link
                href="/estimation"
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: '1px solid currentColor',
                  padding: '0.5rem 1.25rem',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = '#1F1D1A'
                  el.style.color = '#F7F3EE'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'transparent'
                  el.style.color = 'currentColor'
                }}
              >
                Estimation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-0"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              style={{ color: 'currentColor' }}
            >
              {/* 3 lines → X via CSS transition */}
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '1.5px',
                  backgroundColor: 'currentColor',
                  transition: 'transform 0.35s ease, opacity 0.35s ease',
                  transform: mobileOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '1.5px',
                  backgroundColor: 'currentColor',
                  margin: '4px 0',
                  transition: 'opacity 0.35s ease',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '1.5px',
                  backgroundColor: 'currentColor',
                  transition: 'transform 0.35s ease, opacity 0.35s ease',
                  transform: mobileOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        id="mobile-menu"
        className="lg:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          backgroundColor: '#1F1D1A',
          color: '#ffffff',
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? 'visible' : 'hidden',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        aria-hidden={!mobileOpen}
      >
        {/* Logo centered */}
        <div className="flex flex-col items-center justify-center pt-24 pb-10">
          <Link
            href="/"
            className="flex flex-col items-center leading-tight"
            onClick={() => setMobileOpen(false)}
          >
            <span
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontStyle: 'italic',
                letterSpacing: '0.15em',
                fontSize: '1.5rem',
                color: '#ffffff',
                lineHeight: 1.1,
              }}
            >
              LES BARRYS
            </span>
            <span
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '9px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '4px',
              }}
            >
              GASSIN · SAINT-TROPEZ
            </span>
          </Link>
        </div>

        {/* Nav links stacked */}
        <nav
          className="flex flex-col items-center"
          style={{ gap: '0.25rem' }}
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '2rem',
                fontStyle: 'italic',
                color: isActive(link.href) ? '#B9965A' : '#ffffff',
                letterSpacing: '0.05em',
                padding: '0.5rem 2rem',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA in mobile */}
          <Link
            href="/estimation"
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(216, 195, 165, 0.6)',
              padding: '0.75rem 2.5rem',
              color: '#D8C3A5',
              marginTop: '2rem',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onClick={() => setMobileOpen(false)}
          >
            Estimation
          </Link>
        </nav>
      </div>
    </>
  )
}
