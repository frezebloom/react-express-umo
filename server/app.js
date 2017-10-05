const express = require('express');

const mysql = require('mysql');

const bodyParser = require('body-parser')

const app = express();

const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'umo'
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
    var name = req.body.name
    console.log(name);
});


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
