var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var especialidadeSchema = new Schema({
	'nome' : String
});

module.exports = mongoose.model('especialidade', especialidadeSchema);
