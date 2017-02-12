"use strict";

module.exports = function(sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
        title: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Workout.hasMany(models.User)
            }
        }
    });

    return Workout;
};
