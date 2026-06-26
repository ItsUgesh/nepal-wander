'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = styles.particle;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${8 + Math.random() * 12}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      p.style.width = p.style.height = `${1 + Math.random() * 3}px`;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className={styles.hero}>

      {/* Mountain background */}
      <div className={styles.heroBg}></div>

      {/* Dark overlay */}
      <div className={styles.heroOverlay}></div>

      {/* Mist wisps */}
      <div className={styles.mistLayer}>
        {[1,2,3,4,5,6,7,8].map((n) => (
          <div key={n} className={`${styles.wisp} ${styles[`w${n}`]}`}>
            <WispSvg n={n} />
          </div>
        ))}
      </div>

      {/* Sun shadow pulse */}
      <div className={styles.sunShadow}></div>

      {/* Floating particles */}
      <div className={styles.particles} ref={particlesRef}></div>

      {/* Hero content */}
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>✦ Discover the Himalayas</div>
        <h1 className={styles.heroTitle}>
          Where Earth<br />Touches <span className={styles.highlight}>Heaven</span>
        </h1>
        <p className={styles.heroSub}>
          Nepal's breathtaking peaks, ancient temples, and timeless trails await. Your Himalayan story begins here with guides who know every pass by heart.
        </p>
        <div className={styles.heroActions}>
          <button className={styles.btnPrimary}>Explore Destinations →</button>
          <button className={styles.btnOutline}>View Trekking Routes</button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>

    </section>
  );
}

// Wisp SVG data — each wisp has unique size and opacity
const wispData = [
  { w: 780, h: 110, rx: 370, ry: 44, op1: 0.58, op2: 0.28, op3: 0.15, blur: '22 12' },
  { w: 600, h:  80, rx: 285, ry: 32, op1: 0.52, op2: 0.22, op3: 0.10, blur: '18 9'  },
  { w: 700, h: 120, rx: 335, ry: 48, op1: 0.60, op2: 0.30, op3: 0.18, blur: '24 13' },
  { w: 500, h:  70, rx: 238, ry: 28, op1: 0.48, op2: 0.18, op3: 0.08, blur: '15 8'  },
  { w: 650, h: 100, rx: 310, ry: 40, op1: 0.30, op2: 0.25, op3: 0.12, blur: '20 10' },
  { w: 560, h:  85, rx: 265, ry: 34, op1: 0.28, op2: 0.20, op3: 0.10, blur: '17 9'  },
  { w: 820, h: 130, rx: 395, ry: 52, op1: 0.25, op2: 0.18, op3: 0.10, blur: '26 14' },
  { w: 480, h:  65, rx: 228, ry: 26, op1: 0.28, op2: 0.20, op3: 0.09, blur: '14 7'  },
];

function WispSvg({ n }) {
  const d = wispData[n - 1];
  const cx = d.w / 2;
  const cy = d.h / 2;
  const id = `rg${n}`;
  const fid = `f${n}`;
  return (
    <svg width={d.w} height={d.h} viewBox={`0 0 ${d.w} ${d.h}`}
      xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="white" stopOpacity={d.op1} />
          <stop offset="50%"  stopColor="white" stopOpacity={d.op2} />
          <stop offset="80%"  stopColor="white" stopOpacity={d.op3} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </radialGradient>
        <filter id={fid} x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation={d.blur} />
        </filter>
      </defs>
      <ellipse cx={cx} cy={cy} rx={d.rx} ry={d.ry}
        fill={`url(#${id})`} filter={`url(#${fid})`} />
    </svg>
  );
}