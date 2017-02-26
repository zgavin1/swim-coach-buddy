'use strict';
module.exports = function(sequelize, DataTypes) {
  var Workout = sequelize.define('Workout', {
    id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Workout.hasMany(models.Set);
      }
    }
  });
  return Workout;
};
