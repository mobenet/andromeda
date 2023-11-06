const pool = require('./db');

exports.createOrder = (orderDetails, callback) => {
    const query = 'INSERT INTO orders (user_id, product_id, quantity, status) VALUES (?, ?, ?, "pending")';
    pool.query(query, [orderDetails.userId, orderDetails.productId, orderDetails.quantity], (error, results, fields) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    }); 
};