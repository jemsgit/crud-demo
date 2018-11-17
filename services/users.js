let users = require('../models/users');

function getUsers() {
    return users;
}

function getUserById(id) {
    console.log(users.find(({id}) => id === id))
    return users.find(({id}) => id === id);
}

module.exports = {
    getUsers,
    getUserById
}