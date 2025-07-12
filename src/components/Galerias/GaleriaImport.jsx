'use client';
import Image from 'next/image';
import './GaleriaImport.css';

export default function GaleriaImport() {
    return (
        <section className="galeria-import">
            {/* Franja superior negra (8%) */}
            <div className="galeria-import-top"></div>

            {/* Imagen en toda la pantalla */}
            <div className="galeria-import-img-wrapper">
                <Image
                    src="/galeria/import-g.png"
                    alt="Cocina moderna importadores"
                    fill
                    className="galeria-import-img"
                    priority
                />
            </div>

            {/* Sección inferior dividida */}
            <div className="galeria-import-footer">
                {/* Parte izquierda dividida en texto y QR */}
                <div className="footer-left">
                    <div className="footer-left-text">
                        <p className="import-title">IMPORTADORES DIRECTOS</p>
                        <p className="import-subtitle">Herrajes</p>
                    </div>
                    <div className="footer-left-qr">
                        <Image
                            src="/galeria/qr-example.png"
                            alt="QR Catálogo"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>

                {/* Parte derecha con texto grande */}
                <div className="footer-right">
                    <p className="import-download">DESCARGA NUESTRO CATALOGO</p>
                </div>
            </div>
        </section>
    );
}
