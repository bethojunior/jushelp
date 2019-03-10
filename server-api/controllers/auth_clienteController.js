var auth_clienteModel = require('../models/auth_clienteModel.js');

/**
 * auth_clienteController.js
 *
 * @description :: Server-side logic for managing auth_clientes.
 */
module.exports = {

    /**
     * auth_clienteController.list()
     */
    list: function (req, res) {
        auth_clienteModel.find(function (err, auth_clientes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting auth_cliente.',
                    error: err
                });
            }
            return res.json(auth_clientes);
        });
    },

    /**
     * auth_clienteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        auth_clienteModel.findOne({_id: id}, function (err, auth_cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting auth_cliente.',
                    error: err
                });
            }
            if (!auth_cliente) {
                return res.status(404).json({
                    message: 'No such auth_cliente'
                });
            }
            return res.json(auth_cliente);
        });
    },

    /**
     * auth_clienteController.create()
     */
    create: function (req, res) {
        var auth_cliente = new auth_clienteModel({
			cliente : req.body.cliente,
			email : req.body.email,
			senha : req.body.senha

        });

        auth_cliente.save(function (err, auth_cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating auth_cliente',
                    error: err
                });
            }
            return res.status(201).json(auth_cliente);
        });
    },

    /**
     * auth_clienteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        auth_clienteModel.findOne({_id: id}, function (err, auth_cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting auth_cliente',
                    error: err
                });
            }
            if (!auth_cliente) {
                return res.status(404).json({
                    message: 'No such auth_cliente'
                });
            }

            auth_cliente.cliente = req.body.cliente ? req.body.cliente : auth_cliente.cliente;
			auth_cliente.email = req.body.email ? req.body.email : auth_cliente.email;
			auth_cliente.senha = req.body.senha ? req.body.senha : auth_cliente.senha;
			
            auth_cliente.save(function (err, auth_cliente) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating auth_cliente.',
                        error: err
                    });
                }

                return res.json(auth_cliente);
            });
        });
    },

    /**
     * auth_clienteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        auth_clienteModel.findByIdAndRemove(id, function (err, auth_cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the auth_cliente.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
