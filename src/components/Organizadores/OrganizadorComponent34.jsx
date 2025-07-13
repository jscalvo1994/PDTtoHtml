'use client';
import Image from 'next/image';
import './OrganizadorCondimentero.css';

export default function OrganizadorComponent34() {
    return (
        <section className="condimentero31-section">
            {/* Título alineado a la derecha */}
            <div className="condimentero31-header">
                <div className="condimentero31-title">
                    <h3>Contenido general</h3>
                    <h1>
                        ORGANIZADORES <span>/ LOCERO</span>
                    </h1>
                    <hr />
                </div>
            </div>

            {/* Secciones izquierda / derecha */}
            <div className="condimentero31-content">
                <div className="condimentero31-left">
                    {/* Sección superior con imagen */}
                    <div className="condimentero31-left-top">
                        <Image
                            src="/organizador/condimentero8.png"
                            alt="Esquema cajón"
                            fill
                            className="condimentero31-img"
                        />
                    </div>

                    {/* Sección inferior con color azul */}
                    <div className="condimentero31-left-bottom">
                        <table className="condimentero31-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cajón Mágico Vidrio</td>
                                    <td>6 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Loceros Acero Inox 50cm, 60cm, 70cm, 80cm</h2>

                        <ul>
                            <li><strong>Tipo:</strong> locero</li>
                            <li><strong>Tamaño:</strong>  50cm - 60cm - 70cm -80cm</li>
                            <li><strong>Material:</strong> Acero inoxidable 201</li>
                            <li><strong>Marca:</strong> MZ</li>
                        </ul>
                    </div>

                </div>
                <div className="condimentero31-right">
                    <Image
                        src="/organizador/condimentero9.png"
                        alt="Cajón real"
                        layout="responsive"
                        width={800}
                        height={600}
                        className="condimentero31-img"
                    />
                </div>
            </div>

            <div className="condimentero31-label">Organizadores-Cajones/029</div>
        </section>
    );
}
