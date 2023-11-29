const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// Suponiendo que tienes una función que obtiene productos desde una base de datos
/*const getProductsFromDatabase = () => {
    // Este es solo un ejemplo, aquí iría la lógica para obtener productos de la base de datos
    return [
        { id: 1, name: 'Producto 1', price: 10.0 },
        { id: 2, name: 'Producto 2', price: 20.0 },
        // ... más productos
    ];
};*/

// GET all products
router.get('/', (req, res) => {
    pool.query('SELECT id, name, price, image_url FROM products', (error, results, fields) => {
        if (error) {
            console.log({error})
            return res.status(500).json({ error });
        }
        res.json(results);
    })
});

// POST products
router.post('/add', (req, res) => {
    //addProduct.
    res.status(201).json({ message: 'Producto creado' });
});

module.exports = router; 