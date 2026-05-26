import { navLinks, siteInfo, socialLinks } from '../data/siteData'

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'instagram') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  }
  if (icon === 'facebook') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.271 19.998c-2.329 0-4.532-.635-6.418-1.745l-.422.422-2.068 2.068a.5.5 0 01-.707-.707l2.068-2.068.422-.422A9.956 9.956 0 012.002 12C2.002 6.477 6.477 2 12 2s9.998 4.477 9.998 9.998c0 5.523-4.475 9.998-9.727 9.998zM8.918 8.5c-.207.507-.317 1.085-.317 1.712 0 2.633 2.134 4.767 4.767 4.767.627 0 1.205-.11 1.712-.317l-1.004-1.004a2.768 2.768 0 01-1.708.586c-1.529 0-2.768-1.239-2.768-2.768 0-.627.213-1.204.586-1.708L8.918 8.5zm6.164 6.164l-1.004-1.004a2.768 2.768 0 001.004-2.124c0-1.529-1.239-2.768-2.768-2.768-.804 0-1.529.344-2.037.892l-1.004-1.004A4.767 4.767 0 0112.368 7.5c2.633 0 4.767 2.134 4.767 4.767 0 1.205-.447 2.305-1.183 3.147z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/10 bg-forest-dark py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p
              className="font-display text-3xl font-semibold text-cream"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {siteInfo.name}
            </p>
            <p className="mt-2 text-sm italic text-cream/50">
              Authentic Irish hospitality in the heart of Maspeth.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gold">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gold">
              Follow Us
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/60 transition-all hover:border-gold hover:text-gold"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mx-auto my-10 max-w-xs" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-cream/40">
            &copy; {year} {siteInfo.name}. All rights reserved. Demo redesign —
            not affiliated with production systems.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-gold/60">
            Irish Pub · Steaks · Chops · Good Craic
          </p>
        </div>
      </div>
    </footer>
  )
}
