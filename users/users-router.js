const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Users = require('./users-model.js');
const bcrypt = require('bcryptjs');
const restricted = require('../auth/authenticate-middleware.js')


router.post('/register', (req, res) => {
    let user = req.body;
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
      Users.add(user)
      .then(saved => {
          const token = getJwt(saved)
          console.log(token)
          res.status(201).json(saved)
      })
      .catch(err => {
        console.log(err);
      })
  
  });

  module.exports = router;