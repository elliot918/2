'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

// ---------------------------------------------------------------------------
// SimpleContactForm — lightweight inline client component
// ---------------------------------------------------------------------------

type Objet = 'transport' | 'location' | 'information' | 'autre' | ''

interface ContactFormState {
  nom: string
  email: string
  telephone: string
  objet: Objet
  message: string
  rgpd: boolean
}

const initialState: ContactFormState = {
  nom: '',
  email: '',
  telephone: '',
  objet: '',
  message: '',
  rgpd: false,
}

const inputClass =
  'w-full rounded-lg border border-[#e2ddd5] px-4 py-3 text-[#1a1a1a] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1b3a2d] transition-shadow bg-white'

const labelClass = 'block mb-1.5 text-sm font-medium text-[#1a1a1a]'

function SimpleContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const objetLabels: Record<string, string> = {
      transport: 'Demande de transport',
      location: 'Demande de location',
      information: 'Information générale',
      autre: 'Autre',
    }

    const lines = [
      `Nom : ${form.nom}`,
      `Email : ${form.email}`,
      `Téléphone : ${form.telephone}`,
      `Objet : ${objetLabels[form.objet] ?? ''}`,
      `Message : ${form.message}`,
    ]

    const body = encodeURIComponent(lines.join('\n'))
    const subject = encodeURIComponent(
      objetLabels[form.objet] ?? 'Contact TRANS\'HORSES'
    )

    window.location.href = `mailto:mail@transhorses.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="mb-2 text-xl font-semibold text-green-800">
          Message envoyé !
        </h3>
        <p className="text-green-700">
          Merci pour votre message. Nous vous répondrons dans les plus brefs
          délais.
        </p>
        <button
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="mt-6 rounded-lg border border-green-600 px-6 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100"
        >
          Nouveau message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Nom + Email */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nom" className={labelClass}>
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            placeholder="Jean Dupont"
            value={form.nom}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jean@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Téléphone + Objet */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="telephone" className={labelClass}>
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="+33 6 12 34 56 78"
            value={form.telephone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="objet" className={labelClass}>
            Objet <span className="text-red-500">*</span>
          </label>
          <select
            id="objet"
            name="objet"
            required
            value={form.objet}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            <option value="transport">Demande de transport</option>
            <option value="location">Demande de location</option>
            <option value="information">Information générale</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre demande…"
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* RGPD */}
      <div className="flex items-start gap-3">
        <input
          id="rgpd"
          name="rgpd"
          type="checkbox"
          required
          checked={form.rgpd}
          onChange={handleChange}
          className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-[#e2ddd5] accent-[#1b3a2d]"
        />
        <label
          htmlFor="rgpd"
          className="cursor-pointer text-sm leading-relaxed text-[#6b7280]"
        >
          J&apos;accepte que mes données soient utilisées pour traiter ma
          demande, conformément à la{' '}
          <a
            href="/politique-confidentialite"
            className="underline text-[#1b3a2d] transition-colors hover:text-[#c8a84b]"
          >
            politique de confidentialité
          </a>
          . <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-[#1b3a2d] py-4 text-lg font-semibold text-white transition-colors hover:bg-[#c8a84b]"
      >
        Envoyer mon message
      </button>
    </form>
  )
}

// ---------------------------------------------------------------------------
// Contact info cards data
// ---------------------------------------------------------------------------

const infoCards = [
  {
    icon: '📍',
    label: 'Adresse principale',
    content: 'Le Dentu, Route de Boinvilliers\n78111 Dammartin-en-Serve',
    href: null,
  },
  {
    icon: '📍',
    label: 'Adresse secondaire',
    content: 'Chemin du Péage\n84100 Orange',
    href: null,
  },
  {
    icon: '📞',
    label: 'Téléphone',
    content: '06.08.23.33.69',
    href: 'tel:+33608233369',
  },
  {
    icon: '📞',
    label: 'Téléphone',
    content: '01.34.76.30.33',
    href: 'tel:+33134763033',
  },
  {
    icon: '✉️',
    label: 'Email',
    content: 'mail@transhorses.com',
    href: 'mailto:mail@transhorses.com',
  },
]

// ---------------------------------------------------------------------------
// Page — must be 'use client' because SimpleContactForm is a client component
// defined in the same file and uses useState
// ---------------------------------------------------------------------------

export default function ContactPage() {
  return (
    <main className="bg-[#f7f4ef]">
      <HeroSection
        title="Contactez-Nous"
        subtitle="Notre équipe est disponible pour répondre à toutes vos questions"
        imageUrl="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Cheval en plein air"
        height="medium"
        ctas={[]}
      />

      {/* Form + Info */}
      <AnimatedSection className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <h2
                className="mb-8 text-2xl font-bold text-[#1b3a2d] md:text-3xl"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Envoyez-nous un message
              </h2>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <SimpleContactForm />
              </div>
            </div>

            {/* Info cards */}
            <div>
              <h2
                className="mb-8 text-2xl font-bold text-[#1b3a2d] md:text-3xl"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Nos coordonnées
              </h2>
              <div className="space-y-4">
                {infoCards.map((card, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f7f4ef] text-xl">
                      {card.icon}
                    </span>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
                        {card.label}
                      </p>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="font-medium text-[#1b3a2d] transition-colors hover:text-[#c8a84b]"
                        >
                          {card.content}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line font-medium text-[#1a1a1a]">
                          {card.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
