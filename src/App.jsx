<<<<<<< HEAD
function App() {
  return null
}

export default App
=======
// App.jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Canchas Sintéticas CIT</h1>
          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO / INICIO */}
      <main id="inicio" className="main">
        <section className="hero">
          <div className="hero-text">
            <h2>Disfruta del mejor fútbol en canchas sintéticas de calidad</h2>
            <p>
              El Complejo Educativo CIT cuenta con modernas canchas sintéticas
              diseñadas para brindar una experiencia deportiva cómoda, segura y
              profesional. Ideales para entrenamientos, partidos amistosos y torneos.
            </p>
            <button className="hero-button">Más información</button>
          </div>
          <div className="hero-image"></div>
        </section>

        {/* TEXTO DE BIENVENIDA */}
        <section className="welcome">
          <h3>Bienvenido a las Canchas Sintéticas CIT</h3>
          <p>
            Nuestras canchas están equipadas con césped sintético de alta calidad,
            iluminación adecuada y espacios pensados para estudiantes, docentes y
            la comunidad. Aquí podrás practicar deporte en un ambiente seguro,
            organizado y motivador.
          </p>
        </section>

        {/* GALERÍA DE IMÁGENES */}
        <section id="galeria" className="gallery">
          <h3>Galería de las canchas</h3>
          <p className="gallery-subtitle">
            Explora algunas vistas de nuestras instalaciones deportivas.
          </p>

          <div className="gallery-grid">
            {/* 
              COMENTARIO IMPORTANTE:
              - Aquí puedes cambiar las imágenes modificando las propiedades src y alt.
              - Para agregar más imágenes, copia y pega otro bloque <article className="gallery-card">...</article>
            */}
            <article className="gallery-card">
              <img
                src="/imagenes/cancha2.jpg"
                alt="Cancha sintética vista general"
                className="gallery-image"
              />
              <div className="gallery-info">
                <h4>Cancha Principal</h4>
                <p>Césped sintético de alto rendimiento para partidos y torneos.</p>
              </div>
            </article>

            <article className="gallery-card">
              <img
                src="/imagenes/cancha5.jpg"
                alt="Cancha sintética iluminada"
                className="gallery-image"
              />
              <div className="gallery-info">
                <h4>Iluminación Nocturna</h4>
                <p>Ideal para entrenar y jugar en horarios extendidos.</p>
              </div>
            </article>

            <article className="gallery-card">
              <img
                src="/imagenes/cancha4.jpg"
                alt="Zona de gradas y descanso"
                className="gallery-image"
              />
              <div className="gallery-info">
                <h4>Zona de Descanso</h4>
                <p>Espacios cómodos para jugadores, docentes y espectadores.</p>
              </div>
            </article>

            {/* EJEMPLO DE TARJETA EXTRA (COPIA Y PEGA SI NECESITAS MÁS) */}
            {/* 
            <article className="gallery-card">
              <img
                src="URL_DE_TU_IMAGEN_AQUI"
                alt="Descripción de la nueva imagen"
                className="gallery-image"
              />
              <div className="gallery-info">
                <h4>Título de la nueva imagen</h4>
                <p>Descripción breve de la nueva imagen.</p>
              </div>
            </article>
            */}
          </div>
        </section>

        {/* SECCIÓN CONTACTO (OPCIONAL / ANCLA PARA NAV) */}
        <section id="contacto" className="contact">
          <h3>¿Quieres saber más?</h3>
          <p>
            Para reservas, consultas o más información sobre las canchas sintéticas
            del Complejo Educativo CIT, comunícate con la administración de la
            institución.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>Complejo Educativo CIT © 2026</p>
      </footer>
    </div>
  );
}

export default App;
>>>>>>> 7691b31af2d2eb999734201b2cad364145d9e907
