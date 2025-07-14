'use client';
import Image from 'next/image';
import './AccesoriosComponents.css'; // Usamos estilos unificados

export default function AccesoriosComponent41() {
    return (
        <section className="accesorios-section accesorios-reverse">
            {/* Parte izquierda */}
            <div className="accesorios-left">
                <div className="accesorios-header">
                    <h1>ACCESORIOS (41) <span>/ Galería</span></h1>
                    <p>Contenido general</p>
                    <hr />
                </div>

                <div className="accesorios-grid">
                    {/* Producto 1: Tope Cierre Magnético */}
                    <div className="accesorios-card">
                        <Image
                            src="/accesorios/accesorios48.png"
                            alt="Tope Cierre Magnético"
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
                                    <td>Tope Cierre Magnético</td>
                                    <td>1800 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="accesorios-details">
                            <h4>Tope Cierre Magnético</h4>
                            <ul>
                                <li><strong>Tipo:</strong> Topes</li>
                                <li><strong>Material:</strong> Metal, Plástico</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Producto 2: Pasador Automático */}
                    <div className="accesorios-card">
                        <Image
                            src="/accesorios/accesorios49.png"
                            alt="Pasador Automático"
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
                                    <td>65mm</td>
                                    <td>480 UNIDADES</td>
                                </tr>
                                <tr>
                                    <td>55mm</td>
                                    <td>480 UNIDADES</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="accesorios-details">
                            <h4>Pasador Automático</h4>
                            <ul>
                                <li><strong>Tipo:</strong> Pasador</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Parte derecha */}
            <div className="accesorios-right">
                <Image
                    src="/accesorios/accesorios47.png"
                    alt="Imagen ambiente habitación"
                    width={500}
                    height={800}
                />
                <div className="accesorios-footer">
                    Accesorios/038
                </div>
            </div>
        </section>
    );
}
