var auth_advogadoModel = require('../models/auth_advogadoModel.js');
var advogadoModel = require('../models/advogadoModel.js');

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var getUserID = require('../helpers/get-user-id');

module.exports = {
    login: function (req, res, next) {
        if (req.body.email === undefined || req.body.senha === undefined) {
            throw ('Dados de autenticacao nao encontrados!');
        }

        auth_advogadoModel.findOne({
            email: req.body.email
        }).populate('advogado').exec(function (err, data) {
            if (err) {
                return next(err);
            };

            if (data == null) {
                return next('E-Mail ou senha invalida!');
            }

            bcrypt.compare(req.body.senha, data.senha, function (err, result) {
                if (err) {
                    return next('E-Mail ou senha invalida!');
                }
                if (result) {
                    var token = jwt.sign({
                        id: data.advogado._id
                    }, '1234567890asdfghjkl', {
                        expiresIn: 3000
                    });

                    var retorno = {
                        token: token,
                        ...data.advogado._doc
                    };

                    return res.status(200).json(retorno);
                }
                return res.status(401).json({
                    msg: 'E-Mail ou senha invalida!'
                });
            });
        });
    },

    logout: function (req, res, next) {
        res.status(204).json({
            msg: 'Logout feito com sucesso!'
        });
    },

    check: function (req, res, next) {
        getUserID(req, function (err, data) {
            if (err) return next(err);
            if (!data || !data.id) return new Error('UnauthorizedError');
            advogadoModel.findById(data.id).populate('endereco_cidade').exec(function (erradvogado, advogado) {
                if (erradvogado) return next(erradvogado);
                if (!advogado) return next('Usuário não encontrado');

                res.status(200).json(advogado);
            })
        });
    },

    register: function (req, res, next) {
        if (req.body.email === undefined || req.body.senha === undefined) {
            throw ('Dados de autenticacao nao encontrados!');
        }

        bcrypt.hash(req.body.senha, 10, function (err, hash) {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                var dados = {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    rg: req.body.rg,
                    carteira_oab: req.body.carteira_oab,
                    email: req.body.email,
                    data_nasc: req.body.data_nasc,
                    numero: req.body.numero,
                    endereco_cep: req.body.endereco.cep,
                    endereco_logradouro: req.body.endereco.logradouro,
                    endereco_bairro: req.body.endereco.bairro,
                    endereco_numero: req.body.endereco.numero,
                    endereco_complemento: req.body.endereco.complemento,
                    endereco_pt_referencia: req.body.endereco.pt_referencia
                };

                if (req.body.lat !== undefined && req.body.lng !== undefined) {
                    dados['localizacao'] = {
                        type: 'Point',
                        coordinates: [req.body.lat, req.body.lng]
                    };
                }

                mongoose.startSession().then(function (session) {
                    session.startTransaction();
                    var advogado = new advogadoModel(dados);

                    advogado.save(function (err) {
                        if (err) {
                            session.abortTransaction();
                            return next(err)
                        };

                        var authRegister = new auth_advogadoModel({
                            email: req.body.email,
                            senha: hash,
                            advogado: advogado._id
                        });

                        authRegister.save(function (err) {
                            if (err) {
                                session.abortTransaction();
                                return next(err)
                            };

                            session.commitTransaction();
                            res.status(201).json({
                                msg: 'Seja Bem-vindo ' + req.body.nome
                            });
                        });
                    });
                });
            }
        });
    }
};
