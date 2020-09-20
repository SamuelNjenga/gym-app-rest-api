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
      User.hasMany(models.UserSession, {
        onDelete: "cascade",
        foreignKey: {
          name: 'userId',
          allowNull: false
        }
      });
      User.hasOne(models.Department,{
        onDelete:"cascade",
        foreignKey:{
          name:'chairmanId',
          allowNull:false
        }
      });
      User.hasOne(models.Trainer,{
        onDelete:"cascade",
        foreignKey:{
          name:'trainerId',
          allowNull:false
        }
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
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};