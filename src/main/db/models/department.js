'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Department.belongsTo(models.User, {
        foreignKey: {
          name: 'chairmanId',
          allowNull: false
        }
      });
      Department.belongsTo(models.Room, {
        foreignKey: {
          name: 'roomId',
          allowNull: false
        }
      });
      Department.hasMany(models.Trainer, {
        onDelete: "cascade",
        foreignKey: {
          name: 'departmentId',
          allowNull: false
        }
      });
    }
  };
  Department.init({
    departmentName: DataTypes.STRING,
    chairmanName: DataTypes.STRING,
    chairmanId: DataTypes.INTEGER,
    roomName: DataTypes.STRING,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};