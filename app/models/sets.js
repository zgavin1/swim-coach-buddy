'use strict';

module.exports = function(sequelize, DataTypes) {
    var Set = sequelize.define('Set', {
        id: DataTypes.STRING,
        count: DataTypes.INTEGER,
        dist: DataTypes.INTEGER,
        interval: DataTypes.INTEGER,
        completed: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {
                // Using additional options like CASCADE etc for demonstration
                // Can also simply do Set.belongsTo(models.Workout);
                Set.belongsTo(models.Workout, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        });

    return Set;
};
