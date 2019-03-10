var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var auth_clienteSchema = new Schema({
	'cliente' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'cliente'
	},
	'email' : String,
	'senha' : String
});

module.exports = mongoose.model('auth_cliente', auth_clienteSchema);
