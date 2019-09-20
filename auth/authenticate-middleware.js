const secrets = require('../config/secrets.js');


const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {
   const token = req.headers.authorization;
  

if (token) {
   jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if(err) {
         console.log(err);
         //token is invalid
         res.status(401).json({ you: 'shall not pass'})
      } else {
         req.user = { username: decodedToken.username};
       next();
      }
   })
} else {
   res.status(400).json({
      message: "no token provided"
   })
}
};