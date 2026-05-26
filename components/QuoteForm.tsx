'use client'

import { useState } from 'react'

type DemandeType = 'transport' | 'location-vl' | 'location-pl' | 'aerien' | ''
type EquideType = 'cheval' | 'poney' | 'ane' | 'autre' | ''
type Flexibilite = 'exacte' | '3jours' | '1semaine' | 'flexible' | ''
type Chauffeur = 'oui' | 'non' | 'sans-objet' | ''

interface FormState {
  nomPrenom: string
  email: string
  telephone: string
  typeDemande: DemandeType
  nombreEquides: string
  typeEquide: EquideType
  lieuDepart: string
  lieuArrivee: string
  dateSouhaitee: string
  flexibilite: Flexibilite
  chauffeur: Chauffeur
  commentaires: string
  rgpd: boolean
}

const initialState: FormState = {
  nomPrenom: '',
  email: '',
  telephone: '',
  typeDemande: '',
  nombreEquides: '',
  typeEquide: '',
  lieuDepart: '',
  lieuArrivee: '',
  dateSouhaitee: '',
  flexibilite: '',
  chauffeur: '',
  commentaires: '',
  rgpd: false,
}

const inputClass =
  'w-full rounded-lg border border-[#e2ddd5] px-4 py-3 text-[#1b2028] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1b3a2d] transition-shadow bg-white'

