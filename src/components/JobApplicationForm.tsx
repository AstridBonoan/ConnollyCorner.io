import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { jobOpenings, siteInfo } from '../data/siteData'

interface ApplicationForm {
  name: string
  phone: string
  email: string
  experience: string
  applyingFor: string
  coverLetter: string
  smsConsent: boolean
}

const initialForm: ApplicationForm = {
  name: '',
  phone: '',
  email: '',
  experience: '',
  applyingFor: jobOpenings[0],
  coverLetter: '',
  smsConsent: false,
}

const inputClass =
  'w-full rounded-sm border border-cream/10 bg-forest-dark/50 px-4 py-3 text-cream placeholder:text-cream/30 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50'

const labelClass =
  'mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70'

export default function JobApplicationForm() {
  const [form, setForm] = useState<ApplicationForm>(initialForm)
  const [resumeName, setResumeName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setResumeName(file?.name ?? '')
  }

  if (submitted) {
    return (
      <div
        id="application"
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
          Application Received
        </h3>
        <p className="mt-3 text-sm text-cream/60">
          Thank you, {form.name}! We&apos;ve received your application for{' '}
          <span className="text-gold">{form.applyingFor}</span>. Our team will
          review it and get back to you ASAP.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm(initialForm)
            setResumeName('')
          }}
          className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form
      id="application"
      onSubmit={handleSubmit}
      className="rounded-sm border border-gold/20 bg-forest-dark p-6 md:p-8"
      noValidate
    >
      <h3
        className="mb-6 font-display text-2xl font-semibold text-cream"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Job Application
      </h3>

      <div className="space-y-5">
        <div>
          <label htmlFor="job-name" className={labelClass}>
            Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="job-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="job-phone" className={labelClass}>
              Phone <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              id="job-phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(718) 555-0147"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="job-email" className={labelClass}>
              Email <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="job-email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="job-experience" className={labelClass}>
            Experience <span className="text-gold">*</span>
          </label>
          <textarea
            id="job-experience"
            name="experience"
            required
            rows={4}
            value={form.experience}
            onChange={handleChange}
            placeholder="Tell us about your restaurant or hospitality experience..."
            className={`${inputClass} resize-y min-h-[100px]`}
          />
        </div>

        <div>
          <label htmlFor="job-role" className={labelClass}>
            Applying For <span className="text-gold">*</span>
          </label>
          <select
            id="job-role"
            name="applyingFor"
            required
            value={form.applyingFor}
            onChange={handleChange}
            className={inputClass}
          >
            {jobOpenings.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="job-cover" className={labelClass}>
            Cover Letter <span className="text-cream/40">(optional)</span>
          </label>
          <textarea
            id="job-cover"
            name="coverLetter"
            rows={4}
            value={form.coverLetter}
            onChange={handleChange}
            placeholder="Why would you like to join the Connolly's Corner team?"
            className={`${inputClass} resize-y min-h-[100px]`}
          />
        </div>

        <div>
          <label htmlFor="job-resume" className={labelClass}>
            Resume <span className="text-cream/40">(optional)</span>
          </label>
          <div className="relative">
            <input
              type="file"
              id="job-resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            <div className="flex items-center gap-3 rounded-sm border border-dashed border-cream/20 bg-forest/50 px-4 py-4 transition-colors hover:border-gold/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <span className="text-sm text-cream/60">
                {resumeName || 'Upload resume (PDF, DOC, DOCX)'}
              </span>
            </div>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="smsConsent"
            checked={form.smsConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-cream/20 bg-forest-dark accent-gold"
          />
          <span className="text-xs leading-relaxed text-cream/50">
            I agree to receive marketing text messages from Connolly&apos;s
            Corner about specials, events, and exclusive offers. Consent is not
            required to apply. Message and data rates may apply. Reply STOP to
            cancel.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-sm bg-gold py-4 text-sm font-semibold uppercase tracking-widest text-forest-dark transition-all hover:bg-gold-light"
      >
        Submit Application
      </button>

      <p className="mt-4 text-center text-xs text-cream/40">
        Questions? Call us at{' '}
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
