'use client';
import Image from 'next/image';
import './AccesoriosComponents.css';

export default function AccesorioComponent37() {
    return (
        <section className="accesorio37-section">
            {/* Título superior */}
            <div className="accesorio37-header">
                <h1>ACCESORIOS <span>/ Galería</span></h1>
                <p>Contenido general</p>
                <hr />
            </div>

            <div className="accesorio37-body">
                {/* Columna izquierda */}
                <div className="accesorio37-left">
                    <div className="accesorio37-images">
                        <Image
                            src="/accesorios/accesorio34_1.png"
                            alt="Soporte Tubo Redondo 1"
                            width={180}
                            height={180}
                        />
                        <Image
                            src="/accesorios/accesorio34_2.png"
                            alt="Soporte Tubo Redondo 2"
                            width={180}
                            height={180}
                        />
                    </div>

                    <div className="accesorio37-text">
                        <h3>Soporte Tubo Redondo</h3>
                        <ul>
                            <li><strong>Tipo:</strong> Soporte</li>
                            <li><strong>Acabado:</strong> Galvanizado Zincado</li>
                            <li><strong>Marca:</strong> MZ</li>
                        </ul>
                    </div>
                </div>

                {/* Columna derecha */}
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

                    <div className="accesorio37-plano">
                        <Image
                            src="/accesorios/accesorio34_plano.png"
                            alt="Plano soporte redondo"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>

            {/* Pie de página */}
            <div className="accesorio37-footer">
                Accesorios/034
            </div>
        </section>
    );
}
