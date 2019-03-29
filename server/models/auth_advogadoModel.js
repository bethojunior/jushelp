var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var auth_advogadoSchema = new Schema({
	advogado : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'advogado'
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

module.exports = mongoose.model('auth_advogado', auth_advogadoSchema);
