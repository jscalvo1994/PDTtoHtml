    'use client';
    import Image from 'next/image';
    import './AccesoriosComponent42.css';

    export default function AccesoriosComponent42() {
        return (
            <section className="accesorios42-section">
                {/* Parte izquierda */}
                <div className="accesorios42-left">
                    <div className="accesorios42-header">
                        <h1>ACCESORIOS <span>/ Galería</span></h1>
                        <p>Contenido general</p>
                        <hr />
                    </div>

                    <div className="accesorios42-grid">
                        {/* Escuadra N°0 */}
                        <div className="accesorios42-card">
                            <Image
                                src="/accesorios/accesorios5051.png"
                                alt="Escuadra L N°0"
                                width={120}
                                height={120}
                            />
                            <table className="accesorios42-table">
                                <thead>
                                    <tr>
                                        <th>REFERENCIA</th>
                                        <th>UNIDAD DE EMPAQUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Escuadra L N°0</td>
                                        <td>5.000 UNIDADES</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul>
                                <li><strong>Tipo:</strong> Galvanizado</li>
                                <li><strong>Tamaño:</strong> 18*18*10mm</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>

                        {/* Escuadra N°1 */}
                        <div className="accesorios42-card">
                            <Image
                                src="/accesorios/accesorios5051.png"
                                alt="Escuadra L N°1"
                                width={120}
                                height={120}
                            />
                            <table className="accesorios42-table">
                                <thead>
                                    <tr>
                                        <th>REFERENCIA</th>
                                        <th>UNIDAD DE EMPAQUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Escuadra L N°1</td>
                                        <td>5.000 UNIDADES</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul>
                                <li><strong>Tipo:</strong> Galvanizado</li>
                                <li><strong>Tamaño:</strong> 18*18*10mm</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Parte derecha actualizada */}

                <div className="accesorios42-right">
                    {/* Parte a) superior */}
                    <div className="accesorios42-top">
                        {/* a.izquierda: imagen */}
                        <div className="accesorios42-imgbox">
                            <Image
                                src="/accesorios/accesorios52.png"
                                alt="Deslizador Puntilla 18mm"
                                width={180}
                                height={180}
                            />
                        </div>

                        {/* a.derecha: título + tabla + lista */}
                        <div className="accesorios42-info">
                            <h3>Deslizador Puntilla 18mm</h3>

                            <table className="accesorios42-table">
                                <thead>
                                    <tr>
                                        <th>REFERENCIA</th>
                                        <th>UNIDAD DE EMPAQUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Deslizador Puntilla</td>
                                        <td>15.000 UNIDADES</td>
                                    </tr>
                                </tbody>
                            </table>

                            <ul className="accesorios42-list">
                                <li><strong>Tipo:</strong> Puntilla</li>
                                <li><strong>Tamaño:</strong> 18mm</li>
                                <li><strong>Material:</strong> Metal, plástico</li>
                                <li><strong>Marca:</strong> MZ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Parte b) inferior */}
                    <div className="accesorios42-bottom">
                        <hr />
                        <div className="accesorios42-description">
                            <p>
                                Un deslizador de puntilla de 18 mm es un accesorio utilizado en la carpintería y la fabricación de muebles.
                                Esta puntilla de 18 mm es un componente que se utiliza para unir o deslizar piezas de madera o muebles.
                            </p>
                            <div className="accesorios42-meta">
                                <span>Accesorios/039</span>
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
