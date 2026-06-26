import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.logo}>
                        Nepal<span>Wander</span>
                    </Link>
                    <p>Your trusted guide to Nepal's mountains, valleys, and ancient cities. Built with love from Thamel, Kathmandu.</p>
                </div>

                <div className={styles.footerCol}>
                    <h4>Destinations</h4>
                    <ul>
                        <li><Link href="#">Kathmandu Valley</Link></li>
                        <li><Link href="#">Pokhara</Link></li>
                        <li><Link href="#">Chitwan</Link></li>
                        <li><Link href="#">Upper Mustang</Link></li>
                        <li><Link href="#">Lumbini</Link></li>
                    </ul>
                </div>

                <div className={styles.footerCol}>
                    <h4>Trekking</h4>
                    <ul>
                        <li><Link href="#">Everest Base Camp</Link></li>
                        <li><Link href="#">Annapurna Circuit</Link></li>
                        <li><Link href="#">Langtang Valley</Link></li>
                        <li><Link href="#">Ghorepani Poon Hill</Link></li>
                        <li><Link href="#">Manaslu Circuit</Link></li>
                    </ul>
                </div>

                <div className={styles.footerCol}>
                    <h4>Plan Your Trip</h4>
                    <ul>
                        <li><Link href="#">Best Time to Visit</Link></li>
                        <li><Link href="#">Visa & Permits</Link></li>
                        <li><Link href="#">Packing Checklist</Link></li>
                        <li><Link href="#">Travel Insurance</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <span>© {new Date().getFullYear()} <Link href="/" className={styles.brandLink}>NepalWander</Link>. All rights reserved.</span>
                <span>Built with care by <a href="https://ugeshsimkhada.com.np" target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>Ugesh Simkhada</a></span>
            </div>
        </footer>
    );
}