import type { RefObject } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="section-divider mx-auto mb-16 max-w-xs" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0ms' }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Our Story
          </p>
          <h2
            id="about-heading"
            className="font-display text-4xl font-semibold leading-tight text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            A Great Neighborhood Place
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/75 md:text-lg">
            <p>
              Rooted in Irish pub tradition, Connolly&apos;s Corner has been the
              heart of Maspeth for generations — a place where neighbors become
              regulars and every visit feels like coming home.
            </p>
            <p>
              We offer a wide array of cuisine from steaks and chops to chicken
              and fish, alongside our ever-evolving house specialties. Whether
              you&apos;re here for an intimate dining experience, the energy of our
              main bar, or a round of darts in our spacious outdoor beer garden,
              there&apos;s a corner waiting for you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/20 pt-10">
            {[
              { value: '40+', label: 'Years Serving Queens' },
              { value: '5', label: 'Cuisine Categories' },
              { value: '2', label: 'Distinct Dining Rooms' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display text-3xl font-semibold text-gold md:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-cream/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`animate-on-scroll relative ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=1000&fit=crop&q=80"
              alt="Connolly's Corner outdoor beer garden"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden border border-gold/30 bg-forest-dark/90 p-6 backdrop-blur-sm md:block">
            <p
              className="font-display text-2xl italic text-gold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              &ldquo;Sláinte&rdquo;
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-cream/60">
              To good food & great company
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
