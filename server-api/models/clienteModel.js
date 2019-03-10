var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var clienteSchema = new Schema({
	'nome' : String,
	'cpf' : String,
	'rg' : String,
	'foto' : String,
	'email' : String,
	'data_nasc' : Date,
	'numero' : String,
	'endereco_cep' : String,
	'endereco_logradouro' : String,
	'endereco_bairro' : String,
	'endereco_numero' : String,
	'endereco_cidade' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'cidade'
	},
	'endereco_complemento' : String,
	'endereco_pt_referencia' : String
});

module.exports = mongoose.model('cliente', clienteSchema);
