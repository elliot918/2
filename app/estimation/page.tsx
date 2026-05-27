import type { Metadata } from 'next'
import EstimationForm from './EstimationForm'

export const metadata: Metadata = {
  title: 'Estimation Gratuite',
  description:
    "Faites estimer votre bien immobilier dans le Golfe de Saint-Tropez par Les Barrys. Expertise gratuite et confidentielle par nos négociateurs.",
}

export default function EstimationPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        className="py-32 text-center"
        style={{ backgroundColor: '#1F1D1A' }}
      >
        <div className="container-barrys">
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B9965A',
              marginBottom: '1.5rem',
            }}
          >
            POUR LES VENDEURS
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              color: '#F7F3EE',
              lineHeight: 1.05,
              letterSpacing: '0.01em',
              marginBottom: '2rem',
              whiteSpace: 'pre-line',
            }}
          >
            {`Estimez votre bien\ngratuitement`}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              color: 'rgba(216, 195, 165, 0.85)',
              maxWidth: '42rem',
              margin: '0 auto',
            }}
          >
            Un marché d&apos;exception mérite une expertise d&apos;exception. Nos négociateurs
            vous accompagnent avec discrétion.
          </p>
        </div>
      </section>

      {/* ── 2. Why Les Barrys ── */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="container-barrys">
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B9965A',
              marginBottom: '3rem',
            }}
          >
            POURQUOI CHOISIR LES BARRYS
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              {
                num: '01',
                title: 'Expertise locale de 20 ans',
                desc: 'Une connaissance intime du marché du Golfe de Saint-Tropez acquise au fil de deux décennies.',
              },
              {
                num: '02',
                title: "Réseau d'acquéreurs qualifiés",
                desc: "Un carnet d'adresses privé composé d'acquéreurs sérieux, prêts à investir rapidement.",
              },
              {
                num: '03',
                title: 'Valorisation optimale de votre bien',
                desc: 'Une mise en valeur soignée et une stratégie tarifaire précise pour maximiser votre prix de vente.',
              },
              {
                num: '04',
                title: 'Discrétion et confidentialité totale',
                desc: "Chaque estimation et chaque transaction sont menées avec le plus grand respect de votre vie privée.",
              },
            ].map((reason) => (
              <div key={reason.num} className="flex gap-6">
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.5rem',
                    color: 'rgba(185, 150, 90, 0.5)',
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                    flexShrink: 0,
                    width: '2.5rem',
                  }}
                >
                  {reason.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1.375rem',
                      color: '#1F1D1A',
                      marginBottom: '0.5rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.875rem',
                      lineHeight: 1.75,
                      color: '#6F7358',
                    }}
                  >
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Estimation form ── */}
      <section className="bg-white py-24">
        <div className="container-barrys">
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B9965A',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            FORMULAIRE D&apos;ESTIMATION
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#1F1D1A',
              textAlign: 'center',
              marginBottom: '3rem',
              lineHeight: 1.15,
            }}
          >
            Votre estimation gratuite &amp; confidentielle
          </h2>
          <EstimationForm />
        </div>
      </section>

      {/* ── 4. Contact direct ── */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: '#B9965A' }}
      >
        <div className="container-barrys">
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '1.25rem',
            }}
          >
            Préférez-vous nous appeler directement ?
          </p>
          <a
            href="tel:+33494564485"
            style={{
              display: 'block',
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              color: '#ffffff',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
              transition: 'opacity 0.2s ease',
            }}
          >
            +33 (0)4 94 56 44 85
          </a>
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            Disponibles du lundi au samedi
          </p>
        </div>
      </section>
    </>
  )
}
