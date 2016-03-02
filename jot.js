var jwt = require('jsonwebtoken')

var payload = {id: 0};
var secret = 'galvanize_rocks!';
var options= {};
var rootToken;

jwt.sign(payload, secret, options, getToken)

function getToken(rootToken) {
  console.log(rootToken);

  jwt.verify(rootToken, secret, options, verifyToken);

  function verifyToken(err, decoded) {
    console.log(decoded);
  }
}
