import type { RefObject } from 'react'
import { siteInfo, weeklySpecials } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Specials() {
  const { ref, isVisible } = useScrollAnimation()

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const todaySpecial = weeklySpecials.find((s) => s.day === today)

  return (
    <section
      id="specials"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest py-24 md:py-32"
      aria-labelledby="specials-heading"
    >
      <div className="section-divider mx-auto mb-16 max-w-xs" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-12 text-center md:mb-16 ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            This Week
          </p>
          <h2
            id="specials-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Weekly Specials
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Something happening every day — from wine down Wednesdays to
            weekend brunch and sports on Friday night.
          </p>
        </div>

        {todaySpecial && (
          <div
            className={`animate-on-scroll mx-auto mb-10 max-w-3xl rounded-sm border border-gold/40 bg-gold/10 p-6 text-center md:p-8 ${isVisible ? 'visible' : ''}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Today&apos;s Special · {todaySpecial.day}
            </p>
            <h3
              className="mt-2 font-display text-2xl font-semibold text-cream md:text-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {todaySpecial.title}
            </h3>
            <p className="mt-2 text-sm text-cream/70">{todaySpecial.description}</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-gold/80">
              {todaySpecial.time}
            </p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {weeklySpecials.map((special, i) => {
            const isToday = special.day === today
            return (
              <article
                key={special.day}
                className={`animate-on-scroll rounded-sm border p-5 transition-colors md:p-6 ${
                  isToday
                    ? 'border-gold/50 bg-forest-dark'
                    : 'border-cream/10 bg-forest-dark/50 hover:border-gold/25'
                } ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {special.day}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-cream" style={{ fontFamily: 'var(--font-display)' }}>
                  {special.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">
                  {special.description}
                </p>
                <p className="mt-4 border-t border-cream/10 pt-3 text-xs uppercase tracking-wider text-cream/40">
                  {special.time}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteInfo.specialsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
          >
            See all specials on connollyscorner.com →
          </a>
        </div>
      </div>
    </section>
  )
}
