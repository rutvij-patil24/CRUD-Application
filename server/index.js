const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "myrutvijsql",
  database: "cruddatabase",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

// app.get('/', (req, res) => {

//     Below code is just to test whether our app is connected to mysql database
//     const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Avengers Endgame', 'Best superhero movie of all time');"
//     db.query(sqlInsert, (err, result) => {
//         if (err) {
//             console.error("Error executing query: ", err);
//             return res.status(500).send('Database error');
//         }
//         res.send('Hello Node! Record inserted.');
//     });

// });





app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);";

  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
