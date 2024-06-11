const router = require('express').Router();
const bcrypt = require('bcrypt');
const { generateToken, decodeToken } = require('../helpers/token');
const auth = require('../controllers/auth')
const authorization = require('../middleware/authorization');

router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'welcome to my api'
  });
});

router.post('/login', auth.login);
// menambah registrasi
router.post('/registrasi', auth.registration)
router.get('/saya', auth.saya);

router.post('/loginSIMAT', auth.loginSimat)

router.get('/khusus-mahasiswa', authorization(['mhs']), (req, res, next) => {
  try {
    return res.json({
      status: true,
      message: 'Anda berhasil masuk',
      data: req.user
    });
  } catch (error) {
    next(error);
  }
})



module.exports = router;