import { getTrekkingRouteBySlug } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TrekkingRoutePage({ params }) {
  const { slug } = await params;
  const route = await getTrekkingRouteBySlug(slug);

  if (!route) notFound();

  return (
    <main className={styles.main}>

      {/* Hero */}
      <div className={styles.hero}>
        {route.trekkingRouteDetails.heroImage && (
          <img
            src={route.trekkingRouteDetails.heroImage.node.sourceUrl}
            alt={route.title}
            className={styles.heroBg}
          />
        )}
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href="/trekking" className={styles.backLink}>
            ← All Trekking Routes
          </Link>
          <h1 className={styles.title}>{route.title}</h1>
          <div className={styles.meta}>
            {route.trekkingRouteDetails.difficulty && (
              <span className={styles.metaTag}>
                ⚡ {route.trekkingRouteDetails.difficulty[0]}
              </span>
            )}
            {route.trekkingRouteDetails.duration && (
              <span className={styles.metaTag}>
                🕐 {route.trekkingRouteDetails.duration}
              </span>
            )}
            {route.trekkingRouteDetails.maxElevation && (
              <span className={styles.metaTag}>
                ⛰ {route.trekkingRouteDetails.maxElevation}m
              </span>
            )}
            {route.trekkingRouteDetails.bestSeason && (
              <span className={styles.metaTag}>
                🌤 {route.trekkingRouteDetails.bestSeason}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className={styles.contentWrap}>

        {/* Main content */}
        <div className={styles.content}>
          {route.trekkingRouteDetails.overview && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.sectionText}>
                {route.trekkingRouteDetails.overview}
              </p>
            </div>
          )}
          {route.trekkingRouteDetails.itinerary && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Itinerary</h2>
              <p className={styles.sectionText}>
                {route.trekkingRouteDetails.itinerary}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            {route.trekkingRouteDetails.priceFrom && (
              <div className={styles.price}>
                <span className={styles.priceFrom}>From</span>
                <span className={styles.priceNum}>
                  ${route.trekkingRouteDetails.priceFrom}
                </span>
                <span className={styles.pricePer}>per person</span>
              </div>
            )}
            <div className={styles.sidebarMeta}>
              {route.trekkingRouteDetails.duration && (
                <div className={styles.sidebarMetaItem}>
                  <span className={styles.sidebarMetaLabel}>Duration</span>
                  <span className={styles.sidebarMetaValue}>
                    {route.trekkingRouteDetails.duration}
                  </span>
                </div>
              )}
              {route.trekkingRouteDetails.maxElevation && (
                <div className={styles.sidebarMetaItem}>
                  <span className={styles.sidebarMetaLabel}>Max Elevation</span>
                  <span className={styles.sidebarMetaValue}>
                    {route.trekkingRouteDetails.maxElevation}m
                  </span>
                </div>
              )}
              {route.trekkingRouteDetails.difficulty && (
                <div className={styles.sidebarMetaItem}>
                  <span className={styles.sidebarMetaLabel}>Difficulty</span>
                  <span className={styles.sidebarMetaValue}>
                    {route.trekkingRouteDetails.difficulty[0]}
                  </span>
                </div>
              )}
              {route.trekkingRouteDetails.bestSeason && (
                <div className={styles.sidebarMetaItem}>
                  <span className={styles.sidebarMetaLabel}>Best Season</span>
                  <span className={styles.sidebarMetaValue}>
                    {route.trekkingRouteDetails.bestSeason}
                  </span>
                </div>
              )}
            </div>
            <button className={styles.bookBtn}>Book This Trek</button>
            <p className={styles.bookNote}>No payment required today</p>
          </div>
        </div>

      </div>
    </main>
  );
}