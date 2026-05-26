import type { RefObject } from 'react'
import { menuCategories } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function MenuPreview() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="menu"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest-dark py-24 md:py-32"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-16 text-center ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Culinary Offerings
          </p>
          <h2
            id="menu-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            From Our Kitchen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            A varied menu with something for everyone — from prime steaks to
            pub classics and chef-driven specials.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category, i) => (
            <article
              key={category.title}
              className={`animate-on-scroll group relative overflow-hidden rounded-sm bg-forest ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3
                  className="font-display text-2xl font-semibold text-cream transition-colors group-hover:text-gold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {category.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:gap-3"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`View full ${category.title} menu`}
                >
                  View Full Menu
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
