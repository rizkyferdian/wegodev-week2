'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Masukkan data ke tabel 'profile'
    await queryInterface.bulkInsert('profile', [
      {
        userId: 1,
        alamat: 'Jalan Merdeka No. 1',
        nomorHp: '081234567890',
      },
      {
        userId: 2,
        alamat: 'Jalan Kemerdekaan No. 2',
        nomorHp: '081234567891',
      },
      {
        userId: 3,
        alamat: 'Jalan Pahlawan No. 3',
        nomorHp: '081234567892',
      },
      {
        userId: 4,
        alamat: 'Jalan Sejahtera No. 4',
        nomorHp: '081234567893',
      },
      {
        userId: 5,
        alamat: 'Jalan Bahagia No. 5',
        nomorHp: '081234567894',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profile', null, {});
  }
};
