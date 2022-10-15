const express = require("express"); // Importar express
const app = express(); // app es la variable, que es una constante
const router = express.Router(); // implementar rutas
const mongoose = require('mongoose'); // importar mongoose -base de datos
const TareaSchema = require('./modelos/Tarea.js'); // creando instancia

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(router); // app es la instancia de express
mongoose.connect('mongodb+srv://betonarmo:hG2hA4WjDA4TojLT@mintics2022.dthpinf.mongodb.net/?retryWrites=true&w=majority'); // conectar con la base de datos mongodb
app.listen(3000, () => {
    console.log('Escuchando por puerto 3000')
}); // activar el servidor. Sam e Apache es por el puerto 80

router.get('/', (req, res) => {
    res.send('Inicio de la API2');

}); // definir una primera ruta, que es la ruta del proyecto. Verbo get (post, put, delete desde um app). localhost:3000 es la ruta raiz ('/'). req = request. En get la información se recibe por url. Ajax de forma interna. res = respuesta que va dar el app para el cliente. res.send('inicio de la appi') - envia el mensaje al cliente. 

// Se define ruta "tarea". Get para obtener información (select), y post para escribir
// res corresponde a la respuesta 
// se puede simular desde postman
// HTML solo puede usar get y post. Postman me permite usar otros metodos
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });
    nuevaTarea.save(function(err, datos) {
        if (err) {
            console.log(err);
        }
        else {
            res.send('Tarea almacenada correctamente');
        }
    });
});   