import styles from './StatsBar.module.css';

export default function StatsBar() {
  return (
    <div className={styles.statsBar}>
      {[
        { num: '8,849m', label: 'Highest Peak' },
        { num: '50+',    label: 'Trek Routes' },
        { num: '3,000+', label: 'Happy Trekkers' },
        { num: '12',     label: 'UNESCO Sites' },
      ].map((s) => (
        <div key={s.label} className={styles.statItem}>
          <div className={styles.statNum}>{s.num}</div>
          <div className={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}