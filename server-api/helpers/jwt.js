var expressJwt = require('express-jwt');

module.exports = jwt;

function jwt() {
    return expressJwt({
        secret: '1234567890asdfghjkl'
    }).unless({
        path: [
            // public routes that don't require authentication
            '/auth/cliente/registrar',
            '/auth/cliente/login',
            '/auth/advogado/registrar',
            '/auth/advogado/login'
        ]
    });
}