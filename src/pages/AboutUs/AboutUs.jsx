import styles from './AboutUs.module.css'

const team = [
  { name: 'Aarav Mehta', role: 'Founder & Lead Developer', initials: 'AM' },
  { name: 'Priya Nair', role: 'UI/UX Designer', initials: 'PN' },
  { name: 'Rohan Iyer', role: 'Community Outreach', initials: 'RI' },
  { name: 'Sneha Kapoor', role: 'Operations Lead', initials: 'SK' },
]

function AboutUs() {
  return (
    <main className="page">
      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">About ZeroBite</span>
            <h2>Fighting Food Waste, One Meal at a Time</h2>
            <p>
              ZeroBite is a student-built platform that bridges the gap
              between surplus food and the people who need it — making
              generosity simple, fast and local.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Objectives */}
      <section className={styles.pillars}>
        <div className={`container ${styles.pillarGrid}`}>
          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🎯</span>
            <h3>Our Mission</h3>
            <p>
              To minimise food wastage by creating a simple bridge between
              those with surplus food and those who need it most.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🔭</span>
            <h3>Our Vision</h3>
            <p>
              A community where no edible food is thrown away while people
              nearby go hungry — starting one neighbourhood at a time.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>📋</span>
            <h3>Our Objectives</h3>
            <p>
              Make food donation effortless, build trust between donors and
              recipients, and raise awareness around responsible consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">The People</span>
            <h2>Meet the Team</h2>
            <p>A small team driven by one simple goal — zero food waste.</p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div className={styles.teamCard} key={member.name}>
                <div className={styles.avatar}>{member.initials}</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact}>
        <div className={`container ${styles.contactInner}`}>
          <h2>Get in Touch</h2>
          <p>
            Have questions, feedback, or want to partner with us? We'd love
            to hear from you.
          </p>
          <div className={styles.contactDetails}>
            <a href="mailto:hello@zerobite.org">📧 hello@zerobite.org</a>
            <span>📞 +91 98765 43210</span>
            <span>📍 Bengaluru, India</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
