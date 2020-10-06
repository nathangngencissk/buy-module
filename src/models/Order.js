const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: "Supplier"
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: "Shop"
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    warehouse: {
        type: Schema.Types.ObjectId,
        ref: "Warehouse"
    },
    date: {
        type: Date,
        default: Date.now
    },
    document: {
        type: Schema.Types.ObjectId,
        ref: "Document"
    }
});

module.exports = mongoose.model('orders', orderSchema);