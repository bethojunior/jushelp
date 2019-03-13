var advogadoModel = require('../models/advogadoModel.js');
var relato_pedido_aceiteModel = require('../models/relato_pedido_aceiteModel.js');

/**
 * advogadoController.js
 *
 * @description :: Server-side logic for managing advogados.
 */
module.exports = {

    /**
     * advogadoController.list()
     */
    list: function (req, res) {
        advogadoModel.find(function (err, advogados) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar advogado.',
                    error: err
                });
            }
            return res.json(advogados);
        });
    },

    /**
     * advogadoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        advogadoModel.findOne({_id: id}, function (err, advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar advogado.',
                    error: err
                });
            }
            if (!advogado) {
                return res.status(404).json({
                    message: 'Registro não encontrado advogado'
                });
            }
            return res.json(advogado);
        });
    },

    /**
     * advogadoController.buscarRelatos()
     */
    buscarRelatos: function (req, res) {
        var id = req.params.id;
        relato_pedido_aceiteModel.find({advogado: id}).populate('relato').exec(function (err, relatos) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar relatos.',
                    error: err
                });
            }
            if (!relatos) {
                return res.status(404).json({
                    message: 'Registro não encontrado relatos'
                });
            }
            return res.json(relatos);
        });
    },

    /**
     * advogadoController.create()
     */
    create: function (req, res) {
        var advogado = new advogadoModel({
			nome : req.body.nome,
			cpf : req.body.cpf,
			rg : req.body.rg,
			carteira_oab : req.body.carteira_oab,
			foto : req.body.foto,
			email : req.body.email,
			data_nasc : req.body.data_nasc,
			numero : req.body.numero,
			endereco_cep : req.body.endereco_cep,
			endereco_logradouro : req.body.endereco_logradouro,
			endereco_bairro : req.body.endereco_bairro,
			endereco_numero : req.body.endereco_numero,
			endereco_cidade : req.body.endereco_cidade,
			endereco_complemento : req.body.endereco_complemento,
			endereco_pt_referencia : req.body.endereco_pt_referencia

        });

        advogado.save(function (err, advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar advogado',
                    error: err
                });
            }
            return res.status(201).json(advogado);
        });
    },

    /**
     * advogadoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        advogadoModel.findOne({_id: id}, function (err, advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar advogado',
                    error: err
                });
            }
            if (!advogado) {
                return res.status(404).json({
                    message: 'Registro não encontrado advogado'
                });
            }

            advogado.nome = req.body.nome ? req.body.nome : advogado.nome;
			advogado.cpf = req.body.cpf ? req.body.cpf : advogado.cpf;
			advogado.rg = req.body.rg ? req.body.rg : advogado.rg;
			advogado.carteira_oab = req.body.carteira_oab ? req.body.carteira_oab : advogado.carteira_oab;
			advogado.foto = req.body.foto ? req.body.foto : advogado.foto;
			advogado.email = req.body.email ? req.body.email : advogado.email;
			advogado.data_nasc = req.body.data_nasc ? req.body.data_nasc : advogado.data_nasc;
			advogado.numero = req.body.numero ? req.body.numero : advogado.numero;
			advogado.endereco_cep = req.body.endereco_cep ? req.body.endereco_cep : advogado.endereco_cep;
			advogado.endereco_logradouro = req.body.endereco_logradouro ? req.body.endereco_logradouro : advogado.endereco_logradouro;
			advogado.endereco_bairro = req.body.endereco_bairro ? req.body.endereco_bairro : advogado.endereco_bairro;
			advogado.endereco_numero = req.body.endereco_numero ? req.body.endereco_numero : advogado.endereco_numero;
			advogado.endereco_cidade = req.body.endereco_cidade ? req.body.endereco_cidade : advogado.endereco_cidade;
			advogado.endereco_complemento = req.body.endereco_complemento ? req.body.endereco_complemento : advogado.endereco_complemento;
			advogado.endereco_pt_referencia = req.body.endereco_pt_referencia ? req.body.endereco_pt_referencia : advogado.endereco_pt_referencia;
			
            advogado.save(function (err, advogado) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar advogado.',
                        error: err
                    });
                }

                return res.json(advogado);
            });
        });
    },

    /**
     * advogadoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        advogadoModel.findByIdAndRemove(id, function (err, advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar advogado.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
