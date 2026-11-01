/* ==========================================================================
   CAFE #9 — CENTRALIZED MENU DATA
   --------------------------------------------------------------------------
   Every product lives in this one file. To edit the menu, change values here.

   Item shapes:
     1) Single price      -> { name, category, image, description, price: 80 }
     2) Pizza (sizes)     -> { ..., prices: { small: 130, big: 150 } }
     3) Momos (styles)    -> { ..., prices: { steam: 100, fried: 110 } }
     4) Unknown price     -> price: null   (shown as "Price on Request")

   Images: put the file in the /images folder using the exact filename below.
   If an image is missing, the site shows a neat placeholder automatically.
   ========================================================================== */

/* Category buttons (order = order shown on the website).
   "label" is what the customer sees, "key" must match `category` in menuItems. */
const menuCategories = [
  { key: "All",                   label: "All" },
  { key: "Pizza",                 label: "Pizza" },
  { key: "Burgers",               label: "Burgers" },
  { key: "Sandwiches",            label: "Sandwiches" },
  { key: "Maggie",                label: "Maggie" },
  { key: "Manchurian",            label: "Manchurian" },
  { key: "Paneer",                label: "Paneer" },
  { key: "Noodles",               label: "Noodles" },
  { key: "Rice",                  label: "Rice" },
  { key: "Snacks",                label: "Snacks" },
  { key: "Cold Coffee",           label: "Cold Coffee" },
  { key: "Milk Shakes",           label: "Milk Shakes" },
  { key: "Ice Cream & Beverages", label: "Ice Cream & Beverages" },
  { key: "Pasta",                 label: "Pasta" },
  { key: "Momos",                 label: "Momos" }
];

