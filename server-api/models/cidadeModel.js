var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var cidadeSchema = new Schema({
	nome: {
        required: true,
        type: 'string',
        min: 3,
        max: 128
    },
    uf: {
        required: true,
        type: 'string',
        min: 2,
        max: 2
    }
});

module.exports = mongoose.model('cidade', cidadeSchema);
