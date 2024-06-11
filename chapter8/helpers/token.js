const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  return jwt.sign(payload, 'lskflasjfdlasjdflansdxlasndflasjndokfjasljasdfja;aojaeruwifihssfsk', { expiresIn: '1h' });
}

const decodeToken = (token) => {
  return jwt.verify(token, 'lskflasjfdlasjdflansdxlasndflasjndokfjasljasdfja;aojaeruwifihssfsk')
}

module.exports = {
  generateToken,
  decodeToken
}