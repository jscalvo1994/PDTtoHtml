'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import './Bisagras.css';

export default function BisagrasContent7({
  mainImage = '/bisagras/bisagra7.png',
  sketchImage = '/fichastecnicas/fichatecnica7.png',

  productTitle = 'Bisagra Parche 26mm',
  tipo = 'Bisagra parche',
  diametro = '26 mm',
  material = 'Metal',
  aplicacion = 'Ideal para puertas de armarios y muebles.',
  caracteristicas = 'Diseño compacto, mecanismo de apertura suave, ajuste de cierre, durabilidad excepcional.',
  marca = 'MZ',

  referencia = 'Bisagra parche',
  empaque = '200 PARES',
  codigo = 'Herraje-Bisagras/007',
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
            alt="Bisagra Parche 26mm"
            width={600}
            height={600}
            className="product-main-image"
          />
        </div>

        <div className="product-description">
          <h2 className="product-name">{productTitle}</h2>
          <ul>
            <li><strong>Tipo:</strong> {tipo}</li>
            <li><strong>Diámetro:</strong> {diametro}</li>
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
              alt="Ficha técnica Bisagra 26mm"
              width={600}
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
