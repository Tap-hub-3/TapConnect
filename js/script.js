/* ==========================================================================
   CAFE #9 — MAIN SCRIPT (Vanilla JavaScript)
   Depends on: js/menuData.js  (menuItems, menuCategories)
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Element references ---------- */
  var grid = document.getElementById("menuGrid");
  var categoryBar = document.getElementById("categoryBar");
  var searchInput = document.getElementById("searchInput");
  var resultCount = document.getElementById("resultCount");
  var noResults = document.getElementById("noResults");
  var header = document.getElementById("siteHeader");
  var hamburger = document.getElementById("hamburger");
  var mainNav = document.getElementById("mainNav");
  var backToTop = document.getElementById("backToTop");

  /* ---------- State ---------- */
  var activeCategory = "All";
  var searchTerm = "";

  /* ---------- Helpers ---------- */

  /** Format a number as Indian Rupees, e.g. 130 -> "₹130" */
  function formatPrice(value) {
    return "₹" + value;
  }

  /** Inline SVG placeholder used whenever an image file is missing. */
  function placeholderImage(label) {
    var text = (label || "CAFE #9").replace(/&/g, "and").replace(/</g, "");
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#fff0e5"/><stop offset="1" stop-color="#f3ead9"/></linearGradient></defs>' +
      '<rect width="600" height="450" fill="url(#g)"/>' +
      '<circle cx="300" cy="190" r="70" fill="#f26a1b" opacity="0.15"/>' +
      '<text x="300" y="212" font-size="64" text-anchor="middle">🍽️</text>' +
      '<text x="300" y="300" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#1a1a1a" text-anchor="middle">' + text + '</text>' +
      '<text x="300" y="334" font-family="Arial, sans-serif" font-size="16" fill="#8a8378" text-anchor="middle">CAFE #9</text>' +
      "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  /** Swap a broken image for the placeholder (only once, to avoid loops). */
  function attachImageFallback(img, label) {
    img.addEventListener("error", function onError() {
      img.removeEventListener("error", onError);
      img.src = placeholderImage(label);
    });
  }

  /** Does this item have selectable options (pizza sizes / momos styles)? */
  function getOptions(item) {
    if (!item.prices) return null;
    if (typeof item.prices.small !== "undefined") {
      return [
        { key: "small", label: "S", full: "Small", price: item.prices.small },
        { key: "big", label: "B", full: "Big", price: item.prices.big }
      ];
    }
    if (typeof item.prices.steam !== "undefined") {
      return [
        { key: "steam", label: "Steam", full: "Steam", price: item.prices.steam },
        { key: "fried", label: "Fried", full: "Fried", price: item.prices.fried }
      ];
    }
    return null;
  }

  /** Price element text for a single (non-option) item. */
  function setSinglePrice(el, price) {
    if (price === null || typeof price === "undefined") {
      el.textContent = "Price on Request";
      el.classList.add("on-request");
    } else {
      el.textContent = formatPrice(price);
    }
  }

  /* ---------- Rendering ---------- */

  /** Build one product card element from a menu item. */
  function createCard(item, index) {
    var card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = Math.min(index * 30, 300) + "ms";

    /* Image */
    var imgWrap = document.createElement("div");
    imgWrap.className = "card-img";
    var img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 600;
    img.height = 450;
    attachImageFallback(img, item.name);
    imgWrap.appendChild(img);

    var tag = document.createElement("span");
    tag.className = "card-tag";
    tag.textContent = item.category;
    imgWrap.appendChild(tag);

    /* Body */
    var body = document.createElement("div");
    body.className = "card-body";

    var title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = item.name;
    body.appendChild(title);

    if (item.description) {
      var desc = document.createElement("p");
      desc.className = "card-desc";
      desc.textContent = item.description;
      body.appendChild(desc);
    }

    /* Price area */
    var priceRow = document.createElement("div");
    priceRow.className = "card-price";
    var price = document.createElement("span");
    price.className = "price";
    var options = getOptions(item);

    if (options) {
      /* Pizza sizes or Momos steam/fried: toggle updates the price */
      price.textContent = formatPrice(options[0].price);
      var toggle = document.createElement("div");
      toggle.className = "option-toggle";
      toggle.setAttribute("role", "group");
      toggle.setAttribute("aria-label", "Choose option for " + item.name);

      options.forEach(function (opt, i) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn" + (i === 0 ? " active" : "");
        btn.textContent = opt.label;
        btn.title = opt.full;
        btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
        btn.addEventListener("click", function () {
          toggle.querySelectorAll(".option-btn").forEach(function (b) {
            b.classList.remove("active");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
          price.textContent = formatPrice(opt.price);
        });
        toggle.appendChild(btn);
      });
      priceRow.appendChild(price);
      priceRow.appendChild(toggle);
    } else {
      setSinglePrice(price, item.price);
      priceRow.appendChild(price);
    }
    body.appendChild(priceRow);

    card.appendChild(imgWrap);
    card.appendChild(body);
    return card;
  }

  /** Return the items matching the current category + search. */
  function getVisibleItems() {
    var term = searchTerm.trim().toLowerCase();
    return menuItems.filter(function (item) {
      if (term) {
        /* Searching looks through every product name, in every category */
        return item.name.toLowerCase().indexOf(term) !== -1;
      }
      return activeCategory === "All" || item.category === activeCategory;
    });
  }

  /** Re-draw the menu grid. */
  function renderMenu() {
    var items = getVisibleItems();
    var fragment = document.createDocumentFragment();
    items.forEach(function (item, i) {
      fragment.appendChild(createCard(item, i));
    });
    grid.innerHTML = "";
    grid.appendChild(fragment);

    noResults.hidden = items.length > 0;
    resultCount.textContent =
      items.length > 0
        ? "Showing " + items.length + (items.length === 1 ? " dish" : " dishes")
        : "";
  }

  /** Build the category buttons from menuCategories. */
  function renderCategories() {
    menuCategories.forEach(function (cat) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cat-btn" + (cat.key === activeCategory ? " active" : "");
      btn.textContent = cat.label;
      btn.dataset.category = cat.key;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", cat.key === activeCategory ? "true" : "false");
      categoryBar.appendChild(btn);
    });

    categoryBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".cat-btn");
      if (!btn) return;
      setCategory(btn.dataset.category);
      /* Clear search so the chosen category is shown clearly */
      searchInput.value = "";
      searchTerm = "";
      renderMenu();
    });
  }

  function setCategory(key) {
    activeCategory = key;
    categoryBar.querySelectorAll(".cat-btn").forEach(function (b) {
      var isActive = b.dataset.category === key;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-selected", isActive ? "true" : "false");
      if (isActive && b.scrollIntoView) {
        /* Keep the active button visible in the swipeable row on mobile */
        var bar = categoryBar;
        bar.scrollTo({ left: b.offsetLeft - bar.clientWidth / 2 + b.clientWidth / 2, behavior: "smooth" });
      }
    });
  }

  /* ---------- Live search ---------- */
  searchInput.addEventListener("input", function () {
    searchTerm = searchInput.value;
    if (searchTerm.trim()) {
      setCategory("All");
    }
    renderMenu();
  });

  /* ---------- Mobile navigation ---------- */
  function closeNav() {
    mainNav.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
  }
  hamburger.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  mainNav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeNav();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) closeNav();
  });

  /* ---------- Header shadow, back-to-top, active nav link ---------- */
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = ["home", "menu", "about", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle("scrolled", y > 20);
    backToTop.hidden = y < 500;

    /* Highlight the nav link for the section in view */
    var current = "home";
    var probe = y + 140;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= probe) current = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Logo & hero image fallbacks ---------- */
  document.querySelectorAll(".brand-logo, .footer-logo").forEach(function (logo) {
    /* If logo.png has not been added yet, hide the broken icon quietly */
    logo.addEventListener("error", function () { logo.classList.add("is-missing"); });
  });

  var hero = document.getElementById("heroImage");
  if (hero) {
    var heroStep = 0;
    hero.addEventListener("error", function () {
      heroStep += 1;
      if (heroStep === 1) {
        hero.src = "images/margherita-pizza.jpg"; /* 1st fallback: a menu photo */
      } else if (heroStep === 2) {
        hero.src = placeholderImage("Welcome to CAFE #9"); /* 2nd fallback: placeholder */
      }
    });
  }

  /* ---------- Init ---------- */
  var pizzaCount = menuItems.filter(function (i) { return i.category === "Pizza"; }).length;
  var statItems = document.getElementById("statItems");
  var statPizzas = document.getElementById("statPizzas");
  if (statItems) statItems.textContent = menuItems.length;
  if (statPizzas) statPizzas.textContent = pizzaCount;

  renderCategories();
  renderMenu();
  onScroll();
})();
