import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.logo}>🌿 ZeroBite</div>
          <p className={styles.tagline}>
            Connecting surplus food with people who need it — one meal at a
            time.
          </p>
        </div>

        <div>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/food-listing">Food Listing</Link></li>
            <li><Link to="/list-food">List Food</Link></li>
            <li><Link to="/sdg">SDG</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.list}>
            <li><a href="mailto:hello@zerobite.org">hello@zerobite.org</a></li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {year} ZeroBite. Made with ❤️ for reducing food waste.</p>
      </div>
    </footer>
  )
}

export default Footer
