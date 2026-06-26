import { getAllDestinations } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Destinations — NepalWander",
  description: "Explore all destinations in Nepal",
};

export default async function DestinationsPage() {
  const destinations = await getAllDestinations();

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Explore Nepal</p>
        <h1 className={styles.title}>All Destinations</h1>
        <p className={styles.sub}>
          From the peaks of the Himalayas to the jungles of Chitwan. Find your perfect Nepal destination.
        </p>
      </div>

      <div className={styles.grid}>
        {destinations.map((dest) => (
          <Link
            key={dest.id}
            href={`/destinations/${dest.slug}`}
            className={styles.card}
          >
            <div className={styles.cardInner}>
              {dest.destinationDetails.heroImage ? (
                <img
                  src={dest.destinationDetails.heroImage.node.sourceUrl}
                  alt={dest.title}
                  className={styles.cardImg}
                />
              ) : (
                <div className={styles.cardImgPlaceholder} />
              )}
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardName}>{dest.title}</h2>
                {dest.destinationDetails.shortDescription && (
                  <p className={styles.cardDesc}>
                    {dest.destinationDetails.shortDescription}
                  </p>
                )}
                <div className={styles.cardMeta}>
                  {dest.destinationDetails.bestSeason && (
                    <span className={styles.cardTag}>
                      {dest.destinationDetails.bestSeason}
                    </span>
                  )}
                  {dest.destinationDetails.distanceFromKathmandu && (
                    <span className={styles.cardTag}>
                      {dest.destinationDetails.distanceFromKathmandu}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}