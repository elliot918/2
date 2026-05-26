'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Transport Chevaux', href: '/transport-chevaux' },
  { label: 'Aérien & Maritime', href: '/aerien-maritime' },
  { label: 'Location PL', href: '/location-poids-lourds' },
  { label: 'Location VL', href: '/location-vehicules-legers' },
  { label: 'Services & Devis', href: '/services-devis' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span
              className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: 'var(--color-primary)',
              }}
            >
              TRANS&#39;HORSES
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-muted)' }}
            >
              Transport Équestre
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'font-semibold'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color: isActive(link.href)
                    ? 'var(--color-gold)'
                    : 'var(--color-text)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/services-devis" className="btn-primary text-sm">
              Demander un devis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--color-primary)' }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'white', borderTop: '1px solid var(--color-border)' }}
      >
        <nav
          className="container-custom py-4 flex flex-col gap-1"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                isActive(link.href) ? 'font-semibold' : ''
              }`}
              style={{
                color: isActive(link.href)
                  ? 'var(--color-gold)'
                  : 'var(--color-text)',
                backgroundColor: isActive(link.href)
                  ? 'rgba(200, 168, 75, 0.08)'
                  : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link
              href="/services-devis"
              className="btn-primary w-full justify-center"
            >
              Demander un devis
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
