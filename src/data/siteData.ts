import { images } from '../utils/images'

export const siteInfo = {
  name: "Connolly's Corner",
  tagline: 'Irish Pub • Steaks • Chops • Chicken • Fish • House Specials',
  address: '71-15 Grand Ave',
  city: 'Maspeth, Queens, NY 11378',
  phone: '(718) 565-7383',
  email: 'hello@connollyscorner.com',
  specialsUrl: 'https://connollyscorner.com/queens-connolly-s-corner-happy-hours-specials',
  jobsUrl:
    'https://tmt.spotapps.co/job-listings?spot_id=6433&callback_url=http%3A%2F%2Fconnollyscorner.com%2F-party',
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
  { label: 'Specials', href: '#specials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Visit', href: '#location' },
]

export interface WeeklySpecial {
  day: string
  title: string
  description: string
  time: string
}

export const weeklySpecials: WeeklySpecial[] = [
  {
    day: 'Monday',
    title: 'Mystery Monday\'s',
    description: 'A surprise special every week — ask your server what\'s on tonight.',
    time: '12:00 PM – 9:00 PM',
  },
  {
    day: 'Tuesday',
    title: 'Beer Garden & Darts',
    description:
      'Come on down and play darts or a game in the renovated outdoor beer garden.',
    time: '12:00 PM – 9:00 PM',
  },
  {
    day: 'Wednesday',
    title: 'Wine Down Wednesday',
    description: 'Half off all bottles of wine.',
    time: '12:00 PM – 9:00 PM',
  },
  {
    day: 'Thursday',
    title: 'Mingo, Bingo & Psychic Dinner',
    description: 'Call to see what\'s new — 718-565-7383.',
    time: '12:00 PM – 10:00 PM',
  },
  {
    day: 'Friday',
    title: 'Sports Night',
    description: 'Catch all your favorite sports on our 14 screens.',
    time: '12:00 PM – 11:00 PM',
  },
  {
    day: 'Saturday',
    title: 'Weekend Brunch',
    description: 'Full brunch menu served in the dining room and bar.',
    time: '11:00 AM – 4:00 PM',
  },
  {
    day: 'Sunday',
    title: 'Weekend Brunch',
    description: 'Full brunch menu served in the dining room and bar.',
    time: '11:00 AM – 4:00 PM',
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
    alt: "Connolly's Corner exterior and neighborhood atmosphere",
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

export const jobOpenings = [
  'Bartender',
  'Busser / Bus Person',
  'Host / Hostess',
  'Line Cook',
  'Prep Cook',
  'Runner',
  'Server',
  'Sous Chef',
]
