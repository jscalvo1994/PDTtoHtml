'use client';
import Image from 'next/image';
import './Manijas.css';

export default function ManijasComponent11() {
    const productos = [
        {
            img: '/manijas/manija11-casuela1.png',
            referencia: 'Manija Cazuela',
            unidades: '600 UNIDADES',
            titulo: 'Manija Cazuela Incrustar 11,5cm',
            detalles: [
                { label: 'Tipo', value: 'Manija Cazuela Incrustar' },
                { label: 'Unidad De Empaque', value: '600 Unidades' },
                { label: 'Medidas', value: '11,5cm' },
                { label: 'Material', value: 'Acero inoxidable de alta calidad' },
                { label: 'Suministro', value: '1 Manija, 2 Tornillos' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/manijas/manija11-casuela1.png',
            referencia: 'Manija Cazuela',
            unidades: '800 UNIDADES',
            titulo: 'Manija Cazuela Incrustar 8,5cm',
            detalles: [
                { label: 'Tipo', value: 'Manija Cazuela Incrustar' },
                { label: 'Unidad De Empaque', value: '800 Unidades' },
                { label: 'Medidas', value: '8,5cm' },
                { label: 'Material', value: 'Acero inoxidable de alta calidad' },
                { label: 'Suministro', value: '1 Manija, 2 Tornillos' },
                { label: 'Marca', value: 'MZ' }
            ]
        },
        {
            img: '/manijas/manija11-casuela2.png',
            referencia: 'Manija Cazuela',
            unidades: '400 UNIDADES',
            titulo: 'Manija Cazuela Incrustar 2,4cm',
            detalles: [
                { label: 'Tipo', value: 'Manija Cazuela Incrustar' },
                { label: 'Unidad De Empaque', value: '400 Unidades' },
                { label: 'Medidas', value: '2,4cm' },
                { label: 'Material', value: 'Acero inoxidable de alta calidad' },
                { label: 'Suministro', value: '1 Manija, 1 Tornillos' },
                { label: 'Marca', value: 'MZ' }
            ]
        }
    ];

    return (
        <section className="manijas-section-triple">
            <div className="manijas-header-triple">
                <h3>Contenido general</h3>
                <h1>
                    HERRAJES <span>/ MANIJAS</span>
                </h1>
                <hr />
            </div>

            <div className="manijas-grid-triple">
                {productos.map((item, i) => (
                    <div className="manija-card-triple" key={i}>
                        <Image
                            src={item.img}
                            alt={item.titulo}
                            width={220}
                            height={120}
                        />

                        <table className="manijas-table-triple">
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

                        <h4 className="manija-title-triple">{item.titulo}</h4>

                        <div className="manija-description-triple">
                            {item.detalles.map((detail, j) => (
                                <p key={j}>
                                    <strong>{detail.label}:</strong> {detail.value}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="manijas-label-triple">Herraje-Manijas/011</div>
        </section>
    );
}
