const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tugas_wegodev', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
