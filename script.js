/* Centralized JS for the site
   This file was created to hold inline scripts extracted from index.html.
   Currently it's a placeholder. If you want, I can extract the inline
   <script> blocks into this file and remove them from index.html.
*/

// Example: small helper to detect WebP support (kept as example)
!(function () {
  var img = new Image();
  img.onload = function () {
    window.is_support_webp = img.width > 0 && img.height > 0;
  };
  img.onerror = function () {
    window.is_support_webp = false;
  };
  img.src =
    "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
})();

// Add other extracted inline scripts here when ready.
