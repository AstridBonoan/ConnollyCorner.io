import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { partyEventTypes, partyGuestCounts } from '../data/eventsData'
import { siteInfo } from '../data/siteData'

interface PartyForm {
  name: string
  phone: string
  email: string
  eventType: string
  eventDate: string
  guestCount: string
  message: string
}

const initialForm: PartyForm = {
  name: '',
  phone: '',
  email: '',
  eventType: partyEventTypes[0],
  eventDate: '',
  guestCount: partyGuestCounts[0],
  message: '',
}

const inputClass =
  'w-full rounded-sm border border-cream/10 bg-forest-dark/50 px-4 py-3 text-cream placeholder:text-cream/30 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50'

const labelClass =
  'mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70'

export default function PartyPlannerForm() {
  const [form, setForm] = useState<PartyForm>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <div
        id="party-form"
        className="rounded-sm border border-gold/30 bg-forest-dark p-8 text-center md:p-10"
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
          Request Received
        </h3>
        <p className="mt-3 text-sm text-cream/60">
          Thank you, {form.name}! We&apos;ll contact you shortly with party
          packages and details for your {form.eventType.toLowerCase()}.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm(initialForm)
          }}
          className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form
      id="party-form"
      onSubmit={handleSubmit}
      className="rounded-sm border border-gold/20 bg-forest-dark p-6 md:p-8"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="party-name" className={labelClass}>
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="party-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Nina Simone"
            className={inputClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="party-phone" className={labelClass}>
              Phone <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              id="party-phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. (718) 565-7383"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="party-email" className={labelClass}>
              Email <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="party-email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="party-type" className={labelClass}>
              Event Type <span className="text-gold">*</span>
            </label>
            <select
              id="party-type"
              name="eventType"
              required
              value={form.eventType}
              onChange={handleChange}
              className={inputClass}
            >
              {partyEventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="party-date" className={labelClass}>
              Preferred Date <span className="text-gold">*</span>
            </label>
            <input
              type="date"
              id="party-date"
              name="eventDate"
              required
              value={form.eventDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="party-guests" className={labelClass}>
            Number of Guests <span className="text-gold">*</span>
          </label>
          <select
            id="party-guests"
            name="guestCount"
            required
            value={form.guestCount}
            onChange={handleChange}
            className={inputClass}
          >
            {partyGuestCounts.map((count) => (
              <option key={count} value={count}>
                {count} guests
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="party-message" className={labelClass}>
            Additional Details <span className="text-cream/40">(optional)</span>
          </label>
          <textarea
            id="party-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your event, catering preferences, or any special requests..."
            className={`${inputClass} min-h-[100px] resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-sm bg-gold py-4 text-sm font-semibold uppercase tracking-widest text-forest-dark transition-all hover:bg-gold-light"
      >
        Submit Party Request
      </button>

      <p className="mt-4 text-center text-xs text-cream/40">
        Questions? Call{' '}
        <a
          href={`tel:${siteInfo.phone.replace(/\D/g, '')}`}
          className="text-gold hover:text-gold-light"
        >
          {siteInfo.phone}
        </a>
      </p>
    </form>
  )
}
