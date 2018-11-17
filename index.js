const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/users');
const authRouter = require('./router/auth');
const errorMiddleware = require('./middlewares/error');
const jwtMiddleware = require('./middlewares/jwt');
const app = express();

app.use(bodyParser.json());
app.use(jwtMiddleware);
app.use('/auth', authRouter);
app.use('/users', userRouter);

app.use(errorMiddleware);

app.listen(3002, () => {
    console.log('listen')
})