import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export const Listausuario = () => {
  const [lista, setLista]=useState([]);

  useEffect(()=>{
    const getUsuarios= async()=>{
        const Res= await axios.get('http://localhost:4000/api/usuarios')
        setLista(Res.data)
    }
    getUsuarios();
  },[lista]);

  const kiausuario= async(id)=>{
    await axios.delete('http://localhost:4000/api/usuarios/' + id)
  }

  return (
    <div className="row">
      {lista.map((list) => (
        <div className="col-md-4 p-2" key={list._id}>
          <div className="card">
            <div className="card-header">
              <h5>Nombre:{list.nombre}</h5>
            </div>

            <div className="card-body">
              <p>apellido: {list.apellido} </p>
              <p>edad: {list.edad} </p>
              <p>telefono: {list.telefono} </p>
              <p>correo: {list.correo} </p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-outline-danger"
                onClick={() => kiausuario(list._id)}
              >
                Eliminar
              </button>

              <Link className='btn btn-outline-primary m-1' to={'/edit/' + list._id}>
                Editar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
