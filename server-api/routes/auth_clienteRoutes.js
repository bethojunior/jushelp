var express = require('express');
var router = express.Router();
var auth_clienteController = require('../controllers/auth_clienteController.js');

/**
 * @api {post} /auth/cliente/login Login
 * @apiName Login
 * @apiGroup Auth Cliente
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} email email do cliente
 * @apiParam  {String} password senha do cliente
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *     email : "usuarioteste@teste.com",
 *     password : "teste123"
 * }
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *      "localizacao": {
 *         "coordinates": [
 *              -5.20192,
 *              -37.3697527
 *          ],
 *          "type": "Point"
 *      },
 *      "_id": "5c98372fd136eb25a60902c2",
 *      "nome": "Usuario Teste",
 *      "cpf": "55577799955",
 *      "rg": "123456789",
 *      "email": "teste@gmail.com",
 *      "data_nasc": "1996-09-25T00:00:00.000Z",
 *      "numero": "88988887777",
 *      "endereco_cep": "63000-000",
 *      "endereco_logradouro": "R. Teste",
 *      "endereco_bairro": "Centro",
 *      "endereco_numero": "316",
 *      "endereco_complemento": "Residencial",
 * }
 *  
 * 
 */
router.post('/login', auth_clienteController.login);
/**
 * @api {get} /auth/cliente/info Info
 * @apiName Info
 * @apiGroup Auth Cliente
 * @apiVersion  1.0.0
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *      "localizacao": {
 *         "coordinates": [
 *              -5.20192,
 *              -37.3697527
 *          ],
 *          "type": "Point"
 *      },
 *      "_id": "5c98372fd136eb25a60902c2",
 *      "nome": "Usuario Teste",
 *      "cpf": "55577799955",
 *      "rg": "123456789",
 *      "email": "teste@gmail.com",
 *      "data_nasc": "1996-09-25T00:00:00.000Z",
 *      "numero": "88988887777",
 *      "endereco_cep": "63000-000",
 *      "endereco_logradouro": "R. Teste",
 *      "endereco_bairro": "Centro",
 *      "endereco_numero": "316",
 *      "endereco_complemento": "Residencial",
 * }
 *  
 * 
 */
router.get('/info', auth_clienteController.check);
router.put('/logout', auth_clienteController.logout);
/**
 * @api {post} /auth/cliente/registrar Registar
 * @apiName Registar
 * @apiGroup Auth Cliente
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam {String} nome Nome do cliente
 * @apiParam {String} cpf Cpf do cliente
 * @apiParam {String} rg Rg do cliente
 * @apiParam {String} email Email do cliente
 * @apiParam {Date} data_nasc
 * @apiParam {String} numero
 * @apiParam {Object} endereco Dados do endereco do cliente
 * @apiParam {String} endereco.cep
 * @apiParam {String} endereco.logradouro
 * @apiParam {String} endereco.bairro 
 * @apiParam {String} endereco.numero
 * @apiParam {String} endereco.complemento
 * @apiParam {Number} lat Localizacao atual do cliente
 * @apiParam {Number} lng Localizacao atual do cliente
 * @apiParam {String} senha Senha para o acesso do app
 * 
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *  "nome": "Usuario Teste",
 *  "cpf": "55577799955",
 *  "rg": "123456789",
 *  "email": "teste@gmail.com",
 *  "data_nasc": "1996-09-25",
 *  "numero": "88977778888",
 *  "endereco": {
 *      "cep": "63000-000",
 *      "logradouro": "R. Teste",
 *      "bairro": "Centro",
 *      "numero": "316",
 *      "complemento": "Residencial"
 *  },
 *  "lat": -5.20192,
 *  "lng": -37.3697527,
 *  "senha": "123456"
 * }
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     msg : "Seja Bem-vindo Usuario Teste"
 * }
 *  
 * 
 */
router.post('/registrar', auth_clienteController.register);

module.exports = router;