const labelClass = 'block mb-1.5 text-sm font-medium text-[#1b2028]'

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const showEquineFields =
    form.typeDemande === 'transport' || form.typeDemande === 'aerien'

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

    const demandeLabels: Record<string, string> = {
      transport: 'Transport de chevaux',
      'location-vl': 'Location VL',
      'location-pl': 'Location PL',
      aerien: 'Aérien & Maritime',
    }

    const equideLabels: Record<string, string> = {
      cheval: 'Cheval',
      poney: 'Poney',
      ane: 'Âne',
      autre: 'Autre',
    }

    const flexLabels: Record<string, string> = {
      exacte: 'Date exacte',
      '3jours': '± 3 jours',
      '1semaine': '± 1 semaine',
      flexible: 'Flexible',
    }

    const chauffeurLabels: Record<string, string> = {
      oui: 'Oui',
      non: 'Non',
      'sans-objet': 'Sans objet',
    }

    const lines = [
      `Nom / Prénom : ${form.nomPrenom}`,
      `Email : ${form.email}`,
      `Téléphone : ${form.telephone}`,
      `Type de demande : ${demandeLabels[form.typeDemande] ?? ''}`,
      ...(showEquineFields
        ? [
            `Nombre d'équidés : ${form.nombreEquides}`,
            `Type d'équidé : ${equideLabels[form.typeEquide] ?? ''}`,
          ]
        : []),
      `Lieu de départ : ${form.lieuDepart}`,
      `Lieu d'arrivée : ${form.lieuArrivee}`,
      `Date souhaitée : ${form.dateSouhaitee}`,
      `Flexibilité : ${flexLabels[form.flexibilite] ?? ''}`,
      `Besoin d'un chauffeur : ${chauffeurLabels[form.chauffeur] ?? ''}`,
      `Commentaires : ${form.commentaires}`,
    ]

    const body = encodeURIComponent(lines.join('\n'))
    const subject = encodeURIComponent(
      `Demande de devis – ${demandeLabels[form.typeDemande] ?? 'TRANS\'HORSES'}`
    )

    window.location.href = `mailto:contact@transhorses.fr?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="mb-2 text-xl font-semibold text-green-800">
          Demande envoyée !
        </h3>
        <p className="text-green-700">
          Merci pour votre demande. Notre équipe vous contactera dans les plus
          brefs délais.
        </p>
        <button
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="mt-6 rounded-lg border border-green-600 px-6 py-2 text-sm font-medium text-green-700 hover:bg-green-100 transition-colors"
        >
          Nouvelle demande
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Row 1: Nom/Prénom + Email */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nomPrenom" className={labelClass}>
            Nom / Prénom <span className="text-red-500">*</span>
          </label>
          <input
            id="nomPrenom"
            name="nomPrenom"
            type="text"
            required
            placeholder="Jean Dupont"
            value={form.nomPrenom}
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

      {/* Row 2: Téléphone + Type de demande */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="telephone" className={labelClass}>
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            placeholder="+33 6 12 34 56 78"
            value={form.telephone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="typeDemande" className={labelClass}>
            Type de demande <span className="text-red-500">*</span>
          </label>
          <select
            id="typeDemande"
            name="typeDemande"
            required
            value={form.typeDemande}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            <option value="transport">Transport de chevaux</option>
            <option value="location-vl">Location VL</option>
            <option value="location-pl">Location PL</option>
            <option value="aerien">Aérien &amp; Maritime</option>
          </select>
        </div>
      </div>

      {/* Conditional equine fields */}
      {showEquineFields && (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="nombreEquides" className={labelClass}>
              Nombre d&apos;équidés
            </label>
            <input
              id="nombreEquides"
              name="nombreEquides"
              type="number"
              min={1}
              placeholder="1"
              value={form.nombreEquides}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="typeEquide" className={labelClass}>
              Type d&apos;équidé
            </label>
            <select
              id="typeEquide"
              name="typeEquide"
              value={form.typeEquide}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>
                Sélectionner…
              </option>
              <option value="cheval">Cheval</option>
              <option value="poney">Poney</option>
              <option value="ane">Âne</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        </div>
      )}

      {/* Row: Lieu départ + Lieu arrivée */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="lieuDepart" className={labelClass}>
            Lieu de départ
          </label>
          <input
            id="lieuDepart"
            name="lieuDepart"
            type="text"
            placeholder="Ville, département ou adresse"
            value={form.lieuDepart}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="lieuArrivee" className={labelClass}>
            Lieu d&apos;arrivée
          </label>
          <input
            id="lieuArrivee"
            name="lieuArrivee"
            type="text"
            placeholder="Ville, département ou adresse"
            value={form.lieuArrivee}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row: Date + Flexibilité */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="dateSouhaitee" className={labelClass}>
            Date souhaitée
          </label>
          <input
            id="dateSouhaitee"
            name="dateSouhaitee"
            type="date"
            value={form.dateSouhaitee}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="flexibilite" className={labelClass}>
            Flexibilité
          </label>
          <select
            id="flexibilite"
            name="flexibilite"
            value={form.flexibilite}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            <option value="exacte">Date exacte</option>
            <option value="3jours">± 3 jours</option>
            <option value="1semaine">± 1 semaine</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Row: Chauffeur */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="chauffeur" className={labelClass}>
            Besoin d&apos;un chauffeur
          </label>
          <select
            id="chauffeur"
            name="chauffeur"
            value={form.chauffeur}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            <option value="oui">Oui</option>
            <option value="non">Non</option>
            <option value="sans-objet">Sans objet</option>
          </select>
        </div>
      </div>

      {/* Commentaires — full width */}
      <div>
        <label htmlFor="commentaires" className={labelClass}>
          Commentaires
        </label>
        <textarea
          id="commentaires"
          name="commentaires"
          rows={4}
          placeholder="Précisez toute information utile pour votre demande…"
          value={form.commentaires}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* RGPD consent */}
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
        <label htmlFor="rgpd" className="text-sm text-[#6b7280] leading-relaxed cursor-pointer">
          J&apos;accepte que mes données soient utilisées pour traiter ma
          demande, conformément à la{' '}
          <a
            href="/politique-de-confidentialite"
            className="underline text-[#1b3a2d] hover:text-[#c8a84b] transition-colors"
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
        Envoyer ma demande de devis
      </button>
    </form>
  )
}
