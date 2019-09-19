const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/authenticate-middleware.js');
const UserRouter = require('./users/users-router.js');
const VacationRouter = require('./vacations/vacation-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', UserRouter);
server.use('/api/vacations', VacationRouter);

module.exports = server;
