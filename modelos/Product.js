// destructuramos del modulo de mongoose solo Schema y el model
const { Schema, model } = require("mongoose");

// - Schema: definimos el Schema para mongoose (definimos la estructura - atributos y el tipo de valor de cada atributo)
// - model: Nos permite interactuar con la BD (definimos el modelo productos con el schema)
// - Un modelo es una coleccion (el nombre que le demos al modelo sera el de la coleccion y se guarda en plural)

// instaciamos la clase Schema para definir el Schema de la base de datos con los atributos y tipo de datos que va a almacenar. (podemos pasarle el tipo y el valor por default de un atributo)
const productosSchema = new Schema({
  name: {
    type: String,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
});

// ESTE SERA EL NOMBRE DE LA COLECCION Y SE GUARDA EN PLURAL
// definimos el modelo productos con el schema y lo exportamos
module.exports = model("Product", productosSchema);
