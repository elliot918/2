import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Share2, Send } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Transport Chevaux', href: '/transport-chevaux' },
  { label: 'Aérien & Maritime', href: '/aerien-maritime' },
  { label: 'Location PL', href: '/location-poids-lourds' },
  { label: 'Location VL', href: '/location-vehicules-legers' },
  { label: 'Services & Devis', href: '/services-devis' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Logo + description + social */}
          <div className="flex flex-col gap-5">
            <div>
              <h2
                className="text-2xl font-bold leading-tight"
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: 'var(--color-gold)',
                }}
              >
                TRANS&#39;HORSES
              </h2>
              <p
                className="text-xs tracking-widest uppercase mt-0.5"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                Transport Équestre
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Spécialiste du transport équestre en France et à l&#39;international.
              Liaisons hebdomadaires, groupage et affrètement pour vos chevaux en
              toute sécurité.
            </p>
            {/* Social placeholders */}
            <div className="flex items-center gap-3 mt-1">
              {[
                { Icon: Globe, label: 'Site web' },
                { Icon: Share2, label: 'Partager' },
                { Icon: Send, label: 'Contact' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 bg-white/10 text-white/75 hover:bg-[#c8a84b] hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Liens rapides */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--color-gold)' }}
            >
              Liens rapides
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-white/75 hover:text-[#c8a84b]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Coordonnées */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--color-gold)' }}
            >
              Coordonnées
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: 'var(--color-gold)' }}
                />
                <address
                  className="not-italic text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  Le Dentu, Route de Boinvilliers
                  <br />
                  78111 Dammartin-en-Serve
                </address>
              </li>
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: 'var(--color-gold)' }}
                />
                <address
                  className="not-italic text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  Chemin du Péage
                  <br />
                  84100 Orange
                </address>
              </li>
              <li className="flex gap-3">
                <Phone
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: 'var(--color-gold)' }}
                />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+33608233369"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    06.08.23.33.69
                  </a>
                  <a
                    href="tel:+33134763033"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    01.34.76.30.33
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: 'var(--color-gold)' }}
                />
                <a
                  href="mailto:mail@transhorses.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  mail@transhorses.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Légal */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--color-gold)' }}
            >
              Informations légales
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm transition-colors duration-200 text-white/75 hover:text-[#c8a84b]"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-sm transition-colors duration-200 text-white/75 hover:text-[#c8a84b]"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li className="pt-2">
                <p
                  className="text-xs"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  SIREN : 448 516 617
                </p>
              </li>
              <li>
                <p
                  className="text-xs"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  Tous droits réservés
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
      >
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            &copy; 2024 TRANS&#39;HORSES SAS. Tous droits réservés.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Transport équestre professionnel depuis 2003
          </p>
        </div>
      </div>
    </footer>
  );
}
