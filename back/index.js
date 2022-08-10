const express = require('express');
require("dotenv").config();
const app = express();
const cors = require('cors');
const product = require('./routes/productRouter');
const category = require('./routes/categoriesRouter');

const port = process.env.NODE_DOCKER_PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/products', product);
app.use('/categories', category);

app.listen(port, () => {
  console.log(`server is running in ${port}!`)
})