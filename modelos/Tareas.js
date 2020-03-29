const mongoose = require('mongoose');
const tareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true 
    },
    estado: {
        type: Boolean,
        default: false
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
});

module.exports = mongoose.model('Tarea', tareaSchema);