// server.mjs
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import 'dotenv/config';

const app = express();
const port = 3001;
// Middleware

app.use(cors());
app.use(bodyParser.json());

// For Testing in dev env
const pool = mysql.createPool({
  host: 'localhost',  
  user: 'root',
  password: '',
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// const pool = mysql.createPool({
//   host: 'db',
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
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
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM member_account WHERE Username = ? AND Password = ? ";

  try {
    const [results] = await pool.execute(sql, [username, password]);

    if (results.length > 0) {
      const userdetail = results[0];
      res.json({ success: true, message: 'Login successful', username: userdetail.Username, uid: userdetail.MD_Id });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error executing SQL Query:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

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
app.post('/register', async (req, res) => {
  const { username, password, name, surname, email, phone, address } = req.body;

  const insertDetailSql = 'INSERT INTO member_detail (Name, Surname, Email, tel, Address) VALUES (?,?,?,?,?)';
  const insertAccountSql = 'INSERT INTO member_account (Username, Password, MD_id) VALUES (?,?,?)';

  try {
    // Insert into member_detail table
    const [detailResult] = await pool.execute(insertDetailSql, [name, surname, email, phone, address]);
    
    // Get the generated ID from the inserted detail record
    const genId = detailResult.insertId;

    // Insert into member_account table
    await pool.execute(insertAccountSql, [username, password, genId]);

    console.log('Register successfully');
    res.json({ success: true, message: 'Register successfully' });
  } catch (err) {
    console.error('Error executing SQL Query:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

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
app.get('/chkusername', async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is empty' });
  }

  const checkUsernameSql = 'SELECT Username FROM member_account WHERE username=?';

  try {
    const [result] = await pool.execute(checkUsernameSql, [username]);

    const isUsernameAvailable = result.length === 0;

    return res.json({ available: isUsernameAvailable });
  } catch (err) {
    console.error('Error executing SQL Query:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /img/normal:
 *  get:
 *    summary: qurry product to store page
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
app.get('/img/normal', async (req, res) => {
  const { page = 1, itemsPerPage = 16, sortType } = req.query;
  const offset = (page - 1) * itemsPerPage;
  const validSortTypes = ['ASC', 'DESC'];
  const sanitizedSortType = validSortTypes.includes(sortType) ? sortType : '';
  
  const selectImagesSql = 'SELECT images.image_path, products.price, products.PID, products.product_name ' +
  'FROM images ' +
  'JOIN products ON images.IMG_ID = products.IMG_ID ' +
  'ORDER BY products.price ' + sanitizedSortType + ' ' +
  'LIMIT ' + Number(offset) + ', ' + Number(itemsPerPage);
try {
    const [result] = await pool.execute(selectImagesSql,[offset,itemsPerPage]);

    if (result.length === 0) {
      return res.json([]);
    }

    const imagePaths = result.map(result => ({
      image: result.image_path,
      price: result.price,
      id: result.PID,
      title: result.product_name,
    }));

    res.json(imagePaths);
  } catch (err) {
    console.error('Error executing SQL Query:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

/**
 * @swagger
 * /checkout:
 *  post:
 *    summary: check out form cart
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              DATE:
 *                type: string
 *              TIME:
 *                type: string
 *              M_ID:
 *                type: string
 *              PID:
 *                type: string
 *              OID:
 *                type: string
 *              Amount:
 *                type: string
 *    responses:
 *      200:
 *        description: Successful response
 *      500:
 *        description: Internal server error
 * 
 */
app.post('/checkout', async (req, res) => {
  const data = req.body;
  const insertOrderSql = 'INSERT INTO orders (`DATE`, `TIME`, `M_ID`) VALUES (?,?,?)';
  const insertOrderDetailSql = 'INSERT INTO order_detail (`PID`, `OID`, `Amount`) VALUES (?,?,?)';

  try {
    const [orderResult] = await pool.execute(insertOrderSql, [
      new Date().toISOString().slice(0, 10), // Get current date (YYYY-MM-DD)
      new Date().toISOString().slice(11, 19), // Get current time (HH:MM:SS)
      data.memberID
    ]);
    const orderId = orderResult.insertId;
    const orderDetailValues = [];
    data.product.forEach((product) => {
      //orderDetailValues.push(product.id, orderId, amount);
      pool.execute(insertOrderDetailSql, [product.id,orderId,product.quantity]);
    });
    console.log('Values to be inserted into order_detail:', orderDetailValues);
    console.log('Checkout successful');
    res.json({ success: true, message: 'Checkout successful' });
  } catch (err) {
    console.error('Error executing SQL query:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
  console.log(req.body);
});

/**
 * @swagger
 * /getmemberdetail:
 *  get:
 *    summary: qurry memberdetail
 *    parameters:
 *     - in: Id
 *       name: userId
 *       schema:
 *          type: string
 *       required: true
 *       description: get memberdetail in db
 *    responses:
 *      200:
 *        description: Successful response
 *      500:
 *        description: Internal server error
 * 
 */
app.get('/getmemberdetail',async (req,res)=>{
  const {Id} = req.query;
  if (!Id) {
    return res.status(400).json({ error: 'Id is empty' });
  }

  const member_detail = 'SELECT Name,Surname,Address,tel FROM member_detail WHERE Id=?';

  try {
    const [result] = await pool.execute(member_detail, [Id]);
    return res.json(result);
  } catch (err) {
    console.error('Error executing SQL Query:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
})
/**
 * @swagger
 * /getorder:
 *  get:
 *    summary: qurry memberdetail
 *    parameters:
 *     - in: Id
 *       name: userId
 *       schema:
 *          type: string
 *       required: true
 *       description: get memberdetail in db
 *    responses:
 *      200:
 *        description: Successful response
 *      500:
 *        description: Internal server error
 * 
 */
app.get('/getorder',async (req,res)=>{
  const {Id} = req.query;
  if (!Id) {
    return res.status(400).json({ error: 'Id is empty' });
  }
  const PIDQuery  = 'SELECT PID FROM order_detail JOIN orders ON orders.OID = order_detail.OID WHERE M_ID=?';
  const productQuery  = 'SELECT products.product_name,products.price FROM products WHERE products.PID =?';
  try {
    const [PIDRows] = await pool.execute(PIDQuery, [Id]);
    if (PIDRows.length === 0) {
      return res.status(404).json({ error: 'No order found for the provided Id' });
    }
    const products = [];
    for (const row of PIDRows) {
      const PID = row.PID;
      const [productRows] = await pool.execute(productQuery, [PID]);
      if (productRows.length === 0) {
        console.error(`No product found for PID: ${PID}`);
      } else {
        products.push(productRows[0]); 
      }
    }
    return res.json(products);
  } catch (err) {
    console.error('Error executing SQL Query:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
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
