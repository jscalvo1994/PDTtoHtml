'use client';
import Image from 'next/image';
import './AccesoriosComponents.css';

export default function AccesoriosComponent36() {
    const productos = [
        {
            img: '/accesorios/Accesorios33.png',
            referencia: 'Rodamiento',
            unidades: '5000 UNIDADES',
            titulo: 'Rodamientos Balineras Routeadora 1/2',
            detalles: [
                { label: 'Tipo', value: 'Rodamiento' },
                { label: 'Tamaño', value: '1/2' },
                { label: 'Material', value: 'Metal' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/accesorios/Accesorios34.png',
            referencia: 'Cerradura Chapa Closet',
            unidades: '240 UNIDADES',
            titulo: 'Cerradura Chapa Closet Triangular',
            detalles: [
                { label: 'Tipo', value: 'Cerradura' },
                { label: 'Suministro', value: '1 Cerradura, 4 Tornillos, 1 Aro decorador, 1 platina' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/accesorios/Accesorios35.png',
            referencia: 'Tope Rodillo',
            unidades: '1000 UNIDADES',
            titulo: 'Tope Rodillo Vaivén Niquelado',
            detalles: [
                { label: 'Tipo', value: 'Tope' },
                { label: 'Suministro', value: 'Galvanizado Zincado' },
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

            <div className="accesorios36-label">Accesorios/033</div>
        </section>
    );
}
