'use client';
import Image from 'next/image';
import './RielesGaleria.css';

export default function RielesGaleria() {
    return (
        <section className="galeria-container-rieles">
            {/* LADO IZQUIERDO */}
            <div className="galeria-left-rieles">
                <div className="rieles-header">
                    <div className="rieles-title-block">
                        <p className="rieles-title">
                            <strong>HERRAJES</strong> / <em>RIELES EXTENSIBLES</em>
                        </p>
                        <div className="rieles-subtitle-block">
                            <p className="rieles-subtitle">Galeria</p>
                            <p className="rieles-sub-desc">Contenido general</p>
                        </div>
                    </div>
                </div>
                <div className="rieles-image-wrapper">
                    <Image
                        src="/galeria/RielesGaleria.png"
                        alt="Imagen superior rieles"
                        width={700}
                        height={700}
                        className="rieles-main-image"
                    />
                </div>
            </div>

            {/* LADO DERECHO */}
            <div className="galeria-right-rieles">
                {/* Fondo con imagen */}
                <div className="rieles-bg">
                    <div className="rieles-info-block">
                        <div className="rieles-text-group">
                            <h2 className="rieles-heading">RIELES EXTENSIBLES</h2>
                            <p className="rieles-desc">Estandar / Push to Open / Montaje Bajo</p>
                            <p className="rieles-pages">Pag 15 - 16 - 17</p>
                        </div>
                        <div className="rieles-qr-wrapper">
                            <div className="rieles-qr-bg">
                                <Image
                                    src="/galeria/qr-example.png"
                                    alt="Código QR"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
