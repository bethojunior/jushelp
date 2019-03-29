var jwt = require('jsonwebtoken');
var jwtSecret = process.env.JWT_SECRET || '1234567890asdfghjkl';

module.exports = function getUserID(req, callback) {
    if (req.headers['authorization']) {
        var parts = req.headers['authorization'].split(' ');
        var token = parts[1];
        jwt.verify(token, jwtSecret, callback);
    }
};