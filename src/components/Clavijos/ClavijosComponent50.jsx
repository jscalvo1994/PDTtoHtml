'use client';
import Image from 'next/image';
import './ClavijosComponent.css';

export default function ClavijosComponent50() {
    return (
        <section className="clavijos50-wrapper">
            <div className="clavijos50-container">

                {/* SECCIÓN IZQUIERDA */}
                <div className="clavijos50-left">
                    <h1 className="clavijos50-title">CLAVILLOS / <span>Galería</span></h1>
                    <div className="clavijos50-image">
                        <Image src="/clavijos/clavijos75.png" alt="Clavillos" width={400} height={400} />
                    </div>
                </div>

                {/* SECCIÓN DERECHA */}
                <div className="clavijos50-right">
                    <div className="clavijos50-top-content">

                        {/* A: Imagen */}
                        <div className="clavijos50-a">
                            <Image src="/clavijos/clavijos76.png" alt="Clavillos Presentación" width={300} height={300} />
                        </div>

                        {/* B: Título, tabla y texto */}
                        <div className="clavijos50-b">
                            <h2 className="clavijos50-subtitle">Clavillos F</h2>
                            <table className="clavijos50-table">
                                <thead>
                                    <tr>
                                        <th>REFERENCIA</th>
                                        <th>UNIDAD</th>
                                        <th>EMPAQUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>F15 – 5/8”</td><td>20</td><td>UNIDADES</td></tr>
                                    <tr><td>F20 – 3/4”</td><td>20</td><td>UNIDADES</td></tr>
                                    <tr><td>F25 – 1”</td><td>20</td><td>UNIDADES</td></tr>
                                    <tr><td>F30 – 1”</td><td>20</td><td>UNIDADES</td></tr>
                                    <tr><td>F35 – 1 1/2”</td><td>12</td><td>UNIDADES</td></tr>
                                    <tr><td>F38 – 1 1/2”</td><td>12</td><td>UNIDADES</td></tr>
                                    <tr><td>F50 – 2”</td><td>12</td><td>UNIDADES</td></tr>
                                </tbody>
                            </table>
                            <p className="clavijos50-description">
                                • <strong>Tipo:</strong> Clavillos<br />
                                • <strong>Calibre:</strong> 18<br />
                                • <strong>Cajetilla:</strong> 5000 unidades<br />
                                • <strong>Material:</strong> Metal<br />
                                • <strong>Marca:</strong> MZ
                            </p>
                        </div>
                    </div>

                    {/* C: Línea divisora + texto final + pie */}
                    <div className="clavijos50-c">
                        <hr />
                        <p className="clavijos50-final-text">
                            Los clavillos de calibre 18 son clavos delgados y largos utilizados en proyectos de carpintería y construcción para proporcionar una unión firme y duradera. Comúnmente están fabricados en acero, lo que les confiere alta resistencia.
                        </p>
                        <p className="clavijos50-footer">Clavillos/045</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
