var planoModel = require('../models/planoModel.js');

/**
 * planoController.js
 *
 * @description :: Server-side logic for managing planos.
 */
module.exports = {

    /**
     * planoController.list()
     */
    list: function (req, res) {
        planoModel.find(function (err, planos) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar plano.',
                    error: err
                });
            }
            return res.json(planos);
        });
    },

    /**
     * planoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        planoModel.findOne({_id: id}, function (err, plano) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar plano.',
                    error: err
                });
            }
            if (!plano) {
                return res.status(404).json({
                    message: 'Registro não encontrado plano'
                });
            }
            return res.json(plano);
        });
    },

    /**
     * planoController.create()
     */
    create: function (req, res) {
        var plano = new planoModel({
			nome : req.body.nome,
			valor : req.body.valor,
			venda_ok : req.body.venda_ok

        });

        plano.save(function (err, plano) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar plano',
                    error: err
                });
            }
            return res.status(201).json(plano);
        });
    },

    /**
     * planoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        planoModel.findOne({_id: id}, function (err, plano) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar plano',
                    error: err
                });
            }
            if (!plano) {
                return res.status(404).json({
                    message: 'Registro não encontrado plano'
                });
            }

            plano.nome = req.body.nome ? req.body.nome : plano.nome;
			plano.valor = req.body.valor ? req.body.valor : plano.valor;
			plano.venda_ok = req.body.venda_ok ? req.body.venda_ok : plano.venda_ok;
			
            plano.save(function (err, plano) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar plano.',
                        error: err
                    });
                }

                return res.json(plano);
            });
        });
    },

    /**
     * planoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        planoModel.findByIdAndRemove(id, function (err, plano) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar plano.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
