import { useState } from 'react'
import { getDirectionsUrl } from '../../config/mapsConfig.js'
import styles from './FoodCard.module.css'

function FoodCard({ food }) {
  const [claimed, setClaimed] = useState(false)

  const handleGetDirections = () => {
    const destination = food.location
    window.open(getDirectionsUrl(destination), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={food.image} alt={food.name} loading="lazy" />
        <span className={styles.badge}>{food.category}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{food.name}</h3>

        <ul className={styles.details}>
          <li>
            <span className={styles.label}>Quantity</span>
            <span>{food.quantity}</span>
          </li>
          <li>
            <span className={styles.label}>Pickup</span>
            <span>{food.location}</span>
          </li>
          <li>
            <span className={styles.label}>Expires</span>
            <span>{food.expiry}</span>
          </li>
          <li>
            <span className={styles.label}>Donor</span>
            <span>{food.donor}</span>
          </li>
        </ul>

        <div className={styles.actions}>
          <button
            className={`btn ${claimed ? 'btn-secondary' : 'btn-primary'} btn-block`}
            onClick={() => setClaimed(true)}
            disabled={claimed}
          >
            {claimed ? 'Claimed ✓' : 'Claim Food'}
          </button>

          <button
            type="button"
            className={`btn btn-outline btn-block ${styles.directionsBtn}`}
            onClick={handleGetDirections}
          >
            📍 Get Directions
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
