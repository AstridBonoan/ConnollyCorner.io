import type { RefObject } from 'react'
import { siteInfo } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Location() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="location"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest py-24 md:py-32"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-16 text-center ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Find Us
          </p>
          <h2
            id="location-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Visit Connolly&apos;s
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div
            className={`animate-on-scroll space-y-8 lg:col-span-2 ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-gold">
                Address
              </h3>
              <address className="not-italic">
                <p className="text-lg text-cream">{siteInfo.address}</p>
                <p className="text-cream/70">{siteInfo.city}</p>
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${siteInfo.address}, ${siteInfo.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-light"
              >
                Get Directions
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

            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-gold">
                Contact
              </h3>
              <p>
                <a
                  href={`tel:${siteInfo.phone.replace(/\D/g, '')}`}
                  className="text-lg text-cream transition-colors hover:text-gold"
                >
                  {siteInfo.phone}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="text-cream/70 transition-colors hover:text-gold"
                >
                  {siteInfo.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-gold">
                Hours
              </h3>
              <ul className="space-y-3">
                {siteInfo.hours.map((item) => (
                  <li
                    key={item.days}
                    className="flex items-baseline justify-between border-b border-cream/10 pb-3"
                  >
                    <span className="text-sm font-medium text-cream">
                      {item.days}
                    </span>
                    <span className="text-sm text-cream/60">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`animate-on-scroll overflow-hidden rounded-sm lg:col-span-3 ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <iframe
              title="Connolly's Corner location on Google Maps"
              src={siteInfo.mapEmbedUrl}
              className="h-80 w-full border-0 grayscale-[30%] contrast-[1.1] transition-all duration-500 hover:grayscale-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
