'use client';
import Image from 'next/image';
import './TapiceriaComponent.css';

export default function TapiceriaComponent48() {

    return (
        <section className="tapiceria-centro">
            {/* TÍTULO */}
            <div className="tapiceria-centro-header">
                <h1>TAPICERÍA <span>/ Galería</span></h1>
                <p>Contenido general</p>
                <hr />
            </div>

            {/* CUERPO: DOS CUADRADOS */}
            <div className="tapiceria-centro-body">
                {/* IZQUIERDA */}
                <div className="cuadro-izquierdo">
                    <div className="tapiceria-imagen">
                        <Image
                            src="/tapiceria/tapiceria66.png"
                            alt="Casquetes Tapicería"
                            width={500}
                            height={500}
                        />
                    </div>
                    <table className="tapiceria-tabla">
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Casquete #30-36</td>
                                <td>10.000 UNIDADES</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="tapiceria-descripcion">
                        <h4>Casquetes Tapicería #30, #36</h4>
                        <ul>
                            <li><strong>Tipo:</strong> Casquete Capitoneo</li>
                            <li><strong>Tamaño:</strong> Diámetro: 30mm, 36mm</li>
                            <li><strong>Marca:</strong> MZ</li>
                        </ul>
                    </div>
                </div>

                {/* DERECHA */}
                <div className="cuadro-derecho">
                    <div className="tapiceria-ambiente">
                        <Image
                            src="/tapiceria/tapiceria67.png"
                            alt="Ambiente tapicería"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="tapiceria-footer">
                        Tapicería/043
                    </div>
                </div>
            </div>
        </section>
    );
}
