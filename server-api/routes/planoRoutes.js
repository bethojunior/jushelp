var express = require('express');
var router = express.Router();
var planoController = require('../controllers/planoController.js');

/*
 * GET
 */
router.get('/', planoController.list);

/*
 * GET
 */
router.get('/:id', planoController.show);

/*
 * POST
 */
router.post('/', planoController.create);

/*
 * PUT
 */
router.put('/:id', planoController.update);

/*
 * DELETE
 */
router.delete('/:id', planoController.remove);

module.exports = router;
