// requerimos la conexion y el modelo User
require("./connection");

const User = require("./modelos/User");

// el username es unique lo que quiere decir que si otro documento se registra con el mismo nombre que otra da un error porque ese valor es unico
// -Si ya tenemos una coleccion con atributos repetidos, unique no funciona, hay que eliminar la propiedad de todos los documentos para que funcione la propiedad unique.

// funcion que guarda un dato en la coleccion de Users
const createUser = async () => {
  const userOne = new User({
    username: "ejemplouser1",
    password: "12345",
  });

  //   guarda el usuario
  await userOne.save()

  //   const userTwo = new User({
  //     username: "ejemplouser1",
  //     password: "otraoassword",
  //   });

  //   //   guarda el usuario
  //   await userTwo.save();
};

createUser();
