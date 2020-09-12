'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipmentPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EquipmentPicture.belongsTo(models.Equipment, {
        foreignKey: {
          name: 'equipmentId',
          allowNull: false
        }
      });

    }
  };
  EquipmentPicture.init({
    picture: DataTypes.STRING,
    equipmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EquipmentPicture',
  });
  return EquipmentPicture;
};