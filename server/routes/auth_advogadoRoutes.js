var express = require('express');
var router = express.Router();
var auth_advogadoController = require('../controllers/auth_advogadoController.js');

router.post('/login', auth_advogadoController.login);
router.get('/info', auth_advogadoController.check);
router.put('/logout', auth_advogadoController.logout);
router.post('/registrar', auth_advogadoController.register);

module.exports = router;
