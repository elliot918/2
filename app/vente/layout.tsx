import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biens à Vendre',
  description:
    'Villas et propriétés de prestige à vendre dans le Golfe de Saint-Tropez — Gassin, Ramatuelle, Saint-Tropez. Les Barrys, votre agence immobilière de luxe.',
}

export default function VenteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
