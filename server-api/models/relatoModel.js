var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var relatoSchema = new Schema({
	'cliente' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'cliente'
	},
	'texto' : String,
	'url_audio' : String,
	'estado': {
		type: 'string',
		enum: ['Pendente', 'Aceito', 'Recusado'],
		default: 'Pendente'
	},
	'recusadores': [Schema.Types.ObjectId]
});

module.exports = mongoose.model('relato', relatoSchema);
