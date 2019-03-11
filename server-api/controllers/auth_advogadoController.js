var auth_advogadoModel = require('../models/auth_advogadoModel.js');

/**
 * auth_advogadoController.js
 *
 * @description :: Server-side logic for managing auth_advogados.
 */
module.exports = {

    /**
     * auth_advogadoController.list()
     */
    list: function (req, res) {
        auth_advogadoModel.find(function (err, auth_advogados) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar dados de autenticacao.',
                    error: err
                });
            }
            return res.json(auth_advogados);
        });
    },

    /**
     * auth_advogadoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        auth_advogadoModel.findOne({_id: id}, function (err, auth_advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar dados de autenticacao.',
                    error: err
                });
            }
            if (!auth_advogado) {
                return res.status(404).json({
                    message: 'Registro não encontrado dados de autenticacao'
                });
            }
            return res.json(auth_advogado);
        });
    },

    /**
     * auth_advogadoController.create()
     */
    create: function (req, res) {
        var auth_advogado = new auth_advogadoModel({
			advogado : req.body.advogado,
			email : req.body.email,
			senha : req.body.senha

        });

        auth_advogado.save(function (err, auth_advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar dados de autenticacao',
                    error: err
                });
            }
            return res.status(201).json(auth_advogado);
        });
    },

    /**
     * auth_advogadoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        auth_advogadoModel.findOne({_id: id}, function (err, auth_advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar dados de autenticacao',
                    error: err
                });
            }
            if (!auth_advogado) {
                return res.status(404).json({
                    message: 'Registro não encontrado dados de autenticacao'
                });
            }

            auth_advogado.advogado = req.body.advogado ? req.body.advogado : auth_advogado.advogado;
			auth_advogado.email = req.body.email ? req.body.email : auth_advogado.email;
			auth_advogado.senha = req.body.senha ? req.body.senha : auth_advogado.senha;
			
            auth_advogado.save(function (err, auth_advogado) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar dados de autenticacao.',
                        error: err
                    });
                }

                return res.json(auth_advogado);
            });
        });
    },

    /**
     * auth_advogadoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        auth_advogadoModel.findByIdAndRemove(id, function (err, auth_advogado) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar dados de autenticacao.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
