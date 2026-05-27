'use client'

import { useState } from 'react'

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), sans-serif',
  fontSize: '0.9rem',
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #D8C3A5',
  padding: '0.6rem 0',
  outline: 'none',
  color: '#1F1D1A',
  borderRadius: 0,
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), sans-serif',
  fontSize: '0.65rem',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: '#6F7358',
  display: 'block',
  marginBottom: '0.375rem',
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    objet: 'Demande sur un bien',
    message: '',
    rgpd: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Les Barrys] ${form.objet}`)
    const body = encodeURIComponent(
      `Nom: ${form.nom}\nEmail: ${form.email}\nTéléphone: ${form.telephone}\nObjet: ${form.objet}\n\n${form.message}`
    )
    window.location.href = `mailto:barrys@lesbarrys.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.75rem', color: '#1F1D1A' }}>
          Message envoyé
        </p>
        <p style={{ fontFamily: 'var(--font-manrope), sans-serif', fontSize: '0.875rem', color: '#6F7358', marginTop: '0.75rem' }}>
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label style={labelStyle}>Nom complet *</label>
        <input type="text" required style={inputStyle} value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label style={labelStyle}>Email *</label>
          <input type="email" required style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle}>Téléphone</label>
          <input type="tel" style={inputStyle} value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Objet</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.objet} onChange={(e) => setForm({ ...form, objet: e.target.value })}>
          <option>Demande sur un bien</option>
          <option>Estimation</option>
          <option>Renseignement général</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" required id="rgpd-contact" checked={form.rgpd} onChange={(e) => setForm({ ...form, rgpd: e.target.checked })} className="mt-1 flex-shrink-0" />
        <label htmlFor="rgpd-contact" style={{ fontFamily: 'var(--font-manrope), sans-serif', fontSize: '0.75rem', color: '#6F7358', lineHeight: 1.6 }}>
          J&apos;accepte que mes données personnelles soient utilisées pour traiter ma demande conformément à la politique de confidentialité de Les Barrys.
        </label>
      </div>

      <button type="submit" className="btn-primary" style={{ minWidth: '200px' }}>
        Envoyer le message
      </button>
    </form>
  )
}
