const base = import.meta.env.BASE_URL

export function asset(path: string): string {
  return `${base}${path.replace(/^\//, '')}`
}

export const images = {
  logo: asset('images/logo.png'),
  hero: asset('images/dining-room.png'),
  diningRoom: asset('images/dining-room.png'),
  outdoorPatio: asset('images/outdoor-patio.png'),
  interiorOfficial: asset('images/interior-official.jpg'),
  heroOfficial: asset('images/hero-official.jpg'),
  news: asset('images/news.jpg'),
  social: asset('images/social.jpg'),
  menu: {
    steak: asset('images/menu-steak.jpg'),
    chicken: asset('images/menu-chicken.jpg'),
    seafood: asset('images/menu-seafood.jpg'),
    specials: asset('images/menu-specials.jpg'),
    classics: asset('images/menu-classics.jpg'),
  },
  gallery: {
    bar: asset('images/gallery-bar.jpg'),
    brunch: asset('images/gallery-brunch.jpg'),
  },
} as const
