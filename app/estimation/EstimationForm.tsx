'use client'

import { useState, FormEvent } from 'react'

type FormState = {
  nom: string
  email: string
  telephone: string
  typeBien: string
  localisation: string
  surface: string
  commentaires: string
  rgpd: boolean
}

const initialState: FormState = {
  nom: '',
  email: '',
  telephone: '',
  typeBien: '',
  localisation: '',
  surface: '',
  commentaires: '',
  rgpd: false,
}

export default function EstimationForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #D8C3A5',
    borderRadius: 0,
    padding: '0.625rem 0',
    fontFamily: 'var(--font-manrope), sans-serif',
    fontSize: '0.9375rem',
    color: '#1F1D1A',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-manrope), sans-serif',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#6F7358',
    marginBottom: '0.375rem',
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Estimation – ${form.typeBien || 'bien'} à ${form.localisation || 'localisation non précisée'}`
    )
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.telephone}\nType de bien : ${form.typeBien}\nLocalisation : ${form.localisation}\nSurface approximative : ${form.surface} m²\n\nCommentaires :\n${form.commentaires}`
    )
    window.location.href = `mailto:barrys@lesbarrys.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontStyle: 'italic',
            fontSize: '2rem',
            color: '#1F1D1A',
            marginBottom: '1rem',
          }}
        >
          Votre demande a été envoyée
        </p>
        <p
          style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.9rem',
            color: '#6F7358',
          }}
        >
          Nous vous répondrons dans les meilleurs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto" noValidate>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Nom */}
        <div>
          <label style={labelStyle} htmlFor="est-nom">Nom complet</label>
          <input
            id="est-nom"
            name="nom"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Votre nom"
          />
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle} htmlFor="est-email">Email</label>
          <input
            id="est-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="votre@email.com"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label style={labelStyle} htmlFor="est-tel">Téléphone</label>
          <input
            id="est-tel"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
            style={inputStyle}
            placeholder="+33 6 ..."
          />
        </div>

        {/* Type de bien */}
        <div>
          <label style={labelStyle} htmlFor="est-type">Type de bien</label>
          <select
            id="est-type"
            name="typeBien"
            required
            value={form.typeBien}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: 'pointer', paddingRight: '1.5rem' }}
          >
            <option value="" disabled>Sélectionnez</option>
            <option value="Villa">Villa</option>
            <option value="Maison">Maison</option>
            <option value="Appartement">Appartement</option>
            <option value="Terrain">Terrain</option>
          </select>
        </div>

        {/* Localisation */}
        <div>
          <label style={labelStyle} htmlFor="est-loc">Localisation</label>
          <input
            id="est-loc"
            name="localisation"
            type="text"
            value={form.localisation}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Ex. Gassin, Ramatuelle..."
          />
        </div>

        {/* Surface */}
        <div>
          <label style={labelStyle} htmlFor="est-surface">
            Surface approximative (m²)
          </label>
          <input
            id="est-surface"
            name="surface"
            type="number"
            min={0}
            value={form.surface}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Ex. 250"
          />
        </div>
      </div>

      {/* Commentaires */}
      <div className="mt-8">
        <label style={labelStyle} htmlFor="est-commentaires">Commentaires</label>
        <textarea
          id="est-commentaires"
          name="commentaires"
          rows={4}
          value={form.commentaires}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Informations complémentaires sur le bien, votre projet..."
        />
      </div>

      {/* RGPD */}
      <div className="mt-8 flex items-start gap-3">
        <input
          id="est-rgpd"
          name="rgpd"
          type="checkbox"
          required
          checked={form.rgpd}
          onChange={handleChange}
          style={{ marginTop: '2px', accentColor: '#B9965A', cursor: 'pointer' }}
        />
        <label
          htmlFor="est-rgpd"
          style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.8rem',
            color: '#6F7358',
            lineHeight: 1.6,
            cursor: 'pointer',
          }}
        >
          J&apos;accepte que Les Barrys traite mes données personnelles aux fins de
          l&apos;estimation demandée, conformément à la réglementation en vigueur (RGPD).
          Ces données ne seront jamais transmises à des tiers.
        </label>
      </div>

      {/* Submit */}
      <div className="mt-10">
        <button
          type="submit"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            backgroundColor: '#1F1D1A',
            color: '#F7F3EE',
            border: 'none',
            padding: '1rem 2.5rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.backgroundColor = '#B9965A'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.backgroundColor = '#1F1D1A'
          }}
        >
          Demander mon estimation
        </button>
      </div>
    </form>
  )
}
