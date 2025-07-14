'use client';
import Image from 'next/image';
import './TapacantosSection.css';

const CantosComponent51 = () => {
    return (
        <section className="tapacantos-section">
            <div className="container-tapacantos">
                {/* Columna Izquierda */}
                <div className="left-column-tapacantos">
                    <h2 className="title-tapacantos">
                        CANTOS <span>/ Galería</span>
                    </h2>
                    <p className="subtitle-tapacantos">Contenido general</p>
                    <div className="main-image-wrapper">
                        <Image
                            src="/cantos/cantos77.png"
                            alt="Imagen decorativa de tapacantos"
                            width={500}
                            height={500}
                            className="main-image-tapacantos"
                            priority
                        />
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="right-column-tapacantos">
                    <h3 className="heading-tapacantos">Tapacantos</h3>

                    {/* Tabla + Imagen lado a lado */}

                    <div className="table-image-wrapper">
                        <div className="side-image-wrapper">
                            <Image
                                src="/cantos/cantos78.png"
                                alt="Tapacanto blanco y madera"
                                width={220}
                                height={150}
                            />
                        </div>
                        <table className="tapacantos-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Color: Blanco 16mm</td>
                                    <td>2000 Metros</td>
                                </tr>
                                <tr>
                                    <td>Color: Madera 16mm</td>
                                    <td>2000 Metros</td>
                                </tr>
                                <tr>
                                    <td>Color: Blanca 19mm</td>
                                    <td>2000 Metros</td>
                                </tr>
                                <tr>
                                    <td>Color: Madera 19mm</td>
                                    <td>2000 Metros</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>

                    <ul className="details-tapacantos">
                        <li><strong>Tipo:</strong> Tapacanto</li>
                        <li><strong>Material:</strong> PVC</li>
                        <li><strong>Marca:</strong> MZ</li>
                    </ul>

                    <hr className="separator-tapacantos" />

                    <p className="description-tapacantos">
                        Los cantos de PVC son tiras flexibles utilizadas para recubrir los bordes de tableros de madera, MDF o aglomerado, brindando protección, resistencia a la humedad y un acabado estético.
                    </p>

                    <p className="page-number-tapacantos">Cantos/046</p>
                </div>
            </div>
        </section>
    );
};

export default CantosComponent51;
