const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/mywebstore"
const db = mongoose.connection

// Para conectarnos a una instancia de mongoDB | recibe como parametro la direccion de la DB a la que me voy a conectar, Protocolo-direccionIP:puerto-baseDeDatos a conectar o si no existe se crea(cuando guardamos un dato) | Necesitamos añadirle las configuraciones de la conexion.
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
 .catch(err => console.log(err)) //la conexion se resuelve como una promesa y si hay un error la podemos capturar

// Los eventos de conexion nos ayudan a ejecutar codigo cuando algo succeda con la conexion
// mongoose cuando la conexion haya sido abierta ejecuta el callback | once solo escucha una vez ese evento y on siempre escuchara el evento
db.once("open", _ => {
    console.log("Base de datos conectada a " + uri)
})

// cuando ocurra un evento de tipo error en la conexion ejecuta el callback
db.on("error", (err) => {
    console.log("error al conectarse a la instancia o se esta enviando un payload mayor a 16MB")
})
