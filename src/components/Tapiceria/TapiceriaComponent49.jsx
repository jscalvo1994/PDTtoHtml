'use client';
import Image from 'next/image';
import './TapiceriaComponent.css';

export default function TapiceriaComponent49() {
    const productos = [
        {
            img: '/tapiceria/tapiceria70.png',
            referencia: 'Boton Diamante Capitoneo',
            unidades: '6.000 UNIDADES',
            titulo: 'Boton Diamante 20mm Capitoneo',
            detalles: [
                { label: 'Tipo', value: 'Botón diamante' },
                { label: 'Tamaño', value: 'Diámetro 20mm' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/tapiceria/tapiceria71.png',
            referencia: 'Boton Diamante Cajón 35mm',
            unidades: '500 UNIDADES',
            titulo: 'Boton Gaveta Diamante 35mm',
            detalles: [
                { label: 'Tipo', value: 'Botón diamante Cajón' },
                { label: 'Tamaño', value: 'Diámetro 35mm' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/tapiceria/tapiceria72.png',
            referencia: 'Estoperol 16mm',
            unidades: '15.000 UNIDADES',
            titulo: 'Estoperol Tapiceria 16mm Plateado',
            detalles: [
                { label: 'Tipo', value: 'Estoperol tapicería' },
                { label: 'Tamaño', value: 'Diámetro 16mm' },
                { label: 'Marca', value: 'MZ' }
            ]
        }
    ];

    return (
        <section className="tapiceria49-section">
            <div className="tapiceria49-header">
                <h3>Contenido general</h3>
                <h1>TAPICERÍA <span>/ Galería</span></h1>
                <hr />
            </div>

            <div className="tapiceria49-grid">
                {productos.map((item, i) => (
                    <div className="tapiceria49-card" key={i}>
                        <Image
                            src={item.img}
                            alt={item.titulo}
                            width={680}
                            height={120}
                        />

                        <table className="tapiceria49-table">
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

                        <h4 className="tapiceria49-title">{item.titulo}</h4>

                        <div className="tapiceria49-description">
                            {item.detalles.map((detail, j) => (
                                <p key={j}>
                                    <strong>{detail.label}:</strong> {detail.value}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="tapiceria49-label">Tapicería/044</div>
        </section>
    );
}
