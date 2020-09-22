'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProgramPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProgramPicture.belongsTo(models.Program, {
        foreignKey: {
          name: 'programId',
          allowNull: false
        }
      });
    }
  };
  ProgramPicture.init({
    picture: DataTypes.STRING,
    programId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProgramPicture',
  });
  return ProgramPicture;
};