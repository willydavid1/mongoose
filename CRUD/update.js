require("../connection");

// importamos el modelo de datos
const User = require("../modelos/User");

const actualizarUsuarios = async () => {
  // Para actualizar un documento de una coleccion usamos el metodo .update({CONDICION}, {ATRIBUTOS A REEMPLAZAR}) - 1ro el documento que vamos a actualizar | 2do atributos a reemplazar
  // Actualiza el atributo password a los usuarios que cumplan con la condicion. SOLO ACTUALIZA LOS ATRIBUTOS ESPECIFICADOS
  const usuarioActualizado = await User.update(
    { username: "ejemplouser1" },
    { password: "contraseñaactualizadaMongoose" }
  );

  // muestra en consola el resultado de la operacion
  console.log(usuarioActualizado);
};
// actualizarUsuarios();




// BUSCA EL USUARIO Y LUEGO ALTERO SUS PROPIEDADES Y DESPUES LO GUARDO
const algunaFuncion = async () => {
  // busca de la coleccion de Users que cumpla con la condicion y retorna usuario y lo guardamos en variable | y podemos alterar las propiedades del usuario
  const user = await User.findOne({ username: "ejemplouser2" });
  console.log(user);

  // altero el usuario y despues lo guardo
  user.password = "minuevapasswordxD";
  user.save();

  console.log("usuario actualizado");
};
// algunaFuncion();




// Asi podemos añadirle un atributo nuevo al modelo | en este caso name
const otraFuncion = async () => {
  // busca el documento que cumpla la condicion y actualiza la propiedad name que acabo de incluir al modelo
  const user = await User.findOneAndUpdate(
    { username: "ejemplouser2" },
    { name: "willy david" },
    // le ponemos new: true para que me retorne el dato actualizado
    { new: true }
  );

  //   muestra el usuario modificado
  console.log(user);
};
otraFuncion();
