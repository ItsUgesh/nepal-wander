import styles from "./page.module.css";

export const metadata = {
  title: "About — NepalWander",
  description: "Learn about NepalWander and our mission to help you discover Nepal",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Our Story</p>
          <h1 className={styles.title}>About NepalWander</h1>
          <p className={styles.sub}>
            Born from a love of Nepal's mountains, valleys, and people. We exist to help travellers discover the real Nepal.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrow}>Our Mission</p>
          <h2 className={styles.sectionTitle}>Why We Built NepalWander</h2>
          <p className={styles.sectionText}>
            Nepal is one of the most breathtaking countries on earth, yet so much of it remains undiscovered by travellers who only follow the tourist trail. NepalWander was built to change that. We connect curious travellers with the hidden valleys, ancient temples, and legendary trekking routes that make Nepal truly special.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className={styles.valuesSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionEyebrow}>What We Stand For</p>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {[
              { icon: '🏔️', title: 'Authentic Experiences', desc: 'We only recommend places and experiences we truly believe in — no paid placements, no sponsored content.' },
              { icon: '🌿', title: 'Responsible Travel', desc: 'We encourage travel that respects local culture, supports local communities, and protects Nepal\'s natural environment.' },
              { icon: '🗺️', title: 'Expert Guidance', desc: 'Every guide and itinerary is crafted with deep local knowledge — from people who have walked every trail.' },
              { icon: '❤️', title: 'Built with Love', desc: 'NepalWander is a passion project built by someone who fell in love with Nepal and wants to share it with the world.' },
            ].map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Ready to Explore Nepal?</h2>
        <p>Start planning your Himalayan adventure today.</p>
        <a href="/destinations" className={styles.ctaBtn}>Explore Destinations →</a>
      </div>

    </main>
  );
}