var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var planoSchema = new Schema({
	nome: {
        required: true,
        type: 'string',
        min: 3,
        max: 128
    },
    valor: {
        required: true,
        type: 'number'
    },
    venda_ok: {
        type: 'boolean',
        default: false
    }
});

module.exports = mongoose.model('plano', planoSchema);
