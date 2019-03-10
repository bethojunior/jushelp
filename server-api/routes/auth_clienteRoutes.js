var express = require('express');
var router = express.Router();
var auth_clienteController = require('../controllers/auth_clienteController.js');

/*
 * GET
 */
router.get('/', auth_clienteController.list);

/*
 * GET
 */
router.get('/:id', auth_clienteController.show);

/*
 * POST
 */
router.post('/', auth_clienteController.create);

/*
 * PUT
 */
router.put('/:id', auth_clienteController.update);

/*
 * DELETE
 */
router.delete('/:id', auth_clienteController.remove);

module.exports = router;
