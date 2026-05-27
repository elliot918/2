import Link from 'next/link'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Vente', href: '/vente' },
  { label: 'Locations saisonnières', href: '/locations-saisonnieres' },
  { label: 'Notre agence', href: '/notre-agence' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Estimation', href: '/estimation' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F1D1A', color: '#F7F3EE' }}>
      <div className="container-barrys py-20">

        {/* Top: Logo + tagline */}
        <div className="mb-14 border-b" style={{ borderColor: 'rgba(216, 195, 165, 0.15)', paddingBottom: '2.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.1em',
              lineHeight: 1,
              color: '#F7F3EE',
            }}
          >
            Les Barrys
          </p>
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D8C3A5',
              marginTop: '0.75rem',
            }}
          >
            Agence immobilière de prestige · Golfe de Saint-Tropez
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">

          {/* Column 1: Navigation */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B9965A',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.8125rem',
                      color: '#D8C3A5',
                      transition: 'color 0.3s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#B9965A' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#D8C3A5' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Nos agences */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B9965A',
                marginBottom: '1.25rem',
              }}
            >
              Nos agences
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <address
                style={{
                  fontStyle: 'normal',
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.8125rem',
                  color: '#D8C3A5',
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: '#F7F3EE',
                    marginBottom: '0.25rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  Gassin
                </span>
                11 place Neuve<br />
                83580 Gassin
              </address>

              <address
                style={{
                  fontStyle: 'normal',
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.8125rem',
                  color: '#D8C3A5',
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: '#F7F3EE',
                    marginBottom: '0.25rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  Ramatuelle
                </span>
                Tahïti Beach<br />
                Route de Tahïti<br />
                83350 Ramatuelle
              </address>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B9965A',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a
                href="tel:+33494564485"
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.8125rem',
                  color: '#D8C3A5',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#B9965A' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#D8C3A5' }}
              >
                +33 (0)4 94 56 44 85
              </a>
              <a
                href="mailto:barrys@lesbarrys.com"
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.8125rem',
                  color: '#D8C3A5',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#B9965A' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#D8C3A5' }}
              >
                barrys@lesbarrys.com
              </a>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '0.9375rem',
                  fontStyle: 'italic',
                  color: 'rgba(247, 243, 238, 0.5)',
                  marginTop: '0.5rem',
                  letterSpacing: '0.03em',
                }}
              >
                Présents depuis plus de 20 ans
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(216, 195, 165, 0.15)' }}>
        <div
          className="container-barrys py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.6875rem',
              color: 'rgba(247, 243, 238, 0.4)',
              letterSpacing: '0.05em',
            }}
          >
            &copy; 2024 Les Barrys — Tous droits réservés
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a
              href="/mentions-legales"
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '0.6875rem',
                color: 'rgba(216, 195, 165, 0.6)',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#B9965A' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(216, 195, 165, 0.6)' }}
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '0.6875rem',
                color: 'rgba(216, 195, 165, 0.6)',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#B9965A' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(216, 195, 165, 0.6)' }}
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
