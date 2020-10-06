const mongoose = require('mongoose');
const { Schema } = mongoose;

const warehouseSchema = new Schema({
    locale: {
        type: Schema.Types.ObjectId,
        ref: "Locale"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Owner"
    },
    matrix: {
        type: Schema.Types.ObjectId,
        ref: "Warehouse"
    }
});

module.exports = mongoose.model('warehouses', warehouseSchema);