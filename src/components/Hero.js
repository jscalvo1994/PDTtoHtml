'use client';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="text-center py-5 hero-section">
            <div className="container">
                {/* Logo central */}
                <div className="hero-logo-wrapper mb-4">
                    <Image
                        src="/logo-creativa.jpg"
                        alt="Creativas Publicidad"
                        width={180}
                        height={180}
                        className="rounded-4 position-relative z-1 shadow"
                        priority
                    />
                </div>

                {/* Título y descripción */}
                <h1 className="display-4 fw-bold mb-3">
                    Transformamos tus <span className="text-warning">Ideas</span> en <span className="text-warning">Realidad</span>
                </h1>
                <p className="lead text-opacity-75 mb-4">
                    Somos expertos en litografía, estampados personalizados y publicidad integral. Desde el diseño hasta la
                    producción, creamos soluciones visuales que impactan y perduran.
                </p>

                {/* Botones de acción */}
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
                    <a href="#contacto" className="btn btn-warning btn-lg text-dark fw-semibold">
                        <i className="bi bi-stars me-2" />
                        Comenzar Proyecto
                    </a>
                    <a href="#portfolio" className="btn btn-outline-warning btn-lg fw-semibold">
                        Ver Portfolio
                        <i className="bi bi-arrow-right ms-2" />
                    </a>
                </div>

                {/* Etiquetas */}
                <div className="d-flex flex-wrap justify-content-center gap-2">
                    {['DISEÑO', 'BRANDING', 'MARKETING', 'PUBLICIDAD'].map((label, i) => (
                        <span key={i} className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
