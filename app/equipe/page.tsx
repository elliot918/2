import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notre Équipe',
  description:
    "Rodolphe Beroujon et Aline Pertuisot — une équipe passionnée au service de l'immobilier de luxe dans le Golfe de Saint-Tropez.",
}

const team = [
  {
    name: 'Rodolphe BEROUJON',
    role: 'Gérant',
    tel: '+33 6 62 71 41 73',
    telHref: 'tel:+33662714173',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85',
    imageAlt: 'Rodolphe Beroujon — Gérant Les Barrys',
    bio: "Rodolphe est profondément attaché au territoire du Golfe de Saint-Tropez, qu'il arpente et conseille depuis plus de vingt ans. Sa connaissance intime du marché local et son réseau d'acquéreurs qualifiés lui permettent d'accompagner chaque vente avec une précision et une discrétion exemplaires. Il veille personnellement à ce que chaque transaction reflète les valeurs fondatrices de l'agence : excellence, confidentialité et service sur mesure.",
  },
  {
    name: 'Aline PERTUISOT',
    role: 'Négociatrice',
    tel: '+33 6 84 23 24 24',
    telHref: 'tel:+33684232424',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85',
    imageAlt: 'Aline Pertuisot — Négociatrice Les Barrys',
    bio: "Négociatrice d'expérience, Aline apporte à l'équipe une sensibilité particulière pour la mise en valeur des propriétés d'exception. Sa capacité d'écoute et son sens aigu des attentes de la clientèle internationale font d'elle un interlocuteur de confiance, aussi bien pour les vendeurs que pour les acquéreurs en quête de la demeure idéale sur la Côte d'Azur.",
  },
]

export default function EquipePage() {
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
            GASSIN · SAINT-TROPEZ
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              color: '#F7F3EE',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
            }}
          >
            L&apos;Équipe
          </h1>
        </div>
      </section>

      {/* ── 2. Team members ── */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="container-barrys">
          <div className="grid lg:grid-cols-2 gap-12">
            {team.map((member) => (
              <article key={member.name}>
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1.875rem',
                      color: '#1F1D1A',
                      letterSpacing: '0.02em',
                      lineHeight: 1.15,
                    }}
                  >
                    {member.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#B9965A',
                      marginTop: '0.35rem',
                    }}
                  >
                    {member.role}
                  </p>
                  <a
                    href={member.telHref}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.875rem',
                      color: '#6F7358',
                      marginTop: '1rem',
                      letterSpacing: '0.05em',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {member.tel}
                  </a>
                  <p
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.875rem',
                      lineHeight: 1.8,
                      color: '#1F1D1A',
                      marginTop: '1.25rem',
                      opacity: 0.8,
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Join us section ── */}
      <section
        className="py-20 text-center"
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
            CARRIÈRES
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#F7F3EE',
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Rejoignez l&apos;aventure
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              color: '#D8C3A5',
              maxWidth: '36rem',
              margin: '0 auto 2.5rem',
            }}
          >
            Vous partagez notre passion pour l&apos;immobilier d&apos;exception et le Golfe
            de Saint-Tropez ? Nous accueillons régulièrement de nouveaux talents
            qui souhaitent s&apos;investir dans un environnement exigeant et stimulant.
          </p>
          <Link
            href="mailto:barrys@lesbarrys.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(185, 150, 90, 0.6)',
              padding: '0.875rem 2.5rem',
              color: '#B9965A',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            Candidature spontanée
          </Link>
        </div>
      </section>
    </>
  )
}
