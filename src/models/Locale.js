const mongoose = require('mongoose');
const { Schema } = mongoose;

const localeSchema = new Schema({
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    warehouses: [{
        type: Schema.Types.ObjectId,
        ref: "Warehouse"
    }]
});

module.exports = mongoose.model('locales', localeSchema);