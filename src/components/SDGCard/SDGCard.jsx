import styles from './SDGCard.module.css'

function SDGCard({ number, title, icon, description, color }) {
  return (
    <div className={styles.card} style={{ '--sdg-color': color }}>
      <div className={styles.top}>
        <span className={styles.number}>SDG {number}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default SDGCard
