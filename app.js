const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Define EJS como el motor de plantillas
app.set('view engine', 'ejs');

// Sirve archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

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