const menuItems = [
  /* ------------------------------ PIZZA (S / B) ------------------------------ */
  { name: "Margherita Pizza",        category: "Pizza", image: "images/margherita-pizza.jpg",        description: "Classic cheese pizza on a soft, fresh base.",            prices: { small: 130, big: 150 } },
  { name: "Simple Veg Pizza",        category: "Pizza", image: "images/simple-veg-pizza.jpg",        description: "Loaded with fresh vegetables and cheese.",               prices: { small: 140, big: 170 } },
  { name: "Cheese Corn Pizza",       category: "Pizza", image: "images/cheese-corn-pizza.jpg",       description: "Sweet corn and melted cheese in every bite.",            prices: { small: 150, big: 180 } },
  { name: "Double Cheese Pizza",     category: "Pizza", image: "images/double-cheese-pizza.jpg",     description: "Extra cheesy for true cheese lovers.",                   prices: { small: 160, big: 220 } },
  { name: "Chocolate Pizza",         category: "Pizza", image: "images/chocolate-pizza.jpg",         description: "A sweet pizza treat with rich chocolate.",               prices: { small: 160, big: 220 } },
  { name: "Paneer Tandoori Pizza",   category: "Pizza", image: "images/paneer-tandoori-pizza.jpg",   description: "Tandoori-flavoured paneer with a smoky finish.",         prices: { small: 180, big: 240 } },
  { name: "Paneer Chilli Pizza",     category: "Pizza", image: "images/paneer-chilli-pizza.jpg",     description: "Spicy chilli paneer on a cheesy base.",                  prices: { small: 180, big: 240 } },
  { name: "Double Cheese Paneer",    category: "Pizza", image: "images/double-cheese-paneer-pizza.jpg", description: "Paneer topping with a double layer of cheese.",       prices: { small: 200, big: 250 } },
  { name: "Farmhouse Pizza",         category: "Pizza", image: "images/farmhouse-pizza.jpg",         description: "A hearty pizza topped with farm-fresh veggies.",         prices: { small: 200, big: 250 } },
  { name: "Special Cafe #9 Pizza",   category: "Pizza", image: "images/special-cafe9-pizza.jpg",     description: "Our signature house special pizza.",                     prices: { small: 220, big: 280 } },

  /* ------------------------------- BURGERS ---------------------------------- */
  { name: "Aloo Patty Burger",       category: "Burgers", image: "images/aloo-patty-burger.jpg",       description: "Crispy aloo patty with fresh toppings.",     price: 80 },
  { name: "Cheese Burger",           category: "Burgers", image: "images/cheese-burger.jpg",           description: "Juicy burger with a slice of melted cheese.", price: 90 },
  { name: "Double Cheese Burger",    category: "Burgers", image: "images/double-cheese-burger.jpg",    description: "Twice the cheese, twice the flavour.",       price: 100 },
  { name: "Cheesy Tandoori Burger",  category: "Burgers", image: "images/cheesy-tandoori-burger.jpg",  description: "Tandoori-spiced burger with cheese.",        price: 100 },
  { name: "Double Patty Burger",     category: "Burgers", image: "images/double-patty-burger.jpg",     description: "Two patties stacked for a bigger bite.",     price: 130 },
  { name: "H.C. Double Patty Burger",category: "Burgers", image: "images/hc-double-patty-burger.jpg",  description: "Double patty burger, loaded and filling.",   price: 130 },
  { name: "Special Cafe #9 Burger",  category: "Burgers", image: "images/special-cafe9-burger.jpg",    description: "Our signature house special burger.",        price: 140 },

  /* ------------------------------ SANDWICHES -------------------------------- */
  { name: "Veg Mayo Sandwich",       category: "Sandwiches", image: "images/veg-mayo-sandwich.jpg",       description: "Fresh veggies with creamy mayo.",            price: 80 },
  { name: "Veg Cheese Grilled",      category: "Sandwiches", image: "images/veg-cheese-grilled.jpg",      description: "Grilled sandwich with veggies and cheese.",  price: 90 },
  { name: "Cheese Chilli Grilled",   category: "Sandwiches", image: "images/cheese-chilli-grilled.jpg",   description: "Cheesy grilled sandwich with a chilli kick.",price: 90 },
  { name: "Cheese Corn Grilled",     category: "Sandwiches", image: "images/cheese-corn-grilled.jpg",     description: "Sweet corn and cheese, grilled golden.",     price: 100 },
  { name: "Paneer Cheese Grilled",   category: "Sandwiches", image: "images/paneer-cheese-grilled.jpg",   description: "Paneer and cheese in a crisp grilled bread.",price: 110 },
  { name: "Corn & Paneer Grilled",   category: "Sandwiches", image: "images/corn-paneer-grilled.jpg",     description: "A tasty mix of sweet corn and paneer.",      price: 120 },
  { name: "Heavy Cheese Grilled",    category: "Sandwiches", image: "images/heavy-cheese-grilled.jpg",    description: "Extra cheese, grilled until gooey.",         price: 130 },
  { name: "Chocolate Sandwich",      category: "Sandwiches", image: "images/chocolate-sandwich.jpg",      description: "A sweet grilled sandwich with chocolate.",   price: 120 },

  /* -------------------------------- MAGGIE ---------------------------------- */
  { name: "Plain Maggie",            category: "Maggie", image: "images/plain-maggie.jpg",   description: "Simple, comforting and always satisfying.", price: 60 },
  { name: "Masala Maggie",           category: "Maggie", image: "images/masala-maggie.jpg",  description: "Maggie with a spicy masala twist.",         price: 70 },
  { name: "Chilli Maggie",           category: "Maggie", image: "images/chilli-maggie.jpg",  description: "A hot and spicy chilli Maggie.",            price: 70 },
  { name: "Cheesy Maggie",           category: "Maggie", image: "images/cheesy-maggie.jpg",  description: "Maggie topped with melted cheese.",         price: 80 },
  { name: "Paneer Maggie",           category: "Maggie", image: "images/paneer-maggie.jpg",  description: "Maggie tossed with soft paneer.",           price: 90 },

  /* ------------------------------ MANCHURIAN -------------------------------- */
  { name: "Veg Manchurian",          category: "Manchurian", image: "images/veg-manchurian.jpg",     description: "Veg balls in a tangy gravy.",           price: 70 },
  { name: "Veg Dry Manchurian",      category: "Manchurian", image: "images/veg-dry-manchurian.jpg", description: "Crispy veg balls, tossed dry.",         price: 70 },

  /* ----------------------------- PANEER SPECIAL ----------------------------- */
  { name: "Veg Paneer",                 category: "Paneer", image: "images/veg-paneer.jpg",                 description: "Paneer cooked in our special style.",       price: 65 },
  { name: "Veg Paneer Dry",             category: "Paneer", image: "images/veg-paneer-dry.jpg",             description: "Dry-style paneer with bold flavours.",      price: 65 },
  { name: "Veg Paneer Manchurian",      category: "Paneer", image: "images/veg-paneer-manchurian.jpg",      description: "Paneer in a tangy Manchurian gravy.",       price: 90 },
  { name: "Veg Paneer Dry Manchurian",  category: "Paneer", image: "images/veg-paneer-dry-manchurian.jpg",  description: "Dry Manchurian-style paneer.",              price: 90 },
  { name: "Veg Paneer Chilli",          category: "Paneer", image: "images/veg-paneer-chilli.jpg",          description: "Spicy chilli paneer with gravy.",           price: 90 },
  { name: "Veg Paneer Chilli Dry",      category: "Paneer", image: "images/veg-paneer-chilli-dry.jpg",      description: "Dry chilli paneer, hot and crispy.",        price: 90 },

  /* -------------------------------- NOODLES --------------------------------- */
  { name: "Veg Noodles",             category: "Noodles", image: "images/veg-noodles.jpg",            description: "Classic noodles tossed with vegetables.",   price: 70 },
  { name: "Veg Hakka Noodles",       category: "Noodles", image: "images/veg-hakka-noodles.jpg",      description: "Street-style Hakka noodles.",               price: 80 },
  { name: "Veg Shezwan Noodles",     category: "Noodles", image: "images/veg-shezwan-noodles.jpg",    description: "Spicy noodles with Shezwan sauce.",         price: 80 },
  { name: "Veg Manchurian Noodles",  category: "Noodles", image: "images/veg-manchurian-noodles.jpg", description: "Noodles served with Manchurian flavours.",  price: 90 },
  { name: "Veg Paneer Noodles",      category: "Noodles", image: "images/veg-paneer-noodles.jpg",     description: "Noodles tossed with soft paneer.",          price: 100 },

  /* --------------------------------- RICE ----------------------------------- */
  { name: "Veg Fried Rice",          category: "Rice", image: "images/veg-fried-rice.jpg",          description: "Fragrant fried rice with vegetables.",      price: 60 },
  { name: "Veg Shezwan Rice",        category: "Rice", image: "images/veg-shezwan-rice.jpg",        description: "Spicy fried rice with Shezwan sauce.",      price: 70 },
  { name: "Veg Paneer Rice",         category: "Rice", image: "images/veg-paneer-rice.jpg",         description: "Fried rice with soft paneer cubes.",        price: 90 },
  { name: "Veg Manchurian Rice",     category: "Rice", image: "images/veg-manchurian-rice.jpg",     description: "Rice paired with Manchurian flavours.",     price: 90 },

  /* --------------------------------- SNACKS --------------------------------- */
  { name: "Simple Fries",            category: "Snacks", image: "images/simple-fries.jpg",            description: "Crispy golden fries.",                      price: 80 },
  { name: "Chat Masala Fries",       category: "Snacks", image: "images/chat-masala-fries.jpg",       description: "Fries dusted with tangy chat masala.",      price: 90 },
  { name: "Peri Peri Fries",         category: "Snacks", image: "images/peri-peri-fries.jpg",         description: "Fries with a zesty peri peri seasoning.",   price: null },
  { name: "Peri Peri with Tandoori", category: "Snacks", image: "images/peri-peri-tandoori-fries.jpg",description: "Peri peri fries with a tandoori twist.",    price: null },
  { name: "Aloo Tikki",              category: "Snacks", image: "images/aloo-tikki.jpg",              description: "Crispy, spiced potato tikki.",              price: null },

  /* ------------------------------ COLD COFFEE ------------------------------- */
  { name: "Thick Cold Coffee",                 category: "Cold Coffee", image: "images/thick-cold-coffee.jpg",                 description: "Rich, thick and chilled.",                     price: 70 },
  { name: "Thick Cold Coffee with Ice Cream",  category: "Cold Coffee", image: "images/thick-cold-coffee-ice-cream.jpg",       description: "Thick cold coffee topped with ice cream.",     price: 80 },
  { name: "Cold Coffee",                       category: "Cold Coffee", image: "images/cold-coffee.jpg",                       description: "A refreshing classic cold coffee.",            price: null },
  { name: "Other Cold Coffee Special",         category: "Cold Coffee", image: "images/cold-coffee-special.jpg",               description: "Our other cold coffee specials.",              price: null },

  /* ------------------------------ MILK SHAKES ------------------------------- */
  { name: "Chocolate Milkshake",     category: "Milk Shakes", image: "images/chocolate-milkshake.jpg", description: "Creamy chocolate shake.",                 price: 90 },
  { name: "Pineapple Milkshake",     category: "Milk Shakes", image: "images/pineapple-milkshake.jpg", description: "Fruity, refreshing pineapple shake.",     price: 90 },
  { name: "Strawberry Milkshake",    category: "Milk Shakes", image: "images/strawberry-milkshake.jpg",description: "Sweet and creamy strawberry shake.",      price: 90 },
  { name: "Oreo Milkshake",          category: "Milk Shakes", image: "images/oreo-milkshake.jpg",      description: "Blended with crunchy Oreo cookies.",      price: 110 },
  { name: "Kitkat Milkshake",        category: "Milk Shakes", image: "images/kitkat-milkshake.jpg",    description: "Blended with crunchy Kitkat.",            price: 110 },
  { name: "Cad B Milkshake",         category: "Milk Shakes", image: "images/cad-b-milkshake.jpg",     description: "A thick, indulgent chocolate shake.",     price: 130 },

  /* ------------------------ ICE CREAM & BEVERAGES --------------------------- */
  { name: "Chocolate Ice Cream",     category: "Ice Cream & Beverages", image: "images/chocolate-ice-cream.jpg",   description: "Classic chocolate ice cream.",            price: null },
  { name: "Rajbhog Ice Cream",       category: "Ice Cream & Beverages", image: "images/rajbhog-ice-cream.jpg",     description: "Rich, traditional Rajbhog flavour.",      price: null },
  { name: "Matka Ice Cream",         category: "Ice Cream & Beverages", image: "images/matka-ice-cream.jpg",       description: "Ice cream served in a traditional matka.",price: null },
  { name: "Special #9 Ice Cream",    category: "Ice Cream & Beverages", image: "images/special-9-ice-cream.jpg",   description: "Our signature house special ice cream.",  price: null },
  { name: "Water Bottle",            category: "Ice Cream & Beverages", image: "images/water-bottle.jpg",          description: "Packaged drinking water.",                price: null },
  { name: "Redbull",                 category: "Ice Cream & Beverages", image: "images/redbull.jpg",               description: "Chilled energy drink.",                   price: null },
  { name: "Sting",                   category: "Ice Cream & Beverages", image: "images/sting.jpg",                 description: "Chilled energy drink.",                   price: null },
  { name: "Pepsi",                   category: "Ice Cream & Beverages", image: "images/pepsi.jpg",                 description: "Chilled soft drink.",                     price: null },

  /* --------------------------------- PASTA ---------------------------------- */
  { name: "Red Sauce Pasta",         category: "Pasta", image: "images/red-sauce-pasta.jpg",   description: "Pasta in a tangy tomato sauce.",            price: 100 },
  { name: "White Sauce Pasta",       category: "Pasta", image: "images/white-sauce-pasta.jpg", description: "Pasta in a creamy white sauce.",            price: 110 },

  /* ------------------------------ MOMOS (Steam / Fried) --------------------- */
  { name: "Veg Momos",               category: "Momos", image: "images/veg-momos.jpg",          description: "Soft momos with a veg filling.",          prices: { steam: 100, fried: 110 } },
  { name: "Paneer Momos",            category: "Momos", image: "images/paneer-momos.jpg",       description: "Momos stuffed with paneer.",              prices: { steam: 110, fried: 120 } },
  { name: "Cheese Corn Momos",       category: "Momos", image: "images/cheese-corn-momos.jpg",  description: "Cheesy corn filling in every bite.",      prices: { steam: 120, fried: 130 } }
];
