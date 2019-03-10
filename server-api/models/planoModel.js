var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var planoSchema = new Schema({
	'nome' : String,
	'valor' : Number,
	'venda_ok' : Boolean
});

module.exports = mongoose.model('plano', planoSchema);
