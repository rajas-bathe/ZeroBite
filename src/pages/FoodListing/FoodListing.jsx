import { useState, useMemo, useEffect } from 'react'
import FoodCard from '../../components/FoodCard/FoodCard.jsx'
import mockListings from '../../data/mockData.js'
import { getStoredListings } from '../../utils/storage.js'
import styles from './FoodListing.module.css'

const categories = [
  'All',
  'Wedding Leftover',
  'Restaurant Surplus',
  'Event Food',
  'Household Extra',
]

function FoodListing() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [userListings, setUserListings] = useState([])

  // Load any listings the user has submitted via the "List Your Food"
  // form (persisted in localStorage) so they appear alongside the
  // sample listings.
  useEffect(() => {
    setUserListings(getStoredListings())
  }, [])

  const allListings = useMemo(
    () => [...userListings, ...mockListings],
    [userListings]
  )

  const filteredListings = useMemo(() => {
    if (activeCategory === 'All') return allListings
    return allListings.filter((item) => item.category === activeCategory)
  }, [activeCategory, allListings])

  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Available Now</span>
            <h2>Surplus Food Near You</h2>
            <p>
              Browse food listed by generous donors and claim what your
              community needs before it expires.
            </p>
          </div>

          <div className={styles.filters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${
                  activeCategory === category ? styles.filterActive : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredListings.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>

          {filteredListings.length === 0 && (
            <p className={styles.empty}>No listings in this category right now.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default FoodListing
