'use client';
import Image from 'next/image';
import './OrganizadorCondimentero.css';

export default function OrganizadorComponent28() {
    const productos = [
        {
            img: '/organizador/condimentero1.png',
            referencia: 'Condimentero Vidrio',
            unidades: '1 UNIDAD',
            titulo: 'Condimentero Vidrio 3 Niveles',
            detalles: [
                { label: 'Tipo', value: 'Condimentero' },
                { label: 'Tamaño Gabinete', value: '20cm' },
                { label: 'Tamaño Del Artículo', value: 'Ancho: 15cm' },
                { label: 'Altura', value: '65cm' },
                { label: 'Profundidad', value: '48cm' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/organizador/condimentero1.png',
            referencia: 'Condimentero Vidrio',
            unidades: '1 UNIDAD',
            titulo: 'Condimentero Vidrio 3 Niveles',
            detalles: [
                { label: 'Tipo', value: 'Condimentero' },
                { label: 'Tamaño Gabinete', value: '25cm' },
                { label: 'Tamaño', value: 'Ancho: 20cm' },
                { label: 'Altura', value: '65cm' },
                { label: 'Profundidad', value: '48cm' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/organizador/condimentero1.png',
            referencia: 'Condimentero Vidrio',
            unidades: '1 UNIDAD',
            titulo: 'Condimentero Vidrio 3 Niveles',
            detalles: [
                { label: 'Tipo', value: 'Condimentero' },
                { label: 'Tamaño Gabinete', value: '30cm' },
                { label: 'Tamaño', value: 'Ancho: 25cm' },
                { label: 'Altura', value: '65cm' },
                { label: 'Profundidad', value: '48cm' },
                { label: 'Marca', value: 'MZ' }
            ]
        }
    ];

    return (
        <section className="condimentero-section">
            <div className="condimentero-header">
                <h3>Contenido general</h3>
                <h1>
                    ORGANIZADORES <span>/ CONDIMENTEROS</span>
                </h1>
                <hr />
            </div>

            <div className="condimentero-grid">
                {productos.map((item, i) => (
                    <div className="condimentero-card" key={i}>
                        <Image
                            src={item.img}
                            alt={item.titulo}
                            width={220}
                            height={120}
                        />

                        <table className="condimentero-table">
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

                        <h4 className="condimentero-title">{item.titulo}</h4>

                        <div className="condimentero-description">
                            {item.detalles.map((detail, j) => (
                                <p key={j}>
                                    <strong>{detail.label}:</strong> {detail.value}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="condimentero-label">Organizadores-Condimentero/025</div>
        </section>
    );
}
