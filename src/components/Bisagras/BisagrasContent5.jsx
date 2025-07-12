'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import './Bisagras.css';

export default function BisagrasContent5({
  mainImage = '/bisagras/bisagra5.png',
  sketchImage = '/fichastecnicas/fichatecnica5.png',

  productTitle = 'Bisagra 3D Parche/Semiparche 35mm',
  tipo = 'Bisagra Parche Negra 3D',
  diametro = '35 mm',
  suministros = '1 Par de bisagras, 12 tornillos',
  material = 'Metal',
  aplicacion = 'Ideal para puertas de armarios y muebles.',
  caracteristicas = 'Diseño compacto, mecanismo de apertura suave, ajuste de cierre, durabilidad excepcional.',
  marca = 'MZ',

  referencia = 'Bisagra parche/Semiparche 3D',
  empaque = '100 PARES',
  codigo = 'Herraje-Bisagras/005',
}) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="bisagra-wrapper">
      <div className="product-header">
        <p className="product-subtitle">Contenido general</p>
        <h1 className="product-title">
          <strong>HERRAJES</strong> <em>/ BISAGRAS</em>
        </h1>
        <hr className="product-divider" />
      </div>

      <div className="product-body">
        <div className="product-image-left">
          <Image
            src={mainImage}
            alt="Bisagra 3D Parche/Semiparche"
            width={300}
            height={300}
            className="product-main-image"
          />
        </div>

        <div className="product-description">
          <h2 className="product-name">{productTitle}</h2>
          <ul>
            <li><strong>Tipo:</strong> {tipo}</li>
            <li><strong>Diámetro:</strong> {diametro}</li>
            <li><strong>Suministros:</strong> {suministros}</li>
            <li><strong>Material:</strong> {material}</li>
            <li><strong>Aplicación:</strong> {aplicacion}</li>
            <li><strong>Características:</strong> {caracteristicas}</li>
            <li><strong>Marca:</strong> {marca}</li>
          </ul>
        </div>

        <div className="product-data-table">
          <table>
            <thead>
              <tr>
                <th>REFERENCIA</th>
                <th>UNIDAD DE EMPAQUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{referencia}</td>
                <td>{empaque}</td>
              </tr>
            </tbody>
          </table>

          <div className="product-sketch">
            <Image
              src={sketchImage}
              alt="Ficha técnica 3D"
              width={300}
              height={400}
              className="product-sketch-image"
            />
            <p className="product-id">{codigo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
