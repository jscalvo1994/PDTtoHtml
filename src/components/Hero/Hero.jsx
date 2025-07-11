'use client'; // solo si estás en app/ con Next 13+

import Image from 'next/image';
import Head from 'next/head'; // Necesario para insertar el <link> de Google Fonts
import './Hero.css';

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Michroma&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="hero">
        <div className="hero-section-top">
          <div className="hero-top-left">
            <a
              href="https://herrajesmz.com/"
              className="hero-rotated-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.HerrajesMZ.com
            </a>
          </div>

          <div className="hero-top-center">
            <Image
              src="/logo1.png"
              alt="Logo central metálico"
              fill
              className="hero-logo-image"
            />
          </div>

          <div className="hero-top-right">{/* Vacío intencionalmente */}</div>
        </div>

        <div className="hero-section-bottom">
          <div className="hero-bottom-left">
            <h1 className="hero-subtitle">
              SOMOS IMPORTADORES <br />
              DIRECTOS #1 A NIVEL <br />
              NACIONAL
            </h1>
          </div>

          <div className="hero-bottom-right">
            <div className="hero-bottom-logo-wrapper">
              <div className="hero-bottom-logo">
                <Image
                  src="/Logo2.png"
                  alt="Logo MZ completo"
                  width={160}
                  height={160}
                  className="hero-logo-image"
                />
              </div>
              <p className="hero-bottom-caption">by mz global imports sas 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
