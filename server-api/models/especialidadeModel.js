var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var especialidadeSchema = new Schema({
	nome: {
		required: true,
		type: 'string',
		min: 3,
		max: 128
	}
});

module.exports = mongoose.model('especialidade', especialidadeSchema);
