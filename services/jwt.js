const jwt = require('jsonwebtoken');

const jwtKey = 'passKey';

function getToken(data) {
    return jwt.sign(data, jwtKey);
}

module.exports = {
    getToken,
    jwtKey
}
