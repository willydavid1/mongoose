// importamos la conexion a la DB y el modelo de datos product
require("./connection");
const Product = require("./modelos/Product");

// define un producto
const product = Product({
  name: "PC",
  description: "Esta seria la descripcion de la PC",
  price: 1300.99,
});

// Para guardar un documento basado en el modelo Product y es un metodo asincrono y cuando termine lo manejamos con un callback (recibe un error o el documento si se guardo) | Esto guarda este documento en la coleccion de products
product.save((err, document) => {
  // si existe un error muestralo pero si se guardo quiero ver el documento
  if (err) console.log(err);
  console.log(document);
});

console.log(product);
