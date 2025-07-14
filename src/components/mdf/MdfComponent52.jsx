import React from 'react';
import Image from 'next/image';
import './MdfComponent52.css';

const MdfComponent52 = () => {
  return (
    <section className="mdf52-container">
      <div className="mdf52-left">
        <div className="mdf52-image-overlay">
          <h2>MDF</h2>
          <p>Mdf 9mm</p>
          <span>Pag. 05</span>
        </div>
      </div>

      <div className="mdf52-right">
        <div className="mdf53-header">
          <h3>MDF <span>/</span></h3>
          <div className='mdf53-header-texts'>
            <p className="mdf53-sub">Galería</p>
            <p className="mdf53-subsub">Contenido general</p>
          </div>

        </div>

        <hr />
        <div className="mdf52-thumbs-row">
          <div className="mdf52-three-tables">
            <Image src="/mdf/MDF82.png" alt="Vista 1 MDF" width={180} height={280} />
          </div>
          <div className="mdf52-single-table">
            <Image src="/mdf/MDF83.png" alt="Vista 2 MDF" width={300} height={280} />
          </div>
        </div>

        <div className="mdf52-info">
          <h4>MDF 9MM 183*244</h4>
          <ul>
            <li><strong>Medidas:</strong> 1.83*2.44</li>
            <li><strong>Densidad:</strong> 720</li>
            <li><strong>Espesor:</strong> 9mm</li>
          </ul>
        </div>

        <hr />

        <div className="mdf52-description">
          <p>
            Descubre la excelencia y versatilidad del MDF (tablero de fibra de densidad media), una opción de madera ingenieril que combina la resistencia de la madera con la versatilidad del diseño. Nuestro MDF de alta calidad se fabrica cuidadosamente para ofrecer una superficie lisa y homogénea.
          </p>
          <span className="mdf52-footnote">Clavillos/046</span>
        </div>
      </div>
    </section>
  );
};

export default MdfComponent52;
