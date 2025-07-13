'use client';
import Image from 'next/image';
import './OrganizadorCondimentero.css';

export default function OrganizadorComponent30() {
    return (
        <section className="condimentero30-section">
            <div className="condimentero30-header">
                <h3>Contenido general</h3>
                <h1>ORGANIZADORES <span>/ CONDIMENTEROS</span></h1>
                <hr />
            </div>

            <div className="condimentero30-content">
                {/* Imagen izquierda */}
                <div className="condimentero30-left">
                    <Image
                        src="/organizador/condimentero3.png"
                        alt="Condimentero Metálico"
                        width={300}
                        height={500}
                    />
                </div>

                {/* Descripción central */}
                <div className="condimentero30-middle">
                    <h2>Condimentero Metálico 3 Niveles<br />Cierre Lento Para Módulo De 15</h2>
                    <ul>
                        <li><strong>Tipo:</strong> Condimentero</li>
                        <li><strong>Tamaño:</strong> 45cm*10cm / módulo de 15</li>
                        <li><strong>Material:</strong> Metal</li>
                        <li><strong>Marca:</strong> MZ</li>
                    </ul>

                    <table className="condimentero30-table">
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Condimentero Metálico</td>
                                <td>1 UNIDAD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Imagen técnica / en uso */}
                <div className="condimentero30-right">
                    <Image
                        src="/organizador/condimentero3-diagrama.png"
                        alt="Ficha técnica condimentero"
                        width={320}
                        height={400}
                    />
                </div>
            </div>

            <div className="condimentero30-label">Organizadores-Condimentero/027</div>
        </section>
    );
}
