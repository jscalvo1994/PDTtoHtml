'use client';
import Image from 'next/image';
import './GaleriaOrganizador.css';

export default function GaleriaOrganizador() {
  return (
    <section className="galeria-container-organizador">
      {/* Izquierda con fondo de bisagra */}
      <div className="galeria-left-organizador">
        <div className="galeria-novedades-bloque-organizador">
          <div className="galeria-novedades-texto-organizador">
            <p className="novedad-title-organizador">ORGANIZADOR PARA COCINA</p>
            <p className="novedad-sub-organizador">Condimentero 3 Niveles</p>
            <p className="novedad-page-organizador">Pag 22</p>
          </div>
          <Image
            src="/galeria/qr-example.png"
            alt="Código QR"
            width={100}
            height={100}
            className='galeria-qr-organizador'
          />
        </div>
      </div>

      {/* Derecha con galería de cocinas */}
      <div className="galeria-right-organizador">
        <div className="galeria-header-organizador">
          <h3>ORGANIZADORES</h3>
          <p>Galería<br /><span>Contenido general</span></p>
        </div>
        <div className="galeria-images-organizador">
          <Image
            src="/galeria/Organizador1.png"
            alt="Cocina 1"
            width={600}
            height={200}
            className="galeria-img-organizador"
          />
          <Image
            src="/galeria/Organizador2.png"
            alt="Cocina 2"
            width={600}
            height={200}
            className="galeria-img-organizador"
          />
        </div>
      </div>
    </section>
  );
}
