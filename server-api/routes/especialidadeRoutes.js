var express = require('express');
var router = express.Router();
var especialidadeController = require('../controllers/especialidadeController.js');

/*
 * GET
 */
router.get('/', especialidadeController.list);

/*
 * GET
 */
router.get('/:id', especialidadeController.show);

/*
 * POST
 */
router.post('/', especialidadeController.create);

/*
 * PUT
 */
router.put('/:id', especialidadeController.update);

/*
 * DELETE
 */
router.delete('/:id', especialidadeController.remove);

module.exports = router;
