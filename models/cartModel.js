const pool = require('./db');

const CartModel = {
    addToCart: (userId, productId, quantity, callback) => {
        console.log(userId, productId, quantity); 
        const query = 'INSERT INTO Cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
        pool.query(query, [userId, productId, quantity], (error, results) => {
            callback(error, results);
            return; 
        });
    }
}

module.exports = CartModel;
