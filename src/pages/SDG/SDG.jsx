import SDGCard from '../../components/SDGCard/SDGCard.jsx'
import styles from './SDG.module.css'

const sdgs = [
  {
    number: 2,
    title: 'Zero Hunger',
    icon: '🌾',
    color: '#dda63a',
    description:
      'By redirecting surplus food to people who need it, ZeroBite directly helps end hunger and improves access to safe, nutritious food for vulnerable communities.',
  },
  {
    number: 12,
    title: 'Responsible Consumption and Production',
    icon: '♻️',
    color: '#bf8b2e',
    description:
      'We encourage responsible food handling and help reduce the massive amount of edible food that is wasted every day by donors, restaurants and event organisers.',
  },
  {
    number: 13,
    title: 'Climate Action',
    icon: '🌎',
    color: '#3f7e44',
    description:
      'Food waste rotting in landfills releases significant greenhouse gases. Every meal saved through ZeroBite reduces methane emissions and eases pressure on the planet.',
  },
]

function SDG() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Impact</span>
            <h2>Supporting the Sustainable Development Goals</h2>
            <p>
              ZeroBite was built with a purpose beyond convenience — every
              claimed meal contributes to global goals for a fairer, greener
              world.
            </p>
          </div>

          <div className={styles.grid}>
            {sdgs.map((sdg) => (
              <SDGCard key={sdg.number} {...sdg} />
            ))}
          </div>

          <div className={styles.note}>
            <p>
              The United Nations Sustainable Development Goals (SDGs) are a
              shared blueprint for peace and prosperity for people and the
              planet. ZeroBite aligns its mission with SDG 2, SDG 12 and SDG
              13 to create measurable, positive change.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SDG
