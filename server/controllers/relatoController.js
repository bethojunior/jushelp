var relatoModel = require('../models/relatoModel.js');

/**
 * relatoController.js
 *
 * @description :: Server-side logic for managing relatos.
 */
module.exports = {

    /**
     * relatoController.list()
     */
    list: function (req, res) {
        relatoModel.find(function (err, relatos) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar relato.',
                    error: err
                });
            }
            return res.json(relatos);
        });
    },

    /**
     * relatoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        relatoModel.findOne({_id: id}, function (err, relato) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar relato.',
                    error: err
                });
            }
            if (!relato) {
                return res.status(404).json({
                    message: 'Registro não encontrado relato'
                });
            }
            return res.json(relato);
        });
    },

    /**
     * relatoController.create()
     */
    create: function (req, res) {
        var relato = new relatoModel({
			cliente : req.body.cliente,
			texto : req.body.texto,
			url_audio : req.body.url_audio,
			estado : req.body.estado,
			recusadores : req.body.recusadores

        });

        relato.save(function (err, relato) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar relato',
                    error: err
                });
            }
            return res.status(201).json(relato);
        });
    },

    /**
     * relatoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        relatoModel.findOne({_id: id}, function (err, relato) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar relato',
                    error: err
                });
            }
            if (!relato) {
                return res.status(404).json({
                    message: 'Registro não encontrado relato'
                });
            }

            relato.cliente = req.body.cliente ? req.body.cliente : relato.cliente;
			relato.texto = req.body.texto ? req.body.texto : relato.texto;
			relato.url_audio = req.body.url_audio ? req.body.url_audio : relato.url_audio;
			relato.estado = req.body.estado ? req.body.estado : relato.estado;
			relato.recusadores = req.body.recusadores ? req.body.recusadores : relato.recusadores;
			
            relato.save(function (err, relato) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar relato.',
                        error: err
                    });
                }

                return res.json(relato);
            });
        });
    },

    /**
     * relatoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        relatoModel.findByIdAndRemove(id, function (err, relato) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar relato.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
