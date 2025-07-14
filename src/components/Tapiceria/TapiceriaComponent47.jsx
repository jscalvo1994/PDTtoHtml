'use client';
import Image from 'next/image';
import './TapiceriaComponent.css';

export default function TapiceriaComponent47() {
    return (
        <section className="tapiceria-section">
            {/* Parte izquierda */}
            <div className="tapiceria-left">
                <div className="tapiceria-header">
                    <h1>TAPICERÍA <span>/ Galería</span></h1>
                    <p>Contenido general</p>
                    <hr />
                </div>

                <div className="tapiceria-grid">
                    {/* Producto 1: Grapa N17 */}
                    <div className="tapiceria-card">
                        <Image
                            src="/tapiceria/galeriatapiceria63.png"
                            alt="Grapa N17"
                            layout="responsive"
                            width={400}
                            height={200}
                        />
                        <table className="tapiceria-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Grapa N17</td>
                                    <td>1 Caja*10.000 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="tapiceria-details">
                            <h4>Grapa N17 1 1/2"</h4>
                            <ul>
                                <li><strong>Tipo:</strong> Grapas</li>
                                <li><strong>Material:</strong> Metal</li>
                                <li><strong>Tamaño:</strong> 1 1/2"</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Producto 2: Grapa 8010 */}
                    <div className="tapiceria-card">
                        <Image
                            src="/tapiceria/galeriatapiceria64.png"
                            alt="Grapa 8010"
                            layout="responsive"
                            width={400}
                            height={200}
                        />
                        <table className="tapiceria-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Grapa 8010</td>
                                    <td>10 CAJAS</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="tapiceria-details">
                            <h4>Grapa 8010</h4>
                            <ul>
                                <li><strong>Tipo:</strong> Grapas</li>
                                <li><strong>Material:</strong> Metal</li>
                                <li><strong>Tamaño:</strong> 8010</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Parte derecha */}
            <div className="tapiceria-right">
                <div className="tapiceria-image-container">
                    <Image
                        src="/tapiceria/galeriatapiceria65.png"
                        alt="Ambiente de trabajo tapicería"
                        layout="responsive"
                        width={500}
                        height={720}
                    />
                </div>
                <div className="tapiceria-footer">
                    Tapicería/047
                </div>
            </div>
        </section>
    );
}
