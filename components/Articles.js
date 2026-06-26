import styles from './Articles.module.css';

export default function Articles() {
  const articles = [
    {
      img: '/images/destinations/nepal_trek_hero.png',
      category: 'Trekking Guide',
      title: 'Your Complete Guide to Everest Base Camp — Everything You Need to Know',
      excerpt: 'Permits, packing lists, altitude sickness, best seasons — we cover it all so your trek goes exactly as planned.',
      readTime: '8 min read',
      tag: 'Trekking',
      date: 'June 2025',
    },
    {
      img: '/images/destinations/nepal_pokhara_lake.png',
      category: 'Destination',
      title: '48 Hours in Pokhara: The Perfect Weekend by Phewa Lake',
      excerpt: 'Boating at sunrise, paragliding over the valley, and the best daal bhat in town — a local\'s guide to Nepal\'s second city.',
      readTime: '5 min read',
      tag: 'City Guide',
      date: 'May 2025',
    },
    {
      img: '/images/destinations/nepal_kathmandu_temple.png',
      category: 'Culture',
      title: 'Kathmandu\'s Hidden Temples: A Walking Route Through History',
      excerpt: 'Beyond the tourist trail — a 3-hour walk through courtyards, incense smoke, and centuries of Newari architecture.',
      readTime: '6 min read',
      tag: 'Culture',
      date: 'April 2025',
    },
  ];

  return (
    <section className={styles.articles}>
      <p className={styles.sectionEyebrow}>Travel Journal</p>
      <h2 className={styles.sectionTitle}>Latest from the Trail</h2>
      <p className={styles.sectionSub}>
        Stories, guides, and insider tips from guides and travellers who've walked every pass.
      </p>

      <div className={styles.articlesGrid}>
        {articles.map((a) => (
          <div key={a.title} className={styles.articleCard}>
            <div className={styles.articleThumb}>
              <img src={a.img} alt={a.title} />
              <span className={styles.articleCategory}>{a.category}</span>
            </div>
            <div className={styles.articleBody}>
              <h3 className={styles.articleTitle}>{a.title}</h3>
              <p className={styles.articleExcerpt}>{a.excerpt}</p>
              <div className={styles.articleMeta}>
                <span>{a.readTime}</span>
                <span className={styles.dot}></span>
                <span>{a.tag}</span>
                <span className={styles.dot}></span>
                <span>{a.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}