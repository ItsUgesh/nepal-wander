import Link from 'next/link';
import styles from './Destinations.module.css';

export default function Destinations({ destinations = [] }) {
  // Fallback mock data with optimized WebP images
  const mockDestinations = [
    {
      id: 'mock-1',
      title: 'Everest Region',
      slug: 'everest-region',
      destinationDetails: {
        shortDescription: 'The roof of the world, home to Mount Everest and legendary Sherpa villages.',
        bestSeason: 'Oct - Dec',
        distanceFromKathmandu: '140km',
        elevation: '5,364m',
        heroImage: { node: { sourceUrl: '/images/destinations/nepal_trek_hero.webp' } }
      }
    },
    {
      id: 'mock-2',
      title: 'Pokhara Valley',
      slug: 'pokhara-valley',
      destinationDetails: {
        shortDescription: 'A peaceful lakeside sanctuary offering spectacular panoramas of the Annapurna range.',
        bestSeason: 'Sep - May',
        distanceFromKathmandu: '200km',
        elevation: '822m',
        heroImage: { node: { sourceUrl: '/images/destinations/nepal_pokhara_lake.webp' } }
      }
    },
    {
      id: 'mock-3',
      title: 'Kathmandu Durbar',
      slug: 'kathmandu-durbar',
      destinationDetails: {
        shortDescription: 'The ancient capital filled with historic palaces, courtyards, and Newari craftsmanship.',
        bestSeason: 'Year-round',
        distanceFromKathmandu: '0km',
        elevation: '1,400m',
        heroImage: { node: { sourceUrl: '/images/destinations/nepal_kathmandu_temple.webp' } }
      }
    },
    {
      id: 'mock-4',
      title: 'Chitwan Jungle',
      slug: 'chitwan-jungle',
      destinationDetails: {
        shortDescription: 'Subtropical lowlands rich in wildlife, featuring the rare one-horned rhinoceros.',
        bestSeason: 'Oct - Mar',
        distanceFromKathmandu: '150km',
        elevation: '415m',
        heroImage: { node: { sourceUrl: '/images/destinations/nepal_chitwan_jungle.webp' } }
      }
    }
  ];

  const items = destinations.length > 0 ? destinations.slice(0, 5) : mockDestinations;

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
        {items.map((dest, index) => {
          const isBig = index === 0;
          const details = dest.destinationDetails || {};
          const imageSrc = details.heroImage?.node?.sourceUrl || '/images/nepal_hero_mountain.webp';
          
          return (
            <Link
              href={`/destinations/${dest.slug}`}
              key={dest.id || dest.slug}
              className={`${styles.destCard} ${isBig ? styles.big : styles.small}`}
              style={isBig ? { gridRow: 'span 2' } : {}}
            >
              <div className={styles.destCardInner}>
                <img src={imageSrc} className={styles.cardImg} alt={dest.title} />
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardRegion}>
                    {details.elevation ? `${details.elevation} Elevation` : 'Nepal'}
                  </div>
                  <div className={styles.cardName}>{dest.title}</div>
                  <div className={styles.cardMeta}>
                    {details.bestSeason && (
                      <span className={styles.cardTag}>{details.bestSeason}</span>
                    )}
                    {details.distanceFromKathmandu && (
                      <span className={styles.cardTag}>{details.distanceFromKathmandu}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}