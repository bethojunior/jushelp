var clienteModel = require('../models/clienteModel.js');

/**
 * clienteController.js
 *
 * @description :: Server-side logic for managing clientes.
 */
module.exports = {

    /**
     * clienteController.list()
     */
    list: function (req, res) {
        clienteModel.find(function (err, clientes) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar cliente.',
                    error: err
                });
            }
            return res.json(clientes);
        });
    },

    /**
     * clienteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        clienteModel.findOne({_id: id}, function (err, cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar cliente.',
                    error: err
                });
            }
            if (!cliente) {
                return res.status(404).json({
                    message: 'Registro não encontrado cliente'
                });
            }
            return res.json(cliente);
        });
    },

    /**
     * clienteController.create()
     */
    create: function (req, res) {
        var cliente = new clienteModel({
			nome : req.body.nome,
			cpf : req.body.cpf,
			rg : req.body.rg,
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

        cliente.save(function (err, cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao criar cliente',
                    error: err
                });
            }
            return res.status(201).json(cliente);
        });
    },

    /**
     * clienteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        clienteModel.findOne({_id: id}, function (err, cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao buscar cliente',
                    error: err
                });
            }
            if (!cliente) {
                return res.status(404).json({
                    message: 'Registro não encontrado cliente'
                });
            }

            cliente.nome = req.body.nome ? req.body.nome : cliente.nome;
			cliente.cpf = req.body.cpf ? req.body.cpf : cliente.cpf;
			cliente.rg = req.body.rg ? req.body.rg : cliente.rg;
			cliente.foto = req.body.foto ? req.body.foto : cliente.foto;
			cliente.email = req.body.email ? req.body.email : cliente.email;
			cliente.data_nasc = req.body.data_nasc ? req.body.data_nasc : cliente.data_nasc;
			cliente.numero = req.body.numero ? req.body.numero : cliente.numero;
			cliente.endereco_cep = req.body.endereco_cep ? req.body.endereco_cep : cliente.endereco_cep;
			cliente.endereco_logradouro = req.body.endereco_logradouro ? req.body.endereco_logradouro : cliente.endereco_logradouro;
			cliente.endereco_bairro = req.body.endereco_bairro ? req.body.endereco_bairro : cliente.endereco_bairro;
			cliente.endereco_numero = req.body.endereco_numero ? req.body.endereco_numero : cliente.endereco_numero;
			cliente.endereco_cidade = req.body.endereco_cidade ? req.body.endereco_cidade : cliente.endereco_cidade;
			cliente.endereco_complemento = req.body.endereco_complemento ? req.body.endereco_complemento : cliente.endereco_complemento;
			cliente.endereco_pt_referencia = req.body.endereco_pt_referencia ? req.body.endereco_pt_referencia : cliente.endereco_pt_referencia;
			
            cliente.save(function (err, cliente) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao editar cliente.',
                        error: err
                    });
                }

                return res.json(cliente);
            });
        });
    },

    /**
     * clienteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        clienteModel.findByIdAndRemove(id, function (err, cliente) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao deletar cliente.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
