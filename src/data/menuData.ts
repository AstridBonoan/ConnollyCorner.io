import { images } from '../utils/images'

export interface MenuItem {
  name: string
  description?: string
  price?: string
}

export interface MenuCategory {
  title: string
  note?: string
  items: MenuItem[]
}

export interface MenuTab {
  id: string
  title: string
  subtitle?: string
  image: string
  categories: MenuCategory[]
}

export const menuTabs: MenuTab[] = [
  {
    id: 'brunch',
    title: 'Brunch',
    subtitle: 'Sat & Sun · 11:00 AM – 4:00 PM',
    image: images.gallery.brunch,
    categories: [
      {
        title: 'From the Griddle',
        items: [
          { name: 'Eggs Benedict', description: 'Two lightly poached eggs & Canadian bacon on toasted English muffins w/ hollandaise sauce' },
          { name: 'Build Your Own Omelet', description: 'Choice of three fillings: cheese, mushrooms, broccoli, tomatoes, onions, spinach, ham, peppers, bacon or sausage. Served w/ home fries' },
          { name: 'Breakfast Wrap', description: 'Scrambled eggs, melted cheddar cheese, choice of bacon or Canadian bacon, served w/ french fries' },
          { name: 'Fish & Chips', description: 'Bass Ale battered cod, w/ homemade coleslaw, tartar sauce & FF' },
          { name: 'Chicken Panini', description: 'Blackened breast of chicken, avocado, melted mozzarella cheese, chipotle mayo, choice of small salad, french fries or sweet potato fries' },
          { name: 'Steak & Eggs', description: 'Grilled 8 oz. NY shell steak served w/ two eggs any style, choice of home fries or french fries' },
          { name: 'Thick Cut French Toast', description: 'Homemade strawberry butter, fresh berries, homemade whipped cream & maple syrup' },
          { name: 'Traditional Irish Breakfast', description: 'Two eggs your way, rashers, bangers, black & white puddings, served w/ french fries' },
          { name: 'Blackened Chicken Quesadilla', description: 'Cajun grilled chicken, sautéed onions, cheddar & pepper jack cheeses in a flour tortilla' },
          { name: 'Avocado Toast', description: 'Whole grain toast topped w/ guacamole, smoked salmon & two sunny side eggs' },
          { name: 'Crab Cake Benedict', description: 'Fresh spinach, topped w/ two homemade crab cakes, two poached eggs, hollandaise sauce, served w/ home fries & tossed salad' },
          { name: 'Steak Panini', description: '8 oz. Black Angus shell steak, crispy onions, pesto mayo, pepper jack cheese, choice of FF, sweet potato fries or small salad' },
          { name: 'Belgian Waffle', description: 'Topped w/ fresh berries, homemade whipped cream, scoop of vanilla ice cream' },
          { name: 'Banana Walnut Buttermilk Pancakes', description: 'Strawberry honey butter, maple syrup, choice of ham, bacon or sausage' },
          { name: 'Louisiana Cajun Chicken Sandwich', description: 'Blackened chicken breast, melted cheddar cheese & chipotle mayo' },
          { name: 'Hickory Burger', description: 'Grilled Black Angus burger topped w/ Canadian bacon, melted cheddar cheese & onion, homemade hickory BBQ sauce, FF or sweet potato fries' },
          { name: "Shepherd's Pie", description: 'Ground beef, onions, carrots & sweet peas, topped w/ toasted mashed potatoes' },
        ],
      },
      {
        title: 'From the Salad Bar',
        note: 'Salad additions: steak, salmon, shrimp, grilled chicken',
        items: [
          { name: "Connolly's House Salad", description: 'Mesclun greens, tomatoes, red onion, cucumbers, crispy fried leeks, choice of dressing' },
          { name: 'Santa Fe Chicken Salad', description: 'Mixed greens, tomatoes, cucumbers, red onion, shredded cheddar, tortilla strips, ranch dressing, grilled or blackened chicken' },
          { name: 'Portobello Mushroom Salad', description: 'Warm marinated portobello mushroom, mixed greens, goat cheese & crispy fried leeks, drizzled in a light balsamic dressing' },
          { name: 'Cobb Salad', description: 'Mesclun greens, avocado, tomatoes, bacon, hard-boiled egg, grilled chicken breast, crumbled bleu cheese, choice of dressing' },
          { name: 'Caesar Salad', description: 'Crisp Romaine lettuce, herb croutons' },
          { name: 'Roasted Beet Salad', description: 'Mixed greens, fresh roasted beets, candied walnuts & crumbled goat cheese' },
        ],
      },
      {
        title: "Connolly's Classics",
        items: [
          { name: 'Hickory Burger', description: 'Grilled burger topped w/ Canadian bacon, melted cheddar cheese & onion, homemade hickory BBQ sauce, french fries or sweet potato fries' },
          { name: "Shepherd's Pie", description: 'Ground beef, onion, carrots & sweet peas, topped w/ toasted mashed potatoes' },
          { name: 'Fish & Chips', description: 'Bass ale battered cod, w/ homemade coleslaw, tartar sauce & french fries' },
          { name: 'Stack of BBQ Baby Back Ribs', description: 'Homemade coleslaw' },
        ],
      },
      {
        title: 'Build Your Own Burger',
        items: [
          { name: "Matt's 1/2 Lb. Charbroiled Black Angus Burger", description: 'Toppings: crispy bacon, sautéed onion, cheese, mushrooms' },
        ],
      },
    ],
  },
  {
    id: 'lunch',
    title: 'Lunch',
    image: images.menu.classics,
    categories: [
      {
        title: 'Appetizers',
        items: [
          { name: "Nick's Nachos", description: 'Chicken, beef or pulled pork, served w/ sour cream, shredded cheddar, pico de gallo & guacamole' },
          { name: 'Crispy Fried Calamari', description: 'Spicy marinara & chipotle sauces' },
          { name: 'Cajun Dusted Shrimp & Corn Salsa', description: 'Mixed greens, corn salsa & garlic mayo' },
          { name: "Connolly's Signature BBQ Ribs", description: '(Half rack) served w/ homemade coleslaw' },
          { name: 'Wings', description: 'Thai chili, BBQ or buffalo. Served w/ carrots, celery sticks & bleu cheese' },
        ],
      },
      {
        title: 'Soups',
        items: [
          { name: 'French Onion', description: 'Toasted croutons & melted swiss cheese' },
          { name: 'Soup Du Jour' },
        ],
      },
      {
        title: 'Entrée Salads',
        note: 'Salad additions: steak, salmon, shrimp, grilled chicken',
        items: [
          { name: 'House Salad', description: 'Mesclun greens, tomatoes, red onions, cucumbers, crispy fried leeks, choice of dressing' },
          { name: 'Classic Caesar Salad', description: 'Chopped hearts of romaine, parmesan croutons & traditional caesar dressing' },
          { name: 'Santa Fe Chicken Salad', description: 'Mesclun greens, tomatoes, cucumbers, red onions, shredded cheddar, tortilla strips, ranch dressing, grilled or blackened chicken' },
          { name: 'Cobb Salad', description: 'Mesclun greens, avocado, tomatoes, bacon, hard-boiled egg, grilled chicken breast, crumbled bleu cheese & choice of dressing' },
          { name: 'Portobello Mushroom Salad', description: 'Warm marinated portobello mushrooms, mixed greens, goat cheese & crispy fried leeks, drizzled with a light balsamic dressing' },
        ],
      },
      {
        title: 'Sandwiches',
        note: 'All sandwiches served w/ french fries (substitute truffle fries)',
        items: [
          { name: 'Hickory Burger', description: 'Grilled burger topped w/ Canadian bacon, melted cheddar cheese, sautéed onions & homemade hickory BBQ sauce' },
          { name: 'Chicken Sandwich', description: 'Grilled breast of chicken, roasted peppers, melted fresh mozzarella & balsamic glaze' },
          { name: "Matt's 1/2 Lb. Black Angus Burger", description: 'Toasted bun, lettuce, tomato, red onions & pickle spear. Additional toppings (add $1 ea): cheese, sautéed onions, mushrooms, bacon, avocado' },
          { name: 'Pulled Pork Sandwich', description: 'Shredded pork in BBQ sauce, coleslaw, pickle chips' },
        ],
      },
      {
        title: 'Entrees',
        items: [
          { name: 'Irish Style Chicken Curry', description: 'Sweet peas & onions w/ your choice of rice, french fries or half & half' },
          { name: 'Fish & Chips', description: 'Bass ale battered cod w/ coleslaw' },
          { name: "Traditional Shepherd's Pie", description: 'Ground beef w/ onions, carrots & sweet peas topped w/ toasted mashed potatoes' },
          { name: 'Steak Tidbits', description: 'Open-faced garlic bread, bite-size steak topped w/ melted mozzarella (add sautéed onions)' },
          { name: 'Blackened Chicken Quesadilla', description: 'Cajun grilled chicken, sautéed onions, cheddar & pepper jack cheeses in a flour tortilla' },
        ],
      },
    ],
  },
  {
    id: 'bar',
    title: 'Bar Menu',
    image: images.gallery.bar,
    categories: [
      {
        title: 'Snacks',
        items: [
          { name: 'Vegetable Spring Rolls', description: 'Ginger soy dipping sauce' },
          { name: 'Creamy Spinach & Artichoke Dip', description: 'Choice of garlic croutons or nachos' },
          { name: 'Wings', description: 'Buffalo, Thai chili, garlic parmesan, BBQ, honey garlic, mango habanero, sriracha ranch, honey mustard. Served w/ carrots, celery sticks & bleu cheese' },
          { name: 'Mussels Ways', description: 'Fra diablo, white wine & garlic or Belgian ale, shallots & gorgonzola cheese' },
          { name: "Nick's Nachos", description: 'Chicken, beef or plain, served w/ sour cream, shredded cheddar, pico de gallo & guacamole' },
          { name: 'Sampler Platter', description: 'Combination of buffalo wings, loaded potato skins, mozzarella sticks & chicken fingers' },
          { name: 'Crab Cakes', description: 'Lemon oregano aioli & mixed greens' },
          { name: 'Stack of BBQ Baby Back Ribs', description: 'Half rack, falling off the bone, tender, served w/ coleslaw — best ribs in Queens' },
          { name: 'Garlic Mushrooms', description: 'Deep fried w/ light garlic mayo' },
          { name: 'Crispy Fried Calamari', description: 'Spicy marinara & chipotle sauces' },
          { name: 'Jumbo Shrimp', description: 'Cocktail' },
        ],
      },
      {
        title: 'Sandwiches',
        note: 'All sandwiches served w/ french fries (substitute truffle fries)',
        items: [
          { name: "Matt's 1/2 Lb. Black Angus Burger", description: 'Toasted bun, lettuce, tomato, red onions & pickle spear. Additional toppings: cheese, sautéed onions, mushrooms, bacon, avocado' },
          { name: 'Buffalo Chicken Sandwich', description: 'Panko crusted chicken, buffalo sauce, lettuce, tomato & bleu cheese' },
          { name: 'Blackened Chicken Quesadilla', description: 'Cajun grilled chicken, sautéed onions, cheddar & pepper jack cheeses in a flour tortilla, served w/ pico de gallo, guacamole & sour cream' },
          { name: 'Hickory Burger', description: 'Grilled burger topped w/ Canadian bacon, melted cheddar cheese, sautéed onions & homemade hickory BBQ sauce' },
          { name: 'Steak Tidbits', description: 'Open-faced garlic bread, bite-size steak topped w/ melted mozzarella or provolone (add sautéed mushrooms or onions)' },
        ],
      },
      {
        title: "Connolly's Classics",
        items: [
          { name: "Traditional Shepherd's Pie", description: 'Ground beef w/ onions, carrots & sweet peas topped w/ toasted mashed potatoes' },
          { name: 'Irish Style Chicken Curry', description: 'Sweet peas & onions w/ your choice of rice, french fries or half & half' },
        ],
      },
    ],
  },
  {
    id: 'party',
    title: 'Shower / Party',
    image: images.diningRoom,
    categories: [
      {
        title: 'Buffet Menu — Appetizers',
        items: [
          { name: 'Mixed Greens House Salad', description: 'Herb-balsamic vinaigrette' },
        ],
      },
      {
        title: 'Buffet Menu — Entrees',
        note: 'Please choose four items. All buffets are served with roasted potato or rice and fresh vegetables',
        items: [
          { name: 'Sliced Loin of Pork', description: 'Topped with rosemary gravy' },
          { name: 'Jameson Chicken', description: 'Pan seared breast of chicken, Jameson Irish whiskey mushroom cream sauce' },
          { name: 'Chicken Francaise', description: 'In a lemon butter sauce' },
          { name: 'Sausage and Peppers', description: 'Sweet peppers and sweet Italian sausage' },
          { name: 'Pernil', description: 'Slow-roasted pork shoulder with crispy skin' },
          { name: 'Eggplant Rollatini', description: 'Ricotta cheese and spinach, light tomato basil sauce' },
          { name: 'Penne ala Vodka', description: 'With homemade vodka sauce' },
          { name: 'Beef or Cheese Ravioli', description: 'Served with marinara, bolognese or vodka sauce' },
          { name: 'Seafood Pasta', description: 'Pasta with shrimp, calamari and bay scallops tossed in a light tomato basil sauce' },
          { name: "Shepherd's Pie", description: 'Ground beef and vegetables — topped with mashed potatoes' },
          { name: 'Chicken Marsala', description: 'Sautéed breast of chicken in a marsala wine sauce' },
          { name: 'Sautéed Breast of Chicken', description: 'Wild mushroom, a touch of cream sherry wine reduction' },
          { name: 'Baked Ziti', description: 'Baked with cheese and fresh tomato sauce' },
          { name: 'Beef or Vegetable Lasagna' },
          { name: 'Mixed Vegetable Medley', description: 'Steamed tray of seasonal vegetables' },
          { name: "Connolly's Corner Personalized Cake", description: 'Add $4.50 pp' },
        ],
      },
      {
        title: 'Beverage Packages',
        note: 'Please select one beverage package',
        items: [
          { name: 'Premium Open Bar', price: '$32.95', description: 'Unlimited drinks: premium call brand liquors, bottled and draft beer (pick 4 brands), house wine and soda' },
          { name: 'Domestic Beer, Wine and Soda', price: '$26.95', description: 'Domestic draft beers, house wines, and soda' },
          { name: 'Imported and Domestic Beer, Wine and Soda', price: '$26.95', description: 'Bottled beer and draft beer (pick 4 brands), house wine and sodas' },
          { name: 'Soda Package', price: '$9.95', description: 'Unlimited soda, tea or coffee' },
          { name: 'Running Bar Tab', description: 'Pay per consumption / alcoholic beverages' },
        ],
      },
    ],
  },
  {
    id: 'bereavement',
    title: 'Bereavement',
    image: images.interiorOfficial,
    categories: [
      {
        title: 'Appetizers',
        items: [
          { name: 'Mixed Greens House Salad', description: 'Herb-balsamic vinaigrette' },
        ],
      },
      {
        title: 'Entrees',
        note: 'Accompanied by mashed potato & seasonal vegetable where appropriate',
        items: [
          { name: 'Slow Braised Pot Roast', description: 'Braised with red wine until fork tender' },
          { name: 'Chicken Francese', description: 'Boneless breast sautéed in a lemon-white wine butter sauce' },
          { name: 'Penne ala Vodka', description: 'Rich tomato cream sauce' },
          { name: 'Big Caesar Salad', description: 'Served with grilled chicken' },
          { name: 'Grilled 12 oz NY Shell Steak', description: 'Topped with crispy fried onions and merlot wine sauce (add $9 pp)', price: '+$9.00' },
          { name: 'Pan Seared Filet of Atlantic Salmon', description: "Bailey's Irish cream and roasted garlic sauce" },
          { name: "Shepherd's Pie", description: 'Ground beef and vegetables, topped with mashed potatoes' },
          { name: 'Brewed Coffee & Tea Service' },
          { name: "Chef's Choice of Dessert", description: 'Add $4 pp' },
        ],
      },
    ],
  },
  {
    id: 'dinner',
    title: 'Dinner',
    image: images.menu.steak,
    categories: [
      {
        title: 'Starters',
        items: [
          { name: 'Crispy Fried Calamari', description: 'Spicy marinara & chipotle sauces' },
          { name: 'Sautéed Buffalo Shrimp & Calamari', description: 'Creamy Buffalo bleu cheese sauce' },
          { name: 'Shrimp Cocktail', description: 'Jumbo chilled shrimp, cocktail sauce, lemon' },
          { name: "Nick's Nachos", description: 'Shredded cheddar, sour cream, pico de gallo & guacamole (add beef or chicken $3.95)' },
          { name: 'Classic French Onion Soup', description: 'Toasted croutons & melted Swiss cheese' },
          { name: 'BBQ Baby Back Ribs', description: 'Homemade coleslaw' },
          { name: 'Creamy Spinach & Artichoke Dip', description: 'Served with nachos' },
          { name: 'Vegetable Spring Rolls', description: 'Ginger soy dipping sauce' },
          { name: 'Quesadilla', description: 'Cheddar & pepper jack cheeses, sautéed onions, pico de gallo, salsa verde, guacamole & sour cream. Grilled or blackened chicken $14.95, steak $17.95, veggie $11.95' },
          { name: 'Wings', description: 'Buffalo mild, medium or hot, teriyaki, honey mustard, Thai chili BBQ, sriracha ranch, honey garlic, mango habanero, garlic parmesan. Served w/ carrots, celery sticks & bleu cheese' },
        ],
      },
      {
        title: 'Entrées',
        note: 'All entrées include mixed vegetables & potato. Add a cup of soup du jour, small house salad or Caesar salad for $5',
        items: [
          { name: 'Tuscan Chicken', description: 'Pan-seared breast of chicken, roasted red peppers, fresh spinach, sherry wine sauce' },
          { name: 'Jameson Chicken', description: 'Pan-seared breast of chicken, Jameson® Irish Whiskey mushroom cream sauce' },
          { name: 'Chicken Marsala', description: 'Sautéed breast of chicken in a marsala wine mushroom sauce' },
          { name: 'Chicken Francaise', description: 'Lightly battered breast of chicken in a white wine lemon-butter sauce' },
          { name: 'Charbroiled 14 oz. NY Black Angus Strip Steak', description: 'Topped with crispy onions, baked stuffed potato' },
          { name: 'Atlantic Salmon', description: 'Choice of simply grilled or herb-crusted with light Dijon mustard sauce on the side' },
          { name: 'Fish & Chips', description: 'Tartar sauce, homemade coleslaw, french fries' },
        ],
      },
      {
        title: "Connolly's Classics",
        items: [
          { name: "Connolly's 1/2 Lb. Charbroiled Black Angus Burger", description: 'Toasted bun, lettuce, tomato & pickle, french fries or hand-cut sweet potato fries. Toppings ($1.50 ea): avocado, sautéed onions, bacon, mushrooms, jalapeños, cheese' },
          { name: 'Hickory Burger', description: 'Grilled Black Angus burger topped with Canadian bacon, melted cheddar cheese, onions, homemade hickory BBQ sauce, french fries or sweet potato fries' },
          { name: 'Fresh Ground Chicken Burger', description: 'Toasted bun, lettuce, tomato, chipotle mayo, french fries' },
          { name: "Connolly's Signature BBQ Ribs", description: 'Full rack, fall off the bone, coleslaw' },
          { name: 'Steak Tidbits', description: 'Crispy, open-faced garlic bread, bite-sized steak, melted mozzarella cheese, potato wedges' },
          { name: 'Slow Roasted Pot Roast', description: 'Fork tender, carrots & parsnips, mashed potatoes' },
          { name: 'Irish Style Chicken Curry', description: 'Choice of rice, french fries or half & half' },
          { name: "Traditional Shepherd's Pie", description: 'Onions, carrots & sweet peas topped with toasted mashed potatoes' },
          { name: 'Penne Alla Vodka', description: 'Garlic wedges' },
          { name: 'Grand Avenue Pasta', description: 'Linguine with sautéed chicken strips, green peas, fresh mozzarella in a light, creamy tomato sauce' },
          { name: 'Traditional Jumbo Shrimp Scampi', description: 'Four succulent jumbo shrimp, white wine-lemon-butter sauce with linguini' },
        ],
      },
      {
        title: 'Salads',
        note: 'Additions: grilled chicken, grilled salmon, steak, grilled or chilled shrimp — $10',
        items: [
          { name: 'Caesar Salad', description: 'Crispy Romaine lettuce, herb croutons' },
          { name: 'House Salad', description: 'Mixed greens, tomatoes, shredded carrots, red onions, cucumbers, topped with crispy fried leeks' },
          { name: 'Santa Fe Chicken Salad', description: 'Mixed greens, tomatoes, cucumbers, red onions, shredded cheddar, sweet corn, tortilla strips, grilled or blackened chicken, ranch dressing' },
          { name: 'Portobello Mushroom Salad', description: 'Warm marinated portobello mushrooms, mixed greens, fried goat cheese & crispy fried leeks, housemade balsamic drizzle' },
          { name: 'Roasted Beet Salad', description: 'Mixed greens, fresh roasted beets, candied walnuts & crumbled goat cheese' },
        ],
      },
      {
        title: 'Sides',
        note: '$7 ea · Gluten free pasta available upon request',
        items: [
          { name: 'French Fries' },
          { name: 'Cheese Fries' },
          { name: 'Curry Fries' },
          { name: 'Baked Potato' },
          { name: 'Sweet Potato Fries' },
          { name: 'Mashed Potatoes' },
          { name: 'Seasoned Rice' },
          { name: 'Irish Beans' },
          { name: 'Coleslaw' },
          { name: 'Roasted Beets' },
          { name: 'Mixed Vegetable' },
        ],
      },
      {
        title: "Kid's Corner",
        note: 'All kid\'s meals $15.95 — includes unlimited beverages & a scoop of ice cream',
        items: [
          { name: 'Chicken Fingers' },
          { name: 'Grilled Cheese' },
          { name: 'Mac & Cheese' },
          { name: 'Hamburger Sliders (2)' },
          { name: 'Pasta w/ Butter or Marinara Sauce' },
        ],
      },
    ],
  },
]
