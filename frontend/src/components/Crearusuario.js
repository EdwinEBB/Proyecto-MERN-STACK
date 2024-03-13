import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Crearusuario = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: 18,
    telefono: 0,
    correo: "",
  };

  let { id } = useParams();

  const [Usuario, setUsuario] = useState(valorInicial);
  const [subId, setSubId]= useState(id);
  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...Usuario, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    //console.log(Usuario);
    //crear logica para la petición Post
    const nuevoUsuario = {
      nombre: Usuario.nombre,
      apellido: Usuario.apellido,
      edad: Usuario.edad,
      telefono: Usuario.telefono,
      correo: Usuario.correo,
    };

    await axios.post("http://localhost:4000/api/usuarios", nuevoUsuario);

    setUsuario({ ...valorInicial });
  };

  const obten1=async(valorid)=>{
    const res = await axios.get('http://localhost:4000/api/usuarios/'+ valorid)
    setUsuario({
      nombre:res.data.nombre,
      apellido:res.data.apellido,
      edad:res.data.edad,
      telefono:res.data.telefono,
      correo:res.data.correo
    })
  }

  //función para actualizar el usuarii
  const actualizarUser= async(e)=>{
    e.preventDefault();
    const newUser={
      nombre:Usuario.nombre,
      apellido:Usuario.apellido,
      edad:Usuario.edad,
      telefono:Usuario.telefono,
      correo:Usuario.correo
    }

    await axios.put('http://localhost:4000/api/usuarios/' + subId, newUser)
    setUsuario({...valorInicial})
    setSubId('')

  }

  //logica para hacer una peticion a la api
  useEffect(()=>{
    if(subId !== ''){
      obten1(subId)
    }
  },[])


  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h2 className="text-center mb-3">Creación de Usuario</h2>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre de usuario"
              required
              name="nombre"
              value={Usuario.nombre}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el apellido de usuario"
              required
              name="apellido"
              value={Usuario.apellido}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Edad:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa la edad del usuario"
              required
              name="edad"
              value={Usuario.edad}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Telefono:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa el telefono del usuario"
              required
              name="telefono"
              value={Usuario.telefono}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Correo:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa el correo del usuario"
              required
              name="correo"
              value={Usuario.correo}
              onChange={capturarDatos}
            />
          </div>
          <button className="btn btn-primary form-control">
            Guardar Usuario
          </button>
        </form>
        <form onSubmit={actualizarUser}>
          <button className='btn btn-primary form-control mt-2'>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}
