const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tugas_wegodev'
});

// Periksa apakah koneksi berhasil dibuat
connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// Ekspor koneksi agar bisa digunakan di berkas lain
module.exports = connection;
