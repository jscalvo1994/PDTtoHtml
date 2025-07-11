'use client';
import './SocialMedia.css';
import Image from 'next/image';

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
            <Image
              src="/icons/instagramicon.png"
              alt="Instagram"
              width={48}
              height={48}
              className="social-image-icon"
            />
            @mzherrajescol
          </li>
          <li>
            <Image
              src="/icons/fbicon.png"
              alt="Facebook"
              width={48}
              height={48}
              className="social-image-icon"
            />
            @mzherrajes
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
