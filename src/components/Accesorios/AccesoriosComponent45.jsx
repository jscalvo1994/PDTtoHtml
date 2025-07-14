'use client';
import Image from 'next/image';
import './AccesoriosComponent45.css';

export default function AccesoriosComponent45() {
    return (
        <section className="accesorios45-section">
            <div className="accesorios45-header">
                <h3>Contenido general</h3>
                <h1>ACCESORIOS <span>/ CERRADURAS</span></h1>
                <hr />
            </div>

            <div className="accesorios45-content">
                {/* Imagen izquierda */}
                <div className="accesorios45-left">
                    <Image
                        src="/accesorios/accesorios58.png"
                        alt="Cerradura pomo alcoba"
                        width={680}
                        height={500}
                    />
                </div>

                {/* Descripción central */}
                <div className="accesorios45-middle">
                    <h2>Cerradura Pomo Alcoba / Baño</h2>
                    <ul>
                        <li><strong>Tipo de pestillo:</strong> entero</li>
                        <li><strong>Acabado:</strong> Cromado</li>
                        <li><strong>Modulos (6):</strong> aberturas de 35mm a 45mm de espesor</li>
                        <li><strong>Accesorios incluidos:</strong> Tornillos</li>
                    </ul>

                    <table className="accesorios45-table">
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cerradura pomo alcoba/ baño</td>
                                <td>24 UNIDADES</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Imagen técnica / en uso */}
                <div className="accesorios45-right">
                    <Image
                        src="/accesorios/accesorios59.png"
                        alt="Cerradura técnica"
                        width={420}
                        height={400}
                    />
                </div>
            </div>

            <div className="accesorios45-label">Accesorios-Cerraduras/042</div>
        </section>
    );
}
