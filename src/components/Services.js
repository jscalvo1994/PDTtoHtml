'use client';
import { Printer, Palette, Megaphone, CheckCircle } from 'react-bootstrap-icons';

export default function Services() {
    return (
        <section id="servicios" className="py-5 px-3">
            <div className="container">
                {/* Título */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5 mb-3">
                        Nuestros <span className="text-warning">Servicios</span>
                    </h2>
                    <p className="lead text-readable mx-auto" style={{ maxWidth: '640px' }}>
                        Ofrecemos soluciones integrales para todas tus necesidades de comunicación visual
                    </p>
                </div>

                {/* Grilla */}
                <div className="row g-4">
                    {/* Servicio 1 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card service-card h-100">
                            <div className="card-body text-center">
                                <div className="icon-gradient mb-4 mx-auto">
                                    <Printer size={28} />
                                </div>
                                <h5 className="fw-bold mb-3 text-readable">Litografía Profesional</h5>
                                <p className="small text-readable">
                                    Impresión de alta calidad en diversos materiales y formatos para todos tus proyectos.
                                </p>
                                <ul className="list-unstyled text-start mt-3 small text-readable">
                                    <li className="d-flex align-items-center mb-2">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Tarjetas de presentación
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Folletos y catálogos
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Material POP
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Servicio 2 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card service-card h-100">
                            <div className="card-body text-center">
                                <div className="icon-gradient mb-4 mx-auto">
                                    <Palette size={28} />
                                </div>
                                <h5 className="fw-bold mb-3 text-readable">Estampados Personalizados</h5>
                                <p className="small text-readable">
                                    Personalización de textiles y productos con técnicas de vanguardia y diseños únicos.
                                </p>
                                <ul className="list-unstyled text-start mt-3 small text-readable">
                                    <li className="d-flex align-items-center mb-2">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Camisetas y uniformes
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Productos promocionales
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Serigrafía y bordado
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Servicio 3 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card service-card h-100">
                            <div className="card-body text-center">
                                <div className="icon-gradient mb-4 mx-auto">
                                    <Megaphone size={28} />
                                </div>
                                <h5 className="fw-bold mb-3 text-readable">Publicidad Integral</h5>
                                <p className="small text-readable">
                                    Estrategias publicitarias completas que combinan medios físicos y digitales.
                                </p>
                                <ul className="list-unstyled text-start mt-3 small text-readable">
                                    <li className="d-flex align-items-center mb-2">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Diseño gráfico
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Branding corporativo
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <CheckCircle className="me-2 text-warning" size={16} /> Marketing digital
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
