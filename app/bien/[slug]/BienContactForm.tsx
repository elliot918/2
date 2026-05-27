'use client'

import { useState } from 'react'

const field: React.CSSProperties = {
  fontFamily: 'var(--font-manrope), sans-serif',
  fontSize: '0.875rem',
  color: '#1F1D1A',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid #D8C3A5',
  width: '100%',
  padding: '0.625rem 0',
  outline: 'none',
}

export default function BienContactForm({ propertyName }: { propertyName: string }) {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', message: '' })

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Nom: ${form.nom}\nEmail: ${form.email}\nTél: ${form.tel}\n\n${form.message}`
    window.location.href = `mailto:barrys@lesbarrys.com?subject=${encodeURIComponent(
      `Demande d'information — ${propertyName}`
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <input
          name="nom"
          type="text"
          placeholder="Nom"
          required
          value={form.nom}
          onChange={set}
          style={field}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={set}
          style={field}
        />
      </div>
      <input
        name="tel"
        type="tel"
        placeholder="Téléphone"
        value={form.tel}
        onChange={set}
        style={field}
      />
      <textarea
        name="message"
        placeholder="Votre message"
        rows={4}
        value={form.message}
        onChange={set}
        style={{ ...field, resize: 'none', borderBottom: '1px solid #D8C3A5' }}
      />
      <button
        type="submit"
        style={{
          fontFamily: 'var(--font-manrope), sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#F7F3EE',
          backgroundColor: '#1F1D1A',
          border: 'none',
          padding: '0.875rem 2rem',
          cursor: 'pointer',
          alignSelf: 'flex-start',
        }}
      >
        Envoyer
      </button>
    </form>
  )
}
