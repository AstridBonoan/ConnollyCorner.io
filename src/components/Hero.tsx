import { siteInfo } from '../data/siteData'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Welcome"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/60 to-forest-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 text-center md:px-8">
        <p
          className="animate-fade-up mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold md:text-sm"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          Maspeth, Queens · Est. Neighborhood Favorite
        </p>

        <h1
          className="animate-fade-up font-display text-5xl font-semibold leading-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            fontFamily: 'var(--font-display)',
            animationDelay: '0.25s',
            animationFillMode: 'both',
          }}
        >
          {siteInfo.name}
        </h1>

        <div
          className="animate-fade-up mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent md:my-8 md:w-32"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        />

        <p
          className="animate-fade-up mx-auto max-w-2xl text-sm font-light uppercase tracking-[0.2em] text-cream/80 sm:text-base md:text-lg"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          {siteInfo.tagline}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-14"
          style={{ animationDelay: '0.65s', animationFillMode: 'both' }}
        >
          <a
            href="#menu"
            className="group relative w-full overflow-hidden rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-forest-dark transition-all hover:bg-gold-light sm:w-auto"
          >
            <span className="relative z-10">View Menu</span>
          </a>
          <a
            href="#reservations"
            className="w-full rounded-sm border border-cream/30 bg-cream/5 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-cream backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/10 hover:text-gold sm:w-auto"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-cream/50 transition-colors hover:text-gold"
        aria-label="Scroll to about section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  )
}
