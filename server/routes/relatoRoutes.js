var express = require('express');
var router = express.Router();
var relatoController = require('../controllers/relatoController.js');

/*
 * GET
 */
router.get('/', relatoController.list);

/*
 * GET
 */
router.get('/:id', relatoController.show);

/*
 * POST
 */
router.post('/', relatoController.create);

/*
 * PUT
 */
router.put('/:id', relatoController.update);

/*
 * DELETE
 */
router.delete('/:id', relatoController.remove);

module.exports = router;
