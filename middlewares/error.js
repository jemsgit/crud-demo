const {ENotFount, EDuplicate, EPasswordDidntMatch, AuthFail, AuthorizationFail} = require('../services/error');

function errorMiddleware(err, req, res, next) {
    if(err instanceof ENotFount) {
        res.sendStatus(404);
        return;
    }
    if(err instanceof EDuplicate || err instanceof EPasswordDidntMatch) {
        res.sendStatus(409);
        return;
    }
    if(err instanceof AuthFail) {
        res.sendStatus(403);
        return;
    }
    if(err instanceof AuthorizationFail) {
        res.sendStatus(401);
        return;
    }
    res.sendStatus(500);
    
    
}

module.exports = errorMiddleware;