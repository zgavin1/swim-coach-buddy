var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/swimapp';
var v4 = require('node-uuid');

var models = require('../models/index');

router.post('/', function(req, res) {
  models.Workout.create({
    id: v4()
  }).then(function(workout) {
    res.json(workout);
  });
});

module.exports = router;
