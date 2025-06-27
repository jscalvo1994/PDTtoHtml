'use client'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-black border-top border-warning-subtle py-5 px-3">
            <div className="container">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3 mb-4 mb-md-0">
                        <Image
                            src="/logo-creativa.jpg"
                            alt="Creativas Publicidad"
                            width={40}
                            height={40}
                            className="rounded"
                        />
                        <div>
                            <p className="text-white fw-bold mb-0">CREATIVAS PUBLICIDAD</p>
                            <p className="text-secondary small mb-0">Transformando ideas en realidad</p>
                        </div>
                    </div>
                    <div className="text-center text-md-end">
                        <p className="text-secondary small mb-0">© 2024 Creativas Publicidad. Todos los derechos reservados.</p>
                        <p className="text-muted small mt-1 mb-0">Diseño • Branding • Marketing • Publicidad</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
