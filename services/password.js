const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


function getPasswordHash(password) {
    const hash = bcrypt.hashSync(password, salt);
}

module.exports = {
    getPasswordHash
}