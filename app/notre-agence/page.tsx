import type { Metadata } from 'next'
import Image from 'next/image'
import CountUp from '@/components/CountUp'

export const metadata: Metadata = {
  title: 'Notre Agence',
  description:
    "Depuis plus de 20 ans, Les Barrys accompagne les acquéreurs et vendeurs les plus exigeants dans le Golfe de Saint-Tropez avec discrétion et expertise.",
}

export default function NotreAgencePage() {
  return (
    <>
      {/* ── 1. Page header ── */}
      <section
        className="h-[50vh] flex items-end pb-16 px-6 md:px-20"
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
            NOTRE AGENCE
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 8vw, 4.5rem)',
              color: '#F7F3EE',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
            }}
          >
            Les Barrys
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.875rem',
              color: 'rgba(216, 195, 165, 0.8)',
              marginTop: '1rem',
              letterSpacing: '0.05em',
            }}
          >
            Présents depuis plus de 20 ans dans le Golfe de Saint-Tropez
          </p>
        </div>
      </section>

      {/* ── 2. Story section ── */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="container-barrys">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image left */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1690832307571-d78b5d346651?auto=format&fit=crop&w=1920&q=85"
                alt="Golfe de Saint-Tropez — Les Barrys agence immobilière"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text right */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#B9965A',
                  marginBottom: '1.25rem',
                }}
              >
                NOTRE HISTOIRE
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  color: '#1F1D1A',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  marginBottom: '2rem',
                }}
              >
                Une expertise forgée au fil des années
              </h2>

              <div
                style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  color: '#1F1D1A',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <p>
                  Fondée en 1999, l&apos;agence Les Barrys est profondément ancrée dans
                  le tissu local de Gassin et du Golfe de Saint-Tropez. Née d&apos;une
                  passion pour ce territoire d&apos;exception, elle a su tisser au fil des
                  ans des liens privilégiés avec les propriétaires et acquéreurs les
                  plus exigeants.
                </p>
                <p>
                  Notre approche repose sur la discrétion, un réseau privé soigneusement
                  entretenu et un service entièrement sur mesure. Chaque client bénéficie
                  d&apos;un accompagnement personnalisé, de la première visite jusqu&apos;à la
                  signature définitive, dans le respect total de la confidentialité.
                </p>
                <p>
                  Pour mieux servir notre clientèle, nous disposons de deux adresses
                  complémentaires : au cœur du village de Gassin et face aux eaux
                  turquoise de Tahïti Beach à Ramatuelle — deux fenêtres ouvertes sur
                  l&apos;un des marchés immobiliers les plus prisés de la Méditerranée.
                </p>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-3 mt-12 pt-10"
                style={{ borderTop: '1px solid rgba(216, 195, 165, 0.4)' }}
              >
                {[
                  { end: 20, suffix: ' ans', label: "d'expérience" },
                  { end: 10, suffix: ' biens', label: 'en portefeuille' },
                  { end: 2, suffix: ' agences', label: 'dans le Golfe' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: '#B9965A',
                        lineHeight: 1,
                      }}
                    >
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#6F7358',
                        marginTop: '0.5rem',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Values section ── */}
      <section className="py-24" style={{ backgroundColor: '#1F1D1A' }}>
        <div className="container-barrys">
          <h2
            className="mb-16"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: '#F7F3EE',
              lineHeight: 1.1,
              letterSpacing: '0.02em',
            }}
          >
            Nos valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                title: 'Discrétion',
                desc: 'Chaque transaction est conduite avec la plus grande confidentialité.',
              },
              {
                num: '02',
                title: 'Expertise',
                desc: 'Vingt ans de présence locale garantissent une connaissance incomparable du marché.',
              },
              {
                num: '03',
                title: 'Excellence',
                desc: "Nous ne sélectionnons que des biens d'exception, alignés avec les attentes de notre clientèle.",
              },
            ].map((value) => (
              <div key={value.num}>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '5rem',
                    color: 'rgba(185, 150, 90, 0.25)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  {value.num}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.75rem',
                    color: '#F7F3EE',
                    letterSpacing: '0.02em',
                    marginBottom: '1rem',
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-manrope), sans-serif',
                    fontSize: '0.875rem',
                    lineHeight: 1.75,
                    color: '#D8C3A5',
                  }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Addresses section ── */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="container-barrys">
          <p
            className="mb-12"
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B9965A',
            }}
          >
            NOS ADRESSES
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: 'GASSIN',
                address: '11 place Neuve',
                zip: '83580 Gassin',
                hours: 'Lun–Ven 9h–19h / Sam 10h–17h',
                tel: '+33 (0)4 94 56 44 85',
                telHref: 'tel:+33494564485',
              },
              {
                city: 'RAMATUELLE',
                address: 'Tahïti Beach, Route de Tahïti',
                zip: '83350 Ramatuelle',
                hours: 'Lun–Ven 9h–19h / Sam 10h–17h',
                tel: '+33 (0)4 94 56 44 85',
                telHref: 'tel:+33494564485',
              },
            ].map((loc) => (
              <div
                key={loc.city}
                className="p-8 bg-white border border-[#D8C3A5]"
                style={{ borderRadius: 0 }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.75rem',
                    color: '#1F1D1A',
                    letterSpacing: '0.05em',
                    marginBottom: '1.5rem',
                  }}
                >
                  {loc.city}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-manrope), sans-serif',
                    fontSize: '0.875rem',
                    lineHeight: 1.85,
                    color: '#1F1D1A',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <address style={{ fontStyle: 'normal' }}>
                    {loc.address}<br />
                    {loc.zip}
                  </address>
                  <p style={{ color: '#6F7358', fontSize: '0.8125rem' }}>
                    {loc.hours}
                  </p>
                  <a
                    href={loc.telHref}
                    style={{
                      color: '#B9965A',
                      letterSpacing: '0.05em',
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    {loc.tel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
