var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var processoSchema = new Schema({
	'cliente' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'cliente'
	},
	'relato' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'relato'
	},
	'advogado' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'advogado'
	},
	'numero_processo_interno' : String,
	'estado': {
		type: 'string',
		enum: ['Pendente', 'Ganho', 'Perdido'],
		default: 'Pendente'
	}
});

module.exports = mongoose.model('processo', processoSchema);
