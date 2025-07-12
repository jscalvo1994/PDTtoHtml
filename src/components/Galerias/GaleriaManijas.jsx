'use client';
import Image from 'next/image';
import './GaleriaManijas.css';

export default function ManijasGaleria() {
    return (
        <section className="galeria-manijas-section">
            {/* LADO IZQUIERDO */}
            <div className="galeria-manijas-left">
                <div className="galeria-manijas-novedades">
                    <div className="galeria-manijas-texto">
                        <p className="galeria-manijas-title">MANIJAS</p>
                        <p className="galeria-manijas-sub">Manijas Cilíndricas</p>
                        <p className="galeria-manijas-page">Pag 08-09</p>
                    </div>
                    <Image
                        src="/galeria/qr-example.png"
                        alt="Código QR"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

            {/* LADO DERECHO */}
            <div className="galeria-manijas-right">
                <div className="galeria-manijas-img-wrapper">
                    <Image
                        src="/galeria/cocina-manijas.png"
                        alt="Cocina con manijas"
                        className="galeria-manijas-img"
                        width={1000}
                        height={600}
                    />
                </div>
                <div className="galeria-manijas-label">
                    <h3>HERRAJE <span>/ MANIJAS</span></h3>
                    <p>Galería<br /><span>Contenido general</span></p>
                </div>
            </div>
        </section>
    );
}
