const bcrypt = require('bcryptjs');
const salt = bcrypt.getSaltSync(10);


function getPasswordHash(password) {
    const hash = bcrypt.hashSync(password, salt);
}

exports.module = {
    getPasswordHash
}