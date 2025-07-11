'use client';

import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

export default function SocialMedia() {
  return (
    <section className="social-media">
      {/* Columna izquierda - redes sociales */}
      <div className="social-media-left">
        <p className="social-title">
          Contacto <br />
          <strong>SIGUENOS</strong> <em>/ REDES SOCIALES</em>
        </p>
        <ul className="social-links">
          <li>
            <Instagram className="social-icon" /> @mzherrajescol
          </li>
          <li>
            <Facebook className="social-icon" /> @mzherrajes
          </li>
        </ul>
        <p className="social-website">www.mzglobalimports.com</p>
      </div>

      {/* Columna derecha - imagen */}
      <div className="social-media-right">
        <Image
          src="/ambiente.png"
          alt="Cocina moderna"
          fill
          className="social-image"
        />
        <div className="social-overlay">
          Moderniza tu hogar con calidad superior.
        </div>
      </div>
    </section>
  );
}
