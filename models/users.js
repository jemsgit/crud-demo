const { getPasswordHash } = require('../services/password');

const users = [
    {
        id:'1',
        name: 'ted',
        password: getPasswordHash('123'),
        email: '2e3242@FSDF.com'
    },{
        id:'2',
        name: 'din',
        password: getPasswordHash('234'),
        email: 'cvcvdvdv.com'
    }
]

module.exports = users;