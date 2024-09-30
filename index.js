const express = require("express");


const app = express();

// app.use(express.json());

const blogModel=require('./model.js');//
//Write missing code here and all the CRUD operations on the database


require('dotenv').config();
require('./connection.js')

const blogRoutes = require('./router/blogRoutes.js');
app.use('/blog',blogRoutes);


var PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
