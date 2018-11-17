const express = require('express');
const app = express();

//Connect to PostgreSQL
const pg = require('pg');

const pool = new pg.Pool({
  user: 'chelsea',
  host: 'localhost',
  database: 'chelsea',
  password: '',
  port: '5432'
});

console.log('......connected to db');

app.get('/api/customers', (req, res) => {
    pool.query('SELECT * FROM "BattedBallData" LIMIT 5', function(err, result) {
        res.send(result.rows);
      }
    );
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);



