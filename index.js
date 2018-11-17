const express = require('express');
const userRouter = require('./router/users')
const app = express();

app.use('/users', userRouter)

app.listen(3002, () => {
    console.log('heress')
})