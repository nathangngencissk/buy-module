const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplierSchema = new Schema({
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    name: {
        type: String,
        require: true
    },
    cnpj: {
        type: String,
        require: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
});

module.exports = mongoose.model('suppliers', supplierSchema);