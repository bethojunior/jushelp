var express = require('express');
var router = express.Router();
var relato_pedido_aceiteController = require('../controllers/relato_pedido_aceiteController.js');

/*
 * GET
 */
router.get('/', relato_pedido_aceiteController.list);

/*
 * GET
 */
router.get('/:id', relato_pedido_aceiteController.show);

/*
 * POST
 */
router.post('/', relato_pedido_aceiteController.create);

/*
 * PUT
 */
router.put('/:id', relato_pedido_aceiteController.update);

/*
 * DELETE
 */
router.delete('/:id', relato_pedido_aceiteController.remove);

module.exports = router;
