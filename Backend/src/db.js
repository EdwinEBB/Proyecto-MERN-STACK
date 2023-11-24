const mongoose=require('mongoose');

const uri="mongodb://127.0.0.1:27017/usuarios"

mongoose.connect(uri);

const conexion=mongoose.connection;

conexion.once('open',()=>{
    console.log("Base de datos conectada");
});