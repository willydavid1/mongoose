require("../connection");

// importamos el modelo de datos
const Product = require("../modelos/Product");

const crearProducto = async () => {
  const pcOne = new Product({
    name: "Desktop HP",
    description: "htp lol description",
  });

  // guarda el usuario en la coleccion producto
  await pcOne.save();

  const pcTwo = new Product({
    name: "Desktop LENOVO",
    description: "LENOVO lol description",
  });

  // guarda el usuario en la coleccion producto
  await pcTwo.save();

  console.log("Productos agregados en la coleccion-modelo product ")
};

crearProducto();
