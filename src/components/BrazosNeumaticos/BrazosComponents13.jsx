'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import './BrazosNeumaticos.css';

export default function BrazosComponent13({
    mainImage = '/BrazosNeumaticos/BrazoNeumatico13.png',
    sketchImage = '/BrazosNeumaticos/fichatecnica13.png',

    productTitle = 'Brazo Neumático Cierre Lento\n60,80,100,120 Newtons',
    tipo = 'Brazo Neumático',
    unidadEmpaque = '100 Unidades',
    suministro = '1 Brazo, 3 Platinas y 5 Tornillos',
    cicloApertura = '40,000',
    altoModulo = '300mm – 600mm',
    marca = 'MZ',

    referencia = 'Brazo Neumático',
    empaque = '100 UNIDADES',
    codigo = 'Herraje-Brazos Neumaticos/013',
}) {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <section className="bisagra-wrapper-BrazoNeumatico">
            {/* ENCABEZADO */}
            <div className="product-header-BrazoNeumatico">
                <p className="product-subtitle-BrazoNeumatico">Contenido general</p>
                <h1 className="product-title-BrazoNeumatico">
                    <strong>HERRAJES</strong> <em>/ BRAZOS NEUMATICO</em>
                </h1>
                <hr className="product-divider-BrazoNeumatico" />
            </div>

            {/* CUERPO */}
            <div className="product-body-BrazoNeumatico">
                {/* IMAGEN PRINCIPAL */}
                <div className="product-image-left-BrazoNeumatico">
                    <Image
                        src={mainImage}
                        alt="Imagen del producto"
                        width={400}
                        height={400}
                        className="product-main-image-BrazoNeumatico"
                    />
                </div>

                {/* DESCRIPCIÓN */}
                <div className="product-description-BrazoNeumatico">
                    <h2 className="product-name-BrazoNeumatico">
                        {productTitle.split('\n').map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </h2>
                    <ul>
                        <li><strong>Tipo:</strong> {tipo}</li>
                        <li><strong>Unidad de Empaque:</strong> {unidadEmpaque}</li>
                        <li><strong>Suministro:</strong> {suministro}</li>
                        <li><strong>Ciclo de Apertura:</strong> {cicloApertura}</li>
                        <li><strong>Alto Módulo:</strong> {altoModulo}</li>
                        <li><strong>Marca:</strong> {marca}</li>
                    </ul>
                </div>

                {/* TABLA Y PLANO */}
                <div className="product-data-table-BrazoNeumatico">
                    <table>
                        <thead>
                            <tr>
                                <th>REFERENCIA</th>
                                <th>UNIDAD DE EMPAQUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{referencia}</td>
                                <td>{empaque}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="product-sketch-BrazoNeumatico">
                        <Image
                            src={sketchImage}
                            alt="Ficha técnica"
                            width={600}
                            height={400}
                            className="product-sketch-image-BrazoNeumatico"
                        />
                        <p className="product-id-BrazoNeumatico">{codigo}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
