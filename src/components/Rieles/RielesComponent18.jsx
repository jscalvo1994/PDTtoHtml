'use client';
import Image from 'next/image';
import './RielesExtensibles.css';

export default function RielesComponent18() {
    return (
        <section className="rieles18-container">
            {/* LADO IZQUIERDO */}
            <div className="rieles18-left">
                <div className="rieles18-header">
                    <p className="rieles18-subtitle">Contenido general</p>
                    <h2 className="rieles18-title">HERRAJES <span>/ RIELES EXTENSIBLES</span></h2>
                    <hr className="rieles18-line" />
                </div>

                <div className="rieles18-info">
                    <h3 className="rieles18-product-title">Riel Extensible Cierre Lento</h3>
                    <p className="rieles18-measures">35cm, 40cm, 45cm, 50cm</p>
                    <ul className="rieles18-list">
                        <li><strong>Tipo:</strong> Riel Extensible</li>
                        <li><strong>Suministro:</strong> 1 Par De Rieles, 12 Tornillos</li>
                        <li><strong>Capacidad De Carga:</strong> Kg</li>
                        <li><strong>Ciclo De Apertura:</strong> 40,000</li>
                        <li><strong>Marca:</strong> MZ</li>
                    </ul>
                </div>

                <table className="rieles18-table">
                    <thead>
                        <tr>
                            <th>REFERENCIA</th>
                            <th>UNIDAD DE EMPAQUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Riel Extensible Cierre Lento</td>
                            <td>15 PARES</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* LADO DERECHO */}
            <div className="rieles18-right">
                <Image
                    src="/rieles/RielesImage.png"
                    alt="Imagen de riel extensible"
                    fill
                    className="rieles18-img"
                />
                <div className="rieles18-footer-text">Herraje-Rieles Extensibles/017</div>
            </div>
        </section>
    );
}
