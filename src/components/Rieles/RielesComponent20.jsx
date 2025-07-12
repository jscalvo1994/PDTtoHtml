'use client';
import Image from 'next/image';
import './RielesExtensibles.css';

export default function RielesComponent20() {
    return (
        <section className="rieles20-container">

            {/* ENCABEZADO */}
            <div className="rieles20-header">
                <p className="rieles20-subtitle">Contenido general</p>
                <h2 className="rieles20-title">
                    HERRAJES <span>/ RIELES EXTENSIBLES</span>
                </h2>
                <hr className="rieles20-line" />
            </div>

            {/* CUERPO 3 COLUMNAS */}
            <div className="rieles20-content">

                {/* COLUMNA 1: IMAGEN DE PRODUCTO */}
                <div className="rieles20-column rieles20-image">
                    <Image
                        src="/rieles/RielesImage3.png"
                        alt="Riel Push Open"
                        width={300}
                        height={600}
                    />
                </div>

                {/* COLUMNA 2: INFORMACIÓN DEL PRODUCTO */}
                <div className="rieles20-column rieles20-info">
                    <h3 className="rieles20-product-title">Riel Extensible Push Open</h3>
                    <p className="rieles20-measures">40cm, 45cm, 50cm</p>
                    <ul className="rieles20-list">
                        <li><strong>Tipo:</strong> Riel Extensible</li>
                        <li><strong>Suministro:</strong> 1 Par De Rieles, 12 Tornillos</li>
                        <li><strong>Capacidad De Carga:</strong> Kg</li>
                        <li><strong>Ciclo De Apertura:</strong> 50,000</li>
                        <li><strong>Marca:</strong> MZ</li>
                    </ul>
                </div>

                {/* COLUMNA 3: TABLA + PLANO */}
                <div className="rieles20-column rieles20-table-section">
                    <table className="rieles20-table">
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Riel Extensible Push Open</td>
                                <td>15 PARES</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="rieles20-schematic">
                        <Image
                            src="/rieles/fichatecnica20.png"
                            alt="Plano técnico riel"
                            width={600}
                            height={600}
                        />
                    </div>

                    <div className="rieles20-footer-text">
                        Herraje-Rieles Extensibles/019
                    </div>
                </div>

            </div>
        </section>
    );
}
