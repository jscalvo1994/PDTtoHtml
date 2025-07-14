'use client';
import './FooterBanner.css';
import Image from 'next/image';

export default function FooterBanner() {
    return (
        <footer className="footer-banner-section">
            <div className="footer-banner-background" />
            <div className="footer-banner-overlay">
                <div className="footer-banner-content">
                    <h2 className="footer-title">MZ GLOBAL IMPORTS<br />S.A.S</h2>
                    <a
                        href="https://www.mzglobalimports.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-website"
                    >
                        www.mzglobalimports.com
                    </a>
                    <p className="footer-description">
                        En MZ Global Imports, nos especializamos en la importación y distribución de herrajes de alta calidad
                        para la industria del mobiliario y la tapicería. Con años de experiencia en el sector, nos hemos consolidado
                        como líderes del mercado, ofreciendo soluciones innovadoras y productos que cumplen con los más altos estándares.
                    </p>
                    <div className="footer-icons">
                        <Image
                            src="/footer-icons.png"
                            alt="Footer MZ Global Imports"
                            width={300}
                            height={150}
                            className="footer-banner-img"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
