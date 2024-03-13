const usuario= require('../Models/usuario');
const usuarioctrl={};

usuarioctrl.getuser= async(req,res)=>{
    const usuarios=await usuario.find();
    res.json(usuarios);
}

usuarioctrl.crearuser = async (req, res) => {
  const { nombre, apellido, edad, correo, telefono } = req.body;
  const newuser = new usuario({
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    edad: edad,
  });
  await newuser.save();
  res.json({ message: "usuario guardado" });
};



usuarioctrl.getuserx= async(req,res)=>{
    const usuario2= await usuario.findById(req.params.id);
    res.json(usuario2);
}

usuarioctrl.kiauser= async(req,res)=>{
    await usuario.findByIdAndDelete(req.params.id);
    res.json({message:"Usuario eliminado"});
}

usuarioctrl.modificaruser= async(req,res)=>{
    const {nombre,apellido,edad,correo,telefono}=req.body;
    await usuario.findByIdAndUpdate(req.params.id,{
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        correo:correo,
        edad:edad
    });
    res.json({message:"usuario actualizado"});
}

module.exports=usuarioctrl;