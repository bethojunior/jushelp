var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var auth_advogadoSchema = new Schema({
	'advogado' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'advogado'
	},
	'email' : String,
	'senha' : String
});

module.exports = mongoose.model('auth_advogado', auth_advogadoSchema);
