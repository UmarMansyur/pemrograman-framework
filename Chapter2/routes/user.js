const router = require('express').Router();
router.get('/', function (_, res)  {
  res.json({
    status: true,
    message: 'Berhasil diakses'
  });
});
router.post('/', (_, res) => {
  res.json({
    status: true,
    message: 'ini adalah method POST'
  });
});
router.put('/', (_, res) => {
  res.json({
    status: true,
    message: 'ini adalah method PUT'
  });
});
router.delete('/', (_, res) => {
  res.json({
    status: true,
    message: 'ini adalah method PUT'
  });
});
module.exports = router;