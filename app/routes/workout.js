var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/swimapp';
var v4 = require('node-uuid');

var models = require('../models/index');

router.get('/:id', function(req, res) {
  models.Workout.find({
    where: {
      id: req.params.id
    }
  }).then(function(workout) {
    res.json(workout);
  });
});

router.delete('/:id', function(req, res) {
  models.Workout.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(workout) {
    res.json(workout);
  });
});

router.put('/:id', function(req, res) {
  models.Workout.find({
    where: {
      id: req.params.id
    }
  }).then(function(workout) {
    if (workout) {
      workout.set(
        'completed',
        !workout.completed
      ).save();
      
      return res.json(workout);
    }
  });
});

module.exports = router;