'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Department,{
        onDelete:"cascade"
      });
      User.hasOne(models.Trainer,{
        onDelete:"cascade"
      });

    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    idNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};