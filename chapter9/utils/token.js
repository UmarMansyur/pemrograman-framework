const jwt = require('jsonwebtoken');
const generateToken = (user) => {
  return jwt.sign(user, 'asfadfasdfasdfasdfas', { expiresIn: '1h'})
}

const decodeToken = (user) => {
  console.log(user);
  return jwt.verify(user, 'asfadfasdfasdfasdfas')
}

module.exports = {
  generateToken,
  decodeToken
}