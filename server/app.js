var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var jwt = require('./helpers/jwt');
var mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/jushelp-v2';

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    server: {
        poolSize: 20
    }
});

var app = express();

var advogado_faturaRoutes = require('./routes/advogado_faturaRoutes');
var advogadoRoutes = require('./routes/advogadoRoutes');
var cidadeRoutes = require('./routes/cidadeRoutes');
var clienteRoutes = require('./routes/clienteRoutes');
var especialidadeRoutes = require('./routes/especialidadeRoutes');
var planoRoutes = require('./routes/planoRoutes');
var processoRoutes = require('./routes/processoRoutes');
var relato_pedido_aceiteRoutes = require('./routes/relato_pedido_aceiteRoutes');
var relatoRoutes = require('./routes/relatoRoutes');
var authCliente = require('./routes/auth_clienteRoutes');
var authAdvogado = require('./routes/auth_advogadoRoutes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(jwt());

app.use('/advogado_fatura', advogado_faturaRoutes);
app.use('/advogado', advogadoRoutes);
app.use('/cidade', cidadeRoutes);
app.use('/cliente', clienteRoutes);
app.use('/especialidade', especialidadeRoutes);
app.use('/plano', planoRoutes);
app.use('/processo', processoRoutes);
app.use('/relato_pedido_aceite', relato_pedido_aceiteRoutes);
app.use('/relato', relatoRoutes);

app.use('/auth/cliente', authCliente);
app.use('/auth/advogado', authAdvogado);

module.exports = app;
