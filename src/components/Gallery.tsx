import type { RefObject } from 'react'
import { galleryImages } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="gallery"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest py-24 md:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-16 text-center ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Atmosphere
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Experience
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Intimate dining rooms, a lively sports bar, and a renovated outdoor
            beer garden — every corner tells a story.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, i) => (
            <figure
              key={image.alt}
              className={`animate-on-scroll mb-4 break-inside-avoid overflow-hidden rounded-sm ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="group relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest-dark/0 transition-colors duration-500 group-hover:bg-forest-dark/30" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
