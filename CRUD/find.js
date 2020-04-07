// utilizamos async-await para operaciones de tipo CRUD
require("../connection");

// importamos el modelo de datos
const Product = require("../modelos/Product");

// funcion que busca Un documento LEER
const main = async () => {
    
  // operacion asincrona que retorna un arreglo con todos los datos de esa coleccion o modelo
  const productos = await Product.find({ name: "keyboard" });
  console.log(productos);
};

main();