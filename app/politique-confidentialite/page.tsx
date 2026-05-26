import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description:
    "Politique de confidentialité et de protection des données personnelles de TRANS'HORSES SAS.",
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-[#f7f4ef]">
      <HeroSection
        title="Politique de Confidentialité"
        subtitle=""
        imageUrl="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Cheval en liberté"
        height="medium"
        ctas={[]}
      />

      <AnimatedSection className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h1
              className="mb-4 text-3xl font-bold text-[#1b3a2d]"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Politique de Confidentialité
            </h1>
            <p className="mb-8 text-sm text-[#6b7280]">
              Dernière mise à jour : mai 2026
            </p>

            {/* Responsable */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                1. Responsable du traitement
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Le responsable du traitement des données personnelles collectées
                sur ce site est{' '}
                <strong>TRANS&apos;HORSES SAS</strong>, dont le siège social est
                situé Le Dentu, Route de Boinvilliers, 78111 Dammartin-en-Serve.
                Contact :{' '}
                <a
                  href="mailto:mail@transhorses.com"
                  className="text-[#1b3a2d] underline hover:text-[#c8a84b]"
                >
                  mail@transhorses.com
                </a>
              </p>
            </section>

            {/* Données collectées */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                2. Données collectées
              </h2>
              <p className="mb-3 leading-relaxed text-[#1a1a1a]">
                Lors de l&apos;utilisation de nos formulaires de contact ou de
                demande de devis, nous collectons les informations suivantes :
              </p>
              <ul className="list-disc space-y-1 pl-6 text-[#1a1a1a]">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations relatives à votre demande (type, lieux, dates)</li>
              </ul>
            </section>

            {/* Finalité */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                3. Finalité du traitement
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Les données collectées sont utilisées exclusivement pour :
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-[#1a1a1a]">
                <li>Traiter vos demandes de devis et de renseignements</li>
                <li>Vous contacter en réponse à vos messages</li>
                <li>Assurer le suivi de votre dossier</li>
              </ul>
            </section>

            {/* Base légale */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                4. Base légale
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Le traitement repose sur votre <strong>consentement</strong>{' '}
                (art. 6.1.a RGPD) lors de la soumission du formulaire, ainsi
                que sur l&apos;<strong>intérêt légitime</strong> (art. 6.1.f RGPD)
                pour le suivi de la relation commerciale.
              </p>
            </section>

            {/* Conservation */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                5. Durée de conservation
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Vos données sont conservées pendant <strong>3 ans</strong>{' '}
                après le dernier contact, sauf obligation légale contraire.
              </p>
            </section>

            {/* Destinataires */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                6. Destinataires des données
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Vos données sont traitées uniquement par{' '}
                <strong>TRANS&apos;HORSES SAS</strong> et ne sont pas transmises à
                des tiers. Aucun transfert de données hors de l&apos;Union
                Européenne n&apos;est effectué.
              </p>
            </section>

            {/* Droits */}
            <section className="mb-8">
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                7. Vos droits
              </h2>
              <p className="mb-3 leading-relaxed text-[#1a1a1a]">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc space-y-1 pl-6 text-[#1a1a1a]">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
                <li>Droit d&apos;opposition au traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
              <p className="mt-4 leading-relaxed text-[#1a1a1a]">
                Pour exercer ces droits, contactez-nous par email à{' '}
                <a
                  href="mailto:mail@transhorses.com"
                  className="text-[#1b3a2d] underline hover:text-[#c8a84b]"
                >
                  mail@transhorses.com
                </a>
                .
              </p>
            </section>

            {/* Réclamation CNIL */}
            <section>
              <h2
                className="mb-4 text-xl font-semibold text-[#1b3a2d]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                8. Droit de réclamation
              </h2>
              <p className="leading-relaxed text-[#1a1a1a]">
                Si vous estimez que le traitement de vos données personnelles
                constitue une violation du RGPD, vous avez le droit d&apos;introduire
                une réclamation auprès de la{' '}
                <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et
                des Libertés), 3 Place de Fontenoy, 75007 Paris —{' '}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1b3a2d] underline hover:text-[#c8a84b]"
                >
                  cnil.fr
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
