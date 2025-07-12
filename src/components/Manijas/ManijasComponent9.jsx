'use client';
import Image from 'next/image';
import './Manijas.css';

export default function ManijasComponent9() {
    // Variables dinámicas
    const imageProducto = '/manijas/manija9.png';
    const imageAmbiente = '/manijas/ambiente9.png';

    const referencias = [
        ['Manija Cilíndrica Acero 64mm', '500 UNIDADES'],
        ['Manija Cilíndrica Acero 96mm', '500 UNIDADES'],
        ['Manija Cilíndrica Acero 128mm', '500 UNIDADES'],
    ];

    const caracteristicas = [
        { label: 'Tipo', value: 'Manija Cilíndrica' },
        { label: 'Material', value: 'Acero inoxidable de alta calidad' },
        { label: 'Función', value: 'Proporciona un agarre ergonómico y resistente para la apertura de puertas, cajones y más.' },
        { label: 'Características', value: 'Diseño tubular, acabado en acero inoxidable, durabilidad excepcional, resistencia a la corrosión.' },
    ];

    return (
        <section className="manijas-section">
            <div className="manijas-left">
                <h3 className="section-title">Contenido general</h3>
                <h1 className="section-heading">
                    HERRAJES <span>/ MANIJAS</span>
                </h1>
                <hr className="divider" />
                <div className="manija-image-wrapper">
                    <Image
                        src={imageProducto}
                        alt="Manija Cilíndrica"
                        width={800}
                        height={150}
                        className="manija-image"
                    />
                </div>
                <table className="manijas-table">
                    <thead>
                        <tr>
                            <th>REFERENCIA</th>
                            <th>UNIDAD DE EMPAQUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {referencias.map(([nombre, unidades], i) => (
                            <tr key={i}>
                                <td>{nombre}</td>
                                <td>{unidades}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="manijas-description">
                    {caracteristicas.map((item, index) => (
                        <p key={index}>
                            <strong>{item.label}:</strong> {item.value}
                        </p>
                    ))}
                </div>
            </div>

            <div className="manijas-right">
                <Image
                    src={imageAmbiente}
                    alt="Manija instalada"
                    fill
                    className="ambiente-image"
                />
                <div className="manijas-label">Herraje-Manijas/009</div>
            </div>
        </section>
    );
}
