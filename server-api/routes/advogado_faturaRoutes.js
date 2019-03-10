var express = require('express');
var router = express.Router();
var advogado_faturaController = require('../controllers/advogado_faturaController.js');

/*
 * GET
 */
router.get('/', advogado_faturaController.list);

/*
 * GET
 */
router.get('/:id', advogado_faturaController.show);

/*
 * POST
 */
router.post('/', advogado_faturaController.create);

/*
 * PUT
 */
router.put('/:id', advogado_faturaController.update);

/*
 * DELETE
 */
router.delete('/:id', advogado_faturaController.remove);

module.exports = router;
