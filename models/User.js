// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    umur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Tambahkan atribut lain sesuai tabel Anda
}, {
    tableName: 'user',
    timestamps: false
});

module.exports = User;
