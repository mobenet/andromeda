const express = require('express');
const router = express.Router(); 
const productModel = require('../models/productModel');

// Route to create an order
router.post('/order', (req, res)=> {
    const orderDetails = req.body; 
    productModel.createOrder(orderDetails, (error, results) => {
        if (error){
            res.ratus(500).send('Error al crear el pedido');
        } else {
            res.status(200).send('Pedido realizado con éxito');
        }
    });
});

module.exports = router; 