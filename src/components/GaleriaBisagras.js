import Image from 'next/image';

export default function GaleriaBisagra() {
  return (
    <section className="galeria-bisagra">
      {/* Izquierda */}
      <div className="galeria-left">
        <div className="galeria-left-content">
          <p className="galeria-novedades">NOVEDADES</p>
          <p className="galeria-producto">Bisagra Parche 35mm 3D</p>
          <p className="galeria-pagina">Pag 05</p>
        </div>
        <div className="galeria-qr">
          <Image
            src="/qr-code.png"
            alt="QR Bisagra"
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Derecha */}
      <div className="galeria-right">
        <div className="galeria-header">
          <div>
            <strong>HERRAJES</strong> <em>/ BISAGRAS</em>
          </div>
          <div className="galeria-subtitle">
            <p><strong>Galería</strong><br />Contenido general</p>
          </div>
        </div>

        <div className="galeria-images">
          <Image src="/cocina1.png" alt="Cocina 1" width={600} height={150} className="galeria-img" />
          <Image src="/cocina1.png" alt="Cocina 2" width={600} height={150} className="galeria-img" />
        </div>
      </div>
    </section>
  );
}
