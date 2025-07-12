'use client';
import Image from 'next/image';
import './GaleriaBisagras.css';

export default function GaleriaBisagra() {
  return (
    <section className="galeria-container">
      {/* Izquierda con fondo de bisagra */}
      <div className="galeria-left">
        <div className="galeria-novedades-bloque">
          <div className="galeria-novedades-texto">
            <p className="novedad-title">NOVEDADES</p>
            <p className="novedad-sub">Bisagra Parche 35mm 3D</p>
            <p className="novedad-page">Pag 05</p>
          </div>
          <Image
            src="/galeria/qr-example.png"
            alt="Código QR"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Derecha con galería de cocinas */}
      <div className="galeria-right">
        <div className="galeria-header">
          <h3>HERRAJES <span>/ BISAGRAS</span></h3>
          <p>Galería<br /><span>Contenido general</span></p>
        </div>
        <div className="galeria-images">
          <Image
            src="/galeria/cocina1.png"
            alt="Cocina 1"
            width={600}
            height={200}
            className="galeria-img"
          />
          <Image
            src="/galeria/cocina2.png"
            alt="Cocina 2"
            width={600}
            height={200}
            className="galeria-img"
          />
        </div>
      </div>
    </section>
  );
}
