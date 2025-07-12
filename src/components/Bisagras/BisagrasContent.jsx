'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import './Bisagras.css';

export default function BisagrasContent({
  mainImage = '/bisagras/bisagra1.png',
  sketchImage = '/fichastecnicas/fichatecnica1.png',

  productTitle = 'Bisagra Parche 35 mm',
  tipo = 'Bisagra parche niquelada',
  suministros = '1 Par de bisagras, 12 tornillos cierre de 2 golpes, base doble tornillo.',
  diametro = '35 mm',
  material = 'Metal',
  aplicacion = 'Escritorios, comedor, centros de entretenimiento, cocina, mueble de baño, oficina',
  ciclos = '51,000',
  angulo = '110º',
  carga = '3.8 kg',
  marca = 'MZ',

  referencia = 'Bisagra parche',
  empaque = '200 PARES',
  codigo = 'Herraje-Bisagras/001',
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
            alt="Bisagra principal"
            width={400}
            height={400}
            className="product-main-image"
          />
        </div>

        <div className="product-description">
          <h2 className="product-name">{productTitle}</h2>
          <ul>
            <li><strong>Tipo:</strong> {tipo}</li>
            <li><strong>Suministros:</strong> {suministros}</li>
            <li><strong>Diámetro:</strong> {diametro}</li>
            <li><strong>Material:</strong> {material}</li>
            <li><strong>Aplicación:</strong> {aplicacion}</li>
            <li><strong>Ciclos de apertura:</strong> {ciclos}</li>
            <li><strong>Ángulo de Apertura:</strong> {angulo}</li>
            <li><strong>Capacidad de carga:</strong> {carga}</li>
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
              alt="Plano técnico de bisagra"
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
