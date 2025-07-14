'use client';
import Image from 'next/image';
import './AccesoriosComponent44.css'; // NUEVOS ESTILOS personalizados

export default function AccesoriosComponent44() {
    return (
        <section className="accesorios44-section">


            {/* Parte izquierda: imagen de medidas */}
            <div className="accesorios44-left">
                <div className="accesorios42-header">
                    <h1>ACCESORIOS <span>/ Galería</span></h1>
                    <p>Contenido general</p>
                    <hr />
                </div>
                <Image
                    src="/accesorios/accesorios56.png"
                    alt="Push To Open Diagrama"
                    width={400}
                    height={400}
                />
            </div>

            {/* Parte derecha: información técnica */}
            <div className="accesorios44-right">
                {/* Parte a) superior */}
                <div className="accesorios44-top">
                    <div className="accesorios44-imgbox">
                        <Image
                            src="/accesorios/accesorios57.png"
                            alt="Push To Open"
                            width={180}
                            height={180}
                        />
                    </div>

                    <div className="accesorios44-info">
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
                                    <td>Push To Open</td>
                                    <td>1.000 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>

                        <ul className="accesorios44-list">
                            <li><strong>Tipo:</strong> Topes</li>
                            <li><strong>Tamaño:</strong> 9cm</li>
                            <li><strong>Material:</strong> Metal, plástico</li>
                            <li><strong>Marca:</strong> MZ</li>
                        </ul>
                    </div>
                </div>

                {/* Parte b) inferior */}
                <div className="accesorios44-bottom">
                    <hr />
                    <div className="accesorios44-description">
                        <p>
                            Pestillos magnéticos para puerta de gabinete de 9 cm. <br />
                            2 pestillos magnéticos por puerta de cocina.<br />
                            Cierre de puerta de gabinete para sistemas sin manija.<br />
                            Cierre de empuje ideal para accesorios de gabinetes.
                        </p>
                        <div className="accesorios44-meta">
                            <span>Accesorios/041</span>
                            <Image
                                src="/galeria/qr-example.png"
                                alt="QR"
                                width={70}
                                height={70}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
