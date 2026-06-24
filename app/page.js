import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Image
          src="/images/nepal_hero_mountain.png"
          alt="Nepal Himalayan mountains"
          fill
          priority
          className={styles.heroBg}
        />

        <div className={styles.mistLayer}></div>

        <div className={styles.heroContent}>
          <p className={styles.heroTagline}>Discover the Roof of the World</p>
          <h1 className={styles.heroTitle}>Nepal Wander</h1>
          <p className={styles.heroSubtitle}>
            From the peaks of the Himalayas to the jungles of Chitwan — your journey starts here.
          </p>
          <div className={styles.heroButtons}>
            <a href="/destinations" className={styles.btnPrimary}>Explore Destinations</a>
            <a href="/trekking" className={styles.btnSecondary}>View Treks</a>
          </div>
        </div>
      </section>
    </main>
  );
}