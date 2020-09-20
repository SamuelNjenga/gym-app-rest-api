'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Session.hasMany(models.UserSession, {
        onDelete: "cascade",
        foreignKey: {
          name: 'sessionId',
          allowNull: false
        }
      });
      Session.belongsTo(models.Trainer, {
        foreignKey: {
          name: 'trainerId',
          allowNull: false
        }
      })
      Session.belongsTo(models.Room, {
        foreignKey: {
          name: 'roomId',
          allowNull: false
        }
      })
    }
  };
  Session.init({
    sessionStartTime: DataTypes.DATE,
    sessionEndTime: DataTypes.DATE,
    trainerId: DataTypes.INTEGER,
    maxNumberOfAttendants: DataTypes.INTEGER,
    numberOfAttendantsSoFar: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};