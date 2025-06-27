'use client';

import { Telephone, Envelope, GeoAlt, ArrowRight } from 'react-bootstrap-icons';
import React from 'react';
import '@/app/globals.css';

export default function ContactSection() {
    return (
        <section id="contacto" className="py-5 px-3">
            <div className="container">
                {/* Encabezado */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">
                        ¿Listo para <span className="text-warning">Comenzar?</span>
                    </h2>
                    <p className="lead text-readable mx-auto" style={{ maxWidth: '600px' }}>
                        Contáctanos hoy y descubre cómo podemos transformar tus ideas en realidad
                    </p>
                </div>

                <div className="row align-items-center g-4">
                    {/* Información de contacto */}
                    <div className="col-md-6">
                        <h3 className="h4 fw-bold mb-4">Información de Contacto</h3>

                        <div className="d-flex align-items-start mb-4">
                            <div className="rounded-circle d-flex justify-content-center align-items-center bg-warning text-dark me-3" style={{ width: '50px', height: '50px' }}>
                                <Telephone size={24} />
                            </div>
                            <div>
                                <p className="mb-0 fw-semibold">Teléfono</p>
                                <p className="text-readable">+57 (xxx) xxx-xxxx</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <div className="rounded-circle d-flex justify-content-center align-items-center bg-warning text-dark me-3" style={{ width: '50px', height: '50px' }}>
                                <Envelope size={24} />
                            </div>
                            <div>
                                <p className="mb-0 fw-semibold">Email</p>
                                <p className="text-readable">info@creativaspublicidad.com</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start">
                            <div className="rounded-circle d-flex justify-content-center align-items-center bg-warning text-dark me-3" style={{ width: '50px', height: '50px' }}>
                                <GeoAlt size={24} />
                            </div>
                            <div>
                                <p className="mb-0 fw-semibold">Ubicación</p>
                                <p className="text-readable">Tu ciudad, Colombia</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="col-md-6">
                        <div className="p-4 border rounded-3 contact-form-custom">
                            <h3 className="h4 fw-bold mb-4">Solicita tu Cotización</h3>
                            <form className="needs-validation" noValidate>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-custom" placeholder="Nombre completo" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control form-control-custom" placeholder="Email" required />
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className="form-control form-control-custom" placeholder="Teléfono" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control form-control-custom" placeholder="Describe tu proyecto..." rows="4" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning text-dark w-100 fw-semibold d-flex align-items-center justify-content-center">
                                    Enviar Solicitud
                                    <ArrowRight className="ms-2" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
