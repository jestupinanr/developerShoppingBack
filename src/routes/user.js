const express = require('express');
const userSchema = require('../models/user');
const productSchema = require('../models/product');

const router = express.Router();

// Create user data
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Get all users
router.get('/users', (req, res) => {
    userSchema.find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
});

// Create  products
router.post('/products', (req, res) => {
    const product = productSchema(req.body);
    product.save()
        .then((data) => {
            res.status(200)
            res.send(data)
        })
        .catch((error) => res.json({ message: error }))
});

//Get all users
router.get('/products', (req, res) => {
    productSchema.find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
});
module.exports = router;