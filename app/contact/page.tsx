import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Les Barrys — Agence immobilière de prestige dans le Golfe de Saint-Tropez. Tel: +33 (0)4 94 56 44 85 — barrys@lesbarrys.com',
}

export default function ContactPage() {
  return (
    <>
      {/* ── 1. Page header ── */}
      <section
        className="h-[40vh] flex items-end pb-16 px-6 md:px-20"
        style={{ backgroundColor: '#1F1D1A' }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B9965A',
              marginBottom: '1rem',
            }}
          >
            CONTACT
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 8vw, 4.5rem)',
              color: '#F7F3EE',
              lineHeight: 1.05,
            }}
          >
            Parlons-Nous
          </h1>
        </div>
      </section>

      {/* ── 2. Main content ── */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="container-barrys">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left — Contact form */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#B9965A',
                  marginBottom: '2rem',
                }}
              >
                FORMULAIRE DE CONTACT
              </p>
              <ContactForm />
            </div>

            {/* Right — Contact info */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#B9965A',
                  marginBottom: '2.5rem',
                }}
              >
                NOS COORDONNÉES
              </p>

              <div
                className="space-y-6"
                style={{ borderTop: '1px solid #D8C3A5', paddingTop: '2rem' }}
              >
                {[
                  { label: 'GASSIN', value: '11 place Neuve\n83580 Gassin' },
                  {
                    label: 'RAMATUELLE',
                    value: 'Tahïti Beach, Route de Tahïti\n83350 Ramatuelle',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid rgba(216, 195, 165, 0.35)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontSize: '0.6rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#6F7358',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontSize: '0.9rem',
                        color: '#1F1D1A',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}

                <div
                  style={{
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(216, 195, 165, 0.35)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#6F7358',
                      marginBottom: '0.4rem',
                    }}
                  >
                    TÉLÉPHONE
                  </p>
                  <a
                    href="tel:+33494564485"
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.9rem',
                      color: '#B9965A',
                    }}
                  >
                    +33 (0)4 94 56 44 85
                  </a>
                </div>

                <div
                  style={{
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(216, 195, 165, 0.35)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#6F7358',
                      marginBottom: '0.4rem',
                    }}
                  >
                    EMAIL
                  </p>
                  <a
                    href="mailto:barrys@lesbarrys.com"
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.9rem',
                      color: '#B9965A',
                    }}
                  >
                    barrys@lesbarrys.com
                  </a>
                </div>
              </div>

              {/* Team direct numbers */}
              <div className="mt-10">
                <p
                  style={{
                    fontFamily: 'var(--font-manrope), sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#6F7358',
                    marginBottom: '1.25rem',
                  }}
                >
                  CONTACTS DIRECTS
                </p>
                {[
                  {
                    name: 'Rodolphe BEROUJON',
                    role: 'Gérant',
                    tel: '+33 6 62 71 41 73',
                    href: 'tel:+33662714173',
                  },
                  {
                    name: 'Aline PERTUISOT',
                    role: 'Négociatrice',
                    tel: '+33 6 84 23 24 24',
                    href: 'tel:+33684232424',
                  },
                ].map((person) => (
                  <div
                    key={person.name}
                    className="flex justify-between items-start py-3"
                    style={{ borderBottom: '1px solid rgba(216, 195, 165, 0.25)' }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-cormorant), Georgia, serif',
                          fontSize: '1.1rem',
                          color: '#1F1D1A',
                        }}
                      >
                        {person.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-manrope), sans-serif',
                          fontSize: '0.7rem',
                          color: '#6F7358',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginTop: '0.15rem',
                        }}
                      >
                        {person.role}
                      </p>
                    </div>
                    <a
                      href={person.href}
                      style={{
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontSize: '0.875rem',
                        color: '#B9965A',
                      }}
                    >
                      {person.tel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Map placeholder ── */}
      <section
        className="h-64 flex flex-col items-center justify-center gap-3"
        style={{ backgroundColor: '#1F1D1A' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            color: '#F7F3EE',
            letterSpacing: '0.04em',
          }}
        >
          11 place Neuve · 83580 Gassin
        </p>
        <p
          style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#D8C3A5',
          }}
        >
          À 10 minutes de Saint-Tropez
        </p>
      </section>
    </>
  )
}
