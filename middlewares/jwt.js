const jwt = require('express-jwt');
const {jwtKey} = require('../services/jwt');

module.exports = jwt({
    secret: jwtKey,
    credentialsRequired: false,
    getToken: (req) => {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { //Authorization Bearer {token}
          return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
  })