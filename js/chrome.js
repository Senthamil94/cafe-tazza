/* Shared header/footer copied from index.html chrome markers. */
(function () {
  "use strict";

  var HEADER_HTML = "<a class=\"skip\" href=\"#main\">Skip to main content</a>\n\n<div id=\"cur\"></div><div id=\"cur-d\"></div>\n<div id=\"prog\"></div>\n\n<!-- ============ TOP BAR ============ -->\n<div class=\"topbar\">\n  <div class=\"wrap\">\n    <span><span class=\"live-dot\" id=\"openDot\"></span><b id=\"openNow\">Open today until 9:00pm</b></span>\n    <span class=\"dot-sep\" aria-hidden=\"true\"></span>\n    <span>4584 Dublin Blvd, Dublin, CA 94568</span>\n    <span class=\"dot-sep\" aria-hidden=\"true\"></span>\n    <span>Call <a href=\"tel:+19255609830\">925-560-9830</a></span>\n  </div>\n</div>\n\n<!-- ============ HEADER ============ -->\n<header class=\"header\" id=\"header\">\n  <div class=\"wrap\">\n    <nav class=\"nav\" aria-label=\"Main\">\n      <a class=\"brand\" href=\"#hero\" aria-label=\"Cafe Tazza \u2014 home\">\n        <span class=\"brand-plate\">\n          <img src=\"https://cafetazza.com/wp-content/uploads/2025/12/logo-cafe-tazza-new.png\" alt=\"Cafe Tazza \u2014 always fresh\" width=\"120\" height=\"44\">\n        </span>\n      </a>\n\n      <ul class=\"menu\">\n        <li><a class=\"nv\" href=\"#hero\">Home</a></li>\n        <li><a class=\"nv\" href=\"#dishes\">Today's Special</a></li>\n        <li><a class=\"nv\" href=\"#menuSec\">Menu</a></li>\n        <li class=\"has-sub\" data-open=\"false\">\n          <button type=\"button\" aria-expanded=\"false\">Explore\n            <svg viewBox=\"0 0 12 8\" fill=\"none\" aria-hidden=\"true\"><path d=\"M1 1.5 6 6.5l5-5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>\n          </button>\n          <ul class=\"sub\">\n            <li><a href=\"indian-bakery-eggless-cakes-dublin\">Indian Bakery &amp; Eggless Cakes</a></li>\n            <li><a href=\"indian-chaat-dublin\">Indian Chaat &amp; Street Food</a></li>\n            <li><a href=\"south-indian-restaurant-dublin\">South Indian Restaurant In Dublin</a></li>\n            <li><a href=\"indian-restaurant-dublin-ca\">Indian Restaurant In Dublin CA</a></li>\n            <li><a href=\"indian-sweets-dublin\">Indian Sweets &amp; Mithai</a></li>\n            <li><a href=\"birthday-cakes-dublin\">Birthday &amp; Custom Cakes</a></li>\n            <li><a href=\"order-indian-food-dublin\">Online Ordering &amp; Delivery</a></li>\n            <li><a href=\"family-restaurant-dublin\">Family &amp; Kids-Friendly Restaurant</a></li>\n            <li><a href=\"indian-catering-dublin\">Indian Catering In Dublin,CA</a></li>\n          </ul>\n        </li>\n        <li><a class=\"nv\" href=\"#reviews\">Reviews</a></li>\n        <li><a class=\"nv\" href=\"#visit\">Visit</a></li>\n      </ul>\n\n      <div class=\"nav-cta\">\n        <a class=\"btn btn-ghost btn-sm btn-cater\" href=\"https://order.boons.io/site/catering/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\">Catering</a>\n        <a class=\"btn btn-primary btn-sm\" href=\"https://order.boons.io/site/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\">\n          Order online\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        </a>\n        <button class=\"burger\" id=\"burger\" type=\"button\" aria-label=\"Open menu\" aria-expanded=\"false\" aria-controls=\"drawer\"><span></span></button>\n      </div>\n    </nav>\n  </div>\n</header>\n\n<div class=\"scrim\" id=\"scrim\"></div>\n<aside class=\"drawer\" id=\"drawer\" aria-label=\"Mobile menu\">\n  <div class=\"drawer-head\">\n    <span class=\"brand-plate\"><img src=\"https://cafetazza.com/wp-content/uploads/2025/12/logo-cafe-tazza-new.png\" alt=\"Cafe Tazza\"></span>\n    <button class=\"x-btn\" id=\"drawerClose\" type=\"button\" aria-label=\"Close menu\">&times;</button>\n  </div>\n  <a href=\"#hero\">Home</a>\n  <a href=\"#dishes\">Today's Special</a>\n  <a href=\"#menuSec\">Full Menu</a>\n  <a href=\"#explore\">Explore Cafe Tazza</a>\n  <div class=\"sub-list\">\n    <a href=\"indian-bakery-eggless-cakes-dublin\">Indian Bakery &amp; Eggless Cakes</a>\n    <a href=\"indian-chaat-dublin\">Indian Chaat &amp; Street Food</a>\n    <a href=\"south-indian-restaurant-dublin\">South Indian Restaurant In Dublin</a>\n    <a href=\"indian-restaurant-dublin-ca\">Indian Restaurant In Dublin CA</a>\n    <a href=\"indian-sweets-dublin\">Indian Sweets &amp; Mithai</a>\n    <a href=\"birthday-cakes-dublin\">Birthday &amp; Custom Cakes</a>\n    <a href=\"order-indian-food-dublin\">Online Ordering &amp; Delivery</a>\n    <a href=\"family-restaurant-dublin\">Family &amp; Kids-Friendly Restaurant</a>\n    <a href=\"indian-catering-dublin\">Indian Catering In Dublin,CA</a>\n  </div>\n  <a class=\"drawer-hot\" href=\"https://order.boons.io/site/catering/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\">Catering</a>\n  <a href=\"#reviews\">Reviews</a>\n  <a href=\"#faq\">FAQ</a>\n  <a href=\"#visit\">Visit us</a>\n  <div class=\"drawer-cta\">\n    <a class=\"btn btn-gold\" href=\"https://order.boons.io/site/catering/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\">Plan catering</a>\n    <a class=\"btn btn-primary\" href=\"https://order.boons.io/site/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\">Order online</a>\n    <a class=\"btn btn-ghost\" href=\"tel:+19255609830\">Call 925-560-9830</a>\n  </div>\n</aside>";
  var FOOTER_HTML = "<!-- ============ FOOTER ============ -->\n<footer class=\"footer\">\n  <div class=\"wrap\">\n    <div class=\"f-grid\">\n      <div>\n        <span class=\"f-logo\"><img src=\"https://cafetazza.com/wp-content/uploads/2025/12/logo-cafe-tazza-new.png\" alt=\"Cafe Tazza\" loading=\"lazy\"></span>\n        <p>A trusted Indian restaurant and eggless bakery in Dublin, CA &mdash; South Indian, North Indian and Indo-Chinese food, chaat, mithai and cakes made fresh every day.</p>\n        <div class=\"socials\">\n          <a href=\"https://www.facebook.com/caffetazza/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Cafe Tazza on Facebook\">\n            <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z\"/></svg>\n          </a>\n          <a href=\"https://www.instagram.com/cafetazzadublin/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Cafe Tazza on Instagram\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.2\" cy=\"6.8\" r=\"1.2\" fill=\"currentColor\" stroke=\"none\"/></svg>\n          </a>\n        </div>\n      </div>\n\n      <div>\n        <h4>Explore</h4>\n        <ul class=\"f-links\">\n          <li><a href=\"#dishes\">Today's special</a></li>\n          <li><a href=\"#menuSec\">Full menu</a></li>\n          <li><a href=\"order-indian-food-dublin\">Order &amp; delivery</a></li>\n          <li><a href=\"indian-bakery-eggless-cakes-dublin\">Cakes &amp; bakery</a></li>\n          <li><a href=\"indian-catering-dublin\">Catering</a></li>\n          <li><a href=\"#gallery\">Gallery</a></li>\n          <li><a href=\"#faq\">FAQ</a></li>\n        </ul>\n      </div>\n\n      <div>\n        <h4>Menu sections</h4>\n        <ul class=\"f-links\">\n          <li><a href=\"south-indian-restaurant-dublin\">South Indian</a></li>\n          <li><a href=\"indian-restaurant-dublin-ca#north\">North Indian</a></li>\n          <li><a href=\"indian-chaat-dublin\">Chaat &amp; snacks</a></li>\n          <li><a href=\"#menuSec\" data-jump=\"bake\">Bakery &amp; cakes</a></li>\n          <li><a href=\"indian-sweets-dublin\">Sweets &amp; mithai</a></li>\n          <li><a href=\"family-restaurant-dublin\">Family Restaurant</a></li>\n        </ul>\n      </div>\n\n      <div>\n        <h4>Visit</h4>\n        <p>4584 Dublin Blvd<br>Dublin, CA 94568</p>\n        <p><a href=\"tel:+19255609830\">925-560-9830</a></p>\n        <p>Mon&ndash;Thu 10am&ndash;9pm<br>Fri&ndash;Sat 10am&ndash;9:30pm<br>Sun 10am&ndash;9pm</p>\n        <a class=\"btn btn-primary btn-sm\" href=\"https://order.boons.io/site/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\">Order online</a>\n      </div>\n    </div>\n\n    <div class=\"f-bot\">\n      <span>&copy; <span id=\"yr\">2026</span> Cafe Tazza. All rights reserved.</span>\n      <span class=\"f-legal\">\n        <a href=\"https://www.boons.io/terms-of-service\" target=\"_blank\" rel=\"noopener\">Terms</a>\n        <a href=\"https://www.boons.io/privacy-policy\" target=\"_blank\" rel=\"noopener\">Privacy policy</a>\n        <a href=\"https://www.boons.io/accessibility-statement\" target=\"_blank\" rel=\"noopener\">Accessibility</a>\n      </span>\n      <span class=\"powered-by\">Powered by <a href=\"https://www.boons.io/\" target=\"_blank\" rel=\"noopener\" aria-label=\"boons\"><img src=\"assets/boons-logo.png\" alt=\"boons\"></a></span>\n    </div>\n  </div>\n</footer>\n\n<!-- ============ LIGHTBOX ============ -->\n<div id=\"lb\" role=\"dialog\" aria-label=\"Photo viewer\">\n  <button class=\"lb-x\" id=\"lbX\" aria-label=\"Close\">&times;</button>\n  <button class=\"lb-n prev\" id=\"lbP\" aria-label=\"Previous\">&#8249;</button>\n  <img src=\"\" alt=\"\" id=\"lbI\">\n  <button class=\"lb-n next\" id=\"lbN\" aria-label=\"Next\">&#8250;</button>\n  <div class=\"lb-cap\" id=\"lbC\"></div>\n</div>\n\n<div id=\"toast\"></div>\n\n<nav id=\"dock\" aria-label=\"Quick actions\">\n  <a href=\"#menuSec\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 6h16M4 12h16M4 18h10\"/></svg>Menu</a>\n  <a class=\"dock-cat\" href=\"https://order.boons.io/site/catering/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 18h18M5 18a7 7 0 0 1 14 0M12 6V4\"/><circle cx=\"12\" cy=\"7\" r=\"1.6\"/></svg>Catering</a>\n  <a href=\"tel:+19255609830\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4z\"/></svg>Call</a>\n  <a class=\"pri\" href=\"https://order.boons.io/site/cafe-tazza/115/y\" target=\"_blank\" rel=\"noopener\"><svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><path d=\"M3 6h18\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></svg>Order</a>\n</nav>\n\n<div class=\"fab-col\">\n  <button class=\"fab to-top\" id=\"toTop\" type=\"button\" aria-label=\"Back to top\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" aria-hidden=\"true\"><path d=\"M12 19V5M5 12l7-7 7 7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n  </button>\n</div>";

  var HOME_HASH = {
    "#hero": "index",
    "#dishes": "index#dishes",
    "#menuSec": "index#menuSec",
    "#explore": "index#explore",
    "#reviews": "index#reviews",
    "#faq": "index#faq",
    "#gallery": "index#gallery",
    "#visit": "index#visit"
  };

  function isHome() {
    var p = (location.pathname || "/").replace(/\\/g, "/").replace(/\/+$/, "");
    return !p || /\/index(\.html)?$/i.test(p);
  }

  function pageSlug() {
    var p = (location.pathname || "/").replace(/\\/g, "/").replace(/\/+$/, "");
    var name = p.split("/").pop() || "";
    return name.replace(/\.html$/i, "");
  }

  function rewriteLinks(root) {
    if (isHome() || !root) return;
    root.querySelectorAll("a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href) return;
      if (HOME_HASH[href]) {
        var next = HOME_HASH[href];
        if (href === "#visit" && document.getElementById("visit")) next = "#visit";
        if (href === "#reviews" && (document.getElementById("reviews") || document.getElementById("quotes"))) {
          next = document.getElementById("reviews") ? "#reviews" : "#quotes";
        }
        if (href === "#faq" && document.getElementById("faq")) next = "#faq";
        a.setAttribute("href", next);
      }
    });
  }

  function markCurrent(root) {
    var slug = pageSlug();
    if (!root || !slug || slug === "index") return;
    root.querySelectorAll('a[href="' + slug + '"], a[href^="' + slug + '#"]').forEach(function (a) {
      a.setAttribute("aria-current", "page");
    });
  }

  function finish() {
    rewriteLinks(document);
    markCurrent(document);
    window.__cafeChromeReady = true;
    window.dispatchEvent(new Event("cafe:chrome-ready"));
    if (typeof window.cafeBoot === "function") window.cafeBoot();
  }

  function inject() {
    var headSlot = document.getElementById("site-header");
    var footSlot = document.getElementById("site-footer");
    if (headSlot) headSlot.outerHTML = HEADER_HTML;
    if (footSlot) footSlot.outerHTML = FOOTER_HTML;
    finish();
  }

  function start() {
    if (document.getElementById("header") && !document.getElementById("site-header")) {
      finish();
      return;
    }
    inject();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
