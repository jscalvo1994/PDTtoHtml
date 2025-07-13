'use client';
import './IndexSection3.css';
import Image from 'next/image';

export default function IndexSection3() {
    return (
        <section className="index-section3">
            {/* Imagen Izquierda */}
            <div className="index-left3">
                <Image
                    src="/galeria/IndexSection3.png"
                    alt="Imagen índice de sección"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            {/* Menú Derecho */}
            <div className="index-right3">
                <h2 className="index-title3">INDICE DE SECCIÓN</h2>
                <p className="index-subtitle3">Contenido general</p>

                <div className="index-menu3">
                    <h3>Accesorios ▼</h3>
                    <ul>
                        <li>Rodachina Plástica 1.1/2"</li>
                        <li>Rodachina Plástica 2"</li>
                        <li>Rodamiento balineras Routeadora</li>
                        <li>Escuadra L N°0</li>
                        <li>Deslizador Puntilla 18mm</li>
                        <li>Cerradura Chapa Closet Triangular</li>
                        <li>Tope Cierre Magnético</li>
                        <li>Tope Rodillo Vaivén</li>
                        <li>Soporte Tubo Ovalado</li>
                        <li>Soporte Tubo Redondo</li>
                        <li>Tubo Ovalado</li>
                        <li>Tubo Redondo</li>
                        <li>Push To Open</li>
                        <li>Soporte entrepaño Plástico (Eje Metálico)</li>
                        <li>Soporte entrepaño Niquelado</li>
                    </ul>
                </div>

                <p className="index-link3">
                    <a href="https://www.mzglobalimports.com" target="_blank" rel="noopener noreferrer">
                        www.mzglobalimports.com
                    </a>
                </p>
                <p className="index-footer3">Contáctanos en nuestras líneas de atención :</p>
            </div>
        </section>
    );
}
