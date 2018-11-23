const express = require('express');
const { login } = require('../services/auth');
const router = express.Router();

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    const token = login({email, password});
    res.send({token})
})

module.exports = router;