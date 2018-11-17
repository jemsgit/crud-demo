const express = require('express');
const {getUsers, getUserById, addUser} = require('../services/users');
let { ENotFound, EPasswordDidntMatch } = require('../services/error');
const withAuth = require('../middlewares/auth');

let router = express.Router();

router.get('/', (req, resp) => {
    resp.send(getUsers())
})

router.get('/:id', (req, res) => {
    let user = getUserById(req.params.id)
    if(!user) {
        throw new ENotFound('user Not found')
    }
    res.send(user);
})

router.post('/', withAuth, (req, res) => {
    let { password, confirmPassword, ...rest } = req.body
    if (password !== confirmPassword) {
        throw new EPasswordDidntMatch('paswords didnt match')
    }
    let result = addUser(rest);
    res.send(result);
})

module.exports = router;