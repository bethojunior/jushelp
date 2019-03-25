var express = require('express');
var router = express.Router();
var auth_advogadoController = require('../controllers/auth_advogadoController.js');

/**
 * @api {post} /auth/advogado/login Login
 * @apiName Login
 * @apiGroup Auth Advogado
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} email email do advogado
 * @apiParam  {String} password senha do advogado
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *     email : "drteste@teste.com",
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
 *      "nome": "Dr. Teste",
 *      "cpf": "55577799955",
 *      "rg": "123456789",
 *      "carteira_oab": "987654/CE",
 *      "email": "drteste@gmail.com",
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
router.post('/login', auth_advogadoController.login);
/**
 * @api {get} /auth/advogado/info Info
 * @apiName Info
 * @apiGroup Auth Advogado
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
 *      "nome": "Dr. Teste",
 *      "cpf": "55577799955",
 *      "rg": "123456789",
 *      "carteira_oab": "987654/CE",
 *      "email": "drteste@gmail.com",
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
router.get('/info', auth_advogadoController.check);
router.put('/logout', auth_advogadoController.logout);
/**
 * @api {post} /auth/advogado/registrar Registar
 * @apiName Registar
 * @apiGroup Auth Advogado
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam {String} nome Nome do advogado
 * @apiParam {String} cpf Cpf do advogado
 * @apiParam {String} rg Rg do advogado
 * @apiParam {String} carteira_oab Numero da carteira da OAB do advogado
 * @apiParam {String} email Email do advogado
 * @apiParam {Date} data_nasc
 * @apiParam {String} numero
 * @apiParam {Object} endereco Dados do endereco do advogado
 * @apiParam {String} endereco.cep
 * @apiParam {String} endereco.logradouro
 * @apiParam {String} endereco.bairro 
 * @apiParam {String} endereco.numero
 * @apiParam {String} endereco.complemento
 * @apiParam {Number} lat Localizacao atual do advogado
 * @apiParam {Number} lng Localizacao atual do advogado
 * @apiParam {String} senha Senha para o acesso do app
 * 
 * 
 * @apiParamExample  {json} Request-Example:
 * {
 *  "nome": "Dr. Teste",
 *  "cpf": "55577799955",
 *  "rg": "123456789",
 *  "carteira_oab": "987654/CE",
 *  "email": "drteste@gmail.com",
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
 *     msg : "Seja Bem-vindo Dr. Teste"
 * }
 *  
 * 
 */
router.post('/registrar', auth_advogadoController.register);

module.exports = router;
