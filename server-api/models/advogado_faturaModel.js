var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var advogado_faturaSchema = new Schema({
	'plano' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'plano'
	},
	'advogado' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'advogado'
	},
	'valor' : Number,
	'numero' : Number,
	'estado': {
		type: 'string',
		enum: ['Aguardando_pagamento', 'Paga', 'Cancelado', 'Devolvida'],
		default: 'Aguardando_pagamento'
	}
});

module.exports = mongoose.model('advogado_fatura', advogado_faturaSchema);
