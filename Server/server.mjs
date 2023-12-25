// server.mjs
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;
// Middleware
app.use(cors());
app.use(bodyParser.json());

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

// End point // 
app.post('/login', (req,res)=>{
  const {username, password } = req.body;
  const sql = "SELECT * FROM member_account WHERE Username = ? AND Password = ? ";
  db.query(sql,[username,password],(err,results)=>{
    if(err){
      console.error('Error executing SQL Qurry: ',err);
      res.status(500).json({ success: false,message: 'Internal Server Error'})
    }else{
      if (results.length > 0) {
        res.json({ success: true, message: 'Login successful' });
        

      } else {
        res.json({ success: false, message: 'Invalid username or password' });
      }
    }
  })
})



app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
