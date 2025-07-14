'use client';
import Image from 'next/image';
import './TapiceriaGaleria.css';

export default function GaleriaMDF() {
    return (
        <section className="tapiceria-galeria-container">
            {/* IZQUIERDA: imagen a full con texto superpuesto */}
            <div className="tapiceria-galeria-left">
                <Image
                    src="/mdf/mdf79.png"
                    alt="Silla tapizada"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="tapiceria-img"
                />
                <div className="tapiceria-left-text">
                    <h2>TAPICERIA</h2>
                    <p>Botones, Estoperoles, Casquetes<br />Pág. 38</p>
                </div>
            </div>

            {/* DERECHA: fondo negro con cuadro centrado */}
            <div className="tapiceria-galeria-right">
                <div className="tapiceria-right-header">
                    <h4>Galería</h4>
                    <p>Contenido general</p>
                </div>

                <div className="tapiceria-right-card">
                    <Image
                        src="/mdf/mdf80.png"
                        alt="Detalle tapizado"
                        fill
                        style={{ objectFit: 'cover' }}
                    />

                </div>

                <div className="tapiceria-bottom-margin" />
            </div>
        </section>
    );
}
