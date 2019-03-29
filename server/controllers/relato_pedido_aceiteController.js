var relato_pedido_aceiteModel = require('../models/relato_pedido_aceiteModel.js');

/**
 * relato_pedido_aceiteController.js
 *
 * @description :: Server-side logic for managing relato_pedido_aceites.
 */
module.exports = {

    /**
     * relato_pedido_aceiteController.list()
     */
    list: function (req, res) {
        relato_pedido_aceiteModel.find(function (err, relato_pedido_aceites) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar o pedido de aceite do relato.',
                    error: err
                });
            }
            return res.json(relato_pedido_aceites);
        });
    },

    /**
     * relato_pedido_aceiteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        relato_pedido_aceiteModel.findOne({_id: id}, function (err, relato_pedido_aceite) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar o pedido de aceite do relato.',
                    error: err
                });
            }
            if (!relato_pedido_aceite) {
                return res.status(404).json({
                    message: 'Registro não encontrado o pedido de aceite do relato'
                });
            }
            return res.json(relato_pedido_aceite);
        });
    },

    /**
     * relato_pedido_aceiteController.create()
     */
    create: function (req, res) {
        var relato_pedido_aceite = new relato_pedido_aceiteModel({
			cliente : req.body.cliente,
			relato : req.body.relato,
			advogado : req.body.advogado

        });

        relato_pedido_aceite.save(function (err, relato_pedido_aceite) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar o pedido de aceite do relato',
                    error: err
                });
            }
            return res.status(201).json(relato_pedido_aceite);
        });
    },

    /**
     * relato_pedido_aceiteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        relato_pedido_aceiteModel.findOne({_id: id}, function (err, relato_pedido_aceite) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar o pedido de aceite do relato',
                    error: err
                });
            }
            if (!relato_pedido_aceite) {
                return res.status(404).json({
                    message: 'Registro não encontrado o pedido de aceite do relato'
                });
            }

            relato_pedido_aceite.cliente = req.body.cliente ? req.body.cliente : relato_pedido_aceite.cliente;
			relato_pedido_aceite.relato = req.body.relato ? req.body.relato : relato_pedido_aceite.relato;
			relato_pedido_aceite.advogado = req.body.advogado ? req.body.advogado : relato_pedido_aceite.advogado;
			
            relato_pedido_aceite.save(function (err, relato_pedido_aceite) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar o pedido de aceite do relato.',
                        error: err
                    });
                }

                return res.json(relato_pedido_aceite);
            });
        });
    },

    /**
     * relato_pedido_aceiteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        relato_pedido_aceiteModel.findByIdAndRemove(id, function (err, relato_pedido_aceite) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar o pedido de aceite do relato.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
