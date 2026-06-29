import Link from 'next/link';
import styles from './Trekking.module.css';

export default function Trekking({ routes = [] }) {
  const mockRoutes = [
    { name: 'Everest Base Camp Trek', slug: 'everest-base-camp-trek', duration: '14 Days', difficulty: 'Challenging', type: 'hard' },
    { name: 'Annapurna Circuit Trek', slug: 'annapurna-circuit-trek', duration: '19 Days', difficulty: 'Challenging', type: 'hard' },
    { name: 'Ghorepani Poon Hill Trek', slug: 'ghorepani-poon-hill-trek', duration: '9 Days', difficulty: 'Moderate', type: 'mod' },
    { name: 'Langtang Valley Trek', slug: 'langtang-valley-trek', duration: '10 Days', difficulty: 'Moderate', type: 'mod' },
    { name: 'Upper Mustang Trek', slug: 'upper-mustang-trek', duration: '14 Days', difficulty: 'Challenging', type: 'hard' },
  ];

  const items = routes.length > 0 ? routes.slice(0, 5).map(r => ({
    name: r.title,
    slug: r.slug,
    duration: r.trekkingRouteDetails.duration,
    difficulty: r.trekkingRouteDetails.difficulty?.[0] || r.trekkingRouteDetails.difficulty || 'Moderate',
    type: (r.trekkingRouteDetails.difficulty?.[0] || r.trekkingRouteDetails.difficulty || '').toLowerCase() === 'challenging' ? 'hard' : 'mod'
  })) : mockRoutes;

  return (
    <section className={styles.trekSection}>
      <div className={styles.trekImageWrap}>
        <img src="/images/destinations/nepal_trek_hero.webp" alt="Trekking in Nepal" />
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
          {items.map((r) => (
            <Link href={`/trekking/${r.slug}`} key={r.slug} className={styles.routeItem} style={{ textDecoration: 'none' }}>
              <span className={styles.routeName}>{r.name}</span>
              <div className={styles.routeInfo}>
                <span className={styles.routeDays}>{r.duration}</span>
                <span className={`${styles.routeDiff} ${r.type === 'hard' ? styles.diffHard : styles.diffMod}`}>
                  {r.difficulty}
                </span>
                <span className={styles.routeArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/trekking" className={styles.btnPrimary} style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
          View All Routes →
        </Link>
      </div>
    </section>
  );
}