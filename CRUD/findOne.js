require("../connection");

// importamos el modelo de datos
const User = require("../modelos/User");

const obtenerUsuario = async () => {
    // busca de la coleccion de Users que cumpla con la condicion retorna una promesa
    const consultaDelUsuario = await User.findOne({ username: "ejemplouser3" })
    console.log(consultaDelUsuario)
};

obtenerUsuario();
