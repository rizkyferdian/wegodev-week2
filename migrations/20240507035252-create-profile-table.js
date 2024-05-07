'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profile', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Referensi ke tabel 'users'
          key: 'id' // Primary key dari tabel 'users'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomorHp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('profile');
  }
};
