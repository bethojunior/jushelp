var jwt = require('jsonwebtoken');

module.exports = function getUserID(req, callback) {
    if (req.headers['authorization']) {
        var parts = req.headers['authorization'].split(' ');
        var token = parts[1];
        jwt.verify(token, '1234567890asdfghjkl', callback);
    }
};