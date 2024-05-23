const router = require('express').Router();
const trans = require('./transaksi');
router.use('/', trans);

module.exports = router;