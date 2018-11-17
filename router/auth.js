const express = require('express');
const { login } = require('../services/auth');
const router = express.Router();

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    console.log('e', email, password)
    const token = login({email, password});
    console.log('again')
    res.send({token})
})

module.exports = router;