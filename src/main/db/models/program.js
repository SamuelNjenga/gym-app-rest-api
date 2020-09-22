'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Program.hasMany(models.ProgramPicture,{
        onDelete:"cascade",
        foreignKey:{
          name:'programId',
          allowNull:false
        }
      });
    }
  };
  Program.init({
    programTitle: DataTypes.STRING,
    programDescription: DataTypes.STRING,
    moreDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Program',
  });
  return Program;
};