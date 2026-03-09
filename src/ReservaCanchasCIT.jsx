import { Link } from 'react-router-dom'
import './reserva-canchas-cit.css'

function ReservaCanchasCIT() {
  return (
    <div className="cit-page">
      <header className="cit-navbar">
        <div className="cit-navbar-left">
          <span className="cit-logo-text">Canchas Sintéticas CIT</span>
        </div>
        <nav className="cit-navbar-right">
          <Link to="/" className="cit-nav-link cit-nav-link-active">
            Inicio
          </Link>
          <button className="cit-nav-link">Galería</button>
          <button className="cit-nav-link">Contacto</button>
        </nav>
      </header>

      <main className="cit-main">
        <section className="cit-hero">
          <div className="cit-hero-left">
            <h1>Disfruta del mejor fútbol en canchas sintéticas de calidad</h1>
            <p>
              El Complejo Educativo CIT cuenta con modernas canchas sintéticas
              diseñadas para brindar una experiencia deportiva cómoda, segura y
              profesional. Ideales para entrenamientos, partidos amistosos y
              torneos.
            </p>

            <div className="cit-hero-actions">
              <Link to="/reservas" className="cit-hero-primary">
                Reservar cancha
              </Link>
              <button className="cit-hero-secondary">Ver horarios</button>
            </div>

            <p className="cit-hero-note">
              Atención a estudiantes, docentes y comunidad en general.
            </p>
          </div>

          <div className="cit-hero-right">
            <div className="cit-hero-card">
              <div className="cit-hero-gradient" />
              <div className="cit-hero-grid" />
              <span className="cit-hero-mark">CIT</span>
              <div className="cit-hero-info">
                <span className="cit-hero-label">Disponibilidad hoy</span>
                <span className="cit-hero-value">3 canchas libres</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cit-section cit-section-info">
          <h2>Bienvenido a las Canchas Sintéticas CIT</h2>
          <p>
            Nuestras canchas están equipadas con césped sintético de alta
            calidad, iluminación adecuada y espacios pensados para estudiantes,
            docentes y la comunidad. Aquí podrás practicar deporte en un
            ambiente seguro, organizado y motivador.
          </p>
        </section>

        <section className="cit-section">
          <div className="cit-section-header">
            <h2>Galería de las canchas</h2>
            <p>Explora algunas vistas de nuestras instalaciones deportivas.</p>
          </div>

          <div className="cit-gallery">
            <article className="cit-card">
              <div className="cit-card-image cit-card-image-1" />
              <div className="cit-card-body">
                <h3>Cancha Principal</h3>
                <p>Césped sintético de alto rendimiento para partidos y torneos.</p>
              </div>
            </article>

            <article className="cit-card">
              <div className="cit-card-image cit-card-image-2" />
              <div className="cit-card-body">
                <h3>Iluminación Nocturna</h3>
                <p>Ideal para entrenar y jugar en horarios extendidos.</p>
              </div>
            </article>

            <article className="cit-card">
              <div className="cit-card-image cit-card-image-3" />
              <div className="cit-card-body">
                <h3>Zona de Descanso</h3>
                <p>Espacios cómodos para jugadores, docentes y espectadores.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="cit-section cit-section-contact">
          <h2>¿Quieres saber más?</h2>
          <p>
            Para reservas, consultas o más información sobre las canchas
            sintéticas del Complejo Educativo CIT, comunícate con la
            administración de la institución o realiza tu solicitud de reserva
            en línea.
          </p>
        </section>
      </main>

      <footer className="cit-footer">
        <span>Complejo Educativo CIT © 2025</span>
      </footer>
    </div>
  )
}

export default ReservaCanchasCIT

