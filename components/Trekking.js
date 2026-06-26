import styles from './Trekking.module.css';

export default function Trekking() {
  const routes = [
    { name: 'Everest Base Camp Trek',   days: '14 Days', difficulty: 'Challenging', type: 'hard' },
    { name: 'Annapurna Circuit Trek',   days: '19 Days', difficulty: 'Challenging', type: 'hard' },
    { name: 'Ghorepani Poon Hill Trek', days: '9 Days',  difficulty: 'Moderate',    type: 'mod'  },
    { name: 'Langtang Valley Trek',     days: '10 Days', difficulty: 'Moderate',    type: 'mod'  },
    { name: 'Upper Mustang Trek',       days: '14 Days', difficulty: 'Challenging', type: 'hard' },
  ];

  return (
    <section className={styles.trekSection}>
      <div className={styles.trekImageWrap}>
        <img src="/images/destinations/nepal_trek_hero.png" alt="Trekking in Nepal" />
        <div className={styles.trekImageBadge}>
          <div className={styles.altNum}>8,849m</div>
          <div className={styles.altLabel}>World's Highest Summit</div>
        </div>
      </div>

      <div className={styles.trekContent}>
        <p className={styles.sectionEyebrow}>Classic Routes</p>
        <h2 className={styles.sectionTitle}>Legendary<br />Trekking Routes</h2>
        <p className={styles.sectionSub}>
          From the iconic Everest Base Camp to the hidden valleys of Mustang — every trail tells a story millions of years in the making.
        </p>

        <div className={styles.trekRoutes}>
          {routes.map((r) => (
            <div key={r.name} className={styles.routeItem}>
              <span className={styles.routeName}>{r.name}</span>
              <div className={styles.routeInfo}>
                <span className={styles.routeDays}>{r.days}</span>
                <span className={`${styles.routeDiff} ${r.type === 'hard' ? styles.diffHard : styles.diffMod}`}>
                  {r.difficulty}
                </span>
                <span className={styles.routeArrow}>→</span>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.btnPrimary}>View All Routes →</button>
      </div>
    </section>
  );
}