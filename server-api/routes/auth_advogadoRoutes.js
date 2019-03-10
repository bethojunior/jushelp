var express = require('express');
var router = express.Router();
var auth_advogadoController = require('../controllers/auth_advogadoController.js');

/*
 * GET
 */
router.get('/', auth_advogadoController.list);

/*
 * GET
 */
router.get('/:id', auth_advogadoController.show);

/*
 * POST
 */
router.post('/', auth_advogadoController.create);

/*
 * PUT
 */
router.put('/:id', auth_advogadoController.update);

/*
 * DELETE
 */
router.delete('/:id', auth_advogadoController.remove);

module.exports = router;
