const express=require('express');
const ruta= express.Router();
const {crearuser,getuser,getuserx,modificaruser,kiauser}=require('../Controllers/usuario.controller')

ruta.route('/')


    .get(getuser)
    .post(crearuser)

ruta.route('/:id')

    .get(getuserx)
    .delete(kiauser)
    .put(modificaruser)


module.exports=ruta;