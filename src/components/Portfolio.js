'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Portfolio() {
    const [filter, setFilter] = useState('Todos');

    const projects = [
        {
            category: 'Branding',
            title: 'Identidad Corporativa',
            description: 'Logo, papelería y manual de marca',
            img: '/example.png',
            badge: 'Branding',
            color: 'warning',
        },
        {
            category: 'Estampados',
            title: 'Uniformes Corporativos',
            description: 'Serigrafía y bordado personalizado',
            img: '/example.png',
            badge: 'Estampados',
            color: 'primary',
        },
        {
            category: 'Litografía',
            title: 'Catálogo Premium',
            description: 'Impresión offset de alta calidad',
            img: '/example.png',
            badge: 'Litografía',
            color: 'success',
        },
        {
            category: 'Publicidad',
            title: 'Campaña Integral',
            description: 'Material POP y digital',
            img: '/example.png',
            badge: 'Publicidad',
            color: 'danger',
        },
        {
            category: 'Branding',
            title: 'Tarjetas Premium',
            description: 'Acabados especiales y relieve',
            img: '/example.png',
            badge: 'Branding',
            color: 'info',
        },
        {
            category: 'Promocionales',
            title: 'Kit Promocional',
            description: 'Productos personalizados variados',
            img: '/example.png',
            badge: 'Promocionales',
            color: 'warning',
        },
    ];

    const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-5 px-3">
            <div className="container text-center">
                <h2 className="display-5 fw-bold">
                    Nuestro <span className="text-warning">Portfolio</span>
                </h2>
                <p className="lead text-readable mb-4">
                    Descubre algunos de nuestros trabajos más destacados y la calidad que nos caracteriza
                </p>

                {/* Botones de filtro */}
                <div className="btn-group mb-5 flex-wrap" role="group">
                    {['Todos', 'Branding', 'Estampados', 'Litografía', 'Publicidad'].map(btn => (
                        <button
                            key={btn}
                            className={`btn btn-sm mx-1 mb-2 ${filter === btn
                                ? 'btn-warning text-dark fw-semibold'
                                : 'btn-outline-warning text-warning border-warning'
                                }`}
                            onClick={() => setFilter(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>

                {/* Grid de proyectos */}
                <div className="row g-4">
                    {filtered.map((project, idx) => (
                        <div className="col-md-6 col-lg-4" key={idx}>
                            <div className="card h-100 border border-warning-subtle card-hover position-relative text-white bg-transparent">
                                <div className="card-img-wrapper">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="card-img-top object-fit-cover"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="overlay-gradient">
                                        <div>
                                            <span className={`badge bg-${project.color} mb-2`}>{project.badge}</span>
                                            <h5 className="fw-bold">{project.title}</h5>
                                            <p className="small text-white-50 m-0">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA final */}
                <div className="mt-5 p-4 border border-warning rounded-4 bg-opacity-50 bg-black text-center">
                    <h4 className="fw-bold mb-3">¿Te gustó lo que viste?</h4>
                    <p className="text-readable mb-4">
                        Estos son solo algunos ejemplos de nuestro trabajo. Cada proyecto es único y está diseñado específicamente para las necesidades de nuestros clientes.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                        <button
                            className="btn fw-semibold text-black"
                            style={{
                                background: 'linear-gradient(to right, #ffc107, #ffca2c)',
                            }}
                        >
                            Ver Más Proyectos
                        </button>
                        <button className="btn btn-outline-warning text-warning border-warning">
                            Solicitar Cotización
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
