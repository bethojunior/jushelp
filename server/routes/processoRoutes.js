var express = require('express');
var router = express.Router();
var processoController = require('../controllers/processoController.js');

/*
 * GET
 */
router.get('/', processoController.list);

/*
 * GET
 */
router.get('/:id', processoController.show);

/*
 * POST
 */
router.post('/', processoController.create);

/*
 * PUT
 */
router.put('/:id', processoController.update);

/*
 * DELETE
 */
router.delete('/:id', processoController.remove);

module.exports = router;
