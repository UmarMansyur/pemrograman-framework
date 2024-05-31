const router = require('express').Router();
const bcrypt = require('bcrypt');
const { generateToken, decodeToken } = require('../helpers/token');


router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'welcome to my api'
  });
});

router.post('/login', async (req, res, next) => {
  try {
    const usernya = 'umar';
    const passwordnya = bcrypt.hashSync('123', 10);
    const { username, password } = req.body;
    if (usernya == username && bcrypt.compareSync(password, passwordnya)) {
      return res.json({
        status: true,
        message: 'anda berhasil login',
        data: generateToken({
          username
        })
      });
    }
    return res.json({
      status: false,
      message: 'account not found'
    });
  } catch (error) {
    next(error);
  }
});

router.get('/saya', async (req, res, next) => {
  try {
    // const body = req.body;
    const { token } = req.query;
    console.log(token);
    const validation = decodeToken(token);
    return res.json(validation)
  } catch (error) {
    next(error);
  }
});



module.exports = router;