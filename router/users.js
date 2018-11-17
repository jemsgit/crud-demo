const express = require('express');
const {getUsers, getUserById} = require('../services/users')
let router = express.Router();

router.get('/', (req, resp) => {
    resp.send(getUsers())
})

router.get('/:id', (req, res) => {
    res.send(getUserById(req.params.id))
})

module.exports = router;