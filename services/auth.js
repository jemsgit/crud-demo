const { getByEmail } = require('./users');
const { getToken } = require('./jwt');
const { AuthFail } = require('./error');

function login({email, password}) {
    if(!password) {
        throw new AuthFail()
    }

    const user = getByEmail(email);

    if(!user) {
        throw new AuthFail()
    }

    if(password !== user.password) {
        throw new AuthFail()
    }

    return getToken({id: user.id});
}

module.exports = {
    login
}