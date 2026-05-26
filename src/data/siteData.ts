import { images } from '../utils/images'

export const siteInfo = {
  name: "Connolly's Corner",
  tagline: 'Irish Pub • Steaks • Chops • Chicken • Fish • House Specials',
  address: '71-15 Grand Ave',
  city: 'Maspeth, Queens, NY 11378',
  phone: '(718) 555-0147',
  email: 'hello@connollyscorner.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-73.896!3d40.726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f3c8b8b8b8b%3A0x1234567890abcdef!2s71-15%20Grand%20Ave%2C%20Queens%2C%20NY%2011378!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  hours: [
    { days: 'Monday – Friday', time: 'Open at 12:00 PM' },
    { days: 'Saturday & Sunday', time: 'Brunch 11:00 AM – 4:00 PM' },
    { days: 'Bar', time: 'Open Late' },
  ],
}

export { images }

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve', href: '#reservations' },
  { label: 'Visit', href: '#location' },
]

export const menuCategories = [
  {
    title: 'Steaks & Chops',
    description:
      'Prime cuts, perfectly charred and finished with classic steakhouse technique.',
    image: images.menu.steak,
  },
  {
    title: 'Chicken Dishes',
    description:
      'From Chicken Marsala to Francese — comfort food elevated with Irish hospitality.',
    image: images.menu.chicken,
  },
  {
    title: 'Seafood & Fish',
    description:
      'Fresh catches and coastal flavors, including Cajun-dusted shrimp and daily specials.',
    image: images.menu.seafood,
  },
  {
    title: 'House Specials',
    description:
      "Chef's rotating creations — seasonal ingredients, bold flavors, always memorable.",
    image: images.menu.specials,
  },
  {
    title: 'Pub Classics',
    description:
      'French onion soup, pot pies, and the timeless favorites that keep neighbors coming back.',
    image: images.menu.classics,
  },
]

export const galleryImages = [
  {
    src: images.diningRoom,
    alt: 'Private event dining room with elegant table settings',
    tall: true,
  },
  {
    src: images.outdoorPatio,
    alt: 'Outdoor patio seating with warm evening lighting',
    tall: true,
  },
  {
    src: images.interiorOfficial,
    alt: 'Intimate dining room with burgundy booths and wood tables',
    tall: false,
  },
  {
    src: images.heroOfficial,
    alt: 'Connolly\'s Corner exterior and neighborhood atmosphere',
    tall: false,
  },
  {
    src: images.menu.steak,
    alt: 'Grilled steak with vegetables and mashed potatoes',
    tall: false,
  },
  {
    src: images.menu.seafood,
    alt: 'Cajun-dusted shrimp with corn salsa',
    tall: false,
  },
  {
    src: images.social,
    alt: 'Guests enjoying the warm pub atmosphere',
    tall: true,
  },
  {
    src: images.gallery.bar,
    alt: 'Craft cocktails and spirits at the main bar',
    tall: false,
  },
]

export const socialLinks = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Yelp', href: '#', icon: 'yelp' },
]
