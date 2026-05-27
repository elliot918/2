import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: "Mentions légales de TRANS'HORSES SAS — SIREN 448 516 617.",
}

export default function MentionsLegales() {
  return (
    <main className="bg-[#f7f4ef]">
      <HeroSection
        title="Mentions Légales"
        subtitle=""
        imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Portrait de cheval"
        height="medium"
        ctas={[]}
      />

      <AnimatedSection className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h1
              className="mb-8 text-3xl font-bold text-[#1b3a2d]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Mentions Légales
            </h1>

            {/* Éditeur */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Éditeur du site
              </h2>
              <div className="space-y-1 text-[#1a1a1a] leading-relaxed">
                <p>
                  <strong>Raison sociale :</strong> TRANS&apos;HORSES SAS
                </p>
                <p>
                  <strong>SIREN :</strong> 448 516 617
                </p>
                <p>
                  <strong>Siège social :</strong> Le Dentu, Route de
                  Boinvilliers, 78111 Dammartin-en-Serve, France
                </p>
                <p>
                  <strong>Téléphone :</strong>{' '}
                  <a
                    href="tel:+33608233369"
                    className="text-[#1b3a2d] underline hover:text-[#c8a84b]"
                  >
                    06.08.23.33.69
                  </a>
                </p>
                <p>
                  <strong>Email :</strong>{' '}
                  <a
                    href="mailto:mail@transhorses.com"
                    className="text-[#1b3a2d] underline hover:text-[#c8a84b]"
                  >
                    mail@transhorses.com
                  </a>
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Hébergement
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Site hébergé par{' '}
                <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San
                Francisco, CA 94104, USA —{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1b3a2d] underline hover:text-[#c8a84b]"
                >
                  vercel.com
                </a>
              </p>
            </section>

            {/* Directeur de publication */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Directeur de la publication
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Gérant de TRANS&apos;HORSES SAS
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Propriété intellectuelle
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Le contenu de ce site (textes, images, logos, etc.) est la
                propriété exclusive de TRANS&apos;HORSES SAS. Toute reproduction,
                représentation, modification ou exploitation, totale ou partielle,
                est interdite sans autorisation préalable écrite.
              </p>
            </section>

            {/* Données personnelles */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Données personnelles
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
                droit d&apos;accès, de rectification et de suppression de vos données
                personnelles. Pour exercer ces droits, contactez-nous à l&apos;adresse{' '}
                <a
                  href="mailto:mail@transhorses.com"
                  className="text-[#1b3a2d] underline hover:text-[#c8a84b]"
                >
                  mail@transhorses.com
                </a>
                .
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Cookies
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Ce site peut utiliser des cookies techniques nécessaires à son
                fonctionnement. Aucun cookie publicitaire ou de traçage tiers
                n&apos;est déposé sans votre consentement.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Liens hypertextes
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                TRANS&apos;HORSES SAS ne peut être tenu responsable du contenu des
                sites externes vers lesquels ce site établit des liens. La
                présence d&apos;un lien ne constitue pas une validation du site
                concerné.
              </p>
            </section>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
