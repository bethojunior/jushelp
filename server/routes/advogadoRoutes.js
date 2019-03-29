var express = require('express');
var router = express.Router();
var advogadoController = require('../controllers/advogadoController.js');

/*
 * GET
 */
router.get('/', advogadoController.list);

/*
 * GET
 */
router.get('/:id', advogadoController.show);

/*
 * GET
 */
router.get('/:id/relatos', advogadoController.buscarRelatos);

/*
 * POST
 */
router.post('/', advogadoController.create);

/*
 * PUT
 */
router.put('/:id', advogadoController.update);

/*
 * DELETE
 */
router.delete('/:id', advogadoController.remove);

module.exports = router;
