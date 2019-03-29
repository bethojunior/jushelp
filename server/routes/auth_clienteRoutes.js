var express = require('express');
var router = express.Router();
var auth_clienteController = require('../controllers/auth_clienteController.js');

router.post('/login', auth_clienteController.login);
router.get('/info', auth_clienteController.check);
router.put('/logout', auth_clienteController.logout);
router.post('/registrar', auth_clienteController.register);

module.exports = router;
