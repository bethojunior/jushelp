var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var auth_clienteSchema = new Schema({
	cliente : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'cliente'
	},
	email: {
        type: 'string',
        min: 3,
        max: 128,
        trim: true,
        index: true,
        unique: true
    },
    senha: {
        type: 'string',
        required: true,
        bcrypt: true
    }
});

module.exports = mongoose.model('auth_cliente', auth_clienteSchema);
