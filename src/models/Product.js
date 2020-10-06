const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    measuringUnit: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('products', productSchema);