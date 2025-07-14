'use client';
import Image from 'next/image';
import './GaleriaAccesorios.css';

export default function GaleriaAccesorios() {
    return (
        <section className="galeria-accesorios">
            {/* Izquierda */}
            <div className="galeria-izquierda">
                <Image
                    src="/accesorios/accesorios42.png"
                    alt="Deslizador puntilla"
                    width={700}
                    height={900}
                    className="galeria-img"
                />
                <div className="galeria-texto-inferior">
                    <h3>ACCESORIOS</h3>
                    <p>Deslizador puntilla.<br />Pág 34</p>
                </div>
            </div>

            {/* Derecha */}
            <div className="galeria-derecha">
                <div className="galeria-derecha-header">
                    <h4>Galería</h4>
                    <p>Contenido general</p>
                </div>
                <div className="galeria-derecha-imgbox">
                    <Image
                        src="/accesorios/accesorios43.png"
                        alt="Soporte de estructura"
                        width={500}
                        height={500}
                        className="galeria-img"
                    />
                </div>
            </div>
        </section>
    );
}
