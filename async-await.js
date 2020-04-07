// utilizamos async-await para operaciones de tipo CRUD
require("./connection");

// importamos el modelo de datos
const Product = require("./modelos/Product");

// funcion que guarda un documento en la DB
const main = async () => {
  // Crear un producto del modelo y lo guardamos en una constante
  const producto = new Product({
    name: "keyboard",
    description: "description teclado aqui",
    price: 150,
  });

  // operacion de guardar un documento en la DB es asincrono retorna una promesa con un error y si salio bien retorna el documento guardado
  const productSaved = await producto.save();
  //   console.log(productSaved);

  //   retorna una promesa con el productoGuardado
  return productSaved;
};

// la funcion main retorna una promesa con el producto guardado
main()
  .then((productSaved) => console.log(productSaved))
  .catch((err) => console.log("err"));





  
//   Para realizar operaciones CRUD con async-await
//   1- importamos el modelo y la conexion
//   2- Creamos una funcion async-await
//   3- Crear un producto del modelo y lo guardamos en una constante
//   4- const productSaved = await prod.save(); | Operacion de guardar un documento en la DB es asincrono retorna una promesa con un error y si salio bien retorna el documento guardado
