'use client';
import Image from 'next/image';
import './AccesoriosComponents.css'; // Archivo CSS unificado

export default function AccesoriosComponent40() {
    return (
        <section className="accesorios-section">
            {/* Parte izquierda */}
            <div className="accesorios-left">
                <div className="accesorios-header">
                    <h1>ACCESORIOS (40) <span>/ Galería</span></h1>
                    <p>Contenido general</p>
                    <hr />
                </div>

                <div className="accesorios-grid">
                    {/* Producto 1: Tubo Ovalado */}
                    <div className="accesorios-card">
                        <Image
                            src="/accesorios/accesorios44.png"
                            alt="Tubo Ovalado"
                            width={400}
                            height={200}
                        />
                        <table className="accesorios-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tubo Ovalado</td>
                                    <td>20 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="accesorios-details">
                            <h4>Especificaciones<br />Tubo Ovalado</h4>
                            <ul>
                                <li><strong>Tipo:</strong> Tubo</li>
                                <li><strong>Material:</strong> Metal</li>
                                <li><strong>Tamaño:</strong> 3 Metros</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Producto 2: Tubo Redondo */}
                    <div className="accesorios-card">
                        <Image
                            src="/accesorios/accesorios45.png"
                            alt="Tubo Redondo"
                            width={400}
                            height={200}
                        />
                        <table className="accesorios-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tubo Redondo</td>
                                    <td>20 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="accesorios-details">
                            <h4>Especificaciones<br />Tubo Redondo</h4>
                            <ul>
                                <li><strong>Tipo:</strong> Tubo</li>
                                <li><strong>Material:</strong> Metal</li>
                                <li><strong>Tamaño:</strong> 3 Metros</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Parte derecha */}
            <div className="accesorios-right">
                <Image
                    src="/accesorios/accesorios46.png"
                    alt="Imagen ambiente closet"
                    width={500}
                    height={800}
                />

                {/* Pie de página dentro del flujo */}
                <div className="accesorios-footer">
                    Accesorios/037
                </div>
            </div>
        </section>
    );
}
