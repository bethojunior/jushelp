var especialidadeModel = require('../models/especialidadeModel.js');

/**
 * especialidadeController.js
 *
 * @description :: Server-side logic for managing especialidades.
 */
module.exports = {

    /**
     * especialidadeController.list()
     */
    list: function (req, res) {
        especialidadeModel.find(function (err, especialidades) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar especialidade.',
                    error: err
                });
            }
            return res.json(especialidades);
        });
    },

    /**
     * especialidadeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        especialidadeModel.findOne({_id: id}, function (err, especialidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar especialidade.',
                    error: err
                });
            }
            if (!especialidade) {
                return res.status(404).json({
                    message: 'Registro não encontrado especialidade'
                });
            }
            return res.json(especialidade);
        });
    },

    /**
     * especialidadeController.create()
     */
    create: function (req, res) {
        var especialidade = new especialidadeModel({
			nome : req.body.nome

        });

        especialidade.save(function (err, especialidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar especialidade',
                    error: err
                });
            }
            return res.status(201).json(especialidade);
        });
    },

    /**
     * especialidadeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        especialidadeModel.findOne({_id: id}, function (err, especialidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar especialidade',
                    error: err
                });
            }
            if (!especialidade) {
                return res.status(404).json({
                    message: 'Registro não encontrado especialidade'
                });
            }

            especialidade.nome = req.body.nome ? req.body.nome : especialidade.nome;
			
            especialidade.save(function (err, especialidade) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar especialidade.',
                        error: err
                    });
                }

                return res.json(especialidade);
            });
        });
    },

    /**
     * especialidadeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        especialidadeModel.findByIdAndRemove(id, function (err, especialidade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar especialidade.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
