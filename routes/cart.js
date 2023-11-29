const express = require('express');
const router = express.Router(); 
const CartModel = require('../models/cartModel');


router.post('/add', (req, res)=> {
    const { userId, productId, quantity } = req.body;
    CartModel.addToCart(userId, productId, quantity, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json({ message: 'Producto añadido al carrito', cartId: results.insertId });
    });
});

module.exports = router; 