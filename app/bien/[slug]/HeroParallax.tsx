import Image from 'next/image'

interface HeroImageProps {
  imageUrl: string
  name: string
}

/** Simple full-screen hero image — no parallax, no overlay, no text on photo */
export default function HeroParallax({ imageUrl, name }: HeroImageProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        fill
        style={{ objectFit: 'cover' }}
        priority
        sizes="100vw"
      />
    </section>
  )
}
