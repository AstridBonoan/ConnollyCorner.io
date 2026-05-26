import { useState } from 'react'
import type { RefObject } from 'react'
import { menuTabs } from '../data/menuData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function MenuPreview() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState(menuTabs[0].id)

  const activeMenu = menuTabs.find((tab) => tab.id === activeTab) ?? menuTabs[0]

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
            Brunch, lunch, dinner, bar bites, and party menus — steaks & chops,
            chicken, fish, and house specialties at Connolly&apos;s Corner.
          </p>
        </div>

        <div
          className={`animate-on-scroll mb-10 flex flex-wrap justify-center gap-2 ${isVisible ? 'visible' : ''}`}
          role="tablist"
          aria-label="Menu types"
        >
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-sm px-3 py-2.5 text-[11px] font-semibold uppercase tracking-widest transition-all sm:px-4 sm:text-xs md:px-5 md:text-sm ${
                activeTab === tab.id
                  ? 'bg-gold text-forest-dark'
                  : 'border border-cream/15 text-cream/70 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div
          className={`animate-on-scroll overflow-hidden rounded-sm ${isVisible ? 'visible' : ''}`}
          role="tabpanel"
        >
          <div className="relative h-48 md:h-56">
            <img
              src={activeMenu.image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/60 to-forest-dark/30" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h3
                className="font-display text-3xl font-semibold text-cream md:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {activeMenu.title}
              </h3>
              {activeMenu.subtitle && (
                <p className="mt-1 text-sm text-gold">{activeMenu.subtitle}</p>
              )}
            </div>
          </div>

          <div className="border border-t-0 border-cream/10 bg-forest p-6 md:p-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
              {activeMenu.categories.map((category) => (
                <div key={category.title}>
                  <h4
                    className="border-b border-gold/30 pb-3 font-display text-xl font-semibold text-gold md:text-2xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {category.title}
                  </h4>
                  {category.note && (
                    <p className="mt-2 text-xs italic leading-relaxed text-cream/45">
                      {category.note}
                    </p>
                  )}
                  <ul className="mt-4 space-y-5">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-start justify-between gap-4">
                          <h5 className="font-medium leading-snug text-cream">
                            {item.name}
                          </h5>
                          {item.price && (
                            <span className="shrink-0 text-sm font-semibold text-gold">
                              {item.price}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-sm leading-relaxed text-cream/55">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
