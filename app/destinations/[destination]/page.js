import { getDestinationBySlug, getPlacesByDestination } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DestinationPage({ params }) {
const { destination } = await params;
const destinationData = await getDestinationBySlug(destination);

  if (!destinationData) notFound();

  const places = await getPlacesByDestination(destination);

  return (
    <main className={styles.main}>

      {/* Hero */}
      <div className={styles.hero}>
        {destinationData.destinationDetails.heroImage && (
          <img
            src={destinationData.destinationDetails.heroImage.node.sourceUrl}
            alt={destinationData.title}
            className={styles.heroBg}
          />
        )}
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href="/destinations" className={styles.backLink}>
            ← All Destinations
          </Link>
          <h1 className={styles.title}>{destinationData.title}</h1>
          {destinationData.destinationDetails.shortDescription && (
            <p className={styles.sub}>
              {destinationData.destinationDetails.shortDescription}
            </p>
          )}
          <div className={styles.meta}>
            {destinationData.destinationDetails.bestSeason && (
              <span className={styles.metaTag}>
                🌤 {destinationData.destinationDetails.bestSeason}
              </span>
            )}
            {destinationData.destinationDetails.distanceFromKathmandu && (
              <span className={styles.metaTag}>
                📍 {destinationData.destinationDetails.distanceFromKathmandu}
              </span>
            )}
            {destinationData.destinationDetails.elevation && (
              <span className={styles.metaTag}>
                ⛰ {destinationData.destinationDetails.elevation}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Places grid */}
      <div className={styles.placesSection}>
        <p className={styles.eyebrow}>Explore {destinationData.title}</p>
        <h2 className={styles.placesTitle}>Places to Visit</h2>

        {places.length === 0 ? (
          <p className={styles.noPlaces}>No places added yet for this destination.</p>
        ) : (
          <div className={styles.grid}>
            {places.map((place) => (
              <Link
                key={place.id}
                href={`/destinations/${destination}/${place.slug}`}
                className={styles.card}
              >
                <div className={styles.cardInner}>
                  {place.placeDetails.imageGallery ? (
                    <img
                      src={place.placeDetails.imageGallery.node.sourceUrl}
                      alt={place.title}
                      className={styles.cardImg}
                    />
                  ) : (
                    <div className={styles.cardImgPlaceholder} />
                  )}
                  <div className={styles.cardOverlay}></div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>{place.title}</h3>
                    <div className={styles.cardMeta}>
                      {place.placeDetails.difficulty && (
                        <span className={styles.cardTag}>
                          {place.placeDetails.difficulty}
                        </span>
                      )}
                      {place.placeDetails.duration && (
                        <span className={styles.cardTag}>
                          {place.placeDetails.duration}
                        </span>
                      )}
                      {place.placeDetails.priceFrom && (
                        <span className={styles.cardTag}>
                          From ${place.placeDetails.priceFrom}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </main>
  );
}