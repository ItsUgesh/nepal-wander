import { getAllTrekkingRoutes } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Trekking Routes — NepalWander",
  description: "Explore legendary trekking routes in Nepal",
};

export default async function TrekkingPage() {
  const routes = await getAllTrekkingRoutes();

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Classic Routes</p>
        <h1 className={styles.title}>Trekking Routes</h1>
        <p className={styles.sub}>
          From the iconic Everest Base Camp to the hidden valleys of Mustang — every trail tells a story millions of years in the making.
        </p>
      </div>

      <div className={styles.grid}>
        {routes.map((route) => (
          <Link
            key={route.id}
            href={`/trekking/${route.slug}`}
            className={styles.card}
          >
            <div className={styles.cardInner}>
              {route.trekkingRouteDetails.heroImage ? (
                <img
                  src={route.trekkingRouteDetails.heroImage.node.sourceUrl}
                  alt={route.title}
                  className={styles.cardImg}
                />
              ) : (
                <div className={styles.cardImgPlaceholder} />
              )}
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardName}>{route.title}</h2>
                <div className={styles.cardMeta}>
                  {route.trekkingRouteDetails.difficulty && (
                    <span className={styles.cardTag}>
                      {route.trekkingRouteDetails.difficulty[0]}
                    </span>
                  )}
                  {route.trekkingRouteDetails.duration && (
                    <span className={styles.cardTag}>
                      {route.trekkingRouteDetails.duration}
                    </span>
                  )}
                  {route.trekkingRouteDetails.maxElevation && (
                    <span className={styles.cardTag}>
                      {route.trekkingRouteDetails.maxElevation}m
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