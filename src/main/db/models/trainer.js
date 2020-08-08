'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trainer.belongsTo(models.User, {
        foreignKey: {
          name: 'trainerId',
          allowNull: false
        }
      });
      Trainer.belongsTo(models.Department, {
        foreignKey: {
          name: 'departmentId',
          allowNull: false
        }
      })
    }
  };
  Trainer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    trainerId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};