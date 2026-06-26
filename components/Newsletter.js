import styles from './Newsletter.module.css';

export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <h2>Get Trek Updates & Travel Tips</h2>
      <p>Join 12,000+ Nepal travellers. No spam, only beautiful places and honest advice.</p>
      <div className={styles.newsletterForm}>
        <input type="email" placeholder="your@email.com" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}