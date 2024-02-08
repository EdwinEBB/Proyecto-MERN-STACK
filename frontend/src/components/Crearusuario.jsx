import React from 'react'

export const Crearusuario = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form>
          <h2 className='text-center mb-3'>Creación de Usuario</h2>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>
          <div className="mb-3">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el apellido de usuario"
              required
            />
          </div>
          <div className="mb-3">
            <label>Edad:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa la edad del usuario"
              required
            />
          </div>
          <div className="mb-3">
            <label>Telefono:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa el telefono del usuario"
              required
            />
          </div>
          <div className="mb-3">
            <label>Correo:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa el correo del usuario"
              required
            />
          </div>
          <button className="btn btn-primary form-control">Guardar Usuario</button>
        </form>
      </div>
    </div>
  );
}
