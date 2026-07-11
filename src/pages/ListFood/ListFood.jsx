import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addStoredListing } from '../../utils/storage.js'
import styles from './ListFood.module.css'

const initialForm = {
  foodName: '',
  quantity: '',
  address: '',
  contact: '',
  expiry: '',
  category: 'Wedding Leftover',
  reason: 'Wedding Leftover',
  description: '',
}

// Placeholder images used for user-submitted listings (rotated by id)
// since the form doesn't collect a photo upload.
const placeholderImages = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
]

function formatExpiry(datetimeLocal) {
  if (!datetimeLocal) return 'Not specified'
  const date = new Date(datetimeLocal)
  if (Number.isNaN(date.getTime())) return datetimeLocal
  return date.toLocaleString(undefined, {
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
  })
}

function ListFood() {
  const [form, setForm] = useState(initialForm)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Persist the listing to localStorage so it shows up on the
    // Food Listing page (no backend needed).
    addStoredListing({
      name: form.foodName,
      image:
        placeholderImages[Math.floor(Math.random() * placeholderImages.length)],
      quantity: form.quantity,
      location: form.address,
      expiry: formatExpiry(form.expiry),
      donor: form.contact,
      category: form.category,
      reason: form.reason,
      description: form.description,
    })

    // Let the donor know their listing went live.
    alert('Thank you! Your food listing has been submitted successfully.')

    setForm(initialForm)
    navigate('/food-listing')
  }

  return (
    <main className="page">
      <section className="section">
        <div className={`container ${styles.wrapper}`}>
          <div className="section-heading">
            <span className="eyebrow">Share Surplus Food</span>
            <h2>List Your Food</h2>
            <p>
              Fill in the details below so nearby people and volunteers can
              find and claim your food before it goes to waste.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span>Food Name</span>
                <input
                  type="text"
                  name="foodName"
                  placeholder="e.g. Extra Wedding Buffet"
                  value={form.foodName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Quantity</span>
                <input
                  type="text"
                  name="quantity"
                  placeholder="e.g. Serves 20 people"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className={styles.field}>
              <span>Pickup Address</span>
              <input
                type="text"
                name="address"
                placeholder="Street, area, city"
                value={form.address}
                onChange={handleChange}
                required
              />
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>Contact Number</span>
                <input
                  type="tel"
                  name="contact"
                  placeholder="e.g. 98765 43210"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Expiry Date &amp; Time</span>
                <input
                  type="datetime-local"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>Category</span>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Wedding Leftover</option>
                  <option>Restaurant Surplus</option>
                  <option>Event Food</option>
                  <option>Household Extra</option>
                  <option>Other</option>
                </select>
              </label>

              <label className={styles.field}>
                <span>Reason for Listing</span>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                >
                  <option>Wedding Leftover</option>
                  <option>Restaurant Surplus</option>
                  <option>Event Food</option>
                  <option>Household Extra</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label className={styles.field}>
              <span>Description</span>
              <textarea
                name="description"
                rows="4"
                placeholder="Any details that could help — dietary info, packaging, best pickup time, etc."
                value={form.description}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="btn btn-primary btn-block">
              Submit Listing
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ListFood
