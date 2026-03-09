import { useState } from 'react'
import './index.css'

function Reservas() {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    fecha: '',
    hora: '',
    tipoCancha: 'bajo-techo',
    detalles: '',
  })

  const [mensaje, setMensaje] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMensaje(
      `Reserva creada para ${formData.nombre || 'tu reserva'} el ${
        formData.fecha || 'día seleccionado'
      } a las ${formData.hora || 'hora seleccionada'}.`
    )
  }

  return (
    <div className="booking-page">
      <header className="booking-header">
        <div className="badge">Reservas</div>
        <h1>Agenda tu cancha en minutos</h1>
        <p>
          Elige horario, tipo de cancha y deja tus datos para asegurar tu espacio
          de juego.
        </p>

        <div className="highlights">
          <div className="highlight">
            <span className="highlight-text">Horarios flexibles</span>
          </div>
          <div className="highlight">
            <span className="highlight-text">Bajo techo y aire libre</span>
          </div>
          <div className="highlight">
            <span className="highlight-text">Ideal para grupos</span>
          </div>
        </div>
      </header>

      <main className="booking-layout">
        <section className="booking-summary">
          <h2>Resumen rápido</h2>
          <ul>
            <li>
              <span className="summary-label">Nombre:</span>
              <span className="summary-value">
                {formData.nombre || 'Pendiente'}
              </span>
            </li>
            <li>
              <span className="summary-label">Fecha:</span>
              <span className="summary-value">
                {formData.fecha || 'Sin seleccionar'}
              </span>
            </li>
            <li>
              <span className="summary-label">Hora:</span>
              <span className="summary-value">
                {formData.hora || 'Sin seleccionar'}
              </span>
            </li>
            <li>
              <span className="summary-label">Cancha:</span>
              <span className="summary-value">
                {formData.tipoCancha === 'bajo-techo'
                  ? 'Bajo techo'
                  : 'Al aire libre'}
              </span>
            </li>
          </ul>
          <p className="summary-note">
            Completa el formulario para confirmar tu reserva. Puedes ajustar los
            datos cuando quieras antes de enviar.
          </p>
        </section>

        <section className="booking-form-section">
          <h2>Formulario de reserva</h2>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="cedula">Cédula</label>
                <input
                  id="cedula"
                  name="cedula"
                  type="text"
                  placeholder="Ej: 8-888-888"
                  value={formData.cedula}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Ej: +507 6000-0000"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="tipoCancha">Tipo de cancha</label>
                <div className="pill-group">
                  <button
                    type="button"
                    className={`pill ${
                      formData.tipoCancha === 'bajo-techo' ? 'pill-active' : ''
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        tipoCancha: 'bajo-techo',
                      }))
                    }
                  >
                    Bajo techo
                  </button>
                  <button
                    type="button"
                    className={`pill ${
                      formData.tipoCancha === 'aire-libre' ? 'pill-active' : ''
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        tipoCancha: 'aire-libre',
                      }))
                    }
                  >
                    Aire libre
                  </button>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="fecha">Fecha</label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="hora">Hora</label>
                <input
                  id="hora"
                  name="hora"
                  type="time"
                  value={formData.hora}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="detalles">Detalles adicionales</label>
              <textarea
                id="detalles"
                name="detalles"
                rows="3"
                placeholder="Deporte, número de personas, comentarios..."
                value={formData.detalles}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="primary-button">
              Confirmar reserva
            </button>

            {mensaje && <p className="success-message">{mensaje}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}

export default Reservas

