'use client';
import Image from 'next/image';
import './GaleriaPatas.css';

export default function GaleriaPatas() {
    return (
        <section className="galeria-patas-wrapper">
            {/* SECCIÓN 1: TÍTULO */}
            <div className="galeria-patas-titulo">
                <div className="grupo-titulo">
                    <span className="titulo-bold">HERRAJES</span>
                    <span className="titulo-light"> / PATAS</span>
                </div>
                <div className="grupo-subtitulo">
                    <p className="subprincipal">Galería</p>
                    <p className="subsecundario">Contenido general</p>
                </div>
            </div>


            {/* SECCIÓN 2 + 3: CONTENIDO */}
            <div className="galeria-patas-content">
                {/* SECCIÓN 2: IZQUIERDA */}
                <div className="galeria-patas-izquierda">
                    <div className="izquierda-superior"></div>
                    <div className="izquierda-inferior"></div>
                </div>

                {/* SECCIÓN 3: DERECHA */}
                <div className="galeria-patas-derecha">
                    <div className="derecha-superior"></div>

                    <div className="derecha-inferior">
                        <p className="descripcion">
                            La pata niveladora es un componente esencial para proporcionar estabilidad y nivelación ajustable en una variedad de aplicaciones, desde muebles hasta maquinaria y equipos.
                        </p>
                        <div className="qr-final">
                            <Image
                                src="/galeria/qr-example.png"
                                alt="QR"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
