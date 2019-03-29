var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/clienteController.js');

/*
 * GET
 */
router.get('/', clienteController.list);

/*
 * GET
 */
router.get('/:id', clienteController.show);

/*
 * POST
 */
router.post('/', clienteController.create);

/*
 * PUT
 */
router.put('/:id', clienteController.update);

/*
 * DELETE
 */
router.delete('/:id', clienteController.remove);

module.exports = router;
