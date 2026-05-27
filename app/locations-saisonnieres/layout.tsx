import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Locations Saisonnières',
  description:
    "Villas de luxe en location saisonnière dans le Golfe de Saint-Tropez. Les Barrys sélectionne des propriétés d'exception pour vos vacances à Gassin, Ramatuelle et Saint-Tropez.",
}

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
