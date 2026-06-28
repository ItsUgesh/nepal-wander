'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        Nepal<span>Wander</span>
      </Link>

      <ul className={styles.navLinks}>
        <li><Link href="/destinations">Destinations</Link></li>
        <li><Link href="/trekking">Trekking</Link></li>
        <li><Link href="/articles">Articles</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>

      <button className={styles.navCta}>Plan My Trip</button>
    </nav>
  );
}