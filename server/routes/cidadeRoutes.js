var express = require('express');
var router = express.Router();
var cidadeController = require('../controllers/cidadeController.js');

/*
 * GET
 */
router.get('/', cidadeController.list);

/*
 * GET
 */
router.get('/:id', cidadeController.show);

/*
 * POST
 */
router.post('/', cidadeController.create);

/*
 * PUT
 */
router.put('/:id', cidadeController.update);

/*
 * DELETE
 */
router.delete('/:id', cidadeController.remove);

module.exports = router;
