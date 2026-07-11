// -----------------------------------------------------------------------
// Google Maps configuration
// -----------------------------------------------------------------------
// The "Get Directions" button on each Food Card opens the food's pickup
// address in Google Maps using the public Maps URL scheme below. This
// scheme works with a plain address string and does NOT require an API
// key, so the app works out of the box.
//
// GOOGLE_MAPS_API_KEY is kept here (currently empty) in case you later
// want to upgrade this feature — e.g. to show an embedded map preview on
// the card (Maps Embed API), turn addresses into precise coordinates
// (Geocoding API), or use the Places Autocomplete API on the "List Your
// Food" form. None of that is required for "Get Directions" to work.
//
// --- How to get a Google Maps API key (only needed for the upgrades above) ---
// 1. Go to https://console.cloud.google.com/ and create/select a project.
// 2. Navigate to "APIs & Services" > "Library".
// 3. Enable the APIs you need, e.g.:
//      - "Maps Embed API"      (for embedding a live map on the card)
//      - "Geocoding API"       (for converting addresses to lat/lng)
//      - "Places API"          (for address autocomplete in the form)
// 4. Go to "APIs & Services" > "Credentials" > "Create Credentials"
//    > "API key".
// 5. Restrict the key (recommended): under "Application restrictions"
//    choose "HTTP referrers" and add your site's domain(s); under
//    "API restrictions" limit it to only the APIs enabled above.
// 6. Copy the key and paste it below as GOOGLE_MAPS_API_KEY, or (better)
//    load it from an environment variable, e.g.:
//      export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
//    and define VITE_GOOGLE_MAPS_API_KEY in a local .env file
//    (make sure .env is included in .gitignore).
// -----------------------------------------------------------------------

export const GOOGLE_MAPS_API_KEY = '' // <-- paste your API key here if/when needed

/**
 * Build a Google Maps "directions" URL for a given pickup address (or
 * lat/lng coordinates, if you later start storing them). This uses
 * Google's public Maps URL scheme, which is free to use and does not
 * require an API key.
 *
 * Docs: https://developers.google.com/maps/documentation/urls/get-started
 */
export function getDirectionsUrl(destination) {
  const query = encodeURIComponent(destination)
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`
}
