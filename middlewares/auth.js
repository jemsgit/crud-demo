const {AuthorizationFail} = require('../services/error');
const { getUserById} = require('../services/users')
module.exports = (req, res, next) => {
    const user = req.user;
    if(!user || !user.id) {
        throw new AuthorizationFail();

    }
    if(!getUserById(user.id)){
        throw new AuthorizationFail();
    }
    next();
}