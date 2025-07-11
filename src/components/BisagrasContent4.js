import Image from 'next/image';

export default function BisagrasContent4() {
  return (
    <section className="product-section">
      {/* Encabezado */}
      <div className="product-header">
        <p className="product-subtitle">Contenido general</p>
        <h1 className="product-title">
          <strong>HERRAJES</strong> <em>/ BISAGRAS</em>
        </h1>
        <hr className="product-divider" />
      </div>

      {/* Cuerpo principal */}
      <div className="product-body">
        {/* Imagen izquierda */}
        <div className="product-image-left">
          <Image
            src="/LogoBisagra2.png"
            alt="Bisagra principal"
            width={400}
            height={400}
            className="product-main-image"
          />
        </div>

        {/* Descripción técnica */}
        <div className="product-description">
          <h2>Bisagra SemiParche 35 mm </h2>
          <ul>
            <li><strong>Tipo:</strong>  Bisagra Semiparche niquelada</li>
            <li><strong>Suministros:</strong> 1 Par de bisagras, 12 tornillos cierre de 2 golpes, base doble tornillo.</li>
            <li><strong>Diámetro:</strong> 35 mm</li>
            <li><strong>Material:</strong> Metal</li>
            <li><strong>Aplicación:</strong> Escritorios, comedor, centros de entretenimiento, cocina, mueble de baño, oficina</li>
            <li><strong>Ciclos de apertura:</strong> 51,000</li>
            <li><strong>Ángulo de Apertura:</strong> 110º</li>
            <li><strong>Capacidad de carga:</strong> 3.8 kg</li>
            <li><strong>Marca:</strong> MZ</li>
          </ul>
        </div>

        {/* Tabla y plano técnico */}
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
                <td>Bisagra parche</td>
                <td>200 PARES</td>
              </tr>
            </tbody>
          </table>

          <div className="product-sketch">
            <Image
              src="/FichaTecnica.png"
              alt="Plano técnico de bisagra"
              width={400}
              height={220}
              className="product-sketch-image"
            />
            <p className="product-id">Herraje-Bisagras/001</p>
          </div>
        </div>
      </div>
    </section>
  );
}
