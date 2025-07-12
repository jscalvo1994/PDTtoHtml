'use client';
import Image from 'next/image';
import './RielesExtensibles.css';

export default function RielesComponent19() {
    return (
        <section className="rieles19-container">
            {/* LADO IZQUIERDO: Imagen */}
            <div className="rieles19-left">
                <Image
                    src="/rieles/RielesImage2.png"
                    alt="Imagen de riel extensible"
                    fill
                    className="rieles19-img"
                />
                <div className="rieles19-footer-text">Herraje-Rieles Extensibles/018</div>
            </div>

            {/* LADO DERECHO: Texto */}
            <div className="rieles19-right">
                <div className="rieles19-header">
                    <p className="rieles19-subtitle">Contenido general</p>
                    <h2 className="rieles19-title">HERRAJES <span>/ RIELES EXTENSIBLES</span></h2>
                    <hr className="rieles19-line" />
                </div>

                <div className="rieles19-info">
                    <h3 className="rieles19-product-title">Riel Extensible Montaje Bajo</h3>
                    <p className="rieles19-measures">35cm, 40cm, 45cm, 50cm</p>
                    <ul className="rieles19-list">
                        <li><strong>Tipo:</strong> Riel Extensible</li>
                        <li><strong>Suministro:</strong> 1 Par De Rieles, 1 Par De Enganches</li>
                        <li><strong>Capacidad De Carga:</strong> Kg</li>
                        <li><strong>Ciclo De Apertura:</strong> 31,000</li>
                        <li><strong>Marca:</strong> MZ</li>
                    </ul>
                </div>

                <table className="rieles19-table">
                    <thead>
                        <tr>
                            <th>REFERENCIA</th>
                            <th>UNIDAD DE EMPAQUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Riel Extensible Montaje bajo</td>
                            <td>10 PARES</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
