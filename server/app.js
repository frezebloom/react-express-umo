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
app.use(bodyParser.json());

app.post('/', function(req, res) {
    var name = req.body.name
    console.log(name);
});


//добавление нового документа
app.post('/newdoc', (req, res) => {

  var sql = "INSERT INTO umodoc (programmNumber, fullName, company, personnelCategory, subdivision, position, theoreticalTraining, practicalTraining, internship, termOfTraining, trainingInTheUTC, trainingInTheUnit, registrationDateOfTheProgram, dateOfDelivery, fullNameProgram, link, status) VALUES ?";
  var values = [
    [req.body.programmNumber,
     req.body.fullName,
     req.body.company,
     req.body.personnelCategory,
     req.body.subdivision,
     req.body.position,
     req.body.theoreticalTraining,
     req.body.practicalTraining,
     req.body.internship,
     req.body.termOfTraining,
     req.body.trainingInTheUTC,
     req.body.trainingInTheUnit,
     req.body.registrationDateOfTheProgram,
     req.body.dateOfDelivery,
     req.body.fullNameProgram,
     req.body.link,
     req.body.status
    ],
  ];

  connection.query(sql, [values], function (err, result) {
    console.log('Добавлен новый документ');
  });

});


app.listen(PORT, () => {
  console.log('Server running');
});
