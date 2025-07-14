'use client';
import Image from 'next/image';
import './AccesoriosComponents.css'; // reutilizamos el CSS de Accesorios 36

export default function AccesoriosComponent43() {
    const productos = [
        {
            img: '/accesorios/Accesorios53.png',
            referencia: 'Push To Open',
            unidades: '1.500 UNIDADES',
            titulo: 'Push To Open',
            detalles: [
                { label: 'Tipo', value: 'Tope' },
                { label: 'Suministro', value: 'Kit de montaje' },
                { label: 'Material', value: 'Plástico, Metal' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/accesorios/Accesorios54.png',
            referencia: 'Soporte Entrepano Plástico',
            unidades: '9.000 UNIDADES',
            titulo: 'Soporte Entrepano Plástico, Eje Metálico',
            detalles: [
                { label: 'Tipo', value: 'Soporte' },
                { label: 'Material', value: 'Plástico, Metal' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/accesorios/Accesorios55.png',
            referencia: 'Soporte Entrepano Niquelado',
            unidades: '5.000 UNIDADES',
            titulo: 'Soporte Entrepano Niquelado',
            detalles: [
                { label: 'Material', value: 'Metal' },
                { label: 'Unidad de empaque', value: '5.000' },
                { label: 'Acabado', value: 'Galvanizado niquelado' },
                { label: 'Marca', value: 'MZ' }
            ]
        }
    ];

    return (
        <section className="accesorios36-section">
            <div className="accesorios36-header">
                <h3>Contenido general</h3>
                <h1>
                    ACCESORIOS <span>/ Galería</span>
                </h1>
                <hr />
            </div>

            <div className="accesorios36-grid">
                {productos.map((item, i) => (
                    <div className="accesorios36-card" key={i}>
                        <Image
                            src={item.img}
                            alt={item.titulo}
                            width={220}
                            height={120}
                        />

                        <table className="accesorios36-table">
                            <thead>
                                <tr>
                                    <th>REFERENCIA</th>
                                    <th>UNIDAD DE EMPAQUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.referencia}</td>
                                    <td>{item.unidades}</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 className="accesorios36-title">{item.titulo}</h4>

                        <div className="accesorios36-description">
                            {item.detalles.map((detail, j) => (
                                <p key={j}>
                                    <strong>{detail.label}:</strong> {detail.value}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="accesorios36-label">Accesorios/040</div>
        </section>
    );
}
