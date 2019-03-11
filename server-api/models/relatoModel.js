var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var relatoSchema = new Schema({
	cliente : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'cliente'
	},
	texto: {
        type: 'string',
        min: 3,
        max: 255
    },
    url_audio: {
        type: 'string',
        max: 255
    },
	estado: {
		type: 'string',
		enum: ['Pendente', 'Aceito', 'Recusado'],
		default: 'Pendente'
	},
	recusadores: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('relato', relatoSchema);
