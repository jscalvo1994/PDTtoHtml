'use client';
import Image from 'next/image';
import './AccesoriosComponents.css';

export default function AccesorioComponent38() {
    return (
        <section className="accesorio37-section">
            <div className="accesorio37-header">
                <h3>Contenido general</h3>
                <h1>ACCESORIOS <span>/ Galería</span></h1>
                <hr />
            </div>

            <div className="accesorio37-content">
                {/* Imagen izquierda */}
                <div className="accesorio37-left">
                    <Image
                        src="/accesorios/accesorios38.png"
                        alt="Soporte Tubo Redondo"
                        width={320}
                        height={400}
                    />
                </div>

                {/* Descripción central */}
                <div className="accesorio37-middle">
                    <h2>Soporte Tubo Redondo</h2>
                    <ul>
                        <li><strong>Tipo:</strong> Soporte</li>
                        <li><strong>Acabado:</strong> Galvanizado Zincado</li>
                        <li><strong>Marca:</strong> MZ</li>
                    </ul>

                </div>

                {/* Imagen técnica */}
                <div className="accesorio37-right">

                    <table className="accesorio37-table">
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Soporte Tubo Redondo</td>
                                <td>500 UNIDADES</td>
                            </tr>
                        </tbody>
                    </table>
                    <Image
                        src="/accesorios/accesorios39.png"
                        alt="Plano técnico Soporte Tubo Redondo"
                        width={500}
                        height={900}
                    />
                </div>
            </div>

            <div className="accesorio37-label">Accesorios/034</div>
        </section>
    );
}
