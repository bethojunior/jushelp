var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var cidadeSchema = new Schema({
	'nome' : String,
	'uf' : String
});

module.exports = mongoose.model('cidade', cidadeSchema);
