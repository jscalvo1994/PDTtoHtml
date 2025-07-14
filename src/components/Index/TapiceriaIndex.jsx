'use client';
import './TapiceriaIndex.css';
import Image from 'next/image';

export default function TapiceriaIndex() {
    return (
        <section className="index-section">
            {/* IZQUIERDA (imagen completa sin márgenes) */}
            <div className="index-left">
                <Image
                    src="/IndexTapiceria62.png" // Reemplaza con la imagen adecuada en /public
                    alt="Imagen tapicería"
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

                    <div className="index-header-row">
                        <h3 className="index-section-title">Tapicería</h3>
                        <span className="index-highlight">HERRAJES DE ALTA CALIDAD  Y  DURABILIDAD</span>
                    </div>
                    <hr className="index-line" />

                    <div className="index-content">
                        {/* COLUMNA IZQUIERDA: Lista de productos */}
                        <div className="index-column">
                            <ul>
                                <li>Grapa N17 1 1/2” *10.000</li>
                                <li>Grapa 80.10</li>
                                <li>Casquete Tapicería #30</li>
                                <li>Casquete Tapicería #36</li>
                                <li>Estoperol Tapicería 16mm plateado</li>
                                <li>Botón Diamante 20mm Capitoneo</li>
                                <li>Botón Gaveta Diamante 35mm</li>
                            </ul>
                        </div>

                        {/* COLUMNA DERECHA: Texto informativo */}
                        <div className="index-column">
                            <p className="tapiceria-info">
                                Cada producto incluye sus respectivas especificaciones y ficha técnica. Si necesitas
                                información detallada sobre un producto en específico te invitamos a visitar nuestra
                                página web
                            </p>
                            <a
                                href="https://www.mzglobalimports.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tapiceria-link"
                            >
                                www.mzglobalimports.com
                            </a>
                            <p className="tapiceria-contacto">
                                Contáctanos en nuestras líneas de atención:
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
}
