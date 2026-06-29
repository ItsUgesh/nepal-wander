import { getPlaceBySlug } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import Map from '@/components/Map';

export default async function PlacePage({ params }) {
  const { destination, place } = await params;
  const placeData = await getPlaceBySlug(place);

  if (!placeData) notFound();

  return (
    <main className={styles.main}>

      {/* Hero */}
      <div className={styles.hero}>
        {placeData.placeDetails.imageGallery && (
          <img
            src={placeData.placeDetails.imageGallery.node.sourceUrl}
            alt={placeData.title}
            className={styles.heroBg}
          />
        )}
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href={`/destinations/${destination}`} className={styles.backLink}>
            ← Back to {destination.charAt(0).toUpperCase() + destination.slice(1)}
          </Link>
          <h1 className={styles.title}>{placeData.title}</h1>
          <div className={styles.meta}>
            {placeData.placeDetails.difficulty && (
              <span className={styles.metaTag}>⚡ {placeData.placeDetails.difficulty}</span>
            )}
            {placeData.placeDetails.duration && (
              <span className={styles.metaTag}>🕐 {placeData.placeDetails.duration}</span>
            )}
            {placeData.placeDetails.bestTimeToVisit && (
              <span className={styles.metaTag}>🌤 {placeData.placeDetails.bestTimeToVisit}</span>
            )}
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className={styles.contentWrap}>

        {/* Main content */}
        <div className={styles.content}>
          {placeData.placeDetails.highlights && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Highlights</h2>
              <p className={styles.sectionText}>{placeData.placeDetails.highlights}</p>
            </div>
          )}

          {placeData.placeDetails.itinerary && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Itinerary</h2>
              <p className={styles.sectionText}>{placeData.placeDetails.itinerary}</p>
            </div>
          )}

          {placeData.placeDetails.mapLatitude && placeData.placeDetails.mapLongitude && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Location</h2>
              <Map
                lat={parseFloat(placeData.placeDetails.mapLatitude)}
                lng={parseFloat(placeData.placeDetails.mapLongitude)}
                title={placeData.title}
              />
            </div>
          )}

          {placeData.placeDetails.bestTimeToVisit && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Best Time to Visit</h2>
              <p className={styles.sectionText}>{placeData.placeDetails.bestTimeToVisit}</p>
            </div>
          )}
        </div>

        {/* Booking sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            {placeData.placeDetails.priceFrom && (
              <div className={styles.price}>
                <span className={styles.priceFrom}>From</span>
                <span className={styles.priceNum}>${placeData.placeDetails.priceFrom}</span>
                <span className={styles.pricePer}>per person</span>
              </div>
            )}

            <div className={styles.sidebarMeta}>
              {placeData.placeDetails.duration && (
                <div className={styles.sidebarMetaItem}>
                  <span className={styles.sidebarMetaLabel}>Duration</span>
                  <span className={styles.sidebarMetaValue}>{placeData.placeDetails.duration}</span>
                </div>
              )}
              {placeData.placeDetails.groupSize && (
                <div className={styles.sidebarMetaItem}>
                  <span className={styles.sidebarMetaLabel}>Group Size</span>
                  <span className={styles.sidebarMetaValue}>{placeData.placeDetails.groupSize}</span>
                </div>
              )}
              {placeData.placeDetails.difficulty && (
                <div className={styles.sidebarMetaItem}>
                  <span className={styles.sidebarMetaLabel}>Difficulty</span>
                  <span className={styles.sidebarMetaValue}>{placeData.placeDetails.difficulty}</span>
                </div>
              )}
            </div>

            <button className={styles.bookBtn}>Book Now</button>
            <p className={styles.bookNote}>No payment required today</p>
          </div>
        </div>

      </div>
    </main>
  );
}