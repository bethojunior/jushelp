var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var relato_pedido_aceiteSchema = new Schema({
	cliente : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'cliente'
	},
	relato : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'relato'
	},
	advogado : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'advogado'
	}
});

module.exports = mongoose.model('relato_pedido_aceite', relato_pedido_aceiteSchema);
