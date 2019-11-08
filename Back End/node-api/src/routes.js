const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products',ProductController.index);

routes.put('/products/:id',ProductController.update);

routes.delete('/products/:id',ProductController.destroy);

routes.get('/products/:id',ProductController.show);

routes.post('/products',ProductController.store);

module.exports = routes;