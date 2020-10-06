const mongoose = require('mongoose');
const { Schema } = mongoose;

const stockProductSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    warehouse: {
        type: Schema.Types.ObjectId,
        ref: "Warehouse"
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: "Shop"
    },
    totalValue: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('stockProducts', stockProductSchema);