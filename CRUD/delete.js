require("../connection");

// importamos el modelo de datos
const Product = require("../modelos/Product");

const eliminaMuchosDocumentos = async () => {
  // elimina los documentos del modelo que cumplan la condicion (elimina todos los documento que cumplan la condicion)
  const result = await Product.deleteMany({ name: "keyboard" });
  console.log(result);
};
// eliminaMuchosDocumentos();

const eliminaSoloUnDocumento = async () => {
  // elimina el documento del modelo que cumpla la condicion (elimina solo un documento que cumpla la condicion y si hay varios elimina solo el primero)
  const result = await Product.deleteOne({ name: "Desktop HP" });
  console.log(result);
};
// eliminaSoloUnDocumento();

const buscaUnDocumentoYloElimina = async () => {
  // busca y elimina el documento que encontro (elimina solo el documento que encontro y retorna el documento que elimino)
  const result = await Product.findOneAndDelete({ name: "Desktop LENOVO" });
  console.log(result);
};
// buscaUnDocumentoYloElimina();

const buscaUnDocumentoPorIDYloElimina = async () => {
  // busca un id y elimina el documento con el ID que encontro (elimina solo el documento que encontro por el ID y retorna el documento que elimino)
  const result = await Product.findByIdAndDelete("5e8d15910eafb91c302ee4bc");
  console.log(result);
};
buscaUnDocumentoPorIDYloElimina();
