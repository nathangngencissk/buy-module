const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        require: true
    },
    cnpj: {
        type: String
    }
});

module.exports = mongoose.model('clients', clientSchema);