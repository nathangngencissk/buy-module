const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownerSchema = new Schema({
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

ownerSchema.methods.print = function () {
    console.log(this.name);
}

module.exports = mongoose.model('owners', ownerSchema);