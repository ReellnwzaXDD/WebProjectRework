// server.mjs
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();
const port = 3001;
// Middleware
app.use(cors());
app.use(bodyParser.json());
const dbOptions = { 
  host: '127.0.0.1',
  user: 'oclockne',
  password: 'Thongsongsom@1',
  database: 'oclockne_Webtest',
};
const db = mysql.createConnection(dbOptions);



db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
  
  
});

// End point // 
/**
 * @swagger
 * /login:
 *  post:
 *    summary: qurry Member table
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: Successful response
 *      500:
 *        description: Internal server error
 * 
 */
app.post('/login' , (req,res)=>{
  const {username, password } = req.body;
  const sql = "SELECT * FROM member_account WHERE Username = ? AND Password = ? ";
  db.query(sql,[username,password],(err,results)=>{
    if(err){
      console.error('Error executing SQL Qurry: ',err);
      return res.status(500).json({ success: false,message: 'Internal Server Error'})
    }else{
      if (results.length > 0) {
        const userdetail = results[0];
        res.json({ success: true, message: 'Login successful',username: userdetail.Username,uid: userdetail.MD_Id });
      } else {
        return res.status(401).json({ success: false,message: 'Invalid username or password'})
      }
    }
  })
})

/**
 * @swagger
 * /register:
 *  post:
 *    summary: Insert member to DB
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              name:
 *                type: string
 *              surname:
 *                type: string
 *              email:
 *                type: string
 *              phone:
 *                type: string
 *              address:
 *                type: string
 *    responses:
 *      200:
 *        description: Successful response
 *      500:
 *        description: Internal server error
 * 
 */
app.post('/register',(req,res)=>{
  const {username,password,name,surname,email,phone,address} = req.body;

  const sql = "INSERT INTO member_detail (Name, Surname, Email, tel, Address ) VALUES (?,?,?,?,?)";
  db.query(sql,[name,surname,email,phone,address],(err,result)=>{
    if(err){
      console.error('Error executing SQL Qurry: ',err);
      return res.status(500).json({ success: false,message: 'Internal Server Error'});
    }else{
      // console.log('Data inserted into the first table successfully!'); //Debug
      const GenID = result.insertId;
      const sql2 = "INSERT INTO member_account (Username, Password, MD_id) VALUES (?,?,?)";
      db.query(sql2,[username,password,GenID],(err)=>{
        if(err){
          console.error('Error inserting into the second table:', err);
          res.status(500).json({ success: false,message: 'Internal Server Error'});
        }else{
          console.log('Register successfully');
          res.json({ success: true, message: 'Register successfully' });
        }
      })

    }
  })
})
/**
 * @swagger
 * /chkusername:
 *  get:
 *    summary: qurry username chk available
 *    parameters:
 *     - in: path
 *       name: username
 *       schema:
 *          type: string
 *       required: true
 *       description: Username that user input to check by DB
 *    responses:
 *      200:
 *        description: Successful response
 *      500:
 *        description: Internal server error
 * 
 */
app.get('/chkusername' ,(req,res)=>{
  const {username} = req.query;
    if (!username) {
      return res.status(400).json({ error: 'Username is empty'});
    }

  const sql = "SELECT Username FROM member_account WHERE username=?";
  db.query(sql,[username],(err,result) =>{
    if (err) {
      return res.status(500).json({ success: false,message: 'Internal Server Error'});
    }
    const isusernameavailable = result.length ===0;
    if (isusernameavailable) {
      return res.json({ available: isusernameavailable });
    }else{
      
      return res.status(500).json({ available: isusernameavailable });
    }
    
  })
})
/**
 * @swagger
 * /img/normal:
 *  get:
 *    summary: qurry image path
 *    parameters:
 *     - in: path
 *       name: imagepath
 *       schema:
 *          type: string
 *       required: true
 *       description: get imgpath in db
 *    responses:
 *      200:
 *        description: Successful response
 *      500:
 *        description: Internal server error
 * 
 */
app.get('/img/normal',(req,res)=>{
    const { page = 1, itemsPerPage = 16, sortType } = req.query;
    const offset = (page - 1) * itemsPerPage;
    const validSortTypes = ['ASC', 'DESC'];
    const sanitizedSortType = validSortTypes.includes(sortType) ? sortType : '';
    const sql = `SELECT images.image_path , products.price , products.PID, products.product_name FROM images JOIN products ON images.IMG_ID = products.IMG_ID ORDER BY products.price ${sanitizedSortType} LIMIT ?, ?`;
    db.query(sql,[offset,itemsPerPage],(err,result)=>{
      if(err){
        console.error(err);
        return res.status(500).json({ success: false,message: 'Internal Server Error'});
      }
      const imagePaths = result.map(result => ({ image: result.image_path, price: result.price, id: result.PID, title:result.product_name }));
      res.json(imagePaths);
    })
  
})

app.get('/cart',(req,res)=>{
  const {pid} = req.query;

  const sql = "SELECT images.image_path , products.price , products.product_name FROM images JOIN products ON images.IMG_ID = products.IMG_ID WHERE PID = ?";
  db.query(sql,[pid],(err,result)=>{
    if(err){
      console.error('Error executing SQL Qurry: ',err);
      return res.status(500).json({ success: false,message: 'Internal Server Error'});
    }else{  
      if(err){
        console.error('Error inserting into the second table:', err);
        res.status(500).json({ success: false,message: 'Internal Server Error'});
      }else{
        const products_table = result.map(result =>({ pname:result.product_name, price:result.price, img_path:result.image_path }));
        res.json({ products_table });
      }
    }
  })
})










//Swagger //
const swaggerOption ={
  definition:{
    openapi: '3.0.3',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Oclock API Documentation',
    },
  
  servers: [
    {
      url: 'http://localhost:3001',
    },
  ],
  },
  apis:['server.mjs'],
}
const swaggerSpec = swaggerJSDoc(swaggerOption);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec));




app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
  console.log(`swagger is running on http://localhost:${port}/api-docs`);
});
