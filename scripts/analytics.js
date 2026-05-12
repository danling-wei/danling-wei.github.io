/* ============================================================
 * analytics.js
 * Google Analytics 4 (gtag.js) loader — single source of truth
 * for the Measurement ID across all pages of the site.
 *
 * Setup:
 *   1. Create a GA4 property at https://analytics.google.com
 *      → Admin → Data Streams → Web → Measurement ID.
 *   2. Replace the GA_ID constant below with your ID
 *      (format: G-XXXXXXXXXX, e.g. G-1A2B3C4D5E).
 *
 * The snippet is a no-op until a real ID is provided, so the
 * site stays clean during local development.
 * ============================================================ */

(function () {
  "use strict";

  // ↓↓↓ REPLACE WITH YOUR GA4 MEASUREMENT ID ↓↓↓
  var GA_ID = "G-XXXXXXXXXX";
  // ↑↑↑ REPLACE WITH YOUR GA4 MEASUREMENT ID ↑↑↑

  if (!GA_ID || GA_ID.indexOf("XXXX") !== -1) return;

  // Respect Do Not Track signals where available.
  if (
    typeof navigator !== "undefined" &&
    (navigator.doNotTrack === "1" || window.doNotTrack === "1")
  ) {
    return;
  }

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
})();
