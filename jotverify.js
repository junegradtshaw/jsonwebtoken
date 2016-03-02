var jwt = require('jsonwebtoken')

var payload = {id: 0};
var secret = 'galvanize_rocks!';
var options= {};
var rootToken;

// jwt.sign(payload, secret, options, getToken)
//
// function getToken(rootToken) {
//   console.log(rootToken);

  jwt.verify('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkcmVhbXMiOiJmbHVpZCBhbmQgcHJvZ3JhbW1hYmxlIiwiaWF0IjoxNDU2ODcxOTI3fQ.f5MM42bpBtG3EllWfad9lzfPKAK0mG8SXfhOiYzgBrY', 'galvanize_rocks!', options, verifyToken);

  function verifyToken(err, decoded) {
    console.log(decoded);
  }
// }
