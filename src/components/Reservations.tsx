import { useState } from 'react'
import type { ChangeEvent, FormEvent, RefObject } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface FormData {
  name: string
  date: string
  time: string
  guests: string
}

const initialForm: FormData = {
  name: '',
  date: '',
  time: '',
  guests: '2',
}

export default function Reservations() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="reservations"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest-dark py-24 md:py-32"
      aria-labelledby="reservations-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Book Your Table
            </p>
            <h2
              id="reservations-heading"
              className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Reserve a Table
            </h2>
            <p className="mt-4 max-w-md text-cream/60">
              Join us for dinner, weekend brunch, or a night at the bar.
              Private events and catering available for parties of all sizes.
            </p>

            <div className="mt-8 space-y-4 border-l-2 border-gold/30 pl-6">
              <p className="text-sm text-cream/70">
                <span className="font-medium text-gold">Dining Room</span> —
                Quiet, intimate setting perfect for date nights and celebrations.
              </p>
              <p className="text-sm text-cream/70">
                <span className="font-medium text-gold">Main Bar</span> —
                Lively sports atmosphere with full menu service.
              </p>
              <p className="text-sm text-cream/70">
                <span className="font-medium text-gold">Beer Garden</span> —
                Outdoor seating, darts, and good times.
              </p>
            </div>
          </div>

          <div
            className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            {submitted ? (
              <div
                className="rounded-sm border border-gold/30 bg-forest p-10 text-center"
                role="status"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3
                  className="font-display text-2xl font-semibold text-cream"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Reservation Request Received
                </h3>
                <p className="mt-3 text-sm text-cream/60">
                  Thank you, {form.name || 'guest'}! This is a demo — in
                  production, we&apos;d confirm your table for {form.guests}{' '}
                  on {form.date} at {form.time}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(initialForm)
                  }}
                  className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-sm border border-gold/20 bg-forest p-8 md:p-10"
                noValidate
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-sm border border-cream/10 bg-forest-dark/50 px-4 py-3 text-cream placeholder:text-cream/30 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-cream/10 bg-forest-dark/50 px-4 py-3 text-cream transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="time"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-cream/10 bg-forest-dark/50 px-4 py-3 text-cream transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70"
                    >
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-cream/10 bg-forest-dark/50 px-4 py-3 text-cream transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-sm bg-gold py-4 text-sm font-semibold uppercase tracking-widest text-forest-dark transition-all hover:bg-gold-light"
                >
                  Submit Reservation
                </button>

                <p className="mt-4 text-center text-xs text-cream/40">
                  Demo only — no reservation is actually sent.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
