import type { RefObject } from 'react'
import JobApplicationForm from './JobApplicationForm'
import { jobOpenings, siteInfo } from '../data/siteData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Jobs() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="jobs"
      ref={ref as RefObject<HTMLElement>}
      className="relative bg-forest py-24 md:py-32"
      aria-labelledby="jobs-heading"
    >
      <div className="section-divider mx-auto mb-16 max-w-xs" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`animate-on-scroll mb-12 text-center md:mb-16 ${isVisible ? 'visible' : ''}`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Join Our Team
          </p>
          <h2
            id="jobs-heading"
            className="font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Careers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/60">
            We&apos;re hiring! Become part of our team at Maspeth&apos;s
            neighborhood Irish pub — fill out the application below and
            we&apos;ll get back to you ASAP.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div
            className={`animate-on-scroll lg:col-span-2 ${isVisible ? 'visible' : ''}`}
          >
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Now Hiring
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-cream/60">
              Connolly&apos;s Corner is always looking for friendly, hardworking
              people who love hospitality. Whether you&apos;re behind the bar,
              on the floor, or in the kitchen — there&apos;s a place for you
              here.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {jobOpenings.map((role, i) => (
                <li
                  key={role}
                  className={`animate-on-scroll flex items-center gap-3 rounded-sm border border-cream/10 bg-forest-dark/50 px-4 py-3.5 ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h4.125c.621 0 1.125-.504 1.125-1.125V11.25c0-4.556-4.03-8.25-9-8.25S3 6.694 3 11.25v1.775c0 .621.504 1.125 1.125 1.125h4.125m9.75 0H9m9.75 0v-1.05A2.25 2.25 0 0018 11.25h-1.5m-7.5 0v-.75A2.25 2.25 0 0111.25 9h1.5m-7.5 0H6a2.25 2.25 0 00-2.25 2.25v.75m12 0v-.75a2.25 2.25 0 00-2.25-2.25h-1.5"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-cream">{role}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-sm border border-gold/20 bg-forest-dark/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Prefer to call?
              </p>
              <p className="mt-2 text-sm text-cream/60">
                Reach us directly at{' '}
                <a
                  href={`tel:${siteInfo.phone.replace(/\D/g, '')}`}
                  className="font-medium text-cream transition-colors hover:text-gold"
                >
                  {siteInfo.phone}
                </a>
              </p>
            </div>

            <a
              href="#application"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-forest-dark transition-all hover:bg-gold-light sm:w-auto lg:hidden"
            >
              Apply Now
            </a>
          </div>

          <div
            className={`animate-on-scroll lg:col-span-3 ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            <JobApplicationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
