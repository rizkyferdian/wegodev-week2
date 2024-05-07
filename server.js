const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const connection = require('./database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Buatlah script untuk membuat pagination data users dengan menampilkan 2 data disetiap page-nya.
// http://localhost:5000/users?page=3

app.get('/users', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    const offset = (page - 1) * limit;

    connection.query(
        'SELECT * FROM users LIMIT ? OFFSET ?',
        [limit, offset],
        (error, results) => {
            if (error) {
                console.error('Error fetching data:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json(results);
            }
        }
    );
});

// Buatlah script untuk menghitung jumlah data yang ada di table users.
app.get('/users/count', (req, res) => {
    const countQuery = 'SELECT COUNT(*) AS count FROM users';

    connection.query(countQuery, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results[0]);
        }
    });
});



app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
