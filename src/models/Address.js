const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    cep: {
        type: String,
        required: true
    },
    state: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    complement: {
        type: String
    }
});

module.exports = mongoose.model('addresses', addressSchema);