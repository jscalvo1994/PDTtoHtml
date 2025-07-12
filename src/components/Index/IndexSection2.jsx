'use client';
import './IndexSection2.css';
import Image from 'next/image';

export default function IndexSection2() {
  return (
    <section className="index-section2">
      {/* IZQUIERDA (imagen completa sin márgenes) */}
      <div className="index-left2">
        <Image
          src="/IndexSection2.png"
          alt="Imagen sección índice"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* DERECHA (contenido del índice) */}
      <div className="index-right2">
        {/* Encabezado */}
        <div className="index-header2">
          <div className="index-title-block2">
            <h2 className="index-title2">INDICE DE SECCIÓN</h2>
            <p className="index-subtitle2">Contenido general</p>
          </div>
          <hr className="index-line2" />
          <div className="index-divider2">
            <span className="index-highlight2">
              HERRAJES DE ALTA CALIDAD  Y  DURABILIDAD
            </span>
          </div>
          <hr className="index-line2" />
        </div>

        {/* CONTENIDO */}
        <div className="index-content2">
          <div className="index-column2">
            <h3>Alacenas</h3>
            <ul>
              <li>Alacena Vidrio Doble Abatible 12 Módulos 45cm*50cm</li>
              <li>Alacena Metal Doble Abatible Victory 12 Módulos 45cm*50cm</li>
            </ul>

            <h3>Condimenteros</h3>
            <ul>
              <li>Condimentero Metálico 3 Niveles 45cm*10cm</li>
              <li>Condimentero Vidrio 3 Niveles 15cm*48cm</li>
              <li>Condimentero Vidrio 3 Niveles 20cm*48cm</li>
              <li>Condimentero Vidrio 3 Niveles 25cm*48cm</li>
            </ul>
          </div>

          <div className="index-column2">
            <h3>Loceros</h3>
            <ul>
              <li>Locero Acero Inox 60cm</li>
              <li>Locero Acero Inox 70cm</li>
            </ul>

            <h3>Cajones</h3>
            <ul>
              <li>Cajón Mágico Vidrio 8.6cm*50cm</li>
              <li>Cajón Mágico Vidrio 11.6cm*50cm</li>
              <li>Cajón Mágico Vidrio 16.6cm*50cm</li>
            </ul>
          </div>

          <div className="index-column2 info-block2">
            <p className="info-text2">
              Cada Producto incluye sus respectivas especificaciones y ficha técnica, si necesitas información detallada sobre un producto en específico te invitamos a visitar nuestra página web:
            </p>
            <p className="info-link2">
              <a href="https://www.mzglobalimports.com" target="_blank" rel="noopener noreferrer">
                WWW.mzglobalimports.com
              </a>
            </p>
            <p className="info-footer2">Contáctanos en nuestras líneas de atención :</p>
          </div>

        </div>
      </div>
    </section>
  );
}
