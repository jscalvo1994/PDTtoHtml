'use client';
import Image from 'next/image';
import './BrazosNeumaticos.css';

export default function BrazosComponents12() {
    return (
        <section className="brazos-container">
            {/* LADO IZQUIERDO */}
            <div className="brazos-left" style={{ backgroundImage: 'url("/BrazosNeumaticos/BrazoNeumatico12.png")' }}>
                <div className="brazos-left-content">
                    <div className="brazos-left-text">
                        <p className="brazos-title">BRAZOS NEUMÁTICOS</p>
                        <p className="brazos-subtitle">Brazo Neumático Estándar</p>
                        <p className="brazos-page">Pág. 12</p>
                    </div>
                    <div className="brazos-left-qr">
                        <div className="qr-bg">
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

            {/* LADO DERECHO */}
            <div className="brazos-right">
                <h2 className="brazos-section-title">
                    <span className="black-text">HERRAJE</span>
                    <span className="gray-text"> / BRAZOS NEUMÁTICOS</span>
                </h2>
                <hr className="brazos-divider" />
                <Image
                    src="/BrazosNeumaticos/BrazoAmbiente12.png"
                    alt="Brazo Neumático en Ambiente"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="brazos-image"
                />
                <hr className="brazos-divider" />
                <p className="brazos-description">
                    El brazo neumático estándar es una solución confiable y versátil para proporcionar soporte y
                    control de movimiento en una amplia gama de aplicaciones. Fabricado con materiales de alta
                    calidad, como cilindros de acero resistente.
                </p>
            </div>
        </section>
    );
}
