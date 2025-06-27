'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-main-black border-bottom border-warning fixed-top shadow-sm">

            <div className="container">
                {/* Logo e Identidad */}
                <Link href="/" className="navbar-brand d-flex align-items-center">
                    <Image
                        src="/logo-creativa.jpg"
                        alt="Logo Creativas"
                        width={40}
                        height={40}
                        className="rounded me-2"
                    />
                    <span className="fw-bold text-warning">CREATIVAS</span>
                </Link>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Enlaces del menú */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#proceso">Proceso</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>

                    <Link href="#contacto" className="btn btn-warning text-dark fw-semibold ms-lg-3">
                        Cotizar Proyecto
                    </Link>
                </div>
            </div>
        </nav>
    );
}
