import { useEffect, useState } from 'react'
import Logo from './Logo'
import { navLinks } from '../data/siteData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest-dark/80 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="group flex shrink-0 items-center"
          onClick={handleNavClick}
        >
          <Logo size="nav" className="transition-transform duration-300 group-hover:scale-[1.02]" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium uppercase tracking-widest text-cream/80 transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservations"
              className="rounded-sm border border-gold/60 bg-gold/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-forest-dark"
            >
              Reserve a Table
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-forest-dark/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isOpen ? `${i * 75}ms` : '0ms' }}
            >
              <a
                href={link.href}
                onClick={handleNavClick}
                className="font-display text-3xl text-cream transition-colors hover:text-gold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li
            className={`transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 75}ms` : '0ms' }}
          >
            <a
              href="#reservations"
              onClick={handleNavClick}
              className="mt-4 inline-block rounded-sm border border-gold bg-gold/10 px-8 py-3 text-sm font-medium uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-forest-dark"
            >
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
