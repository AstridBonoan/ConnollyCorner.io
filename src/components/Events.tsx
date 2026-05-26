import type { RefObject } from 'react'
import {
  downloadCalendarEvent,
  sportsHighlights,
  venueEvents,
} from '../data/eventsData'
import { images } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Events() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="events"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest-dark py-24 md:py-32"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-12 text-center md:mb-16 ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            What&apos;s Happening
          </p>
          <h2
            id="events-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Events & Sports
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/60">
            Holiday celebrations, live game days, and neighborhood gatherings —
            there&apos;s always something going on at Connolly&apos;s Corner.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div
            className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Upcoming Events
            </h3>

            <div className="space-y-6">
              {venueEvents.map((event) => (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-sm border border-cream/10 bg-forest"
                >
                  <div className="relative h-40">
                    <img
                      src={images.diningRoom}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      {event.dateLabel}
                    </p>
                    <h4
                      className="mt-1 font-display text-2xl font-semibold text-cream"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {event.title}
                    </h4>
                    <p className="mt-2 text-sm text-cream/60">
                      {event.description}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-wider text-cream/45">
                      {event.time}
                    </p>
                    <button
                      type="button"
                      onClick={() => downloadCalendarEvent(event)}
                      className="mt-5 rounded-sm border border-gold/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-forest-dark"
                    >
                      Add to Calendar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Sports at Connolly&apos;s
            </h3>

            <div className="relative mb-8 overflow-hidden rounded-sm">
              <img
                src={images.gallery.bar}
                alt="Sports bar with multiple screens"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p
                  className="font-display text-2xl font-semibold text-cream"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Game Day HQ
                </p>
                <p className="mt-1 text-sm text-cream/70">
                  Lively sports bar on the right · quiet dining on the left
                </p>
              </div>
            </div>

            <ul className="space-y-5">
              {sportsHighlights.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-gold/30 pl-5"
                >
                  <h4 className="font-medium text-cream">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-cream/55">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
