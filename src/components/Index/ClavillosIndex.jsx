'use client';
import Image from 'next/image';
import './ClavillosIndex.css';

export default function ClavillosIndex() {
    return (
        <section className="clavillos-index-wrapper">
            {/* COLUMNA IZQUIERDA (IMAGEN) */}
            <div className="clavillos-index-left">
                <Image
                    src="/Index74.png"
                    alt="Imagen carpintería"
                    fill
                    className="clavillos-index-img"
                />
            </div>

            {/* COLUMNA DERECHA (ÍNDICE) */}
            <div className="clavillos-index-right">
                <h4>INDICE DE SECCIÓN</h4>
                <p>Contenido general</p>

                <div className="clavillos-dropdown">
                    <span>Clavillos ▼</span>
                    <ul>
                        <li>Clavillo F10</li>
                        <li>Clavillo F15</li>
                        <li>Clavillo F20</li>
                        <li>Clavillo F25</li>
                        <li>Clavillo F38</li>
                        <li>Clavillo F40</li>
                        <li>Clavillo F50</li>
                    </ul>
                </div>

                <div className="clavillos-qr">
                    <Image src="/galeria/qr-example.png" alt="QR" width={100} height={100} />
                    <a href="https://www.mzglobalimports.com" target="_blank">www.mzglobalimports.com</a>
                </div>

                <p className="clavillos-contact">Contáctanos en nuestras líneas de atención:</p>
            </div>
        </section>
    );
}
