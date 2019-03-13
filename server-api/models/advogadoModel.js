var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var advogadoSchema = new Schema({
	nome: {
        required: true,
        type: 'string',
        min: 3,
        max: 128,
        trim: true
    },
    cpf: {
        required: true,
        type: 'string',
        min: 14,
        max: 14,
        unique: true
    },
    rg: {
        required: true,
        type: 'string',
        unique: true
    },
    carteira_oab: {
        required: true,
        type: 'string',
        unique: true
    },
    foto: {
        type: 'string',
        max: 255
    },
    email: {
        required: true,
        type: 'string',
        min: 3,
        max: 128,
        trim: true,
        index: true,
        unique: true
    },
    data_nasc: {
        type: 'date',
        required: true
    },
    numero: {
        required: true,
        type: 'string',
        min: 11,
        max: 11
    },
	endereco_cep: {
		required: true,
		type: 'string',
		min: 9,
		max: 9
	},
	endereco_logradouro: {
		required: true,
		type: 'string',
		min: 3,
		max: 128
	},
	endereco_bairro: {
		required: true,
		type: 'string',
		min: 3,
		max: 128
	},
	endereco_numero: {
		required: true,
		type: 'string',
		min: 1,
		max: 5
	},
	endereco_cidade: {
		type: Schema.Types.ObjectId,
		ref: 'cidade'
	},
	endereco_complemento: {
		required: true,
		type: 'string',
		min: 3,
		max: 128
	},
	endereco_pt_referencia: {
		type: 'string',
		min: 3,
		max: 128
	},
	localizacao: {
		type: {
			type: String
		},
		coordinates: [Number],
	}
});

module.exports = mongoose.model('advogado', advogadoSchema);
