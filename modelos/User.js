// destructuramos del modulo de mongoose solo Schema y el model
const { Schema, model } = require("mongoose");

// - Schema: definimos el Schema para mongoose (definimos la estructura - atributos y el tipo de valor de cada atributo)
// - model: Nos permite interactuar con la BD (definimos el modelo productos con el schema)
// - Un modelo es una coleccion (el nombre que le demos al modelo sera el de la coleccion y se guarda en plural)


// instaciamos la clase Schema para definir el Schema de la coleccion con los atributos y tipo de datos que va a almacenar. (podemos pasarle el tipo y el valor por default de un atributo)
const esquemaDelUsuario = new Schema({
  // el username es unique lo que quiere decir que si otro documento se registra con el mismo nombre que otra da un error porque ese valor es unico
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

// ESTE SERA EL NOMBRE DE LA COLECCION Y SE GUARDA EN PLURAL
// definimos el modelo productos con el schema y lo exportamos
module.exports = model("user", esquemaDelUsuario);
