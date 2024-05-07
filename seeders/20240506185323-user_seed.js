'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        umur: 25,
        alamat: 'Jalan Jalan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Doe',
        umur: 30,
        alamat: 'Jalan Jalan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joe Doe',
        umur: 35,
        alamat: 'Jalan Jalan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jenny Doe',
        umur: 40,
        alamat: 'Jalan Jalan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jen Doe',
        umur: 45,
        alamat: 'Jalan Jalan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jenny Doe',
        umur: 50,
        alamat: 'Jalan Jalan',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
