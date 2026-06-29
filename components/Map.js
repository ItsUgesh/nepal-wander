'use client';

import { useEffect } from 'react';
import styles from './Map.module.css';

export default function Map({ lat, lng, title }) {
  useEffect(() => {
    // Dynamically import leaflet to avoid SSR issues
    import('leaflet').then((L) => {
      // Fix default marker icons
      delete L.default.Icon.Default.prototype._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      // Avoid duplicate maps
      const container = L.default.DomUtil.get('map');
      if (container._leaflet_id) return;

      const map = L.default.map('map', {
        center: [lat, lng],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      L.default.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<b>${title}</b>`)
        .openPopup();
    });
  }, [lat, lng, title]);

  return (
    <div className={styles.mapWrap}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div id="map" className={styles.map}></div>
    </div>
  );
}