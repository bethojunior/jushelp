var expressJwt = require('express-jwt');
var jwtSecret = process.env.JWT_SECRET || '1234567890asdfghjkl';

module.exports = jwt;

function jwt() {
    return expressJwt({
        secret: jwtSecret
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