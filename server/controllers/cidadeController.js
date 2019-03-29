var cidadeModel = require('../models/cidadeModel.js');

/**
 * cidadeController.js
 *
 * @description :: Server-side logic for managing cidades.
 */
module.exports = {

    /**
     * cidadeController.list()
     */
    list: function (req, res) {
        cidadeModel.find(function (err, cidades) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar cidade.',
                    error: err
                });
            }
            return res.json(cidades);
        });
    },

    /**
     * cidadeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        cidadeModel.findOne({_id: id}, function (err, cidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar cidade.',
                    error: err
                });
            }
            if (!cidade) {
                return res.status(404).json({
                    message: 'Registro não encontrado cidade'
                });
            }
            return res.json(cidade);
        });
    },

    /**
     * cidadeController.create()
     */
    create: function (req, res) {
        var cidade = new cidadeModel({
			nome : req.body.nome,
			uf : req.body.uf

        });

        cidade.save(function (err, cidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar cidade',
                    error: err
                });
            }
            return res.status(201).json(cidade);
        });
    },

    /**
     * cidadeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        cidadeModel.findOne({_id: id}, function (err, cidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar cidade',
                    error: err
                });
            }
            if (!cidade) {
                return res.status(404).json({
                    message: 'Registro não encontrado cidade'
                });
            }

            cidade.nome = req.body.nome ? req.body.nome : cidade.nome;
			cidade.uf = req.body.uf ? req.body.uf : cidade.uf;
			
            cidade.save(function (err, cidade) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar cidade.',
                        error: err
                    });
                }

                return res.json(cidade);
            });
        });
    },

    /**
     * cidadeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        cidadeModel.findByIdAndRemove(id, function (err, cidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar cidade.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
