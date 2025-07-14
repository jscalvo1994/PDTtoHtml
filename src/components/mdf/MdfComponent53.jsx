
import React from 'react';
import Image from 'next/image';
import './MdfComponent53.css';

const MdfComponent53 = () => {
  return (
    <section className="mdf53-container">
      {/* LADO IZQUIERDO (IMAGEN UNIFICADA) */}
      <div className="mdf53-left">
        <Image
          src="/mdf/mdf84.png"
          alt="Vistas MDF"
          width={180}
          height={520}
        />
      </div>

      {/* LADO DERECHO (CONTENIDO) */}
      <div className="mdf53-right">
        <div className="mdf53-header">
          <h3>MDF <span>/</span></h3>
          <p className="mdf53-sub">Galería</p>
          <p className="mdf53-subsub">Contenido general</p>
        </div>

        <h4>MDF 2,7 MM</h4>
        <ul>
          <li><strong>Medidas:</strong> 1.83*2.44</li>
          <li><strong>Densidad:</strong> 8,20</li>
          <li><strong>Espesor:</strong> 9mm</li>
        </ul>

        <div className="mdf53-qr">
          <Image src="/galeria/qr-example.png" alt="Código QR" width={90} height={90} />
        </div>

        <span className="mdf53-footnote">Clavillos/046</span>

        <p className="mdf53-desc">
          Descubre la excelencia y versatilidad del MDF (tablero de fibra de densidad media), una opción de madera ingenieril que combina la resistencia de la madera con la versatilidad del diseño. Nuestro MDF de alta calidad se fabrica cuidadosamente para ofrecer una superficie lisa y homogénea.
        </p>
      </div>
    </section>
  );
};

export default MdfComponent53;
