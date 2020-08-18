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
      EquipmentPicture.belongsTo(models.Equipment, {
        foreignKey: {
          name: 'equipmentId',
          allowNull: false
        }
      });
    }
  };
  EquipmentPicture.init({
    equipmentId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    part: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EquipmentPicture',
  });
  return EquipmentPicture;
};