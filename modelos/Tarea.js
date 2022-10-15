const mongoose = require('mongoose'); // llamando la base de datos
let TareaSchema = new mongoose.Schema({

    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String

});
module.exports = mongoose.model('Tarea', TareaSchema); // Se define constructor