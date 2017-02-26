'use strict';
module.exports = function(sequelize, DataTypes) {
  var Set = sequelize.define('Set', {
    id: DataTypes.STRING,
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    WorkoutId: DataTypes.STRING,
    dist: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    interval: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Set.belongsTo(models.Workout);
      }
    }
  });
  return Set;
};
