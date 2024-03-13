const express=require('express');
const cors=require('cors');
const app=express();

//configuracion
app.set('port',process.env.port||4000);


//middlewares
app.use(cors());
app.use(express.json());



//rutas
app.get('/',(req,res)=>{
    res.send('Ola');
})

//ruta para api
app.use('/api/usuarios',require('./Routes/usuarios'));


module.exports=app;