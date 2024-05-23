const router = require('express').Router();
const trans = require('../controllers/transaksi.js');


router.post('/transaksi', trans.createTransaction);

module.exports = router;
