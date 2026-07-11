// Local storage helper for user-submitted food listings.
// Listings created via the "List Your Food" form are persisted in the
// browser's localStorage so they survive page reloads (no backend needed).

const STORAGE_KEY = 'zerobite_food_listings'

/**
 * Read all user-submitted listings from localStorage.
 * Returns an empty array if nothing has been stored yet or the
 * stored value is corrupted.
 */
export function getStoredListings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.error('Failed to read food listings from localStorage:', error)
    return []
  }
}

/**
 * Persist the full listings array to localStorage.
 */
function saveStoredListings(listings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listings))
    return true
  } catch (error) {
    console.error('Failed to save food listings to localStorage:', error)
    return false
  }
}

/**
 * Add a new listing to localStorage and return the saved listing
 * (including its generated id and timestamp).
 */
export function addStoredListing(listing) {
  const listings = getStoredListings()

  const newListing = {
    ...listing,
    id: `local-${Date.now()}`,
    createdAt: new Date().toISOString(),
  }

  listings.unshift(newListing) // newest first
  saveStoredListings(listings)
  return newListing
}

/**
 * Remove a listing by id (handy for future "delist" functionality).
 */
export function removeStoredListing(id) {
  const listings = getStoredListings().filter((item) => item.id !== id)
  saveStoredListings(listings)
}
