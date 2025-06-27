'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../app/globals.css';

export default function ProcessSection() {
    return (
        <section id="proceso" className="py-5 px-3">
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">
                        Nuestro <span className="text-warning">Proceso</span>
                    </h2>
                    <p className="lead text-readable">
                        Un flujo de trabajo optimizado para garantizar resultados excepcionales
                    </p>
                </div>

                {/* Pasos */}
                <div className="row text-center g-4">
                    <div className="col-md-3">
                        <div className="icon-circle mx-auto mb-3">
                            <i className="bi bi-bullseye fs-2 text-dark"></i>
                        </div>
                        <h3 className="h5 fw-bold mb-2">1. Consulta</h3>
                        <p className="text-readable">
                            Analizamos tus necesidades y objetivos para crear la estrategia perfecta.
                        </p>
                    </div>

                    <div className="col-md-3">
                        <div className="icon-circle mx-auto mb-3">
                            <i className="bi bi-palette fs-2 text-dark"></i>
                        </div>
                        <h3 className="h5 fw-bold mb-2">2. Diseño</h3>
                        <p className="text-readable">
                            Creamos propuestas visuales innovadoras que reflejen tu identidad de marca.
                        </p>
                    </div>

                    <div className="col-md-3">
                        <div className="icon-circle mx-auto mb-3">
                            <i className="bi bi-lightning-charge fs-2 text-dark"></i>
                        </div>
                        <h3 className="h5 fw-bold mb-2">3. Producción</h3>
                        <p className="text-readable">
                            Ejecutamos con precisión usando tecnología de vanguardia y materiales premium.
                        </p>
                    </div>

                    <div className="col-md-3">
                        <div className="icon-circle mx-auto mb-3">
                            <i className="bi bi-people fs-2 text-dark"></i>
                        </div>
                        <h3 className="h5 fw-bold mb-2">4. Entrega</h3>
                        <p className="text-readable">
                            Entregamos tu proyecto a tiempo y brindamos soporte post-venta completo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
