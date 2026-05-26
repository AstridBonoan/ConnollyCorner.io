import type { RefObject } from 'react'
import PartyPlannerForm from './PartyPlannerForm'
import { images } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const partyFeatures = [
  'Baby & bridal showers',
  'Birthday parties for all ages',
  'Rehearsal dinners',
  'Holiday get-togethers',
  'Corporate meetings & events',
  'Graduations & celebrations',
]

const partyAmenities = [
  {
    title: '10 – 100+ Guests',
    description: 'Flexible spaces for intimate gatherings or large celebrations.',
  },
  {
    title: 'Projection Screen & Mic',
    description:
      'Complimentary large projection screen and wireless microphone for presentations and special moments.',
  },
  {
    title: 'Free Parking & Transit',
    description:
      'Free parking across the street and bus service to our front door.',
  },
]

export default function PartyPlanner() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="parties"
      ref={ref as RefObject<HTMLElement>}
      className="relative overflow-hidden py-24 md:py-32"
      aria-labelledby="parties-heading"
    >
      <div className="absolute inset-0">
        <img
          src={images.diningRoom}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-dark/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-12 text-center md:mb-16 ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Celebrate With Us
          </p>
          <h2
            id="parties-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Private Parties Welcome!
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-cream/70 md:text-lg">
            Serving the neighborhood &amp; friends with a perfect party place for
            baby &amp; bridal showers, birthday parties for all ages, rehearsal
            dinners, holiday get-togethers &amp; corporate meetings. We can
            host from 10 to over 100 people. Let our experienced staff customize
            your next gathering and create a memorable event for all!
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div
            className={`animate-on-scroll lg:col-span-2 ${isVisible ? 'visible' : ''}`}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Perfect For
            </h3>
            <ul className="mb-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {partyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-cream/75"
                >
                  <span className="text-gold">✦</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              {partyAmenities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-sm border border-cream/10 bg-forest/60 p-4 backdrop-blur-sm"
                >
                  <h4 className="text-sm font-semibold text-gold">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-cream/55">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#party-form"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-forest-dark transition-all hover:bg-gold-light sm:w-auto lg:hidden"
            >
              Plan Your Party
            </a>
          </div>

          <div
            className={`animate-on-scroll lg:col-span-3 ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="mb-6 text-sm text-cream/60">
              Fill out the form below and we will contact you shortly with party
              packages and other requested details.
            </p>
            <PartyPlannerForm />
          </div>
        </div>
      </div>
    </section>
  )
}
