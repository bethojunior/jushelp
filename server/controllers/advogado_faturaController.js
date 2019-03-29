var advogado_faturaModel = require('../models/advogado_faturaModel.js');

/**
 * advogado_faturaController.js
 *
 * @description :: Server-side logic for managing advogado_faturas.
 */
module.exports = {

    /**
     * advogado_faturaController.list()
     */
    list: function (req, res) {
        advogado_faturaModel.find(function (err, advogado_faturas) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar fatura.',
                    error: err
                });
            }
            return res.json(advogado_faturas);
        });
    },

    /**
     * advogado_faturaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        advogado_faturaModel.findOne({_id: id}, function (err, advogado_fatura) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar fatura.',
                    error: err
                });
            }
            if (!advogado_fatura) {
                return res.status(404).json({
                    message: 'Registro não encontrado fatura'
                });
            }
            return res.json(advogado_fatura);
        });
    },

    /**
     * advogado_faturaController.create()
     */
    create: function (req, res) {
        var advogado_fatura = new advogado_faturaModel({
			plano : req.body.plano,
			advogado : req.body.advogado,
			valor : req.body.valor,
			numero : req.body.numero,
			estado : req.body.estado

        });

        advogado_fatura.save(function (err, advogado_fatura) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar fatura',
                    error: err
                });
            }
            return res.status(201).json(advogado_fatura);
        });
    },

    /**
     * advogado_faturaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        advogado_faturaModel.findOne({_id: id}, function (err, advogado_fatura) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar fatura',
                    error: err
                });
            }
            if (!advogado_fatura) {
                return res.status(404).json({
                    message: 'Registro não encontrado fatura'
                });
            }

            advogado_fatura.plano = req.body.plano ? req.body.plano : advogado_fatura.plano;
			advogado_fatura.advogado = req.body.advogado ? req.body.advogado : advogado_fatura.advogado;
			advogado_fatura.valor = req.body.valor ? req.body.valor : advogado_fatura.valor;
			advogado_fatura.numero = req.body.numero ? req.body.numero : advogado_fatura.numero;
			advogado_fatura.estado = req.body.estado ? req.body.estado : advogado_fatura.estado;
			
            advogado_fatura.save(function (err, advogado_fatura) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar fatura.',
                        error: err
                    });
                }

                return res.json(advogado_fatura);
            });
        });
    },

    /**
     * advogado_faturaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        advogado_faturaModel.findByIdAndRemove(id, function (err, advogado_fatura) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar fatura.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
