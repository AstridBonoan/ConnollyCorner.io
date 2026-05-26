import { images } from '../utils/images'

export const siteInfo = {
  name: "Connolly's Corner",
  tagline: 'Irish Pub • Steaks • Chops • Chicken • Fish • House Specials',
  address: '71-15 Grand Ave',
  city: 'Maspeth, Queens, NY 11378',
  phone: '(718) 565-7383',
  email: 'hello@connollyscorner.com',
  menuUrl: 'https://connollyscorner.com/queens-connolly-s-corner-food-menu',
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

export interface MenuItem {
  name: string
  description: string
}

export interface MenuSection {
  id: string
  title: string
  subtitle?: string
  image: string
  items: MenuItem[]
}

export const menuSections: MenuSection[] = [
  {
    id: 'brunch',
    title: 'Brunch',
    subtitle: 'Sat & Sun · 11:00 AM – 4:00 PM',
    image: images.gallery.brunch,
    items: [
      {
        name: 'Eggs Benedict',
        description:
          'Two lightly poached eggs & Canadian bacon on toasted English muffins w/ hollandaise sauce',
      },
      {
        name: 'Steak & Eggs',
        description:
          'Grilled 8 oz. NY shell steak w/ two eggs any style, home fries or french fries',
      },
      {
        name: 'Traditional Irish Breakfast',
        description:
          'Two eggs your way, rashers, bangers, black & white puddings, french fries',
      },
      {
        name: 'Crab Cake Benedict',
        description:
          'Fresh spinach, homemade crab cakes, poached eggs, hollandaise, home fries & salad',
      },
      {
        name: 'Belgian Waffle',
        description:
          'Fresh berries, homemade whipped cream, scoop of vanilla ice cream',
      },
      {
        name: 'Avocado Toast',
        description:
          'Whole grain toast w/ guacamole, smoked salmon & two sunny side eggs',
      },
    ],
  },
  {
    id: 'starters',
    title: 'Starters',
    image: images.menu.seafood,
    items: [
      {
        name: 'Cajun Dusted Shrimp & Corn Salsa',
        description: 'Mixed greens, corn salsa & garlic mayo',
      },
      {
        name: 'Crispy Fried Calamari',
        description: 'Spicy marinara & chipotle sauces',
      },
      {
        name: 'Connolly\'s Signature BBQ Ribs',
        description: 'Half rack, fall-off-the-bone tender, homemade coleslaw',
      },
      {
        name: 'Classic French Onion Soup',
        description: 'Toasted croutons & melted Swiss cheese',
      },
      {
        name: 'Wings',
        description:
          'Buffalo, Thai chili, BBQ, honey garlic, mango habanero & more — carrots, celery & bleu cheese',
      },
      {
        name: 'Nick\'s Nachos',
        description:
          'Chicken, beef or pulled pork w/ sour cream, cheddar, pico de gallo & guacamole',
      },
    ],
  },
  {
    id: 'entrees',
    title: 'Entrées',
    subtitle: 'Steaks · Chicken · Fish',
    image: images.menu.steak,
    items: [
      {
        name: 'Charbroiled 14 oz. NY Black Angus Strip Steak',
        description: 'Topped with crispy onions, baked stuffed potato',
      },
      {
        name: 'Chicken Marsala',
        description: 'Sautéed breast of chicken in a marsala wine mushroom sauce',
      },
      {
        name: 'Chicken Francaise',
        description:
          'Lightly battered breast of chicken in a white wine lemon-butter sauce',
      },
      {
        name: 'Jameson Chicken',
        description:
          'Pan-seared breast of chicken, Jameson® Irish Whiskey mushroom cream sauce',
      },
      {
        name: 'Atlantic Salmon',
        description:
          'Simply grilled or herb-crusted with light Dijon mustard sauce',
      },
      {
        name: 'Fish & Chips',
        description: 'Tartar sauce, homemade coleslaw, french fries',
      },
    ],
  },
  {
    id: 'classics',
    title: "Connolly's Classics",
    image: images.menu.classics,
    items: [
      {
        name: "Matt's 1/2 Lb. Charbroiled Black Angus Burger",
        description: 'Toasted bun, lettuce, tomato & pickle, french fries or sweet potato fries',
      },
      {
        name: 'Hickory Burger',
        description:
          'Canadian bacon, melted cheddar, onions, homemade hickory BBQ sauce',
      },
      {
        name: 'Traditional Shepherd\'s Pie',
        description:
          'Ground beef w/ onions, carrots & sweet peas topped w/ toasted mashed potatoes',
      },
      {
        name: 'Irish Style Chicken Curry',
        description: 'Sweet peas & onions — choice of rice, french fries or half & half',
      },
      {
        name: 'Slow Roasted Pot Roast',
        description: 'Fork tender, carrots & parsnips, mashed potatoes',
      },
      {
        name: 'Penne Alla Vodka',
        description: 'Rich tomato cream sauce, garlic wedges',
      },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    image: images.menu.specials,
    items: [
      {
        name: 'Roasted Beet Salad',
        description:
          'Mixed greens, fresh roasted beets, candied walnuts & crumbled goat cheese',
      },
      {
        name: 'Cobb Salad',
        description:
          'Avocado, tomatoes, bacon, hard-boiled egg, grilled chicken, bleu cheese',
      },
      {
        name: 'Santa Fe Chicken Salad',
        description:
          'Mixed greens, cheddar, tortilla strips, ranch — grilled or blackened chicken',
      },
      {
        name: 'Portobello Mushroom Salad',
        description:
          'Warm marinated portobello, mixed greens, goat cheese & balsamic drizzle',
      },
      {
        name: 'Caesar Salad',
        description: 'Crisp Romaine lettuce, herb croutons, traditional caesar dressing',
      },
    ],
  },
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
