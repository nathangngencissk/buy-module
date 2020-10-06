const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Owner"
    },
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('shops', shopSchema);