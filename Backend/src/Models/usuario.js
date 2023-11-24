const {Schema,model}=require('mongoose');

const usuarioesquema=new Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    edad:{
        type:Number,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    },
    correo:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

module.exports=model('usuario',usuarioesquema);