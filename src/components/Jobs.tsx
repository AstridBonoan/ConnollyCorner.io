import type { RefObject } from 'react'
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
            neighborhood Irish pub — apply below and we&apos;ll get back to you
            ASAP.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div
            className={`animate-on-scroll lg:col-span-2 ${isVisible ? 'visible' : ''}`}
          >
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Now Hiring
            </h3>
            <p className="mb-6 text-sm text-cream/60">
              Select a role when you submit your application. Questions?
              Call us at{' '}
              <a
                href={`tel:${siteInfo.phone.replace(/\D/g, '')}`}
                className="text-gold transition-colors hover:text-gold-light"
              >
                {siteInfo.phone}
              </a>
              .
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

            <a
              href={siteInfo.jobsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-forest-dark transition-all hover:bg-gold-light sm:w-auto"
            >
              Apply Now
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

          <div
            className={`animate-on-scroll overflow-hidden rounded-sm border border-cream/10 bg-cream lg:col-span-3 ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            <iframe
              title="Connolly's Corner job application"
              src={siteInfo.jobsUrl}
              className="h-[720px] w-full border-0 md:h-[800px]"
              loading="lazy"
            />
            <p className="border-t border-cream-dark/30 bg-cream px-4 py-3 text-center text-xs text-bark/60">
              Application form powered by SpotHopper.{' '}
              <a
                href={siteInfo.jobsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-bark underline-offset-2 hover:underline"
              >
                Open in a new tab
              </a>{' '}
              if the form doesn&apos;t load.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
