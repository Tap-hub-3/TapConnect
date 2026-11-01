# CAFE #9 — Digital Menu Website

Resto & Chinese Center · Front of SGGS College, Vishnupuri, Nanded
Built with plain HTML5, CSS3 and Vanilla JavaScript (no frameworks).

## How to run

Double-click `index.html`. It opens directly in any browser. No server or install needed.

To put it online, upload the whole `cafe9` folder to any web host (Netlify, GitHub Pages, etc.).

## Where to place your logo

Save your logo as **`images/logo.png`**. It is used in the header, footer and browser tab. Its original aspect ratio is kept automatically.

## Where to place product images

Put every food photo in the **`images/`** folder, using the exact filename listed in `js/menuData.js` (for example `images/margherita-pizza.jpg`).

- Missing images show a neat placeholder, so the site never looks broken.
- To replace a photo, just overwrite the file with the same name.
- Hero (top banner) photo: `images/hero-food.jpg`. If it is missing, the Margherita pizza photo is used.
- Tip: use landscape photos (about 600 × 450 px, under 150 KB) for fast loading.

### Image filenames

| Category | Files |
|---|---|
| Pizza | margherita-pizza, simple-veg-pizza, cheese-corn-pizza, double-cheese-pizza, chocolate-pizza, paneer-tandoori-pizza, paneer-chilli-pizza, double-cheese-paneer-pizza, farmhouse-pizza, special-cafe9-pizza |
| Burgers | aloo-patty-burger, cheese-burger, double-cheese-burger, cheesy-tandoori-burger, double-patty-burger, hc-double-patty-burger, special-cafe9-burger |
| Sandwiches | veg-mayo-sandwich, veg-cheese-grilled, cheese-chilli-grilled, cheese-corn-grilled, paneer-cheese-grilled, corn-paneer-grilled, heavy-cheese-grilled, chocolate-sandwich |
| Maggie | plain-maggie, masala-maggie, chilli-maggie, cheesy-maggie, paneer-maggie |
| Manchurian | veg-manchurian, veg-dry-manchurian |
| Paneer | veg-paneer, veg-paneer-dry, veg-paneer-manchurian, veg-paneer-dry-manchurian, veg-paneer-chilli, veg-paneer-chilli-dry |
| Noodles | veg-noodles, veg-hakka-noodles, veg-shezwan-noodles, veg-manchurian-noodles, veg-paneer-noodles |
| Rice | veg-fried-rice, veg-shezwan-rice, veg-paneer-rice, veg-manchurian-rice |
| Snacks | simple-fries, chat-masala-fries, peri-peri-fries, peri-peri-tandoori-fries, aloo-tikki |
| Cold Coffee | thick-cold-coffee, thick-cold-coffee-ice-cream, cold-coffee, cold-coffee-special |
| Milk Shakes | chocolate-milkshake, pineapple-milkshake, strawberry-milkshake, oreo-milkshake, kitkat-milkshake, cad-b-milkshake |
| Ice Cream & Beverages | chocolate-ice-cream, rajbhog-ice-cream, matka-ice-cream, special-9-ice-cream, water-bottle, redbull, sting, pepsi |
| Pasta | red-sauce-pasta, white-sauce-pasta |
| Momos | veg-momos, paneer-momos, cheese-corn-momos |

All files use the `.jpg` extension.

## How to change a price

Open `js/menuData.js`, find the item and edit the number.

```js
{ name: "Cheese Burger", category: "Burgers", image: "images/cheese-burger.jpg", price: 90 }
```

- Pizza has two prices: `prices: { small: 130, big: 150 }`
- Momos have two prices: `prices: { steam: 100, fried: 110 }`
- Price not decided yet? Use `price: null` and the site shows **Price on Request**.

Items currently set to `null` (price to confirm): Peri Peri Fries, Peri Peri with Tandoori, Aloo Tikki, Cold Coffee, Other Cold Coffee Special, Chocolate / Rajbhog / Matka / Special #9 Ice Cream, Water Bottle, Redbull, Sting, Pepsi.

## How to add a new menu item

1. Open `js/menuData.js`.
2. Copy an existing line inside `menuItems` and paste it where you want it.
3. Change the name, image filename, description and price.
4. Put the photo in `images/`.
5. Save and refresh the browser.

```js
{ name: "Veg Spring Roll", category: "Snacks", image: "images/veg-spring-roll.jpg", description: "Crispy rolls with veg filling.", price: 90 },
```

The `category` must match one of the names in `menuCategories` at the top of the file. To add a brand-new category, add one line to `menuCategories` and use the same `key` in your items.

## Other things you may want to edit

| What | Where |
|---|---|
| Phone numbers | `index.html` footer (`tel:` links) |
| WhatsApp number | `index.html`, the `wa.me/919960316052` link |
| Instagram link | `index.html` footer |
| Colours | top of `css/style.css` (`:root` variables) |

## Project structure

```text
cafe9/
├── index.html
├── css/style.css
├── js/
│   ├── menuData.js   (all products, prices, images)
│   └── script.js     (filters, search, navigation)
├── images/           (logo.png + product photos)
└── README.md
```
