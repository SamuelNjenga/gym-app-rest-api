'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserSession.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        }
      })
      UserSession.belongsTo(models.Session, {
        foreignKey: {
          name: 'sessionId',
          allowNull: false
        }
      })
    }
  };
  UserSession.init({
    userId: DataTypes.INTEGER,
    sessionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserSession',
  });
  return UserSession;
};