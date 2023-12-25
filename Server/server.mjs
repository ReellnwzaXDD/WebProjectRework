// server.mjs
import express from 'express';
import mysql from 'mysql';
const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'oclockne',
  password: 'Thongsongsom@1',
  database: 'oclockne_Webtest',
  multipleStatements: true,
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
  
  
});


app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query: ', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
