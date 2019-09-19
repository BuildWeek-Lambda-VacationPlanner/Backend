/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');




module.exports = (req, res, next) => {
   const token = req.headers.authorization;
  

if (token) {
   jwt.verify(token, (err, decodedToken) => {
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