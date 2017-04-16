var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/swimapp';
var v4 = require('node-uuid');

var models = require('../models/index');

router.post('/', function(req, res) {
  models.Set.create({
    //   these all need to be req.body rather than params.
      id: v4(),
      interval: req.body.interval,
      dist: req.body.dist,
      count: req.body.count,
      WorkoutId: 'heyo',
      // Right now, workouts and the workoutId property have not been fleshed out
      // WorkoutId: req.body.workout_id,
  }).then(function(set) {
      res.json(set);
  });
});

router.get('/', function(req, res) {
  models.Set.findAll({}).then(function(sets) {
    res.json(sets);
  });
});

// router.get('/:id', function(req, res) {
//   models.Set.find({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(set) {
//     res.json(set);
//   });
// });

// router.delete('/:id', function(req, res) {
//   models.Set.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(set) {
//     res.json(set);
//   });
// });

// router.put('/:id', function(req, res) {
//   models.Set.find({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(set) {
//     if (set) {
//       set.set(
//         'completed',
//         !set.completed
//       ).save();
      
//       return res.json(set);
//     }
//   });
// });

// router.get('/', function (req, res, next) {
//   const results = [];
//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, (err, client, done) => {
//     // Handle connection errors
//     if(err) {
//       done();
//       console.log(err);
//       return res.status(500).json({success: false, data: err});
//     }
//     // SQL Query > Select Data
//     const query = client.query('SELECT * FROM sets ORDER BY id ASC;');
//     // Stream results back one row at a time
//     query.on('row', (row) => {
//       results.push(row);
//     });
//     // After all data is returned, close connection and return results
//     query.on('end', () => {
//       done();
//       return res.json(results);
//     });
//   });
// });

// router.post('/', function (req, res, next) {
//   const results = [];
//   // Grab data from http request
//   const data = {count: req.body.count, dist: req.body.dist, interval: req.body.interval, completed: false, id: v4()};
//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, (err, client, done) => {
//     // Handle connection errors
//     if(err) {
//       done();
//       console.log(err);
//       return res.status(500).json({success: false, data: err});
//     }
//
//     // SQL Query > Insert Data
//     client.query('INSERT INTO sets(count, dist, interval, completed, id) values($1, $2, $3, $4, $5);',
//     [data.count, data.dist, data.interval, data.completed, data.id]);
//
//     const query = client.query('SELECT * FROM sets WHERE id=($1);',
//     [data.id]);
//     // Stream results back one row at a time
//     query.on('row', (row) => {
//       results.push(row);
//     });
//
//     // After all data is returned, close connection and return results
//     query.on('end', () => {
//       done();
//       return res.json(results[0]);
//     });
//   });
// });
//
// router.put('/:set_id', function (req, res, next) {
//   const results = [];
//   // Grab data from http request
//   const data = {id: req.params.set_id};
//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, (err, client, done) => {
//     // Handle connection errors
//     if(err) {
//       done();
//       console.log(err);
//       return res.status(500).json({success: false, data: err});
//     }
//
//     // SQL Query > Update Data
//     client.query('UPDATE sets SET completed=(NOT completed) WHERE id=($1)',
//     [data.id]);
//
//     // SQL Query > Select Data
//     const query = client.query('SELECT * FROM sets WHERE id=($1)',
//     [data.id]);
//     // Stream results back one row at a time
//     query.on('row', (row) => {
//         results.push(row);
//     });
//     // After all data is returned, close connection and return results
//     query.on('end', () => {
//       done();
//       return res.json(results[0]);
//     });
//   });
// });
//
//
// router.delete('/:set_id', function (req, res, next) {
//     const results = [];
//   // Grab data from http request
//   const data = {id: req.params.set_id};
//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, (err, client, done) => {
//     // Handle connection errors
//     if(err) {
//       done();
//       console.log(err);
//       return res.status(500).json({success: false, data: err});
//     }
//     const query = client.query('SELECT * FROM sets WHERE id=($1)',
//     [data.id]);
//     // Stream results back one row at a time
//     query.on('row', (row) => {
//         results.push(row);
//     });
//
//     // SQL Query > Delete Data
//     client.query('DELETE FROM sets WHERE id=($1)',
//     [data.id]);
//
//     query.on('end', () => {
//       done();
//       return res.json(results[0]);
//     });
//   });
// });

module.exports = router;
