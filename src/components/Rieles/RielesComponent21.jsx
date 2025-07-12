'use client';
import Image from 'next/image';
import './RielesExtensibles.css';
export default function RielesComponent21() {
    return (
        <section className="rieles21-container">

            {/* ENCABEZADO */}
            <div className="rieles21-header">
                <p className="rieles21-subtitle">Contenido general</p>
                <h2 className="rieles21-title">
                    HERRAJES <span>/ RIELES EXTENSIBLES</span>
                </h2>
                <hr className="rieles21-line" />
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="rieles21-content">

                {/* COLUMNA A */}
                <div className="rieles21-column column-a">
                    <div className="rieles21-image-a">
                        <Image
                            src="/rieles/RielesImage4.png"
                            alt="Riel Tráfico Pesado"
                            width={300}
                            height={150}
                        />
                    </div>
                    <div className="rieles21-info">
                        <h3 className="rieles21-product-title">Riel Extensible Tráfico Pesado</h3>
                        <ul className="rieles21-list">
                            <li><strong>Tipo:</strong> Riel Extensible</li>
                            <li><strong>Suministro:</strong> 1 Par De Rieles, 12 tornillos</li>
                            <li><strong>Capacidad De Carga:</strong> Kg</li>
                            <li><strong>Ciclo De Apertura:</strong> 50,000</li>
                            <li><strong>Marca:</strong> MZ</li>
                        </ul>
                    </div>
                </div>

                {/* COLUMNA B */}
                <div className="rieles21-column column-b">
                    <div className="rieles21-table-wrapper">
                        <table className="rieles21-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>30cm</td><td>15 UNIDADES</td></tr>
                                <tr><td>35cm</td><td>15 UNIDADES</td></tr>
                                <tr><td>40cm</td><td>15 UNIDADES</td></tr>
                                <tr><td>45cm</td><td>15 UNIDADES</td></tr>
                                <tr><td>50cm</td><td>15 UNIDADES</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="rieles21-schematic-small">
                        <Image
                            src="/rieles/plano21.png"
                            alt="Plano pequeño"
                            width={300}
                            height={180}
                        />
                    </div>
                </div>

                {/* COLUMNA C */}
                <div className="rieles21-column column-c">
                    <div className="rieles21-schematic-large">
                        <Image
                            src="/rieles/fichatecnica21.png"
                            alt="Plano extendido"
                            width={360}
                            height={500}
                        />
                    </div>
                    <div className="rieles21-footer-text">Herrajes-Rieles/020</div>
                </div>

            </div>
        </section>
    );
}
