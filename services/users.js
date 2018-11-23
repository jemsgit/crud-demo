let users = require('../models/users');
let { EDuplicate } = require('../services/error');
const { getPasswordHash } = require('../services/password');
const uuid = require('uuid/v4');

function getUsers() {
    return users;
}

function getUserById(userId) {
    return users.find(({id}) => id === userId);
}

function getByEmail(userEmail) {
    return users.find(({email}) => email === userEmail);
}

function addUser(userParams) {
    let user = users.find(user => user.email === userParams.email);
    if(user) {
        throw new EDuplicate('user exists')
    }

    let newUser = {
        ...userParams,
        password: getPasswordHash(userParams.password),
        id: uuid()
    }

    users.push(newUser);

    return newUser;
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    getByEmail
}