const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'umo'
})

const PORT = 3000;

//добавление нового документа
app.post('/newdoc', (req, res) => {
connection.query('INSERT INTO test (a, b, c, d) VALUES ("hello", "my", "free", "man")', function(err, rows, fields) {
  console.log(err);
  console.log(fields);
  console.log(rows);
});
connection.end();
});

app.listen(PORT, () => {
  console.log('Server running');
});
