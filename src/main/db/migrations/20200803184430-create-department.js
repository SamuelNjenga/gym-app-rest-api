'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departmentName: {
        type: Sequelize.STRING
      },
      chairmanName: {
        type: Sequelize.STRING
      },
      chairmanId: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE',
      },
      roomName: {
        type: Sequelize.STRING
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: { model: 'rooms', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Departments');
  }
};