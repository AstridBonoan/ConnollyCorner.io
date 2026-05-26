import { useState } from 'react'
import type { RefObject } from 'react'
import { menuSections, siteInfo } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function MenuPreview() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState(menuSections[0].id)

  const activeSection = menuSections.find((s) => s.id === activeTab) ?? menuSections[0]

  return (
    <section
      id="menu"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest-dark py-24 md:py-32"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-12 text-center md:mb-16 ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Our Menu
          </p>
          <h2
            id="menu-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            From Our Kitchen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/60">
            Brunch, lunch, and dinner — steaks & chops, chicken, fish, and
            house specialties. Something for everyone at Connolly&apos;s Corner.
          </p>
        </div>

        <div
          className={`animate-on-scroll mb-10 flex flex-wrap justify-center gap-2 ${isVisible ? 'visible' : ''}`}
          role="tablist"
          aria-label="Menu categories"
        >
          {menuSections.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={activeTab === section.id}
              onClick={() => setActiveTab(section.id)}
              className={`rounded-sm px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all md:px-5 md:text-sm ${
                activeTab === section.id
                  ? 'bg-gold text-forest-dark'
                  : 'border border-cream/15 text-cream/70 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div
          className={`animate-on-scroll grid gap-10 lg:grid-cols-5 lg:gap-12 ${isVisible ? 'visible' : ''}`}
          role="tabpanel"
        >
          <div className="relative overflow-hidden rounded-sm lg:col-span-2">
            <img
              src={activeSection.image}
              alt={activeSection.title}
              className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto lg:min-h-[520px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3
                className="font-display text-3xl font-semibold text-cream"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {activeSection.title}
              </h3>
              {activeSection.subtitle && (
                <p className="mt-1 text-sm text-gold">{activeSection.subtitle}</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ul className="divide-y divide-cream/10">
              {activeSection.items.map((item) => (
                <li key={item.name} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-xl font-medium text-cream md:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.name}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-cream/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={siteInfo.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/50 bg-gold/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-forest-dark"
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
