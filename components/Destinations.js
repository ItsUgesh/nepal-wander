import Link from 'next/link';
import styles from './Destinations.module.css';

export default function Destinations() {
  return (
    <section className={styles.destinations}>
      <div className={styles.destHeader}>
        <div>
          <p className={styles.sectionEyebrow}>Explore Nepal</p>
          <h2 className={styles.sectionTitle}>Featured Destinations</h2>
        </div>
        <Link href="/destinations" className={styles.viewAll}>
          View all destinations →
        </Link>
      </div>

      <div className={styles.destinationsGrid}>

        {/* Big card */}
        <div className={`${styles.destCard} ${styles.big}`} style={{ gridRow: 'span 2' }}>
          <div className={styles.destCardInner}>
            <img src="/images/nepal_hero_mountain.png" className={styles.cardImg} alt="Everest Base Camp" />
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <div className={styles.cardRegion}>Khumbu Region</div>
              <div className={styles.cardName}>Everest Base<br />Camp</div>
              <div className={styles.cardMeta}>
                <span className={styles.cardTag}>5,364m</span>
                <span className={styles.cardTag}>14 Days</span>
                <span className={styles.cardTag}>High Altitude</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small cards */}
        {[
          { img: '/images/destinations/nepal_pokhara_lake.png',   region: 'Lake District',      name: 'Pokhara Valley',     tags: ['Scenic', 'Easy Hikes'] },
          { img: '/images/destinations/nepal_trek_hero.png', region: 'Annapurna Region',   name: 'Annapurna Circuit',  tags: ['5,416m', '19 Days'] },
          { img: '/images/destinations/nepal_kathmandu_temple.png', region: 'Bagmati Province',   name: 'Kathmandu Durbar',   tags: ['UNESCO', 'Cultural'] },
          { img: '/images/destinations/nepal_pokhara_lake.png',  region: 'Bagmati Province',   name: 'Langtang Valley',    tags: ['Moderate', '10 Days'] },
        ].map((card) => (
          <div key={card.name} className={`${styles.destCard} ${styles.small}`}>
            <div className={styles.destCardInner}>
              <img src={card.img} className={styles.cardImg} alt={card.name} />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardRegion}>{card.region}</div>
                <div className={styles.cardName}>{card.name}</div>
                <div className={styles.cardMeta}>
                  {card.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}