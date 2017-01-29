var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/swimapp';

/* GET home page. */
// router.get('/', (req, res, next) => {
//   res.sendFile('index.html');
// });

router.get('/api/v1/sets', function (req, res, next) {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM sets ORDER BY id ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.post('/api/v1/sets', function (req, res, next) {
  const results = [];
  // Grab data from http request
  console.log(req.body);
  const data = {count: req.body.count, dist: req.body.dist, interval: req.body.interval, completed: false};
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    client.query('INSERT INTO sets(count, dist, interval, completed) values($1, $2, $3, $4)',
    [data.count, data.dist, data.interval, data.completed]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM sets ORDER BY id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;
