'use client';
import Image from 'next/image';
import './PatasComponents.css';

export default function PatasComponent24() {
    return (
        <section className="patas24-wrapper">
            {/* Sección A: imagen de fondo (30%) */}
            <div className="patas24-left">
                <div className="patas24-qr">
                    <Image
                        src="/galeria/qr-example.png"
                        alt="Código QR"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

            {/* Sección B: imagen centrada (30%) */}
            <div className="patas24-center">
                <Image
                    src="/patas/PataPedestal.png"
                    alt="Pata pedestal"
                    width={250}
                    height={250}
                    className="patas24-img"
                />
            </div>

            {/* Sección C: texto y tabla (40%) */}
            <div className="patas24-right">
                {/* C.1 - Título */}
                <div className="patas24-header">
                    <p className="patas24-sub">Contenido general</p>
                    <h2 className="patas24-title">
                        <span className="bold">HERRAJES</span><span className="light"> / PATAS</span>
                    </h2>
                    <hr className="patas24-divider" />
                </div>

                {/* C.2 - Detalles */}
                <div className="patas24-info">
                    <h3>Pata Pedestal<br />80cm, 90cm, 100cm</h3>
                    <ul>
                        <li><strong>Tipo:</strong> Pata pedestal</li>
                        <li><strong>Suministro:</strong> 1 pata</li>
                        <li><strong>Tamaño:</strong> Altura: 80cm</li>
                        <li><strong>Capacidad de carga:</strong> 100kg</li>
                        <li><strong>Marca:</strong> MZ</li>
                    </ul>
                    <table className="patas24-table">
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pata pedestal</td>
                                <td>20 UNIDADES</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
