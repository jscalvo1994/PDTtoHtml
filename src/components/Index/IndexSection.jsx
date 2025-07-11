'use client';
import './IndexSection.css';
import Image from 'next/image'
export default function IndexSection() {
  return (
    <section className="index-section">
      {/* IZQUIERDA (imagen completa sin márgenes) */}
      <div className="index-left">
        <Image
          src="/indexsection1.png"
          alt="Imagen sección índice"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      {/* DERECHA (contenido del índice) */}
      <div className="index-right">
        {/* Encabezado */}
        <div className="index-header">
          <div className="index-title-block">
            <h2 className="index-title">INDICE DE SECCIÓN</h2>
            <p className="index-subtitle">Contenido general</p>
          </div>
  <hr className="index-line" />
<div className="index-divider">

  <span className="index-highlight">HERRAJES DE ALTA CALIDAD  Y  DURABILIDAD</span>
</div>
<hr className="index-line" />


        </div>

        {/* Contenido con solo los títulos y 1 ítem de ejemplo */}
<div className="index-content">
  <div className="index-column">
    <h3>Bisagras</h3>
    <ul>
     <li>Bisagra Parche 35mm</li>
  <li>Bisagra SemiParche 35mm</li>
  <li>Bisagra Parche Cierre Lento 35mm</li>
  <li>Bisagra SemiParche Cierre Lento 35mm</li>
  <li>Bisagra Parche 26mm</li>
  <li>Bisagra Parche 3D 35mm</li>
  <li>Bisagra SemiParche 3D 35mm</li>
  <li>Bisagra Parche 3D Negra</li>
  <li>Bisagra De Golpe</li>
    </ul>

    <h3>Brazos Neumáticos</h3>
    <ul>
      <li>Brazo Neumático Estándar 60,80,100,120 Newtons</li>
  <li>Brazo Neumático Cierre Lento 60,80,100,120 Newtons</li>
  <li>Brazo Plegable Doble Graduable</li>
  <li>Brazo Plegable Una Puerta</li>
    </ul>
  </div>

  <div className="index-column">
    <h3>Manijas</h3>
    <ul>
      <li>Manija Cilíndrica Acero Inox 64mm, 96mm, 128mm</li>
  <li>Manija Cilíndrica Acero Inox Negra 96mm</li>
  <li>Manija Cazuela De Incrustar 11,5 cm</li>
  <li>Manija Cazuela De Incrustar 8,5 cm</li>
  <li>Manija Cazuela De Incrustar 2,4cm</li>
    </ul>

    <h3>Rieles Extensibles</h3>
    <ul>
        <li>Riel Extensible Cierre Lento 40cm, 45cm, 50cm</li>
  <li>Riel Extensible Push Open 40cm,45cm,50cm</li>
  <li>Riel Extensible Montaje Bajo 40cm, 45cm,50cm</li>
  <li>Rieles ext tránsito pesada 30cm, 35cm,40cm,45cm</li>
  <li>Rieles ext liviano 30cm, 35cm</li>
    </ul>
  </div>

  <div className="index-column">
    <h3>Patas</h3>
    <ul>
      <li>Pata Niveladora De Acero Inox 6cm,8cm,10cm</li>
  <li>Pata Tipo Elefante 6cm,8cm,10cm</li>
  <li>Pata Pedestal 80cm,90cm,100cm</li>
    </ul>

    <h3>Alacenas</h3>
    <ul>
      <li>Alacena de vidrio abatible 12 niveles</li>
      {/* ... */}
    </ul>
  </div>
</div>

      </div>
    </section>
  );
}
