'use client';
import Image from 'next/image';
import './AlacenaComponents.css';

export default function AlacenaComponent27() {
    return (
        <section className="alacena25-wrapper">
            {/* TÍTULO SUPERIOR */}
            <div className="alacena25-title">
                <p className="alacena25-categoria">Contenido general</p>
                <h2 className="alacena25-titulo">
                    <span className="bold">ORGANIZADORES</span><span className="light"> / ALACENAS</span>
                </h2>
                <hr className="alacena25-linea" />
            </div>

            {/* SECCIÓN PRINCIPAL */}
            <div className="alacena25-contenido">
                {/* SECCIÓN A */}
                <div className="alacena25-columna alacena25-imagen3">
                    <Image
                        src="/alacena/Alacena29.png"
                        alt="Alacena 12 niveles"
                        width={400}
                        height={600}
                        className="alacena25-img3"
                    />
                </div>

                {/* SECCIÓN B */}
                <div className="alacena25-columna alacena25-texto">
                    <h3 className="alacena25-nombre">Alacena abatible Victory 12 Niveles  </h3>
                    <ul>
                        <li><strong>Tipo:</strong> Alacena</li>
                        <li><strong>Modulos:</strong> 12</li>
                        <li><strong>modulos (6); </strong> 36cm*27cm</li>
                        <li><strong>modulos (6); </strong>30cm*16cm</li>
                        <li><strong>Ancho:</strong> 41.4cm</li>
                        <li><strong>Material:</strong> Metal</li>
                        <li><strong>Capacidad De Carga:</strong> 120kg</li>
                    </ul>


                    <table className="alacena25-tabla">
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alacena vidrio abatible</td>
                                <td>1 UNIDAD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* SECCIÓN C */}
                <div className="alacena25-columna alacena25-imagen2">
                    <Image
                        src="/alacena/Alacena30.png"
                        alt="Alacena organizada"
                        width={400}
                        height={400}
                        className="alacena25-img2"
                    />
                    <p className="alacena25-subtitulo">Organizadores - Alacenas / 022</p>
                </div>
            </div>
            <div className="alacena25-footer"></div>
        </section>
    );
}
