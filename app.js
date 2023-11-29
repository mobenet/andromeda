require('dotenv').config();



const express = require('express');
const path = require('path');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes en JSON
app.use(express.json());

// Sirve archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); 

app.get('/images/:img', (req, res) => {
    const image = req.params.img;
    res.render('image', { image });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
