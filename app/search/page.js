import { searchAll } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Search — NepalWander",
};

export default async function SearchPage({ searchParams }) {
  const { q } = await searchParams;
  const query = q || '';
  const results = query ? await searchAll(query) : null;
  const totalResults = results
    ? results.destinations.length + results.routes.length + results.articles.length
    : 0;

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Search</p>
        <h1 className={styles.title}>
          {query ? `Results for "${query}"` : 'Search NepalWander'}
        </h1>
        {results && (
          <p className={styles.count}>
            {totalResults} result{totalResults !== 1 ? 's' : ''} found
          </p>
        )}
      </div>

      {!results && (
        <p className={styles.empty}>Enter a search term to find destinations, treks, and articles.</p>
      )}

      {results && totalResults === 0 && (
        <p className={styles.empty}>No results found for "{query}". Try a different search term.</p>
      )}

      {results && totalResults > 0 && (
        <div className={styles.results}>

          {/* Destinations */}
          {results.destinations.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Destinations</h2>
              <div className={styles.grid}>
                {results.destinations.map((d) => (
                  <Link key={d.id} href={`/destinations/${d.slug}`} className={styles.card}>
                    <div className={styles.cardInner}>
                      {d.destinationDetails.heroImage ? (
                        <img src={d.destinationDetails.heroImage.node.sourceUrl} alt={d.title} className={styles.cardImg} />
                      ) : (
                        <div className={styles.cardImgPlaceholder} />
                      )}
                      <div className={styles.cardOverlay}></div>
                      <div className={styles.cardContent}>
                        <span className={styles.cardType}>Destination</span>
                        <h3 className={styles.cardName}>{d.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Trekking Routes */}
          {results.routes.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Trekking Routes</h2>
              <div className={styles.grid}>
                {results.routes.map((r) => (
                  <Link key={r.id} href={`/trekking/${r.slug}`} className={styles.card}>
                    <div className={styles.cardInner}>
                      {r.trekkingRouteDetails.heroImage ? (
                        <img src={r.trekkingRouteDetails.heroImage.node.sourceUrl} alt={r.title} className={styles.cardImg} />
                      ) : (
                        <div className={styles.cardImgPlaceholder} />
                      )}
                      <div className={styles.cardOverlay}></div>
                      <div className={styles.cardContent}>
                        <span className={styles.cardType}>Trekking</span>
                        <h3 className={styles.cardName}>{r.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {results.articles.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Articles</h2>
              <div className={styles.grid}>
                {results.articles.map((a) => (
                  <Link key={a.id} href={`/articles/${a.slug}`} className={styles.card}>
                    <div className={styles.cardInner}>
                      {a.travelArticleDetails.heroImage ? (
                        <img src={a.travelArticleDetails.heroImage.node.sourceUrl} alt={a.title} className={styles.cardImg} />
                      ) : (
                        <div className={styles.cardImgPlaceholder} />
                      )}
                      <div className={styles.cardOverlay}></div>
                      <div className={styles.cardContent}>
                        <span className={styles.cardType}>Article</span>
                        <h3 className={styles.cardName}>{a.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </main>
  );
}