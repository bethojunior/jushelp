var processoModel = require('../models/processoModel.js');

/**
 * processoController.js
 *
 * @description :: Server-side logic for managing processos.
 */
module.exports = {

    /**
     * processoController.list()
     */
    list: function (req, res) {
        processoModel.find(function (err, processos) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar processo.',
                    error: err
                });
            }
            return res.json(processos);
        });
    },

    /**
     * processoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        processoModel.findOne({_id: id}, function (err, processo) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar processo.',
                    error: err
                });
            }
            if (!processo) {
                return res.status(404).json({
                    message: 'Registro não encontrado processo'
                });
            }
            return res.json(processo);
        });
    },

    /**
     * processoController.create()
     */
    create: function (req, res) {
        var processo = new processoModel({
			cliente : req.body.cliente,
			relato : req.body.relato,
			advogado : req.body.advogado,
			numero_processo_interno : req.body.numero_processo_interno,
			estado : req.body.estado

        });

        processo.save(function (err, processo) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar processo',
                    error: err
                });
            }
            return res.status(201).json(processo);
        });
    },

    /**
     * processoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        processoModel.findOne({_id: id}, function (err, processo) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar processo',
                    error: err
                });
            }
            if (!processo) {
                return res.status(404).json({
                    message: 'Registro não encontrado processo'
                });
            }

            processo.cliente = req.body.cliente ? req.body.cliente : processo.cliente;
			processo.relato = req.body.relato ? req.body.relato : processo.relato;
			processo.advogado = req.body.advogado ? req.body.advogado : processo.advogado;
			processo.numero_processo_interno = req.body.numero_processo_interno ? req.body.numero_processo_interno : processo.numero_processo_interno;
			processo.estado = req.body.estado ? req.body.estado : processo.estado;
			
            processo.save(function (err, processo) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar processo.',
                        error: err
                    });
                }

                return res.json(processo);
            });
        });
    },

    /**
     * processoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        processoModel.findByIdAndRemove(id, function (err, processo) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar processo.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
