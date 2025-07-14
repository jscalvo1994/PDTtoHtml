'use client';
import Image from 'next/image';
import './AccesoriosComponent44.css';

export default function AccesoriosComponent46() {
    return (
        <section className="accesorios44-wrapper">
            {/* COLUMNA IZQUIERDA */}
            <div className="accesorios44-left">
                <div className="accesorios44-header">
                    <h1>ACCESORIOS <span>/ CERRADURAS</span></h1>
                    <p>Contenido general</p>
                    <hr />
                </div>
                <div className="accesorios44-diagram">
                    <Image
                        src="/accesorios/accesorios60.png"
                        alt="Imagen principal cerradura"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="accesorios44-right">
                {/* Imagen superior + tabla + lista */}
                <div className="accesorios44-producto">
                    <div className="accesorios44-producto-img">
                        <Image
                            src="/accesorios/accesorios61.png"
                            alt="Cerradura detalle"
                            width={250}
                            height={250}
                        />
                    </div>

                    <div className="accesorios44-producto-info">
                        <h3>Cerradura Palanca Alcoba / Baño</h3>

                        <table className="accesorios44-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cerradura palanca alcoba/baño</td>
                                    <td>24 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>

                        <ul>
                            <li><strong>Tipo de pestillo:</strong> entero</li>
                            <li><strong>Acabado:</strong> Cromado</li>
                            <li><strong>modulos (6):</strong> aberturas de 35mm a 45mm de espesor.</li>
                            <li><strong>Accesorios incluidos:</strong> Tornillos</li>
                        </ul>

                        <div className="accesorios44-qr">
                            <Image
                                src="/galeria/qr-example.png"
                                alt="Código QR"
                                width={70}
                                height={70}
                            />
                        </div>
                    </div>
                </div>

                {/* Descripción + código */}
                <div className="accesorios44-descripcion">
                    <p>
                        Sistema de seguridad práctico y resistente, ideal para puertas interiores y exteriores. <br />
                        Su mecanismo de palanca permite un cierre firme y fácil de operar. <br />
                        Fabricado con materiales duraderos, ofrece protección y estilo en un solo producto.
                    </p>
                    <span>Accesorios-Cerraduras/043</span>
                </div>
            </div>
        </section>
    );
}
