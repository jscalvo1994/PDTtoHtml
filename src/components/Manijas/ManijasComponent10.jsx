'use client';
import Image from 'next/image';
import './Manijas.css';

export default function ManijasComponent10() {
    // Variables dinámicas
    const imageProducto = '/manijas/manija10.png';
    const imageAmbiente = '/manijas/ambiente10.png';

    const referencias = [
        ['Manija Cilíndrica Acero Inox 96mm', '500 UNIDADES']
    ];

    const caracteristicas = [
        { label: 'Tipo', value: 'Manija Cilíndrica negra' },
        { label: 'Material', value: 'Acero inoxidable de alta calidad' },
        { label: 'Función', value: 'Proporciona un agarre ergonómico y resistente para la apertura de puertas, cajones y más.' },
        { label: 'Características', value: 'Diseño tubular, acabado en acero inoxidable, durabilidad excepcional, resistencia a la corrosión.' },
    ];

    return (
        <section className="manijas-section-inverted">
            {/* Columna izquierda con imagen del ambiente */}
            <div className="manijas-left-inverted">
                <Image
                    src={imageAmbiente}
                    alt="Manija Cilíndrica Negra"
                    fill
                    className="ambiente-image-inverted"
                />
                <div className="manijas-label-inverted">Herraje-Manijas/010</div>
            </div>

            {/* Columna derecha con texto y especificaciones */}
            <div className="manijas-right-inverted">
                <h3 className="section-title-inverted">Contenido general</h3>
                <h1 className="section-heading-inverted">
                    HERRAJES <span>/ MANIJAS</span>
                </h1>
                <hr className="divider-inverted" />

                <div className="manija-image-wrapper-inverted">
                    <Image
                        src={imageProducto}
                        alt="Manija Cilíndrica Negra"
                        width={400}
                        height={100}
                        className="manija-image-inverted"
                    />
                </div>

                <table className="manijas-table-inverted">
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

                <div className="manijas-description-inverted">
                    {caracteristicas.map((item, index) => (
                        <p key={index}>
                            <strong>{item.label}:</strong> {item.value}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
