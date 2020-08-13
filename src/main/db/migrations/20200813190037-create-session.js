'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sessionStartTime: {
        type: Sequelize.TIME
      },
      sessionEndTime: {
        type: Sequelize.TIME
      },
      trainerId: {
        type: Sequelize.INTEGER,
        references: { model: 'trainers', key: 'id' },
        onDelete: 'CASCADE',
      },
      maxNumberOfAttendants: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Sessions');
  }
};