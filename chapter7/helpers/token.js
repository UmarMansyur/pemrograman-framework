const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  return jwt.sign(payload, 'riyan', { expiresIn: '1h' });
}

const decodeToken = (token) => {
  return jwt.verify(token, 'riyan')
}

module.exports = {
  generateToken,
  decodeToken
}