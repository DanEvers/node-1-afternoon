const express = require('express');
const app = express()
app.use(express.json())
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const port = 4000;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen ( port, () => { console.log(`Dan, I am listening at port ${port}`);
});