// app/components/accesorios/AccesoriosComponent31.jsx
'use client';
import Image from 'next/image';
import './AccesoriosComponents.css';

export default function AccesoriosComponent35() {
    return (
        <section className="accesorios31-section">
            {/* TÍTULO SUPERIOR */}
            <div className="accesorios31-header">
                <h1>ACCESORIOS / Galería</h1>
                <p>Contenido general</p>
                <hr />
            </div>

            <div className="accesorios31-body">
                {/* IMAGEN IZQUIERDA */}
                <div className="accesorios31-left">
                    <Image
                        src="/accesorios/Accesorios32.png"
                        alt="Rodachinas"
                        width={800}
                        height={600}
                        className="accesorios31-img"
                    />
                </div>

                {/* SECCIÓN DERECHA */}
                <div className="accesorios31-right">
                    {/* Sección arriba */}
                    <div className="accesorios31-top">
                        {/* Sección a: imagen */}
                        <div className="accesorios31-top-a">
                            <Image
                                src="/accesorios/Accesorios31.png"
                                alt="Rodachina individual"
                                width={300}
                                height={300}
                                className="accesorios31-img-individual"
                            />
                        </div>

                        {/* Sección b: tabla y texto */}
                        <div className="accesorios31-top-b">
                            <h3>Rodachina Plástica 2”</h3>
                            <table className="accesorios31-table">
                                <thead>
                                    <tr>
                                        <th>REFERENCIA</th>
                                        <th>UNIDAD DE EMPAQUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rodachina Plástica</td>
                                        <td>250 UNIDADES</td>
                                    </tr>
                                </tbody>
                            </table>

                            <ul className="accesorios31-lista">
                                <li><strong>Tipo:</strong> Rodachina</li>
                                <li><strong>Tamaño:</strong> 2”</li>
                                <li><strong>Material:</strong> Metal, plástico</li>
                                <li><strong>Capacidad de Carga:</strong> 15Kg</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sección abajo */}
                    <div className="accesorios31-bottom">
                        <hr />
                        <p className="accesorios31-description">
                            La rodachina, también conocida como rueda giratoria, es un componente esencial para proporcionar movilidad y facilitar el desplazamiento de objetos sobre superficies planas.
                        </p>
                        <p className="accesorios31-footer">Accesorios/032</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
