'use client';
import Image from 'next/image';
import './AccesoriosComponent44.css';

export default function AccesoriosComponent44() {
    return (
        <section className="accesorios44-wrapper">
            {/* COLUMNA IZQUIERDA */}
            <div className="accesorios44-left">
                <div className="accesorios44-header">
                    <h1>ACCESORIOS <span>/ Galería</span></h1>
                    <p>Contenido general</p>
                    <hr />
                </div>
                <div className="accesorios44-diagram">
                    <Image
                        src="/accesorios/accesorios56.png"
                        alt="Diagrama técnico"
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
                            src="/accesorios/accesorios57.png"
                            alt="Producto Push To Open"
                            width={150}
                            height={150}
                        />
                    </div>

                    <div className="accesorios44-producto-info">
                        <h3>Push To Open Magnético</h3>

                        <table className="accesorios44-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Deslizador Puntilla</td>
                                    <td>1.000 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>

                        <ul>
                            <li><strong>Tipo:</strong> Topes</li>
                            <li><strong>Tamaño:</strong> 9cm</li>
                            <li><strong>Material:</strong> Metal, plástico</li>
                            <li><strong>Marca:</strong> MZ</li>
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



                {/* Descripción + QR */}
                <div className="accesorios44-descripcion">
                    <p>
                        Pestillos magnéticos para puerta de gabinete de 2 pestillos magnéticos por puerta de cocina.<br />
                        Cierre de puerta de gabinete para sistemas sin manija.<br />
                        Cierre de puerta de empuje ideal para accesorios de gabinete.
                    </p>
                    <span>Accesorios/041</span>
                </div>
            </div>
        </section>
    );
}
