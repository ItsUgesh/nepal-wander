import Link from 'next/link';
import styles from './Footer.module.css';
import { getAllDestinations, getAllTrekkingRoutes, getAllArticles } from '@/lib/api';

const truncateTitle = (title, maxWords = 6) => {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return title;
};

export default async function Footer() {
  let destinations = [];
  let trekkingRoutes = [];
  let articles = [];

  try {
    const [destData, trekData, artData] = await Promise.all([
      getAllDestinations(),
      getAllTrekkingRoutes(),
      getAllArticles(),
    ]);

    destinations = destData || [];
    trekkingRoutes = trekData || [];
    articles = artData || [];
  } catch (error) {
    console.error('Error fetching footer data from WordPress:', error.message);
  }

  const displayDestinations = destinations.length > 0
    ? destinations.slice(0, 5).map(d => ({ title: d.title, href: `/destinations/${d.slug}` }))
    : [
        { title: 'Kathmandu Valley', href: '/destinations/kathmandu' },
        { title: 'Pokhara Valley', href: '/destinations/pokhara' },
        { title: 'Chitwan National Park', href: '/destinations/chitwan' },
        { title: 'Lumbini Birthplace', href: '/destinations/lumbini' },
      ];

  const displayTrekking = trekkingRoutes.length > 0
    ? trekkingRoutes.slice(0, 5).map(t => ({ title: t.title, href: `/trekking/${t.slug}` }))
    : [
        { title: 'Everest Base Camp', href: '/trekking/everest-base-camp-trek' },
        { title: 'Annapurna Circuit', href: '/trekking/annapurna-circuit-trek' },
        { title: 'Langtang Valley', href: '/trekking/langtang-valley-trek' },
        { title: 'Ghorepani Poon Hill', href: '/trekking/ghorepani-poon-hill-trek' },
      ];

  const displayArticles = articles.length > 0
    ? articles.slice(0, 5).map(a => ({ title: truncateTitle(a.title, 6), href: `/articles/${a.slug}` }))
    : [
        { title: 'Best Time to Visit Nepal', href: '/articles/best-time-to-visit' },
        { title: 'Top 10 Foods to Try', href: '/articles/top-10-foods' },
        { title: 'Complete Permit & Visa Guide', href: '/articles/visa-guide' },
      ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            Nepal<span>Wander</span>
          </Link>
          <p>Your trusted guide to Nepal's mountains, valleys, and ancient cities. Built with love from Thamel, Kathmandu.</p>
        </div>

        <div className={styles.footerCol}>
          <h4>Destinations</h4>
          <ul>
            {displayDestinations.map((d, index) => (
              <li key={index}>
                <Link href={d.href}>{d.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Trekking</h4>
          <ul>
            {displayTrekking.map((t, index) => (
              <li key={index}>
                <Link href={t.href}>{t.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Latest Articles</h4>
          <ul>
            {displayArticles.map((a, index) => (
              <li key={index}>
                <Link href={a.href}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} <Link href="/" className={styles.brandLink}>NepalWander</Link>. All rights reserved.</span>
        <span>Built with care by <a href="https://ugeshsimkhada.com.np" target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>Ugesh Simkhada</a></span>
      </div>
    </footer>
  );
}