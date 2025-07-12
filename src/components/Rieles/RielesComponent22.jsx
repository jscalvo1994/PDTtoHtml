'use client';
import Image from 'next/image';
import './RielesExtensibles.css';

export default function RielesComponent22() {
    return (
        <section className="rieles22-container">

            {/* LADO IZQUIERDO */}
            <div className="rieles22-left">
                <h3 className="rieles22-product-title">Riel Extensible Liviano</h3>
                <ul className="rieles22-list">
                    <li><strong>Tipo:</strong> Riel Extensible</li>
                    <li><strong>Suministro:</strong> 1 Par De Rieles, 12 tornillos</li>
                    <li><strong>Capacidad De Carga:</strong> Kg</li>
                    <li><strong>Ciclo De Apertura:</strong> 50,000</li>
                    <li><strong>Marca:</strong> MZ</li>
                </ul>

                <table className="rieles22-table">
                    <thead>
                        <tr>
                            <th>REFERENCIA</th>
                            <th>UNIDAD DE EMPAQUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>30cm</td><td>20 UNIDADES</td></tr>
                        <tr><td>35cm</td><td>20 UNIDADES</td></tr>
                    </tbody>
                </table>
            </div>

            {/* LADO DERECHO */}
            <div className="rieles22-right">
                <Image
                    src="/rieles/RielesImage5.png"
                    alt="Riel extensible liviano"
                    fill
                    className="rieles22-img"
                />
                <div className="rieles22-footer-text">Herraje-Rieles/021</div>
            </div>
        </section>
    );
}
