var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/swimapp';
var v4 = require('node-uuid');

var models = require('../models/index');

router.get('/:id', function(req, res) {
  models.Set.find({
    where: {
      id: req.params.id
    }
  }).then(function(set) {
    res.json(set);
  });
});

router.delete('/:id', function(req, res) {
  models.Set.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(set) {
    res.json(set);
  });
});

router.put('/:id', function(req, res) {
  models.Set.find({
    where: {
      id: req.params.id
    }
  }).then(function(set) {
    if (set) {
      set.set(
        'completed',
        !set.completed
      ).save();
      
      return res.json(set);
    }
  });
});

module.exports = router;