const express = require("express");

const path = require("path");

const mysql = require("mysql");

const bodyParser = require("body-parser");

const sortBy = require("sort-by");

const app = express();

const PORT = 1818;

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "umo"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

//получение всех документов
app.post("/", function(req, res) {
  var sql = "SELECT * FROM `programm` WHERE status = 1";
  connection.query(sql, function(err, result) {
    let reuslt = result.sort(sortBy("-id"));
    res.send(result);
  });
});

//добавление нового документа
app.post("/newdoc", (req, res) => {
  var sql =
    "INSERT INTO programm (programmNumber, fullName, company, personnelCategory, subdivision, position, theoreticalTraining, practicalTraining, internship, termOfTraining, trainingInTheUTC, trainingInTheUnit, registrationDateOfTheProgram, dateOfDelivery, fullNameProgram, link, status) VALUES ?";
  var values = [
    [
      req.body.programmNumber,
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
    ]
  ];
  connection.query(sql, [values], function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log("Добавлен новый документ");
    }
  });
});

//изменения документа
app.post("/update", (req, res) => {
  var sql =
    "UPDATE programm SET programmNumber = ?, fullName = ?, company = ?, personnelCategory = ?, subdivision = ?, position = ?, theoreticalTraining = ?, practicalTraining = ?, internship = ?, termOfTraining = ?, trainingInTheUTC = ?, trainingInTheUnit = ?, registrationDateOfTheProgram = ?, dateOfDelivery = ?, fullNameProgram = ?, link = ?, status = ? WHERE id = ?";
  var values = [
    req.body.programmNumber,
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
    req.body.status,
    req.body.id
  ];
  connection.query(sql, values, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log("Документ изменен");
    }
  });
});

app.listen(PORT, () => {
  console.log("Server running");
});
