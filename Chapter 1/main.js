const express = require('express');
const mariadb = require('mariadb');

const app = express();
const port = 3000;

app.use(express.json());

const pool = mariadb.createPool({
  host: '127.0.0.1',
  port: '3306',
  database: 'test'
});


app.get('/', async (req, res) => {
  try {
    const books = await pool.query('SELECT * FROM users');
    res.json({
      author: 'Umar',
      message: 'data retrieved successfully',
      data: books
    });
  } catch (error) {
    res.send(error);
  }
});

app.post('/', async (req, res) => {
  try {
    const { name, address, country } = req.body;
    if(!name || !address || !country) {
      res.status(400).json({
        author: 'umar',
        message: 'name or address or country is null'
      })
    };

    const result = await pool.query('INSERT INTO users VALUES (NULL, ?, ?, ?)', [name, address, country]);

    res.json({
      author: 'umar',
      message: 'Data created successfully',
      data: result
    })
  } catch (error) {
    res.send(error);
  }
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nama, IPK } = req.body;

  res.json({
    id, nama, IPK
  });
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id
  })
})

app.listen(port, () => {
  console.log('listening on port ' + port);
});