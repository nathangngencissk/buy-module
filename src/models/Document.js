const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentSchema = new Schema({
    type: {
        type: String,
        enum: ['NOTA_FISCAL_ENTRADA',
            'NOTA_FISCAL_SAIDA',
            'ORDEM_DE_FORNECIMENTO',
            'SAIDA_PARA_CONSUMO_INTERNO',
            'REQUISICAO_DE_CONSUMO',
            'SAIDA_POR_DEVOLUCAO',
            'SAIDA_POR_PERDA',
            'SAIDA_POR_AJUSTE'],
        require: true
    },
    description: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('documents', documentSchema);