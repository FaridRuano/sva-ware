import React from 'react'

const Subscription = () => {
  return (
    <div className="subs-wrap">
      <div className="titles-wrap">
        <h3>Aprende a tu ritmo</h3>
        <p>
          Escoge la mejor opción para ti y desbloquea ya todo el contenido.
        </p>
      </div>
      <div className="cards-wrap">
        <div className="card">
          <div className="txt-container">
            <h2>
              Mensual
            </h2>
            <p>
              Se renueva cada mes
            </p>
            <h1>
              $29.99
            </h1>
          </div>
          <button>
            Unirme
          </button>
        </div>
        <div className="card">
          <div className="txt-container">
            <h2>
              Trimestral
            </h2>
            <p>
              Se renueva cada mes
            </p>
            <h1>
              $75.99
            </h1>
            <h3>
              Ahorra el 15%
            </h3>
          </div>
          <button>
            Unirme
          </button>
        </div>
        <div className="card">
          <div className="txt-container">
            <h2>
              Semestral
            </h2>
            <p>
              Se renueva cada mes
            </p>
            <h1>
              $127.99
            </h1>
            <h3>
              Ahorra el 30%
            </h3>
          </div>
          <button>
            Unirme
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscription