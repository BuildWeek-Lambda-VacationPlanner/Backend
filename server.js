const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const Users = require('./users/users-model.js');
const authenticate = require('./auth/authenticate-middleware.js');
const UserRouter = require('./users/users-router.js');
const VacationRouter = require('./vacations/vacation-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', UserRouter);
server.use('/api/vacations', VacationRouter);

server.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err =>
        console.log(err))

})

module.exports = server;
