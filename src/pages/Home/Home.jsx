import { Link } from 'react-router-dom'
import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import styles from './Home.module.css'

const features = [
  {
    icon: '🥗',
    title: 'Reduce Food Waste',
    description:
      'We help redirect surplus food from weddings, restaurants and events before it ever reaches a bin.',
  },
  {
    icon: '🤝',
    title: 'Feed Communities',
    description:
      'Every listing connects generous donors directly with people and shelters who need a meal.',
  },
  {
    icon: '🌍',
    title: 'Support Sustainable Future',
    description:
      'Less waste means fewer resources lost — a small step toward a healthier planet for everyone.',
  },
]

function Home() {
  return (
    <main className="page">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Don't Let Good Food Go To Waste</h1>
          <p className={styles.heroText}>
            Connect surplus food with people who need it. Together we can
            reduce food waste and fight hunger.
          </p>
          <Link to="/food-listing" className="btn btn-primary">
            Browse Food
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why ZeroBite</span>
            <h2>Small Actions, Big Impact</h2>
            <p>
              A simple platform built to make food sharing effortless and
              meaningful.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
