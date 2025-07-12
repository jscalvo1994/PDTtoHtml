'use client';
import Image from 'next/image';
import './PatasComponents.css';

export default function PatasComponent23() {
    return (
        <div className="patascomponent23-wrapper">
            {/* ENCABEZADO */}
            <div className="encabezado-patascomponent23">
                <p className="encabezado-sub-patascomponent23">Contenido general</p>
                <h2 className="encabezado-titulo-patascomponent23">
                    <span className="bold">HERRAJES</span><span className="light"> / PATAS</span>
                </h2>
                <hr className="encabezado-linea-patascomponent23" />
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <section className="detalle-patascomponent23">
                {/* IZQUIERDA */}
                <div className="izquierda-patascomponent23">
                    <div className="contenido-izquierda-patascomponent23">
                        <div className="imagen-patascomponent23">
                            <Image
                                src="/patas/Pata1.png"
                                alt="Pata Niveladora"
                                width={400}
                                height={400}
                                className="imagen-real-patascomponent23"
                            />
                        </div>
                        <div className="info-patascomponent23">
                            <h3 className="titulo-patascomponent23">Pata Niveladora Acero Inox<br />6cm, 8cm, 10cm</h3>
                            <ul className="lista-patascomponent23">
                                <li><strong>Tipo:</strong> Pata Niveladora</li>
                                <li><strong>Capacidad de carga:</strong> 80Kg</li>
                                <li><strong>Suministro:</strong> 1 Pata</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                            <table className="tabla-patascomponent23">
                                <thead>
                                    <tr>
                                        <th>REFERENCIA</th>
                                        <th>UNIDAD DE EMPAQUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>6cm</td><td>200 UNIDADES</td></tr>
                                    <tr><td>8cm</td><td>200 UNIDADES</td></tr>
                                    <tr><td>10cm</td><td>200 UNIDADES</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* DERECHA */}
                <div className="derecha-patascomponent23">
                    <div className="contenido-derecha-patascomponent23">
                        <div className="imagen-derecha-patascomponent23">
                            <Image
                                src="/patas/Pata2.png"
                                alt="Pata Tipo Elefante"
                                width={400}
                                height={400}
                                className="imagen-real-patascomponent23"
                            />
                        </div>
                        <div className="info-patascomponent23">
                            <h4 className="subtitulo-patascomponent23">Especificaciones</h4>
                            <h3 className="titulo-patascomponent23">Pata Tipo Elefante<br />6cm, 8cm, 10cm</h3>
                            <ul className="lista-patascomponent23">
                                <li><strong>Tipo:</strong> Pata Tipo Elefante</li>
                                <li><strong>Capacidad de carga:</strong> 80Kg</li>
                                <li><strong>Suministro:</strong> 1 Pata</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                            <table className="tabla-patascomponent23">
                                <thead>
                                    <tr>
                                        <th>REFERENCIA</th>
                                        <th>UNIDAD DE EMPAQUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>6cm</td><td>120 UNIDADES</td></tr>
                                    <tr><td>8cm</td><td>120 UNIDADES</td></tr>
                                    <tr><td>10cm</td><td>120 UNIDADES</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
